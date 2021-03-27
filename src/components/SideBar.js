import styled from "styled-components";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SideBarOption from "./SideBarOpion";
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase";


const SideBar = () => {

    const [channels, loading, error] = useCollection(db.collection('rooms'))


    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>React Chat</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        Kaloyan Krumov
                    </h3>
                </SideBarInfo>
                <CreateIcon/>
            </SideBarHeader>
            <SideBarOptions>
                <SideBarOption Icon={InsertCommentIcon} title={'Threads'}/>
                <SideBarOption Icon={InboxIcon} title={'Mentions and reactions'}/>
                <SideBarOption Icon={DraftsIcon} title={'Saved items'}/>
                <SideBarOption Icon={BookmarkBorderIcon} title={'Channel browser'}/>
                <SideBarOption Icon={PeopleAltIcon} title={'People & user groups'}/>
                <SideBarOption Icon={AppsIcon} title={'Apps'}/>
                <SideBarOption Icon={FileCopyIcon} title={'File browser'}/>
                <SideBarOption Icon={ExpandLessIcon} title={'Show Less'}/>
            </SideBarOptions>
            <SideBarOptions>
                <SideBarOptions>
                    <SideBarOption Icon={ExpandMoreIcon} title={'Channels'}/>
                </SideBarOptions>
                <SideBarOption Icon={AddIcon} title={'Add channel'} addChannelOption/>
                {
                    channels?.docs.map(doc =>
                        <SideBarOption key={doc.id} id={doc.id} title={doc.data().name}/>
                    )
                }
            </SideBarOptions>

        </SideBarContainer>
    );
};

export default SideBar;


const SideBarContainer = styled.div`
  background: var(--chat-color);
  color: var(--white-color);
  flex: 0.15;
`;


const SideBarOptions = styled.div`
  border-bottom: 1px solid var(--chat-light-color);
`;

const SideBarHeader = styled.div`
  border-top: 1px solid var(--chat-light-color);
  border-bottom: 1px solid var(--chat-light-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px;

  > .MuiSvgIcon-root {
    border-radius: 999px;
    padding: 5px;
    font-size: 35px;
    background: var(--white-color);
    color: var(--chat-color);
  }
`;

const SideBarInfo = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    align-items: center;
    display: flex;

    > .MuiSvgIcon-root {
      font-size: 14px;
      margin-right: 5px;
      color: #00c853;
    }
  }
`;
