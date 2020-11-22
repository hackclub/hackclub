export class List extends HTMLElement {
  constructor() {
    super()
    this.url = 'https://jsonplaceholder.typicode.com/users'
  }

  async connectedCallback() {
    const data = await fetch(this.url).then((r) => r.json())

    for (const contact of data) {
      const el = document.createElement('x-contact')
      el.setAttribute('name', contact.name)
      el.setAttribute('email', contact.email)
      el.setAttribute('phone', contact.phone)
      this.appendChild(el)
    }
  }
}
