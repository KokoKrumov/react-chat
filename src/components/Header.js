import styled from "styled-components";
import {Avatar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return <HeaderContainer>
        <HeaderLeft>
            <HeaderAvatar/>
            <AccessTimeIcon className='access-time-icon'/>
        </HeaderLeft>
        <HeaderSearch>
            <SearchIcon/>
            <input placeholder='search in react chat ...'/>
        </HeaderSearch>
        <HeaderRight>
            <HelpOutlineIcon/>
        </HeaderRight>
    </HeaderContainer>
}

export default Header;

const HeaderContainer = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: var(--chat-color);
`;

const HeaderRight = styled.div`
  flex: 0.3;
  color: #cccccc;
`;

const HeaderSearch = styled.div`
  margin: 0 20px;
  color: #004d40;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.4;
  border: 1px solid var(--chat-dark-color);
  border-radius: 5px;
  background: #b2dfdb;

  > input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #004d40;
  }

  > svg {
    margin: 0 12px;
  }
`;
const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0.3;

  .access-time-icon {
    color: #cccccc;
  }
`;


const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;


