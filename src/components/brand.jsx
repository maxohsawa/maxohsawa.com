import { styled } from 'styled-components'

const Brand = () => {

  const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
  `

  const Name = styled.span`
    font-size: 3rem;
    font-weight: bold;
    margin: 45px 0;

    @media screen and (min-width: 481px) {
      font-size: 4rem;
      margin: 60px 0;
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