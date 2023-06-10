import { styled } from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
`

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
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
    imgSrc: "/linkedin.svg",
    url: "https://www.linkedin.com/in/maxohsawa"
  },
  {
    imgSrc: "/github.svg",
    url: "https://www.github.com/maxohsawa"
  },
  {
    imgSrc: "/twitter.svg",
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
                className="neu-shadow"
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