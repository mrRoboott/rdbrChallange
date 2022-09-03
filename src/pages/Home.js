import homeImage from '../img/Group 1.png'
import logo from '../img/logoRedberry.png'
import {Link} from 'react-router-dom'

const Home = () => {
    return ( 
        <div className="flexbox-container home">

      <img id='logo' src={logo} alt="redberryLogo" /> 
      <img  src={homeImage} alt="welcome to homePage" />

      <ul>
        <li className='addRecord'><Link to='/workmateform' className='homeButtons'> ჩანაწერის დამატება </Link></li>
        <li><a href="" className='homeButtons'> ჩანაწერების სია </a></li>
      </ul>
      
      </div>
     );
}
 
export default Home;