import homeImage from './img/Group 1.png'
import logo from './img/logoRedberry.png'

function App() {
  return (
    <div className="App">

      <div className="flexbox-container">

      <img id='logo' src={logo} alt="redberryLogo" /> 
      <img  src={homeImage} alt="welcome to homePage" />

      <ul>
        <li className='addRecord'><a href="" className='homeButtons'> ჩანაწერის დამატება </a></li>
        <li><a href="" className='homeButtons'> ჩანაწერების სია </a></li>
      </ul>
      
      </div>
        
      
    </div>
  );
}

export default App;
