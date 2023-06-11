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

    @media (min-width: 1025px) {
      font-size: 3rem;
    }
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