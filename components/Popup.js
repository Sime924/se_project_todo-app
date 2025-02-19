class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    1;
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");

    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target === this._popupElement
        //evt.target.classList.contains(".popup__close") ||
        //evt.target.classList.contains(".popup")
      ) {
        this.close();
      }
    });
    if (this._popupCloseBtn) {
      this._popupCloseBtn.addEventListener("click", () => {
        this.close();
      });
    }
  }
}

export default Popup;
