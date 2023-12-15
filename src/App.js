
import './App.css';
import GetDiscavered from './componts/GetDiscavered';
import Img1 from './componts/Img1.js';
import VidioCall from './componts/VidoCall.js';
import Img2 from './componts/Img2.js';
import "./componts/Component.css"
function App() {
  return (
    <body>
    <div className="container">
        <div className="row g-4">
            <Img1/>
            <GetDiscavered/> 
        </div>
        <div class="row g-4">
            <VidioCall/>
            <Img2/>
        </div>
    </div>
   </body>
  );
}

export default App;
