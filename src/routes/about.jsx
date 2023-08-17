import { styled } from 'styled-components'
import CTA from '../components/CTA'
import ProfileJpg from '../assets/profile/profile.jpg'
import ColumbiaLogo from '../assets/logos/columbia-engineering.svg'
import MITLogo from '../assets/logos/mit.svg'
import BrooklynCollegeLogo from '../assets/logos/brooklyn-college.svg'
import HarvardLogo from '../assets/logos/harvard.svg'
import StanfordLogo from '../assets/logos/stanford.svg'

const ProfileFigure = styled.figure`
  display: flex;
  justify-content: center;
  margin: 20px 0 10px 0;
  
`

const ProfileImage = styled.img`
  border-radius: 25px;
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
  margin: 20px 0 10px 0;
  font-size: 1.6rem;
  font-weight: bold;
`

const Copy = styled.p`
  margin: 10px 0;
  width: auto;
  font-size: 1.2rem;
`

const LearningRow = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  max-width: 70px;
  height: auto;
  margin: 10px;
`

const LogoImage = styled.img`
  width: 100%;
`

const LearningCopy = styled.p`
  width: 70vw;
  height: auto;
  margin-left: 15px;
  font-size: 1.2rem;
`

const About = () => {
  return (
    <>
        <ProfileFigure>
            <ProfileImage src={ProfileJpg} className="neu-less"/>
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
            <Greeting>
              <strong>I've learned a lot...</strong>
            </Greeting>
            <LearningRow>
              <Logo>
                <LogoImage src={ColumbiaLogo}/>
              </Logo>
              <LearningCopy>
                Currently teach with Columbia University Engineering Bootcamps in partnership with EdX
              </LearningCopy>
            </LearningRow>
            <LearningRow>
              <Logo>
                <LogoImage src={MITLogo}/>
              </Logo>
              <LearningCopy>
                Holds a professional MERN Full Stack Development certification from MIT xPRO
              </LearningCopy>
            </LearningRow>
            <LearningRow>
              <Logo>
                <LogoImage src={BrooklynCollegeLogo}/>
              </Logo>
              <LearningCopy>
                Earned a BS with honors in Computer Science from Brooklyn College
              </LearningCopy>
            </LearningRow>
            <LearningRow>
              <Logo>
                <LogoImage src={HarvardLogo}/>
              </Logo>
              <LearningCopy>
                Holds a certificate of completion of CS50x from Harvard
              </LearningCopy>
            </LearningRow>
            <Greeting>
              <strong>And I'm still learning...</strong>
            </Greeting>
            <LearningRow>
              <Logo>
                <LogoImage src={StanfordLogo} style={{ width: '95%' }}/>
              </Logo>
              <LearningCopy>
                Currently enrolled in the Machine Learning Specialization through Stanford and DeepLearning.AI, taught by Andrew Ng
              </LearningCopy>
            </LearningRow>
            <Copy>
              Come along and check out what web technologies I like working with!
            </Copy>
          </CopyContainer>
          <CTA path='/skills' name='Skills' />
    </>
  )
}

export default About