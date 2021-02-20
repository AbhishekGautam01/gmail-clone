import styled from 'styled-components/macro';
import SearchIcon from '@material-ui/icons/Search';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 170px;
  border-bottom: 1px solid lightgray;
  height: 70px;
  align-items: center;
`;
export const LogoWrapper = styled.div`
  height: 45px;
  display: grid;
  grid-template-columns: 25% auto;
`;

export const SearchIconWrapper = styled(SearchIcon)`
  color: #5f6368;
`;

export const Menu = styled.div`
  display: grid;
  place-items: center;
`;

export const Logo = styled.div`
  display: flex;
  height: 45px;
`;

export const SearchWrapper = styled.div``;

export const SearchBarWrapper = styled.div`
  background-color: #f1f3f4;
  width: 100%;
  max-width: 750px;
  display: grid;
  grid-template-columns: 10% auto 7%;
  place-items: center;
  height: 45px;
  border-radius: 6px;

  .MuiSvgIcon-root {
    color: #5f6368;
  }

  input {
    width: 100%;
    height: 30px;
    background: none;
    border: none;
    font-size: 18px;

    :focus {
      outline: none;
    }
  }
`;

export const IconsWrapper = styled.div`
  margin-left: 8px;
  display: grid;
  grid-template-columns: repeat(4, auto);

  .MuiSvgIcon-root {
    color: #5f6368;
  }
`;
