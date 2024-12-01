import './App.css';
import Nav from './nav'
import Cover from './cover';
import Brands from './brands';
import Locations from './locations';
import BottomNav from './bottomnav';
import instagram from './img/instagram.png';
import gmail from './img/gmail.png';
import whatsapp from './img/whatsapp.png';

function App() {
  return (
    <div className="App">
      <a href="mailto:riootica1@gmail.com" target="_blank" className="icon-gmail">
        <img src={gmail} alt="Gmail" title="Gmail: riootica1@gmail.com"></img>
      </a>
      <a href="https://www.instagram.com/riootica1/" target="_blank" className="icon-instagram">
        <img src={instagram} alt="Instagram" title="Instagram"></img>
      </a>
      <a href="https://api.whatsapp.com/send?phone=+5581996617352&text=Oi" target="_blank" className="icon-whatsapp">
        <img src={whatsapp} alt="WhatsApp" title="WhatsApp"></img>
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
