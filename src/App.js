import './App.css';
import Nav from './nav'
import Cover from './cover';
import Services from './services';
import Brands from './brands';
import Socials from './socials';
import Locations from './locations';
import BottomNav from './bottomnav';
import instagram from './img/instagram.png';
import gmail from './img/gmail.png';
import whatsapp from './img/whatsapp.png';

function App() {
  return (
    <div className="App">
      <a href="mailto:gmail@provedor.com.br" className="icon-gmail">
        <img src={gmail}></img>
      </a>
      <a href="https://www.instagram.com/riootica1/" className="icon-instagram">
        <img src={instagram}></img>
      </a>
      <a href="https://api.whatsapp.com/send?phone=+5581996695868&text=Oi" className="icon-whatsapp">
        <img src={whatsapp}></img>
      </a>
      <div className="blocks-container">
        <div className="nav-container">
          <Nav></Nav>
        </div>
        <div className="cover-container">
          <Cover></Cover>
        </div>
        <div className="brands-container">
          <Brands></Brands>
        </div>
        <div className="locations-container">
          <Locations></Locations>
        </div>
        <div className="bottomnav-container">
          <BottomNav></BottomNav>
        </div>
      </div>
    </div>
  );
}

export default App;
