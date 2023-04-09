import './App.css';
import NextPage from './Components/NextPage/Next.jsx';
import Home from './Body.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/next' element ={<NextPage></NextPage>}></Route>
    </Routes>
  );
}

export default App;
