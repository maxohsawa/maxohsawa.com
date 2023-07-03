import { styled } from 'styled-components'
import LinkedInLogo from '../assets/logos/linkedin.svg'
import GithubLogo from '../assets/logos/github.svg'
import TwitterLogo from '../assets/logos/twitter.svg'

const Section = styled.footer`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
`

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 2px;
  border-radius: 100%;
`

const LogoImage = styled.img`
  width: 100%;
`

const CopyrightContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`

const links = [
  {
    imgSrc: LinkedInLogo,
    url: "https://www.linkedin.com/in/maxohsawa"
  },
  {
    imgSrc: GithubLogo,
    url: "https://www.github.com/maxohsawa"
  },
  {
    imgSrc: TwitterLogo,
    url: "https://www.twitter.com/maxohsawa"
  },
]

const Footer = () => {
  return (
    <>
      <Section>
        <ContactContainer>
          {links && links.map((link, index) => {
            return (
              <Logo 
                key={`logo${index}`}
                className="neu-less"
              >
                <a href={link.url}>
                  <LogoImage src={link.imgSrc} />
                </a>
              </Logo>
            )

          })}
          
        </ContactContainer>
        <CopyrightContainer>
          <p>
            &copy;2023 Max Ohsawa
          </p>
        </CopyrightContainer>
      </Section>
    </>
  )
}

export default Footer