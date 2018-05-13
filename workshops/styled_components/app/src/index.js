import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'

export const secretKey = '8ea581e415a94797f52d1aea3f53410e'  // Example key, use your own
export const getCoords = cb => navigator.geolocation.getCurrentPosition(cb)
export const baseurl = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'

ReactDOM.render(<App />, document.getElementById('root'))