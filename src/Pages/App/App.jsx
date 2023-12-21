import { Route, Routes } from "react-router-dom";

import GamePage from '../GamePage/GamePage';
import ScoreBoardPage from '../ScoreBoardPage/ScoreBoardPage';

export default function App() {

  return (
   <>
   <Routes>
    <Route path='/' element={<GamePage />} />
    <Route path='/score' element={<ScoreBoardPage />} />
   </Routes>
   </>
  )
}