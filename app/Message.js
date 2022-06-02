export class Message {
  constructor(element) {
    this.element = element
  }

  setText(message) {
    this.element.innerHTML = message;

    return this;
  }

  show() {
    this.element.style.diplay = 'block';
  }

  hide() {
    this.element.style.diplay = 'hidden';
  }
}