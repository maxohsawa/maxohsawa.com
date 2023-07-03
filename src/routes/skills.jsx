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
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`

const CopyHeader = styled.h2`

`

const Copy = styled.p`
  margin: 10px 0;
  width: auto;
  font-size: 1.2rem;
  padding-left: 10px;
`

const LogosContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  margin-bottom: 30px;
`
  
  const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 12px;
`

const Skills = () => {
  return (
    <>
      <CopyContainer>
        <CopyHeader>
          Front End Technologies:
        </CopyHeader>
        <Copy>
          React, JavaScript, Chakra UI, HTML, CSS
        </Copy>
        <LogosContainer>
          <LogoContainer>
            <Logo src={ReactLogo} />
          </LogoContainer>
          <LogoContainer>
            <Logo src={JavaScriptLogo} />
          </LogoContainer>
          <LogoContainer style={{ 
            backgroundColor: 'white', 
            width: '48px', 
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Logo src={ChakraLogo} />
          </LogoContainer>
          <LogoContainer>
            <Logo src={HTMLLogo} />
          </LogoContainer>
          <LogoContainer>
            <Logo src={CSSLogo} />
          </LogoContainer>
        </LogosContainer>
        <CopyHeader>
          Backend Technologies:
        </CopyHeader>
        <Copy>
          Node.js, Express.js, Next.js, JWT
        </Copy>
        <LogosContainer>
          <LogoContainer style={{
            backgroundColor: 'white'
          }}>
            <Logo src={NodeLogo} />
          </LogoContainer>
          <LogoContainer>
            <Logo src={ExpressLogo} />
          </LogoContainer>
          <LogoContainer>
            <Logo src={NextLogo} />
          </LogoContainer>
          <LogoContainer style={{
            width: 'auto'
          }}>
            <Logo src={JWTLogo} style={{
              width: 'auto'
            }} />
          </LogoContainer>
        </LogosContainer>
        <CopyHeader>
          Databases and ORMs/ODMs:
        </CopyHeader>
        <Copy>
          SQL, MySQL, Sequelize, NoSQL, MongoDB, Mongoose
        </Copy>
        <LogosContainer>
          <LogoContainer>
            <Logo src={MySQLLogo} />
          </LogoContainer>
          <LogoContainer>
            <Logo src={SequelizeLogo} />
          </LogoContainer>
          <LogoContainer>
            <Logo src={MongoDBLogo} />
          </LogoContainer>
          <LogoContainer style={{
            width: '100px',
            height: 'auto'
          }}>
            <Logo src={MongooseLogo} style={{
              width: '100px',
              height: 'auto'
            }} />
          </LogoContainer>
        </LogosContainer>
        <CopyHeader>
          Other:
        </CopyHeader>
        <Copy>
          Python, Java, C++, Git
        </Copy>
        <LogosContainer>
          <LogoContainer>
            <Logo src={PythonLogo} />
          </LogoContainer>
          <LogoContainer>
            <Logo src={JavaLogo} />
          </LogoContainer>
          <LogoContainer>
            <Logo src={CPPLogo} />
          </LogoContainer>
          <LogoContainer>
            <Logo src={GitLogo} />
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