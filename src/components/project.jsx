import { styled } from 'styled-components'

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`

const CopyContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CopyHeader = styled.h2`
  display: inline;
  margin: 10px 0;
`

const Copy = styled.p`
  margin: 10px 0;
  width: auto;
  padding-left: 10px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 85%
`

const ProjectAnchor = styled.a`
  display: flex;
  justify-content: center;
`

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 4px;
`

const Project = ({ header, copy, img, link, repo }) => {
  return (
    <>
      <ProjectContainer>
        <CopyContainer>
          <ProjectAnchor 
            href={link}
            className='project-header'
          >
            <CopyHeader>
              {header}
            </CopyHeader>
          </ProjectAnchor>
          <Copy>
            {copy}
          </Copy>
        </CopyContainer>
        <ImageContainer>
          <ProjectAnchor 
            href={link}
          >
            <ProjectImage src={img} />
          </ProjectAnchor>
        </ImageContainer>
        <ProjectAnchor
          className='link-repo'
          href={repo}
        >
          GitHub Repository
        </ProjectAnchor>
      </ProjectContainer>
    </>
  )
}

export default Project