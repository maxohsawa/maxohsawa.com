import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const ProfileFigure = styled.figure`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  
`

const ProfileImage = styled.img`
  border-radius: 100%;
  width: auto;
  height: 25vh;
`

const ProfileCaption = styled.figcaption`
  display: none;
`

const CopyContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`
const Greeting = styled.p`
  margin: 10px 0;
  font-size: 1.6rem;
  font-weight: bold;
`

const Copy = styled.p`
  margin: 10px 0;
  width: auto;
`

const CTA = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  width: 60vw;
`

const NavLinkItem = styled.div`
  display: flex;
  justify-content: center;
`

const About = () => {
  return (
    <>
        <ProfileFigure>
            <ProfileImage src='/profile.jpg' className="neu-less"/>
            <ProfileCaption>
              brand image of the developer Max Ohsawa, consisting of a profile image and a border
            </ProfileCaption>
          </ProfileFigure>
          <CopyContainer>
            <Greeting>
              <strong>Hey there!</strong>
            </Greeting>
            <Copy>
              I'm a software engineer with a focus on full stack web development and bringing delightful, accessible, and useful experiences to users.
            </Copy>
            <Copy>
              Come along and check out what web technologies I like working with!
            </Copy>
          </CopyContainer>
          <CTA>
            <NavLinkItem>
              <NavLink 
                to="/skills"
                className="active"
                style={
                  {
                    width: "60vw",
                    padding: "15px"
                  }
                }
                >
                Skills
              </NavLink>
            </NavLinkItem>
          </CTA>
    </>
  )
}

export default About