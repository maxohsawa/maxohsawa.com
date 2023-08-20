import CTA from '../components/CTA'
import { styled } from 'styled-components'
import ReactLogo from '../assets/logos/react.svg'
import JavaScriptLogo from '../assets/logos/javascript.svg'
import ChakraLogo from '../assets/logos/chakra-ui.svg'
import HTMLLogo from '../assets/logos/html5.svg'
import CSSLogo from '../assets/logos/css3.svg'
import NodeLogo from '../assets/logos/nodejs.svg'
import ExpressLogo from '../assets/logos/expressjs.svg'
import NextLogo from '../assets/logos/nextjs.svg'
import JWTLogo from '../assets/logos/jwt.svg'
import MySQLLogo from '../assets/logos/mysql.svg'
import SequelizeLogo from '../assets/logos/sequelize.svg'
import MongoDBLogo from '../assets/logos/mongodb.svg'
import MongooseLogo from '../assets/logos/mongoose.png'
import PythonLogo from '../assets/logos/python.svg'
import JavaLogo from '../assets/logos/java.svg'
import CPPLogo from '../assets/logos/C++.svg'
import GitLogo from '../assets/logos/git.svg'

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CopyHeader = styled.h2`
  margin: 30px 0 15px 0;

  @media screen and (min-width: 481px) {
    margin: 60px 0 25px 0;
  }
`

const Copy = styled.p`
  margin: 10px 0;
  width: auto;
  font-size: 1.2rem;
  padding-left: 10px;
`

const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: auto;
  border-radius: 6px;
  margin: 4px;
  padding: 6px 4px 2px 4px;
  background-color: rgba(255, 255, 255, 0.3);

  @media screen and (min-width: 481px) {
    margin: 0 10px;
    padding: 15px 0 5px 0;
    width: 100px;

  }
`
  
const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 18px;
`

const Label = styled.p`
  font-size: 0.7rem;
  margin-top: 4px;
`

const Skills = () => {
  return (
    <>
      <CopyContainer>
        <CopyHeader>
          Front End Technologies
        </CopyHeader>
        <LogosContainer>
          <LogoContainer>
            <Logo src={ReactLogo} alt='react' />
            <Label>React</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={JavaScriptLogo} alt='javascript' />
            <Label>JavaScript</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={ChakraLogo} alt='chakra ui' />
            <Label>Chakra UI</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={HTMLLogo} alt='html' />
            <Label>HTML 5</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={CSSLogo} alt='css' />
            <Label>CSS 3</Label>
          </LogoContainer>
        </LogosContainer>
        <CopyHeader>
          Backend Technologies
        </CopyHeader>
        <LogosContainer>
          <LogoContainer>
            <Logo src={NodeLogo} alt='node.js' />
            <Label>Node.js</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={ExpressLogo} alt='express.js' />
            <Label>Express.js</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={NextLogo} alt='next.js' />
            <Label>Next.js</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={JWTLogo} alt='json web tokens' />
            <Label>JWT</Label>
          </LogoContainer>
        </LogosContainer>
        <CopyHeader>
          Databases and ORMs/ODMs
        </CopyHeader>
        <LogosContainer>
          <LogoContainer>
            <Logo src={MySQLLogo} alt='mysql' />
            <Label>MySQL</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={SequelizeLogo} alt='sequelize' />
            <Label>Sequelize</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={MongoDBLogo} alt='mongodb' />
            <Label>MongoDB</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={MongooseLogo} alt='mongoose' />
            <Label>Mongoose</Label>
          </LogoContainer>
          
        </LogosContainer>
        <CopyHeader>
          Other
        </CopyHeader>
        <LogosContainer>
          <LogoContainer>
            <Logo src={PythonLogo} alt='python' />
            <Label>Python</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={JavaLogo} alt='java' />
            <Label>Java</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={CPPLogo} alt='c++' />
            <Label>C++</Label>
          </LogoContainer>
          <LogoContainer>
            <Logo src={GitLogo} alt='git' />
            <Label>Git</Label>
          </LogoContainer>
        </LogosContainer>
      </CopyContainer>
      <CopyContainer>
        <Copy>
          Check out some of the projects I've been working on!
        </Copy>
      </CopyContainer>
      <CTA path='/projects' name='Projects' />
    </>
  )
}

export default Skills