// Locked popup: cannot close via ESC or backdrop.
// Only close() programmatically after successful save.
export default class Popup {
  constructor(selector) {
    this.el = document.querySelector(selector);
    if (!this.el) return;

    this.id = this.el.id;
    this.backdrop = document.getElementById(`${this.id}-backdrop`);
    this.validateBtn = this.el.querySelector('[data-popup-validate]');
    this.autoOpen = this.el.dataset.autoOpen === 'true';

    // "locked" means user can't dismiss via ESC or clicking outside
    this.locked = true;

    if (this.autoOpen) this.open();
  }

  open = () => {
    if (!this.el || !this.backdrop) return;
    this.el.hidden = false;
    this.backdrop.hidden = false;

    requestAnimationFrame(() => {
      this.el.classList.add('is-open');
      this.backdrop.classList.add('is-open');
    });

    // DO NOT bind ESC or backdrop click when locked
    if (!this.locked) {
      document.addEventListener('keydown', this._onEsc);
      this.backdrop.addEventListener('click', this.close);
    }

    // focus first focusable input inside modal
    const firstInput = this.el.querySelector('input, select, textarea, button');
    if (firstInput) firstInput.focus();
  };

  close = () => {
    if (!this.el || !this.backdrop) return;
    this.el.classList.remove('is-open');
    this.backdrop.classList.remove('is-open');

    document.removeEventListener('keydown', this._onEsc);
    this.backdrop.removeEventListener('click', this.close);

    setTimeout(() => {
      this.el.hidden = true;
      this.backdrop.hidden = true;
    }, 200);
  };

  _onEsc = (e) => {
    if (e.key === 'Escape') this.close();
  };
}
