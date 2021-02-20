import {
  Wrapper,
  LogoWrapper,
  Menu,
  Logo,
  SearchWrapper,
  SearchBarWrapper,
  SearchIconWrapper,
  IconsWrapper,
} from './styles/header';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Menu>
          <MenuIcon />
        </Menu>
        <Logo>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
            alt="gmail"
          />
        </Logo>
      </LogoWrapper>

      <SearchWrapper>
        <SearchBarWrapper>
          <SearchIconWrapper />
          <input type="text" placeholder="Search mail" />
          <ExpandMoreIcon />
        </SearchBarWrapper>
      </SearchWrapper>

      <IconsWrapper>
        <HelpOutlineIcon />
        <SettingsIcon />
        <AppsIcon />
        <AccountCircleIcon />
      </IconsWrapper>
    </Wrapper>
  );
}
