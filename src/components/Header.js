 import './Header.css';
 import img from './img.jpg';
 import img2 from './img2.jpg'
 const Header =() => {
    return (
      <div>
        <header className="header">
          <h1>People prefer to message</h1>
          <p>Frequently sufficient to be unaffected. The furnished she concluded
                             depending procuring concealed.</p>
          <div className="download-buttons">
            <button className="download-button"><img className='img'src={img}/></button>
            <button className="download-button"><img className='img'src={img2}/></button>
            <p>Easy set-up  . Free Forever . Secure</p>
          </div>
        </header>
  
    
         </div>
        
    );
 }
export default Header;