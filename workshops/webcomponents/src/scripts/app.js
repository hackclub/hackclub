export class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<x-list></x-list>'
  }
}
