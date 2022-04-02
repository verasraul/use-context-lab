import React, { createContext } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import YellowPage from './components/YellowPage';
import GreenPage from './components/GreenPage';


export const ColorContext = createContext('dark');

function App() {
  
  return (
    <ColorContext.Provider value={'light'}>
    <BrowserRouter>
    <Routes>
      <Route path="/yellowpage" element={<YellowPage />}/>
      <Route path="/greenpage" element={<GreenPage />}/>
    </Routes>
    </BrowserRouter>
    </ColorContext.Provider>
  );
}

export default App;
