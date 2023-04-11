import './App.css';
import NextPage from './Components/Category/Category.jsx';
import Home from './Body.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/category' element ={<NextPage></NextPage>}></Route>
    </Routes>
  );
}

export default App;
