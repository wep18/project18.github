import './Footer.css';
import WebImageLogo from '../../assets/web.png';
import logo from '../../assets/windows.png';
import AppleLogo from '../../assets/apple-logo.png';
import SmartPhone from '../../assets/smartphone.png';
import MegaPhone from '../../assets/megaphone.png';

function Footer() {
  return (
      <footer className='footer'>
      <div className="footer-logo"></div>
      <table>
                <thead>
                    <tr>
                        <th>< a href='logo'> <img className='logo1'src={MegaPhone}/></a></th>
                        <th>Download</th>
                        <th>About</th>
                        <th>Resources</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='footer-words'>Match way these she avoids seeing</td>
                        <td className='footer-listings' ><img className='footer-logo' src={WebImageLogo} /> Web Browser</td>
                        <td className='footer-listings' >About social</td>
                        <td className='footer-listings' >join</td>
                    </tr>
                    <tr>
                        <td className='footer-words'>death their fat off.
                        </td>
                        <td  className='footer-listings' ><img className='footer-logo'src={logo}/> Windows</td>
                        <td  className='footer-listings' >Security</td>
                        <td  className='footer-listings' >Help center</td>

                    </tr>
                    <tr><td>
                    </td>
                        <td  className='footer-listings' ><img className='footer-logo' src={AppleLogo} /> MacOS</td>
                        <td  className='footer-listings' >Customer Support</td>
                        <td  className='footer-listings' >Developers</td></tr>
                    <tr>
                        <td></td>
                        <td  className='footer-listings' ><img className='footer-logo'src={SmartPhone}/> iOS&Android</td>
                        <td  className='footer-listings' >Partners</td>
                        <td  className='footer-listings' >Status</td></tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td  className='footer-listings' >Careers-<b>Join Us!</b></td>
                        <td  className='footer-listings' >Communities</td>
                    </tr>
                </tbody>
            </table>
      <hr></hr>
      
      <div className="word-spacing-copyright">
        <div className="word-spacing">
          <span className="word-spacing">
            {" "}
            <a className='footer-listings' href="support">Support</a>
          </span>
          <span className="word-spacing">
            {" "}
            <a className='footer-listings' href="docs">Docs</a>
          </span>
          <span className="word-spacing">
            {" "}
            <a className='footer-listings' href="terms">Terms of Use</a>
          </span>
          <span className="word-spacing">
            {" "}
            <a className='footer-listings' href="terms">Privacy & terms</a>
          </span>
        </div>
        <div className="copyright">©2023 Webestica All rights reserved.</div>{" "}
      </div>
      </footer>
  );

}
export default Footer;
