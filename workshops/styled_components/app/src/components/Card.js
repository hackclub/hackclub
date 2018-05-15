import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 512px;
  background: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 500px) {
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.24);
  }
`
