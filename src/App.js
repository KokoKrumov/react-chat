import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import styled from "styled-components";

function App() {
    return (
        <AppContainer className="App">
            <Router>
                <>
                    <Header/>
                    <AppBody>
                        <SideBar/>
                        <Switch>
                            <Route path='/' exact>
                                <Chat/>
                            </Route>
                            <Route path='/about'>
                                this is abut
                            </Route>
                        </Switch>
                    </AppBody>
                </>
            </Router>
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const AppBody = styled.div`
  display: flex;
  height: 100%;
`;
