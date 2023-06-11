import { styled } from 'styled-components'

const ProfileFigure = styled.figure`
  display: flex;
  justify-content: center;
  
`

const ProfileImage = styled.img`
  border-radius: 100%;
  width: auto;
  height: 30vh;
`

const ProfileCaption = styled.figcaption`
  display: none;
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
    </>
  )
}

export default About