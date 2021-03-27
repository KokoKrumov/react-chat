import styled from "styled-components";
import {Button} from "@material-ui/core"
import {useState} from "react";
import {db} from '../firebase'
import firebase from 'firebase'

function ChatInput({channelId, channelName}) {

    const [input, setInput] = useState('')


    const sendMessage = e => {
        e.preventDefault()
        if (!channelId) {
            return false
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Kaloyan Krumov',
            userImage: 'https://lh3.googleusercontent.com/ogw/ADGmqu81wxmk-XthQ3LCGxcCUjvUn8MaXNQGelSxvxrQCQ=s83-c-mo'
        })

        setInput('')

    }

    return (
        <ChatInputContainer>
            <form>
                <input
                    type="text"
                    placeholder={`Message #ROOM`}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <Button type='submit' hidden onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  > form {
    position: fixed;
    bottom: 0;
    margin: 20px;
    width: 78%;
  }

  > form > input {
    border: 3px solid var(--chat-dark-color);
    width: 100%;
    padding: 15px;
  }

  > form > button {
    display: none;
  }


`
