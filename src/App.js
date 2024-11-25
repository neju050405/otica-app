import './App.css';
import Nav from './nav'
import Cover from './cover';
import Services from './services';
import Brands from './brands';
import './whatsappbtn.css';
import Socials from './socials';
import Locations from './locations';

function App() {
  return (
    <div className="App">
      <a id="robbu-whatsapp-button" target="_blank" href="https://api.whatsapp.com/send?phone=+5581996695868&text=Oi"> 
          <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg"/> 
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
        </div>
      </div>
    </div>
  );
}

export default App;
