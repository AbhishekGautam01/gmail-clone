import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelIcon from '@material-ui/icons/Label';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const sidebarButtonItems = [
  {
    id: 1,
    icon: <InboxIcon />,
    text: 'Inbox',
  },
  {
    id: 2,
    icon: <StarIcon />,
    text: 'Starred',
  },
  {
    id: 3,
    icon: <WatchLaterIcon />,
    text: 'Snoozed',
  },
  {
    id: 4,
    icon: <SendIcon />,
    text: 'Sent',
  },
  {
    id: 5,
    icon: <InsertDriveFileIcon />,
    text: 'Drafts',
  },
  {
    id: 6,
    icon: <LabelIcon />,
    text: 'Notes',
  },
  {
    id: 6,
    icon: <ExpandMoreIcon />,
    text: 'More',
  },
];
