import './App.css';
import './reset.css';
import './globalStyles.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('land');
  function changePage() {
    currentPage === 'land'? setCurrentPage('home') : setCurrentPage('land');
  }
  return (
    <div className='App'>
        {
          currentPage === 'land'?
          <Landing action={changePage}/> :
          <Home action={changePage}/>
        }
    </div>
  );
};

export default App;
