<?php

namespace App\Controller\Settings;

// use App\Entity\PCaisse;
use App\Entity\PConvention;
use App\Entity\User;
use App\Entity\PUserDossierAction;
use App\Repository\UserRepository;
use App\Repository\PActionRepository;
use App\Repository\PModuleRepository;
use App\Repository\PDossierRepository;
use App\Repository\PProfessionRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PUserDossierActionRepository;
use App\Service\UserOperation;
use Doctrine\ORM\EntityManagerInterface;
use Proxies\__CG__\App\Entity\PConvention as EntityPConvention;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpFoundation\Session\Storage\NativeSessionStorage;
use Symfony\Component\HttpFoundation\Session\Storage\Handler\NativeFileSessionHandler;

#[Route('/user')]
class UserController extends AbstractController
{

    /**
     * @var Security
     */
    private $security;
    private $userOperation;


    public function __construct(Security $security, UserOperation $userOperation)
    {
       $this->security = $security;
       $this->userOperation = $userOperation;
    }

    // #[Route('/user', name: 'app_user')]
    // public function index(): Response
    // {


    //     return $this->render('user/index.html.twig');
    // }

    #[Route('/listUsers', name: 'listUsers')]
    public function listUsers(PDossierRepository $pDossierRepository , PProfessionRepository $professionRep,PModuleRepository $moduleRepository, UserRepository $userRep , PActionRepository $pActionRep, Request $request, EntityManagerInterface $em): Response
    {

        $users = $userRep->findBy(array("isDeleted" => 0), array('id' => 'ASC'));

        $allModules = $moduleRepository->findBy(array("active"=> true));

        // $dossiers = $pDossierRepository->findBy(array("active"=> true , "organisation" => null));

        $dossiers = $pDossierRepository->findBy(array("active"=> true));

        $actions = $this->userOperation->getOperations($this->getUser(), 'listUsers', $request);

        // $caisses = $em->getRepository(PCaisse::class)->findAll();
        // $actions = $session->get("actions");

        if(!$actions){
            return $this->render('errors/403.html.twig');
        }


        // dd($actions);

        $professions = $professionRep->findAll();
        return $this->render('settings/user/index.html.twig', [
            'users'=> $users,
            'professions' => $professions,
            'allModules' => $allModules,
            'dossiers' => $dossiers,
            'actions' => $actions,
            // 'caisses' => $caisses
        ]);
    }

    #[Route('/findUser', name: 'findUser')]
    public function findUser(PModuleRepository $module , PProfessionRepository $professionRep,PModuleRepository $moduleRepository, UserRepository $userRep , PActionRepository $pActionRep, Request $request, EntityManagerInterface $em)
    {
        if($request->isXmlHttpRequest()){

            $user = $userRep->find($request->get("idUser"));

            $data = [
                "id" => $user->getId(),
                "username" => $user->getUsername(),
                "nom" => $user->getName(),
                "status" => $user->isIsActive(),
                "profession" => $user->getPProfession()->getId(),
                "professionDescription" => $user->getPProfession()->getDescription(),
                "routeName" => $user->getRoute(),
            ];

            // dd($request->get("caisse"));
            // if ($request->get("caisse") == "true"){

            //     $caisses = $em->createQueryBuilder()
            //             ->select('c.id, c.nom, CASE WHEN u.id = :userId THEN true ELSE false END AS isAssignedToUser')
            //             ->from(PCaisse::class, 'c')
            //             ->leftJoin(User::class, 'u', 'WITH', 'u.caisse = c')
            //             ->setParameter('userId', $request->get("idUser"))
            //             ->getQuery()
            //             ->getResult();

            //     $html = $this->render('settings/user/inc/caisse_table_body.html.twig', [
            //         'caisses' => $caisses,
            //     ]);


            //     return new JsonResponse(array("data"=>$data , "html"=>$html->getContent()));
            // }

            // if ($request->get("convention") == "true"){

            //     $conventions = $em->createQueryBuilder()
            //                     ->select('c.id, c.nom, CASE WHEN user.id IS NOT NULL THEN true ELSE false END AS isAssignedToUser')
            //                     ->from(PConvention::class, 'c')
            //                     ->leftJoin('c.users', 'user', 'WITH', 'user.id = :userId')
            //                     ->andWhere('c.payant = :orgPayant')
            //                     ->setParameter('orgPayant', false)
            //                     ->setParameter('userId', $request->get("idUser"))
            //                     ->getQuery()
            //                     ->getResult();

            //     $html = $this->render('settings/user/inc/convention_table_body.html.twig', [
            //         'conventions' => $conventions,
            //     ]);

            //     return new JsonResponse(array("data"=>$data , "html"=>$html->getContent()));
            // }

            return new JsonResponse($data);
        }
    }


    #[Route('/addUser', name: 'addUser')]
    public function addUser( PActionRepository $pActionRep,PProfessionRepository $professionRep, ManagerRegistry $doctrine,  UserPasswordHasherInterface $passwordHasher, Request $request , UserRepository $userRep)
    {

        //CHECK USERNAME EXISTING

        // dd($request);
        if($request->isXmlHttpRequest()){

            $user = $doctrine->getRepository(User::class)->findOneBy(array('username'=> $request->get('username')));

            if($user){
                return new JsonResponse("USER ALREDY EXIST");
            }
            else{

                $em = $doctrine->getManager();

                $profession = $professionRep->find($request->get('profession'));

                $currentUser = $this->security->getUser();

                $user = new User();

                $hashedPassword = $passwordHasher->hashPassword($user, $request->get('password'));

                $user->setUsername($request->get('username'));
                $user->setName($request->get('nom'));
                $user->setPProfession($professionRep->find($request->get('profession')));
                if($request->get('status') == "actif"){
                    $user->setIsActive(true);
                }
                else{
                    $user->setIsActive(false);
                }
                $user->setRoles(["ROLE_USER"]);
                $user->setPassword($hashedPassword);
                $user->setUserUpdate($currentUser);
                $user->setDateUpdate(new \DateTime());
                $user->setPProfession($profession);
                $user->setIsDeleted(false);

                $em->persist($user);
                // dd($user);
                $em->flush();

                $users = $userRep->findBy(array("isDeleted" => 0), array('id' => 'ASC'));
                $professions = $professionRep->findAll();
                $actions = $this->userOperation->getOperations($this->getUser(), 'listUsers', $request);

                $html = $this->render('settings/user/list_users.html.twig', array(
                    "users" => $users,
                    "professions" => $professions,
                    "actions" => $actions
                ))->getContent();


            }

            return new JsonResponse($html);
        }


    }

    #[Route('/activateUser', name: 'activateUser')]
    public function activateUser(PProfessionRepository $professionRep, UserRepository $userRep , Request $request , PActionRepository $pActionRep,  ManagerRegistry $doctrine)
    {

        if($request->isXmlHttpRequest()){

            $actions = $this->userOperation->getOperations($this->getUser(), 'listUsers', $request);


            $em = $doctrine->getManager();
            $user = $userRep->find($request->get("idUser"));

            $currentUser = $this->security->getUser();

            if($user->isIsActive()){
                $user->setIsActive(false);
                $user->setUserUpdate($currentUser);
                $user->setDateUpdate(new \DateTime());

                $em->flush();

                $message = "L'utilisateur ".$user->getUsername()." désactivé avec Succès !";

            }
            else{
                $user->setIsActive(true);
                $user->setUserUpdate($currentUser);
                $user->setDateUpdate(new \DateTime());

                $em->flush();

                $message = "L'utilisateur ".$user->getUsername()." activé avec Succès !";

            }


            $users = $userRep->findBy(array("isDeleted" => 0), array('id' => 'ASC'));
            $professions = $professionRep->findAll();

            $html = $this->render('settings/user/list_users.html.twig', array(
                "users" => $users,
                "professions" => $professions,
                "actions" => $actions
            ))->getContent();

            return new JsonResponse(array("html"=>$html , "message"=>$message));


        }

    }

    #[Route('/deleteUser', name: 'deleteUser')]
    public function deleteUser(PProfessionRepository $professionRep, UserRepository $userRep , Request $request , PActionRepository $pActionRep,  ManagerRegistry $doctrine)
    {
        if($request->isXmlHttpRequest()){

            $actions = $this->userOperation->getOperations($this->getUser(), 'listUsers', $request);


            $em = $doctrine->getManager();
            $user = $userRep->find($request->get("idUser"));

            if(!$user->isIsDeleted()){
                $user->setIsDeleted(true);
                $em->flush();

                $message = "L'utilisateur ".$user->getUsername()." supprimé avec Succès";

            }

            $currentUser = $this->security->getUser();


            $users = $userRep->findBy(array("isDeleted" => 0), array('id' => 'ASC'));
            $professions = $professionRep->findAll();

            $html = $this->render('settings/user/list_users.html.twig', array(
                "users" => $users,
                "professions" => $professions,
                "actions"=> $actions
                            ))->getContent();

            return new JsonResponse(array("html"=>$html , "message"=>$message));
        }



    }

    #[Route('/updateUser', name: 'updateUser')]
    public function updateUser(PActionRepository $pActionRep, PProfessionRepository $professionRep , ManagerRegistry $doctrine, UserRepository $userRep , UserPasswordHasherInterface $passwordHasher, Request $request)
    {

        if($request->isXmlHttpRequest()){

            //CHECK USERNAME EXISTING

            // dd($request);
            $userExists = $userRep->findOneBy(array('username'=> $request->get('username')));

            $actions = $this->userOperation->getOperations($this->getUser(), 'listUsers', $request);




            $user = $userRep->find($request->get('idUser'));

            if($userExists){

                if($userExists->getId() != $user->getId()){
                    // $this->addFlash('error', "Le nom d'utilisateur déja exist !");
                    return new JsonResponse("USER ALREDY EXIST");
                }
            }
            if($user){
                $em = $doctrine->getManager();

                $profession = $professionRep->find($request->get('profession'));

                $currentUser = $this->security->getUser();

                $hashedPassword = $passwordHasher->hashPassword($user, $request->get('password'));

                // dd($user);
                $user->setUsername(strtoupper($request->get('username')));
                $user->setName(strtoupper($request->get('nom')));
                $user->setPProfession($professionRep->find($request->get('profession')));
                if($request->get('status') == "actif"){
                    $user->setIsActive(true);
                }
                else{
                    $user->setIsActive(false);
                }
                $user->setPassword($hashedPassword);
                $user->setUserUpdate($currentUser);
                $user->setDateUpdate(new \DateTime());
                $user->setPProfession($profession);
                $user->setRoute($request->get('routeName'));

                $em->flush();

                // $this->addFlash('success', "L'utilisateur modifié avec Succès !");


                $users = $userRep->findBy(array("isDeleted" => 0), array('id' => 'ASC'));
                $professions = $professionRep->findAll();

                $html = $this->render('settings/user/list_users.html.twig', array(
                    "users" => $users,
                    "professions" => $professions,
                    "actions" => $actions
                ))->getContent();

                return new JsonResponse($html);


            }

        }


    }

    #[Route('/userAffectation', name: 'userAffectation')]
    public function userAffectation(PModuleRepository $module , PProfessionRepository $professionRep,PModuleRepository $moduleRepository, UserRepository $userRep , PActionRepository $pActionRep, Request $request): Response
    {
        $session = new Session();


        $users = $userRep->findBy(array("isDeleted" => 0), array('id' => 'ASC'));

        $currentUser = $this->security->getUser();


        $actions = $session->get('actions');

        if(count($actions) == 0){
            return $this->render('errors/403.html.twig');
        }

        return $this->render('user/userAffectation.html.twig', [
            'users'=> $users,
        ]);
    }

    #[Route('/userActions', name: 'userActions')]
    public function userActions(PActionRepository $pActionRep, PDossierRepository $pDossierRepository ,PModuleRepository $moduleRepository, UserRepository $userRep , PUserDossierActionRepository $pUserDossierActionRepository, Request $request)
    {

        if($request->isXmlHttpRequest()){

            if($request->get("idSite")){
                $user = $userRep->find($request->get("idUser"));
                $site = $pDossierRepository->find($request->get("idSite"));
                $dossier = $request->getSession()->get('dossier');

                $allModules = $moduleRepository->findBy(array("active"=> true));

                $actions = $pUserDossierActionRepository->findBy(["userr"=>$user , "dossier" => $site]);

                $actionIds = array();

                foreach($actions as $action){
                    array_push($actionIds, $action->getAction()->getId());
                }

                // dd($actionIds);

                // $allActions = $pActionRep->findAll();

                // $listActions = array();

                // foreach($allActions as $action){
                //     if(in_array($action->getId(), $actionIds)){
                //         array_push($listActions , [$action , 'affected']);
                //     }else{
                //         array_push($listActions , [$action , 'notAffected']);
                //     }
                // }

                // dd($actionIds);

                $html = $this->render('settings/user/user_actions.html.twig', [
                    'allModules' => $allModules,
                    'actionIds' => $actionIds,
                ]);

                return new JsonResponse($html->getContent());
            }
            return new JsonResponse("ok");
        }

    }



    #[Route('/affectUser', name: 'affectUser')]
    public function affectUser(ManagerRegistry $doctrine ,PDossierRepository $pDossierRepository , PUserDossierActionRepository $pUserDossierActionRepository,PModuleRepository $moduleRepository, UserRepository $userRep , PActionRepository $pActionRep, Request $request)
    {
        // dd($request);

        if($request->isXmlHttpRequest()){

            $em = $doctrine->getManager();
            $user = $userRep->find($request->get("idUser"));
            $site = $pDossierRepository->find($request->get("idSite"));

            $checkedActions = json_decode($request->get("jsonCheckedActions"));
            $uncheckedActions = json_decode($request->get("jsonUncheckedActions"));

            // dd($checkedActions, $uncheckedActions);

            $affected = 0;
            $notAffected = 0;

                foreach($checkedActions as $a){
                    $currentAction = $pUserDossierActionRepository->findOneBy(["userr" => $user , "dossier" => $site , "action" => $a]);
                    $action = $pActionRep->find($a);
                    if(!$currentAction){
                        $affectation = new PUserDossierAction();

                        $affectation->setUserr($user);
                        $affectation->setDossier($site);
                        $affectation->setAction($action);

                        $em->persist($affectation);


                        $affected++;
                    }

                }

                foreach($uncheckedActions as $a){
                    $currentAction = $pUserDossierActionRepository->findOneBy(["userr" => $user , "dossier" => $site , "action" => $a]);
                    $action = $pActionRep->find($a);
                    if($currentAction){
                        $em->remove($currentAction);


                        $notAffected++;
                    }

                }

                $em->flush();




            return new JsonResponse(array("affected" => $affected , "notAffected" => $notAffected));
        }

    }

    // #[Route('/fetch-convention', name: 'app_fetch_convention', options: ['expose'=>true], methods: 'GET')]
    // public function fetchConventionAndConvention(Request $request, EntityManagerInterface $em , ManagerRegistry $doctrine)
    // {

    //     // Get the user ID from the request
    //     $userId = $request->query->get('user_filter');

    //     $draw = $request->query->get('draw');
    //     $start = $request->query->get('start') ?? 0;
    //     $length = $request->query->get('length') ?? 10;
    //     $search = $request->query->all('search')["value"];
    //     $orderColumnIndex = $request->query->all('order')[0]['column'];
    //     $orderColumn = $request->query->all("columns")[$orderColumnIndex]['name'];
    //     $orderDir = $request->query->all('order')[0]['dir'] ?? 'asc';

    //     $queryBuilder = $em->createQueryBuilder()
    //                         ->select('org.id, org.nom as convention')
    //                         ->from(PConvention::class, 'org')
    //                         ->andWhere('org.payant = :orgPayant')
    //                         ->setParameter('orgPayant', false);

    //     // Add additional filters if needed
    //     if (!empty($search)) {
    //         $queryBuilder->andWhere('(org.nom LIKE :search)')
    //             ->setParameter('search', "%$search%");
    //     }

    //     // Apply order
    //     if (!empty($orderColumn)) {
    //         $queryBuilder->orderBy("$orderColumn", $orderDir);
    //     }

    //     // Paginate results
    //     $queryBuilder->setFirstResult($start)
    //         ->setMaxResults($length);

    //     $results = $queryBuilder->getQuery()->getResult();
    //     // dd($results);

    //     // Get total records count
    //     $totalRecords = $em->createQueryBuilder()
    //                         ->select('COUNT(org.id)')
    //                         ->from(PConvention::class, 'org')
    //                         ->andWhere('org.payant = :orgPayant')
    //                         ->setParameter('orgPayant', false)
    //                         ->getQuery()
    //                         ->getSingleScalarResult();



    //     if (!empty($userId)) {
    //         $user = $doctrine->getManager()->getRepository(User::class)->find($userId);

    //         $conventionsArray = array_map(function ($convention) {
    //             return $convention->getId();
    //         }, $user->getConvention()->toArray());
    //     }

    //     $formattedData = [];
    //     foreach ($results as $item) {
    //         $nestedArray = [
    //             'hasConvention' => !empty($userId) ? in_array($item['id'], $conventionsArray) : false,
    //             'id' => $item['id'],
    //             'nom' => $item['convention'],
    //         ];

    //         if (!empty($userId) && $nestedArray['hasConvention']) {
    //             $nestedArray["DT_RowClass"] = "colorRow";
    //         }

    //         $formattedData[] = $nestedArray;
    //     }


    //     // dd($formattedData);
    //     // Return the data as a JSON response
    //     return new JsonResponse([
    //         'draw' => $draw,
    //         'recordsTotal' => $totalRecords,
    //         'recordsFiltered' => $totalRecords,
    //         'data' => $formattedData,
    //     ]);
    // }


    // #[Route('/assign-convention', name: 'app_assign_convention', options: ['expose'=>true], methods: 'POST')]
    // public function assignConventionToUser(Request $request, EntityManagerInterface $em): Response
    // {
    //     $jsonData = $request->getContent();
    //     $userConventionData = json_decode($jsonData, true);

    //     $selectedConventionId = $userConventionData['selectedConvention'];
    //     $userId = $userConventionData['id_user'];
    //     $checked = $userConventionData['checked'];

    //     $user = $em->getRepository(User::class)->find($userId);

    //     $convention = $em->getRepository(PConvention::class)->find($selectedConventionId);

    //     if (!$user || !$convention) {
    //         return new JsonResponse("User or convention not found.", 500, [], JSON_UNESCAPED_UNICODE);
    //     }

    //     // If checked is true, add convention to user, otherwise remove it
    //     if ($checked) {
    //         $user->addConvention($convention);
    //     } else {
    //         $user->removeConvention($convention);
    //     }

    //     $em->flush();

    //     return new JsonResponse("Convention assignment updated successfully.");
    // }

    #[Route('/assign-convention', name: 'app_assign_convention', options: ['expose'=>true], methods: 'POST')]
    public function assignConvention(Request $request, EntityManagerInterface $em): Response
    {
        $jsonData = $request->getContent();
        $userConventionData = json_decode($jsonData, true);

        $conventionIds = $userConventionData['conventionIds'];
        $userId = $userConventionData['id_user'];

        $user = $em->getRepository(User::class)->find($userId);

        if (!$user) {
            return new JsonResponse("Utilisateur non trouvé.", 500, [], JSON_UNESCAPED_UNICODE);
        }

        foreach ($conventionIds as $conventionId) {
            $convention = $em->getRepository(PConvention::class)->find($conventionId);

            if (!$convention) {
                return new JsonResponse("Convention not found.", 500, [], JSON_UNESCAPED_UNICODE);
            }

            $user->addConvention($convention);
        }

        $em->persist($user);

        $em->flush();

        return new JsonResponse("Conventions mises à jour avec succès.");
    }

    #[Route('/assign-caisse', name: 'app_assign_caisse', options: ['expose'=>true], methods: 'POST')]
    public function assignCaisseToUser(Request $request, EntityManagerInterface $em): Response
    {
        $jsonData = $request->getContent();
        // $caisseId = json_decode($jsonData, true)['selectedCaisse'];
        $userId = json_decode($jsonData, true)['id_user'];

        $user = $em->getRepository(User::class)->find($userId);

        // If checked is true, add caisse to user, otherwise remove it
        // if($caisseId){

        //     $caisse = $em->getRepository(PCaisse::class)->find($caisseId);
        //     $user->setCaisse($caisse);
        //     $message = '' . $caisse->getNom() . ' assignée avec succès à l\'utilisateur ' . $user->getName() . '.';
        // }else{

            $user->setCaisse(null);
            $message = 'Aucune caisse n\'a été assignée à l\'utilisateur ' . $user->getName() . '.';
        // }

        $em->persist($user);
        $em->flush();

        return new JsonResponse($message);
    }

    #[Route('/duplicate-user', name: 'app_duplicate_user', options: ['expose'=>true], methods: 'POST')]
    public function DuplicateUser(Request $request, EntityManagerInterface $em, PUserDossierActionRepository $pUserDossierActionRepository, UserPasswordHasherInterface $passwordHasher, PProfessionRepository $professionRep, UserRepository $userRep ,): Response
    {

        $jsonData = $request->getContent();
        $userData = json_decode($jsonData, true);

        $userId = $userData['id_user'];
        $username = $userData['username'];
        $name = $userData['name'];
        $password = $userData['password'];


        $currentUser = $this->security->getUser();
        $user = $em->getRepository(User::class)->find($userId);

        if (!$user) {
            return new JsonResponse("User not found.", 500, [], JSON_UNESCAPED_UNICODE);
        }
        if (!$username) {
            return new JsonResponse("Username est obligatoire.", 500, [], JSON_UNESCAPED_UNICODE);
        }
        if (!$name) {
            return new JsonResponse("nom est obligatoire.", 500, [], JSON_UNESCAPED_UNICODE);
        }
        if (!$password) {
            return new JsonResponse("password est obligatoire.", 500, [], JSON_UNESCAPED_UNICODE);
        }


        $userExist = $em->getRepository(User::class)->findOneBy(array('username'=> $username));

        if($userExist){
            return new JsonResponse("USER ALREDY EXIST", 500, [], JSON_UNESCAPED_UNICODE);
        }

            //  clone user

        $clonedUser = new User();

        $hashedPassword = $passwordHasher->hashPassword($clonedUser, $password);
        $clonedUser->setUsername(strtoupper($username));
        $clonedUser->setName(strtoupper($name));
        $clonedUser->setPassword($hashedPassword);
        $clonedUser->setPProfession($user->getPProfession());
        $clonedUser->setIsActive(true);
        $clonedUser->setRoles($user->getRoles());
        $clonedUser->setUserUpdate($currentUser);
        $clonedUser->setDateUpdate(new \DateTime());
        $clonedUser->setIsDeleted(false);

        $em->persist($clonedUser);


             //  clone user actions

        $dossierActions = $pUserDossierActionRepository->findBy(["userr" => $user]);

        foreach($dossierActions as $dossierAction){
            $affectation = new PUserDossierAction();

            $affectation->setUserr($clonedUser);
            $affectation->setDossier($dossierAction->getDossier());
            $affectation->setAction($dossierAction->getAction());

            $em->persist($affectation);
        }


            //  clone user conventions

        foreach($user->getConvention() as $convention){
            $clonedUser->addConvention($convention);
        }

        $em->flush();



        $actions = $this->userOperation->getOperations($this->getUser(), 'listUsers', $request);
        $users = $userRep->findBy(array("isDeleted" => 0), array('id' => 'ASC'));
        $professions = $professionRep->findAll();

        $html = $this->render('settings/user/list_users.html.twig', array(
            "users" => $users,
            "professions" => $professions,
            "actions"=> $actions
                        ))->getContent();

        return new JsonResponse(array("html"=>$html));
    }

}
