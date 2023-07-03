import CTA from '../components/CTA'
import { styled } from 'styled-components'

const CopyContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`

const CopyHeader = styled.h2`

`

const CopySubHeader = styled.h3`
  padding-left: 5px;
`

const Copy = styled.p`
  margin: 10px 0;
  width: auto;
  font-size: 1.2rem;
  padding-left: 10px;
`



const Experience = () => {
  return (
    <>
      <CopyContainer>
        <CopyHeader>
          Co-Founder
        </CopyHeader>
        <CopySubHeader>
          FRAiMED.art
        </CopySubHeader>
        <CopySubHeader>
          Drop-shipped Generative AI Art
        </CopySubHeader>
        <Copy>
          As the co-founder of FRAiMED, a generative AI art drop shipping app, I architected the Next.js application and played a major role in building the React frontend and API. With a focus on seamless user experience and aesthetic appeal, I ensured a high level of quality, performance, and interactivity.
        </Copy>
      </CopyContainer>
      <CopyContainer>
        <CopyHeader>
          Assistant Instructor
        </CopyHeader>
        <CopySubHeader>
          Columbia University Bootcamps
        </CopySubHeader>
        <CopySubHeader>
          edX Fullstack Web Development
        </CopySubHeader>
        <Copy>
          As an Assistant Instructor for the Full Stack Web Development Bootcamp through Columbia University on edX, I played a pivotal role in guiding learners through immersive, market-ready learning experiences. With a passion for education and industry expertise, I provided mentorship, facilitated discussions, and contributed to creating a transformative learning environment that empowered individuals to pursue life-changing professional pathways in the tech industry.
        </Copy>
      </CopyContainer>
      <CopyContainer>
        <CopyHeader>
          Software Engineer
        </CopyHeader>
        <CopySubHeader>
          Various Side Projects
        </CopySubHeader>
        <Copy>
        As a fledgling software engineer, I gained valuable experience working on full stack side projects that utilized React, Node, and MongoDB. One of these projects was Dotodo, a microblogging social media app akin to Twitter but with an integrated todo list feature, emphasizing users' current tasks. I also contributed to Potluck, a social media app designed to organize potluck dinner hosts and guests, with future plans to expand into other communal host-guest projects. Additionally, I worked on ShareCal, a real-time shared calendar application that utilized websockets for collaboration, enabling users to synchronize schedules seamlessly. These experiences enhanced my skills in web development and solidified my passion for full stack engineering.
        </Copy>
      </CopyContainer>

      <CopyContainer>
        <Copy>
          If you think I would be a good fit for your team, or you would like to collaborate with me, please find me on LinkedIn, Github, and / or Twitter!
        </Copy>
      </CopyContainer>
      <CTA path='/' name='About' />
    </>

  )
}

export default Experience