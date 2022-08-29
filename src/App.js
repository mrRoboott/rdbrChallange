import homeImage from './img/Group 1.png'
import logo from './img/logoRedberry.png'

function App() {
  return (
    <div className="App">

      <div className="flexbox-container">

      <img id='logo' src={logo} alt="redberryLogo" /> 
      <img  src={homeImage} alt="welcome to homePage" />

      </div>
        
      
    </div>
  );
}

export default App;
