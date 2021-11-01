import './Healthcare.css'
import HelthcareImg from '../../Assets/Images/header-illustration.png'


function Healthcare() {
    return (
        <section className="healthcare">
            <div className="container">
                <div className="healthcare-left">
                    <h1 className="helthcare-headding">
                        Virtual healthcare for you
                    </h1>
                    <p className="healthcare-paragrf">
                        Trafalgar provides progressive, and affordable
                        healthcare, accessible on mobile and online for
                        everyone
                    </p>
                    <a className="healthcare-link" href="#link">Consult today</a>
                </div>
                <img className="helthcare-picture" src={HelthcareImg} alt="buyerda rasm bor" width={ 693 } height={ 610 } />
            </div>
        </section>

    )
}
export default Healthcare;
