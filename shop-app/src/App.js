import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

import ItemPage from './pages/itemDetailPage/itemDetailPage.component'
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Route path="/items/:id" exact={true} component={ItemPage}/>
        <Route path="/" exact={true} component={HomePage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
