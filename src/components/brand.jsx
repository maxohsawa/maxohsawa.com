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
    color: var(--secondary);

    @media screen and (min-width: 481px) {
      font-size: 4.2rem;
      margin: 75px 0;
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