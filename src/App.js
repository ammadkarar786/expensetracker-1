import React from 'react';
import './App.css';
//import compponent
import { Header } from './components/header.js'
import { Balance } from "./components/Balance";
import { Showtotal } from "./components/showtotal";
import { History } from "./components/History";
import { AddMoney } from "./components/AddMoney";

import { GloabalProvider } from "./context/GlobalState";


function App() {
  return (
    <GloabalProvider>
     <Header/>
     <Balance/>
     <Showtotal/>
     <History/>
     <AddMoney/>

    </GloabalProvider>
  );
}

export default App;
