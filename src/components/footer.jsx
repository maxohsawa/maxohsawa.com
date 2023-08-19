import { styled } from 'styled-components'
import LinkedInLogo from '../assets/logos/linkedin.svg'
import GithubLogo from '../assets/logos/github.svg'
import TwitterLogo from '../assets/logos/twitter.svg'
import DiscordLogo from '../assets/logos/discord.svg'

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
  border-radius: 100%;
`

const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary),
  text-decoration: none,
  text-align: center,
  width: 50px;
  height: 50px;
  padding: 9px;
`

const LogoImage = styled.img`
  width: 90%;
  height: 90%;
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
  {
    imgSrc: DiscordLogo,
    url: "https://www.discordapp.com/users/1032759681174753290"
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
                <LogoLink href={link.url}>
                  <LogoImage src={link.imgSrc} />
                </LogoLink>
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