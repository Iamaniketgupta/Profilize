import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Home from "./components/Home.jsx";
import Editor from "./components/Editor.jsx";
function App() {
  return (
    <div className=''>
      <Header />
      <div className='w-screen absolute '>
        <Routes  >
          <Route path={'/'} element={<Home />} />
          <Route path={'/editor'} element={<Editor />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
