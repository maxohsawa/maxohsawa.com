import { styled } from 'styled-components'

const Brand = () => {

  const ProfileContainer = styled.div`
    width: 100vw;
  `

  const Prefix = styled.span`
    color: var(--secondary);
    margin-right: 1rem;
  `

  const Name = styled.span`
    font-size: 2.2rem;
    font-weight: bold;
  `

  return (
    <>
      <ProfileContainer>
        
        <Name><Prefix>&gt;_ </Prefix>Max Ohsawa</Name>
      </ProfileContainer>
    </>
  )
}

export default Brand