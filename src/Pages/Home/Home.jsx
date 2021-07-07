import HomeIllustration from '../../assets/home-illustration.svg'
import '../../App.css'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: auto auto;
`
const HomeContainer = styled.div`
  margin-top: 40px;
  background-color: ${colors.backgroundLight};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  font-size: 1.7rem;

  ${StyledLink} {
    margin-left: 0px;
    max-width: 180px;
    line-height: 1;
    color: white;
    border-radius: 30px;
    background-color: ${colors.primary};
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  min-width: 280px;
  line-height: 70px;
`

const Illustration = styled.img`
  flex: 1;
`

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftCol>
          <StyledTitle>
            Repérez vos besoins, <br />
            on s’occupe du reste,
            <br /> avec les meilleurs talents
          </StyledTitle>
          <StyledLink to="/survey/1">Faire le test</StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
