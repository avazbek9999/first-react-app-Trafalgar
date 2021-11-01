import './Services.css'
import Lupa from '../../Assets/Images/lupa.png';
import Group from '../../Assets/Images/Group.png';
import Frame from '../../Assets/Images/Frame.png';
import FramePic from '../../Assets/Images/Frame-pic.png';
import Box from '../../Assets/Images/box.png';
import List from '../../Assets/Images/list.png';

function Services() {
    return (
        <section className="our-services">
            <div className="container">
                <h2 className="our-servises-headding">Our services</h2>
                <span className="our-services-span" />
                <p className="our-servises-paragrf">
                    We provide to you the best choiches for you. Adjust it
                    to your health needs and make sure your undergo
                    treatment with our highly qualified doctors you can
                    consult with us which type of service is suitable for
                    your health
                </p>
                <div className="servicis-box">
                    <ul className="services-list">
                        <li className="services-list-items">
                            <img className="services-list-items-img" src={Lupa} alt="buyerda lupani rasmi bor" width={ 92 } height={ 90 } />
                            <h3 className="services-list-items-headding">
                                Search doctor
                            </h3>
                            <p className="services-list-items-paragrf">
                                Choose your doctor from thousands of
                                specialist, general, and trusted hospitals
                            </p>
                        </li>
                        <li className="services-list-items">
                            <img className="services-list-items-img" src={Group} alt="buyerda rasm bor" width={ 62 } height={ 85 } />
                            <h3 className="services-list-items-headding">
                                Online pharmacy
                            </h3>
                            <p className="services-list-items-paragrf">
                                Buy your medicines with our mobile
                                application with a simple delivery system
                            </p>
                        </li>
                        <li className="services-list-items">
                            <img className="services-list-items-img" src={Frame} alt="buyerda rasm bor" width={ 67 } height={ 95 } />
                            <h3 className="services-list-items-headding">
                                Consultation
                            </h3>
                            <p className="services-list-items-paragrf">
                                Free consultation with our trusted doctors
                                and get the best recomendations
                            </p>
                        </li>
                        <li className="services-list-items">
                            <img className="services-list-items-img" src={FramePic} alt="buyerda lupani rasmi bor" width={ 67 } height={ 95 } />
                            <h3 className="services-list-items-headding">
                                Details info
                            </h3>
                            <p className="services-list-items-paragrf">
                                Free consultation with our trusted doctors
                                and get the best recomendations
                            </p>
                        </li>
                        <li className="services-list-items">
                            <img className="services-list-items-img" src={Box} alt="buyerda lupani rasmi bor" width={ 80 } height={ 72 } />
                            <h3 className="services-list-items-headding">
                                Emergency care
                            </h3>
                            <p className="services-list-items-paragrf">
                                You can get 24/7 urgent care for yourself or
                                your children and your lovely family
                            </p>
                        </li>
                        <li className="services-list-items">
                            <img className="services-list-items-img" src={List} alt="buyerda lupani rasmi bor" width={ 70 } height={ 95 } />
                            <h3 className="services-list-items-headding">
                                Tracking
                            </h3>
                            <p className="services-list-items-paragrf">
                                Track and save your medical history and
                                health data
                            </p>
                        </li>
                    </ul>
                </div>
                <a className="services-link" href="#link">Learn more</a>
            </div>
        </section>

    );
}

export default Services;