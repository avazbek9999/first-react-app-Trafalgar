import './Coctumers.css';
import Advard from '../../Assets/Images/advard.png';
import VectorLeft from '../../Assets/Images/Vector-left.svg';
import VectorRight from '../../Assets/Images/Vector-right.svg';

function Coctumers() {
    return (        
        <section className="costomer-box">
            <div className="container">
                <h2 className="costomer-box-header">
                    What our customer are saying
                </h2>
                <span className="costomer-box-span" />
                <div className="costumers-box-buttom">
                    <img className="costumers-box-buttom-img" src={Advard} alt="buyrda advordni rasmi" width={ 141 } height={ 141 } />
                    <p className="costumers-box-buttom-paragrf">
                        Edward Newgate <br />
                        <span>Founder Circle</span>
                    </p>
                    <blockquote className="costumers-box-buttom-post">
                        “Our dedicated patient engagement app and web portal
                        allow you to access information instantaneously (no
                        tedeous form, long calls, or administrative hassle)
                        and securely”
                    </blockquote>
                </div>
            </div>
            <div className="costumer-box-button">
                <img src={VectorLeft} alt="buyerda vector rasmi bor" width={ 28 } height={ 18 } />
                <ul className="box-button-list">
                    <li className="box-button-list-item"><span className="box-button-span" /></li>
                    <li className="box-button-list-item"><span className="box-button-span" /></li>
                    <li className="box-button-list-item"><span className="box-button-span" /></li>
                </ul>
                <img src={VectorRight} alt="buyerda rasm bor" width={ 28 } height={ 18 } />
            </div>
        </section>
   
    );
}

export default Coctumers;