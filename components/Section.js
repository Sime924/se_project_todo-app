class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      // call the renderer, and pass it the item
    });
  }

  addItem(element) {
    // add element to the container
  }
}

export default Section;
