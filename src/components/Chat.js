import React from 'react';
import styled from "styled-components";

function Chat(props) {
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>

                </HeaderLeft>
                <HeaderRight>

                </HeaderRight>
            </Header>
            <h1>I'm Chat</h1>
        </ChatContainer>
    );
}

export default Chat;

const ChatContainer = styled.div`
  color: var(--chat-dark-color);
  width: 100%;
  overflow-y: auto;
`
const Header = styled.div`

`

const HeaderLeft = styled.div`

`

const HeaderRight = styled.div`

`
