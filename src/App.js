import Hero from './components/Hero';
import Destination from './components/Destination';
import Hotel from './components/Hotel'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/hotel' element={<Hotel/>} />
      </Routes>
    </div>
  );
}

export default App;
