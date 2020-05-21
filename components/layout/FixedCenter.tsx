import styled from 'styled-components'
import { footerHeight } from 'components/layout/Page'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${100 - footerHeight}vh;
`
