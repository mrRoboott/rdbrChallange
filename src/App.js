import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import WorkmateForm from './pages/WorkmateForm';

function App() {
  return (
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/workmateform' element={<WorkmateForm/>} />
    </Routes>
  );
}

export default App;
