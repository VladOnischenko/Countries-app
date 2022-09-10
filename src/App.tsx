import React, {useState} from 'react';
import './index.css';
import {Route, Routes} from 'react-router-dom'
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Home} from './pages/Home';
import {Details} from './pages/Details';
import {NotFound} from './pages/NotFound';

const App: React.FC = () => {
    const [countries, setCountries] = useState([])

  return (
    <>
      <Header />
        <Main>
            <Routes>
                <Route path="/" element={<Home countries={countries} setCountries={setCountries}/>}/>
                <Route path="/country/:id" element={<Details/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Main>
    </>
  );
}

export default App;
