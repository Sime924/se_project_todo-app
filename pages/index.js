import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constant.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit,
});

function handleFormSubmit(inputValues) {
  const name = inputValues.name;
  const dateInput = inputValues.date;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();

  const values = { name, date, id };
  const todoItem = generateTodo(values);
  section.addItem(todoItem);

  todoCounter.updateTotal(true);
  newTodoValidator.resetValidation();
  addTodoPopup.close();
}

addTodoPopup.setEventListeners();

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

const renderTodo = (item) => {
  const todo = generateTodo(item);
  document.querySelector(".todos__list").append(todo);
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const element = generateTodo(item);
    section.addItem(element);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  todoCounter.updateTotal(false);
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

addTodoButton.addEventListener("click", () => {
  console.log("add todo button clickd");
  addTodoPopup.open();
});

addTodoCloseBtn.addEventListener("click", () => {
  console.log("close button clicked");
  addTodoPopup.close();
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
