import "./Header.css"
import Nav from "../Nav/Nav";
import Logo from "../../Assets/Images/logo.png";

function Header() {
    return (
        <header className="site-header">
            <section className="header-section">
                <div className="container">
                    <img
                        className="header-logo-img"
                        src={ Logo }
                        alt="buyerda logoni rasmi"
                        width="160"
                        height="42"
                    />

                    <Nav />
                </div>
            </section>
        </header>
    );

}

export default Header;