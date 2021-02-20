import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  border-right: 1px solid lightgray;
  height: 100vh;
`;

export const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 20px;
`;

export const SideButtonsWrapper = styled.div``;

export const SidebarButtonItem = styled.div`
  display: grid;
  grid-template-columns: 14% auto;
  color: gray;
  padding: 5px 25px;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  margin-right: 8px;

  :hover {
    background-color: #f5f7f7;
  }
`;

export const MeetWrapper = styled.div``;

export const HangoutsWrapper = styled.div``;

export const BottomIconsWrapper = styled.div``;
