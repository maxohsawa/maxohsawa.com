import { styled } from 'styled-components'
import CTA from '../components/CTA'
import ProfileJpg from '../assets/profile/profile.jpg'
import LinkSVG from '../assets/icons/link.svg'

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
  line-height: 2.1rem;
`

const Copy = styled.p`
  margin: 10px 0;
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
`

const CTACopy = styled.p`
  margin: 30px 30px 10px 30px;
  
`

const StyledLink = styled.a`

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
              I'm a software engineer with a focus on full stack web development and bringing delightful, accessible, and useful experiences to users. My goal in life is to continually learn, grow, and share!
            </Copy>
            <Greeting>
              <strong>I've learned from the best...</strong>
            </Greeting>
            <LearningRow>
              <Logo>
                <LogoImage src={ColumbiaLogo}/>
              </Logo>
              <LearningCopy>
                Currently teaches with Columbia University Engineering Bootcamps in partnership with EdX
              </LearningCopy>
            </LearningRow>
            <LearningRow>
              <Logo>
                <LogoImage src={MITLogo}/>
              </Logo>
              <LearningCopy>
                <span>Holds a professional </span>
                <StyledLink
                  className='link-about'
                  href='https://certificates.emeritus.org/bff24952-d42a-4954-8a58-9c9dff862af9'
                >
                  MIT xPRO MERN Full Stack Development Certification
                </StyledLink>
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
                <span>Holds a </span>
                <StyledLink
                  className='link-about'
                  href='https://certificates.cs50.io/b954b64a-cea6-497b-a610-e33b94108a67.png?size=letter'
                >
                  Harvard CS50x Certificate

                </StyledLink>
                <span> taught by legendary instructor David J. Malan</span>
              </LearningCopy>
            </LearningRow>
            <Greeting>
              <strong>And I'm still learning...</strong>
            </Greeting>
            <LearningRow>
              <Logo>
                <LogoImage src={StanfordLogo} style={{ width: '70%' }}/>
              </Logo>
              <LearningCopy>
                <span>Currently enrolled in the Stanford </span>
                <StyledLink
                  className='link-about'
                  href="https://www.coursera.org/specializations/machine-learning-introduction"
                >
                  Machine Learning Specialization
                </StyledLink>
                <span> offered in partnership with DeepLearning.AI and taught by Andrew Ng</span>
              </LearningCopy>
            </LearningRow>
            <CTACopy>
              Come along and check out what web technologies I like working with!
            </CTACopy>
          </CopyContainer>
          <CTA path='/skills' name='Skills' />
    </>
  )
}

export default About