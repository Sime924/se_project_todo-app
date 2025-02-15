class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classlist.add("popup_visible");
  }
}

export default Popup;
