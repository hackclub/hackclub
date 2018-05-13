import styled, { keyframes } from 'styled-components'

export const FadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px)
  }

  to {
    opacity: 1;
    transform: translateX(0px)
  }
`

export const FadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px)
  }

  to {
    opacity: 1;
    transform: translateX(0px)
  }
`

export const FadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px)
  }

  to {
    opacity: 1;
    transform: translateX(0px)
  }
`