import './HealthcareProviders.css';
import Providers from '../../Assets/Images/providers-pic.png';

function HealthcareProviders() {
    return (
        <section className="healthcare-providers">
            <div className="container">
                <img className="providers-img" src={Providers} alt="buyerda rasm bor" width={ 650 } height={ 477 } />
                <div className="helthcare-providers-right">
                    <h2 className="helthcare-providers-headding">
                        Leading healthcare providers
                    </h2>
                    <span className="helthcare-providers-headding-span" />
                    <p className="helthcare-providers-paragrf">
                        Trafalgar provides progressive, and affordable
                        healthcare, accessible on mobile and online for
                        everyone. To us, it’s not just work. We take pride
                        in the solutions we deliver
                    </p>
                    <a className="helthcare-providers-link" href="#link">Learn more</a>
                </div>
            </div>
        </section>

    );
}

export default HealthcareProviders;