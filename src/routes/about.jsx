import { styled } from 'styled-components'
import CTA from '../components/CTA'

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
  margin-bottom: 10px;
  font-size: 1.6rem;
  font-weight: bold;
`

const Copy = styled.p`
  margin: 10px 0;
  width: auto;
  font-size: 1.2rem;
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
          <CTA path='/skills' name='Skills' />
    </>
  )
}

export default About