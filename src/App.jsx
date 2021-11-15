import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { MemoHeader } from './components/Header/Header';
import { Tiles } from './components/Tiles/Tiles';
import { Popup } from './components/Popup/Popup';

export const App = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [fishForPopup, setFishForPopup] = useState();
  
  return (
    <Router>
      <MemoHeader />
      <Tiles setIsPopupOpened={setIsPopupOpened} setFishForPopup={setFishForPopup} />
      <Popup isPopupOpened={isPopupOpened} fishData={fishForPopup} setIsPopupOpened={setIsPopupOpened} />
    </Router>
  );
};
