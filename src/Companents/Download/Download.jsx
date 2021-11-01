import './Download.css';
import Illustration from '../../Assets/Images/app-illustration.png';
import DownloadIcon from '../../Assets/Images/app-dowload-icon.png';

function Download() {
    return (
        <section className="downlod-apps">
            <div className="container">
                <div className="downlod-apps-left">
                    <h2 className="downlod-apps-left-headding">
                        Download our mobile apps
                    </h2>
                    <span className="downlod-apps-left-span" />
                    <p className="downlod-apps-left-paragrf">
                        Our dedicated patient engagement app and web portal
                        allow you to access information instantaneously (no
                        tedeous form, long calls, or administrative hassle)
                        and securely
                    </p>
                    <a href="#link" className="downlod-apps-left-link">Download
                        <img className="app-downlod-icon" src={DownloadIcon} alt="buyerda icon rasmi" width={ 8 } height={ 10 } /></a>
                </div>
                <img className="downlod-apps-img" src={Illustration} alt=" buyerda rasm bor" width={ 665 } height={ 434 } />
            </div>
        </section>

    );
}

export default Download;