import React, { Component } from 'react'
import styled from 'styled-components'
import { secretKey, getCoords, baseurl } from '../index'
import { Loading } from './Loading'
import { Weather } from './Weather'
import { Card } from './Card'

export class App extends Component {
  state = {
    isLoading: true,
    requested: null
  }

  componentDidMount() {
    getCoords(({ coords }) => {
      fetch(`${baseurl}${secretKey}/${coords.latitude},${coords.longitude}`)
        .then(res => res.json())
        .then(dat => dat.currently)
        .then(dat =>
          this.setState({
            isLoading: false,
            requested: dat
          })
        )
    })
  }

  render() {
    return (
      <Card>
        {this.state.isLoading ? <Loading>Loading...</Loading> : null}
        {this.state.requested ? <Weather dat={this.state.requested} /> : null}
      </Card>
    )
  }
}
