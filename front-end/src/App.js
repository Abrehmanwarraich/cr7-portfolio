import Nav from './nav';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home';
import Awards from './components/awards';
import Cars from './components/cars';
import Childrens  from './components/childrens';
import Girlfriends from './components/girlfriends';
import Exercises from './components/exercise';
import Teams from './components/team';
import Biography from './components/biography';
import Salary from './components/salary';
import Admin from './components/Admin';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='biography' element={<Biography/>}/>
        <Route path='awards' element={<Awards/>} />
        
        <Route path='cars' element={<Cars/>}/>
        <Route path='childrens'element={<Childrens/>} />
        <Route path='girlfriends' element={<Girlfriends/>} />
        <Route path='exercise' element={<Exercises/>} />
        <Route path= 'teams' element={<Teams/>}/>
        <Route path='gallery' />
        <Route path='salary' element={<Salary/>}/>
        <Route path='Admin' element={<Admin/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
