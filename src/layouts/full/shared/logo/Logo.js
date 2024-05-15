import { Link } from 'react-router-dom';
//import { ReactComponent as LogoDark } from 'src/assets/images/logos/dark.svg';
import { styled } from '@mui/material';
import LogoImage from 'src/assets/images/logos/dark-logo.png'


const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '100px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <img src={LogoImage} alt="Logo" style={{ height: '70px', width: 'auto' }} />
    </LinkStyled>
  )
};

export default Logo;
