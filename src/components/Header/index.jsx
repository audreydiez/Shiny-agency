import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import Logo_dark from '../../assets/dark-logo.png'

const WrapperHeader = styled.div`
  max-width: 1440px;
  margin: auto auto;
`

const StyledNav = styled.nav`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.img`
  height: 70px;
`

function Header() {
  return (
    <WrapperHeader>
      <StyledNav>
        <Link to="/">
          <StyledLogo src={Logo_dark} alt="freelance" />
        </Link>
        <div>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/freelances">Profils</StyledLink>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </div>
      </StyledNav>
    </WrapperHeader>
  )
}

export default Header
