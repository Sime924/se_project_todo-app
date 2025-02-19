class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._completed = data.completed;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
    this._selector = selector;
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _setEventListeners() {
    this._deleteBtnEl.addEventListener("click", () => {
      this._handleDelete(this._completed);
      this.remove();
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._toggleCompletion();
      this._handleCheck(this._completed);
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._element.querySelector(".todo__completed");
    this._todoLabel = this._element.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._completed;
    this._todoCheckboxEl.id = `todo-${this._id}`;
    this._todoLabel.setAttribute("for", `todo-${this._id}`);
  }

  _toggleCompletion() {
    this._completed = !this._completed;
  }

  remove() {
    this._element.remove();
    this._element = null;
  }

  _getDueDate() {
    const todoDate = this._element.querySelector(".todo__date");
    const formattedDate = new Date(this._date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    todoDate.textContent = `Due: ${formattedDate}`;
  }

  getView() {
    this._element = document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);

    const todoDate = this._element.querySelector(".todo__date");

    const todoNameEl = this._element.querySelector(".todo__name");

    this._deleteBtnEl = this._element.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._name;
    this._generateCheckboxEl();
    this._setEventListeners();
    this._getDueDate();

    return this._element;
  }
}
export default Todo;
