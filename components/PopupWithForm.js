import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues(evt) {
    // move to constructor
    this._inputList = this._popupForm.querySelectorAll(".popup__input");

    const values = {};
    this._inputList.forEach((input) => {
      // add a key/value pair for each input
      // the key is input.name
      //the value is input.value
      // need to use brackets notation, not dot notation
    });
    return values;
  }

  setEventlisteners() {
    super.setEventlisteners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();

      // pass result of _getInputValues to submission handler

      this._handleFormSubmit(evt);
    });
  }
}

export default PopupWithForm;
