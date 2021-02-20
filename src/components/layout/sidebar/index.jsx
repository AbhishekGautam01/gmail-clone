import {
  Wrapper,
  ComposeWrapper,
  BottomIconsWrapper,
  HangoutsWrapper,
  MeetWrapper,
  SidebarButtonItem,
  SideButtonsWrapper,
} from './styles/sidebar';
import { Compose } from '../../buttons';
import { sidebarButtonItems } from '../../../data/SidebarButtonItems';
export default function Sidebar() {
  return (
    <Wrapper>
      <ComposeWrapper>
        <Compose />
      </ComposeWrapper>
      <SideButtonsWrapper>
        {sidebarButtonItems.map((item) => (
          <SidebarButtonItem key={item.id}>
            {item.icon} {item.text}
          </SidebarButtonItem>
        ))}
      </SideButtonsWrapper>

      <MeetWrapper>{/* google meet stuff */}</MeetWrapper>

      <HangoutsWrapper>{/* hangouts stuff */}</HangoutsWrapper>

      <BottomIconsWrapper></BottomIconsWrapper>
    </Wrapper>
  );
}
