export class Contact extends HTMLElement {
  constructor () {
    super()
    this.name = ''
    this.email = ''
    this.phone = ''
  }
  
  static get observedAttributes () {
    return ['name', 'email', 'phone']  // list attributes here
  }
  
  attributeChangedCallback (name, oldVal, newVal) {
    this[name] = newVal
    this.innerHTML = this.render()
  }
  
  connectedCallback () {
    this.innerHTML = this.render()
  }
  
  render () {
    return`
    	<div>
        <div>${this.name.slice(0, 1)}</div>
        <div>
          <div>${this.name}</div>
          <div>${this.email}</div>
          <div>${this.phone}</div>
        </div>
      </div>
    `
  }
}