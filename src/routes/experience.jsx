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

const Experience = () => {
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
          If you think I would be a good fit for your team, or you would like to collaborate with me, please find me on LinkedIn, Github, and / or Twitter!
        </Copy>
      </CopyContainer>
      <CTA path='/' name='About' />
    </>
  )
}

export default Experience