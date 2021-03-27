import React from 'react';
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import {useSelector} from "react-redux";
import {selectRoom} from "../features/appSlice";
import ChatInput from "./ChatInput";
import {useCollection, useDocument} from "react-firebase-hooks/firestore";
import {db} from '../firebase'

function Chat(props) {

    const roomId = useSelector(selectRoom)
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )

    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong>#Room-name</strong></h4>
                    <StarBorderOutlinedIcon/>
                </HeaderLeft>
                <HeaderRight>
                    <InfoOutlinedIcon/> <span>Details</span>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {console.log(roomId)}
            </ChatMessages>
            <ChatInput
                channelName={''}
                channelId={roomId}/>
        </ChatContainer>
    );
}

export default Chat;


const ChatMessages = styled.div`

`

const ChatContainer = styled.div`
  color: var(--chat-dark-color);
  flex: 0.8;
  overflow-y: auto;
`
const Header = styled.div`
  border-bottom: 1px solid var(--chat-dark-color);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    margin-right: 10px;
    text-transform: lowercase;
    line-height: 1.5;
  }

  > .MuiSvgIcon-root {
    //font-size: 20px;
  }

`

const HeaderRight = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;
  font-style: 18px;

  > .MuiSvgIcon-root {
    margin-right: 5px;
  }
`
