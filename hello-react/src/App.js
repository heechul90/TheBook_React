import './App.css';
import {BrowserRouter as Router, Router, Switch} from "react-router-dom";
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
    return (
        <div className='App'>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Router path="/api" exact component={ListBoardComponent}></Router>
                        <Router path="/api/board" component={ListBoardComponent}></Router>
                    </Switch>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;