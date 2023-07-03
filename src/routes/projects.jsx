import CTA from '../components/CTA'
import { styled } from 'styled-components'

const CopyContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`

const CopyHeader = styled.h2`

`

const Copy = styled.p`
  margin: 10px 0;
  width: auto;
  font-size: 1.2rem;
  padding-left: 10px;
`

const Projects = () => {
  return (
    <>
      <CopyContainer>
        <CopyHeader>
          Front End Technologies:
        </CopyHeader>
        <Copy>
          React, JavaScript, Chakra UI, HTML, CSS
        </Copy>
      </CopyContainer>
      <CopyContainer>
        <Copy>
          Check out some of the experiences I've had!
        </Copy>
      </CopyContainer>
      <CTA path='/experience' name='Experience' />
    </>
  )
}

export default Projects