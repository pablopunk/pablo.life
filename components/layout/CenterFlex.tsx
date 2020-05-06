import styled from 'styled-components'
import { smallMediaQuery } from '../utils/media-queries'
import { footerHeight } from './Page'

interface IProps {
  column?: boolean
  free?: boolean
  marginTop?: string
  alwaysFill?: boolean
}

const Component = styled.div<IProps>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  & > * {
    margin: 1rem;
  }
  ${(props) => (props.free ? '' : `height: ${100 - footerHeight}vh;`)}
  ${(props) =>
    props.alwaysFill
      ? ''
      : `
      @media (${smallMediaQuery}) {
        flex-direction: column;
        ${(props) => (props.alwaysFill ? '' : 'height: 100%;')}
        margin-top: ${(props) => props.marginTop ?? '100px'};
      }
    `}
`

export default Component
