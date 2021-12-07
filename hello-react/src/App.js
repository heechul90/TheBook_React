import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
    return (
        <div className='App'>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Router path="/api" exact component={ListBoardComponent}></Router>
                        <Router path="/api/board" component={ListBoardComponent}></Router>
                    </Routes>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;