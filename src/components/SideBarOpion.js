import React from 'react';
import styled from "styled-components";
import {db} from '../firebase'
import {useCollection} from "react-firebase-hooks/firestore";
import {useDispatch} from "react-redux";
import {enterRoom} from "../features/appSlice";

const SideBarOption = ({Icon, title, addChannelOption, id}) => {

    const dispatch = useDispatch()

    const addChannel = () => {
        const channelName = prompt('Please add channel name');

        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }
    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }

    return (
        <SideBarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize={'small'} style={{margin: 10}}/>}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SideBarOptionChannel>
                    <span>#</span> <h3>{title}</h3>
                </SideBarOptionChannel>
            )}
        </SideBarOptionContainer>
    );
};

export default SideBarOption;

const SideBarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 5px;
  font-size: 12px;
  line-height: 1.2;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background: #00695c;
  }

  > h3 {
    font-weight: 500;

    > span {
      margin: 15px;
    }
  }
`;

const SideBarOptionChannel = styled.div`
  display: flex;
  align-items: center;

  > h3 {
    font-weight: 500;
  }

  > span {
    margin: 10px;
    font-size: 1.25rem;
  }
`;
