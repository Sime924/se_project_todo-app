class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._completed = data._completed;
    this._name = data.name;
    this._id = data.id;
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
    this._selector = selector;
    this._date = data.Date;
    this._templateElement = document.querySelector(selector);
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._handleDelete();
      this._remove();
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._toggleCompletion();
      this._handleCheck(this._completed);
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _toggleCompletion = () => {
    this._completed = !this._completed;
  };

  _remove = () => {
    this._element.remove();

    this._element = null;
  };

  _getDueDate() {
    const todoDate = this._todoElement.querySelector(".todo__date");
    const formattedDate = new Date(this._data.date).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );
    todoDate.textContent = `Due: ${formattedDate}`;
  }

  getView() {
    this._todoElement = this._templateELement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoDate = this._todoElement.querySelector(".todo__date");

    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;

    this._generateCheckboxEl();
    this._setEventListeners();
    this._getDueDate();

    return this._todoElement;
  }
}
export default Todo;
