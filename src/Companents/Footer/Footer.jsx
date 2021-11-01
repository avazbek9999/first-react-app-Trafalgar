import './Footer.css';
import Footerlogo from '../../Assets/Images/footer-img.png';

function Footer() {
    return (
        <footer className="site-footer">
            <section className="footor-section">
                <div className="container">
                    <div className="footer-box-left">
                        <img className="footer-box-left-img" src={Footerlogo} alt="logo rasmi" width={ 160 } height={ 40 } />
                        <p className="footer-box-left-paragrf">
                            Trafalgar provides progressive, and affordable
                            healthcare, accessible on mobile and online for
                            everyone
                        </p>
                        <p className="footer-box-left-tex">
                            ©Trafalgar PTY LTD 2020. All rights reserved
                        </p>
                    </div>
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <ul className="footer-right-list">
                                <li className="footer-right-list-item">
                                    <strong>home</strong>
                                </li>
                                <li className="footer-right-list-item">Aboute</li>
                                <li className="footer-right-list-item">
                                    Testiminal
                                </li>
                                <li className="footer-right-list-item">
                                    Find a doctor
                                </li>
                                <li className="footer-right-list-item">Apps</li>
                            </ul>
                            <ul className="footer-right-list">
                                <li className="footer-right-list-item">
                                    <strong>Region</strong>
                                </li>
                                <li className="footer-right-list-item">
                                    Indonesia
                                </li>
                                <li className="footer-right-list-item">
                                    Singapore
                                </li>
                                <li className="footer-right-list-item">Hongkong</li>
                                <li className="footer-right-list-item">Canada</li>
                            </ul>
                            <ul className="footer-right-list">
                                <li className="footer-right-list-item">
                                    <strong>Help</strong>
                                </li>
                                <li className="footer-right-list-item">
                                    Help center
                                </li>
                                <li className="footer-right-list-item">
                                    Contact support
                                </li>
                                <li className="footer-right-list-item">
                                    Instructions
                                </li>
                                <li className="footer-right-list-item">
                                    How it works
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>


    )
}

export default Footer;