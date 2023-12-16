import './Footer.css';
import mm from './web.png';
import logo from './windows.png';
import er from './apple-logo.png';
import aa from './smartphone.png';
import ra from './megaphone.png';
function Footer() {
  return (
    <div >
      <div className="footer">
      <div className="footer-logo"></div>
      <table>
                <thead>
                    <tr>
                        <th>< a href='logo'> <img className='logo1'src={ra}/></a></th>
                        <th>Download</th>
                        <th>About</th>
                        <th>Resources</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Match way these she avoids seeing
                        </td>
                        <td ><img className='footer-logo' src={mm} />Web Browser</td>
                        <td>About social</td>
                        <td>join</td>
                    </tr>
                    <tr>
                        <td>death their fat off.
                        </td>
                        <td><img className='footer-logo'src={logo}/>Windows</td>
                        <td>Security</td>
                        <td>Help center</td>

                    </tr>
                    <tr><td>
                    </td>
                        <td><img className='footer-logo' src={er} />MacOS</td>
                        <td>Customer Support</td>
                        <td>Developers</td></tr>
                    <tr>
                        <td></td>
                        <td><img className='footer-logo'src={aa}/>iOS&Android</td>
                        <td>Partners</td>
                        <td>Status</td></tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Careers-Join Us!</td>
                        <td>Communities</td>
                    </tr>
                </tbody>
            </table>
      <hr></hr>
      </div>
      <div className="word-spacing-copyright">
        <div className="word-spacing">
          <span className="word-spacing">
            {" "}
            <a href="support">Support</a>
          </span>
          <span className="word-spacing">
            {" "}
            <a href="docs">Docs</a>
          </span>
          <span className="word-spacing">
            {" "}
            <a href="docs">Docs</a>
          </span>
          <span className="word-spacing">
            {" "}
            <a href="terms">Terms of Use</a>
          </span>
          <span className="word-spacing">
            {" "}
            <a href="terms">Privacy & terms</a>
          </span>
        </div>
        <div className="copyright">©2023 Webestica All rights reserved.</div>{" "}
      </div>
    </div>
  );
}
export default Footer;
