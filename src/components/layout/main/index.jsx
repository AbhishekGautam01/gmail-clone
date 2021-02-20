import { Wrapper } from './styles/main';
import Sidebar from '../sidebar';
import EmailsView from '../emailView';
export default function Main() {
  return (
    <Wrapper>
      <Sidebar />
      <EmailsView />
    </Wrapper>
  );
}
