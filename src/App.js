import React from 'react';
import FaceIt from './components/FaceIt';
import Header from './components/Header'
import MainPage from './components/MainPage';
import TopTeams from './components/TopTeams';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
          <Routes>
            {/*ROUTER 1  */}
            <Route path='/' element={<MainPage/>}>
            </Route>
            {/*ROUTER 2  */}
            <Route path='/TopTeams' element={<TopTeams/>}>
            </Route>
            {/*ROUTER 3  */}
            <Route path='/FaceIt' element={ <FaceIt/>}>
            </Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
