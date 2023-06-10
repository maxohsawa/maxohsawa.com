import { styled } from 'styled-components'

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const LinkedInLogo = styled.img`
  width: 100px;
`
const GithubLogo = styled.img`
  width: 100px;
`
const TwitterLogo = styled.img`
  width: 100px;
`

const Footer = () => {
  return (
    <>
      <ContactContainer>
        <LinkedInLogo src="/linkedin.svg" />
        <GithubLogo src="/github.svg" />
        <TwitterLogo src="/twitter.svg" />
      </ContactContainer>
    </>
  )
}

export default Footer