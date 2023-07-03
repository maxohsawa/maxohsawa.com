import CTA from '../components/CTA'
import { styled } from 'styled-components'
import Project from '../components/project'
import FRAiMEDImage from '../assets/projects/fraimed.png'
import ComingSoonPlaceholder from '../assets/projects/coming-soon-placeholder.gif'

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

const projects = [
  {
    header: 'FRAIMED.art',
    copy: "Generative AI project that uses Next.js, React, OpenAI's DALL-E",
    img: FRAiMEDImage,
    link: 'https://www.fraimed.art',
    repo: 'https://github.com/ColinSprows/Fraime'
  },
  {
    header: 'DOTODO.social',
    copy: 'A nano blogging social media platform focused on sharing what we do',
    img: ComingSoonPlaceholder,
    link: 'https://www.dotodo.social',
    repo: 'https://github.com/maxohsawa/dotodo'
  },
  {
    header: 'potluck.network',
    copy: 'A social network based around hosting and attending potluck dinners',
    img: ComingSoonPlaceholder,
    link: 'https://www.potluck.network',
    repo: 'https://github.com/maxohsawa/potluck'
  },
  {
    header: 'ShareCal',
    copy: 'A real-time collaborative calendar utilizing React, Node, MongoDB, and WebSockets',
    img: ComingSoonPlaceholder,
    link: 'https://google.com',
    repo: 'https://github.com/maxohsawa/sharecal'
  }
]

const Projects = () => {
  return (
    <>
      {projects.map(({ header, copy, img, link, repo }, index) => {
        return (
          <Project 
            key={`project${index}`}
            header={header}
            copy={copy}
            img={img}
            link={link}
            repo={repo}
          />
        )

      })}
      <CopyContainer>
        <Copy>
          Check out some of the experiences I've had!
        </Copy>
      </CopyContainer>
      <CTA path='/experience' name='Experience' />
    </>
  )
}

export default Projects