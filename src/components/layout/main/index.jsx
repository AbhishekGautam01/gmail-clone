import { Wrapper } from './styles/main';
import Sidebar from '../sidebar';
import EmailsView from '../emailView';
import SideIcons from '../sideIcons';
export default function Main() {
  return (
    <Wrapper>
      <Sidebar />
      <EmailsView />
      <SideIcons />
    </Wrapper>
  );
}
