import { styled } from 'styled-components'

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

const ImageContainer = styled.div`
  
`

const ProjectAnchor = styled.a``

const ProjectImage = styled.img`
  width: 90vw;
`

const Project = ({ header, copy, img, link, repo }) => {
  return (
    <>
      <CopyContainer>
        <ProjectAnchor href={link}>
          <CopyHeader>
            {header}
          </CopyHeader>
        </ProjectAnchor>
        <Copy>
          {copy}
        </Copy>
      </CopyContainer>
      <ImageContainer>
        <ProjectAnchor href={link}>

          <ProjectImage src={img} />
        </ProjectAnchor>
      </ImageContainer>
      <ProjectAnchor href={repo}>
        GitHub Repository
      </ProjectAnchor>
    </>
  )
}

export default Project