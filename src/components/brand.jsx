import { styled } from 'styled-components'

const Brand = () => {

  const ProfileContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    
  `

  const Name = styled.span`
    font-size: 3rem;
    font-weight: bold;
    margin: 45px 0;

  `

  return (
    <>
      <ProfileContainer>
        <Name>Max Ohsawa</Name>
      </ProfileContainer>
    </>
  )
}

export default Brand