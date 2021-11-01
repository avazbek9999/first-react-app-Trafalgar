import './LatesArticle.css';
import Labaratory from '../../Assets/Images/image-labaratory.png';
import Labaratory2 from '../../Assets/Images/image.png';
import Labaratory3 from '../../Assets/Images/last.png';
import Vector from '../../Assets/Images/Vector.png';

function Article() {
    return (
        <section className="lates-article">
            <div className="container">
                <h2 className="lates-article-headding">
                    Check out our latest article
                </h2>
                <span className="lates-article-span" />
                <ul className="lates-article-list ">
                    <li className="lates-article-list-item">
                        <img className="lates-article-list-item-img" src={Labaratory} alt=" labaratoriya rasmi" width={ 350 } height={ 246 } />
                        <div className="article-list-item-buttom">
                            <h3 className="buttom-header">
                                Disease detection, check up in the
                                laboratory
                            </h3>
                            <p className="buttom-paragrf">
                                In this case, the role of the health
                                laboratory is very important to do a disease
                                detection...
                            </p>
                            <a className="buttom-link" href="#link">Read more
                                <img src={Vector} alt="vector rasmi bor" className="buttom-link-ikonka" width={ 14 } height={ 9 } /></a>
                        </div>
                    </li>
                    <li className="lates-article-list-item">
                        <img className="lates-article-list-item-img" src={Labaratory2} alt=" labaratoriya rasmi" width={ 350 } height={ 246 } />
                        <div className="article-list-item-buttom">
                            <h3 className="buttom-header">
                                Herbal medicines that are safe for
                                consumption
                            </h3>
                            <p className="buttom-paragrf">
                                Herbal medicine is very widely used at this
                                time because of its very good for your
                                health...
                            </p>
                            <a className="buttom-link" href="#link">Read more
                                <img src={Vector} alt="vector rasmi bor" className="buttom-link-ikonka" width={ 14 } height={ 9 } /></a>
                        </div>
                    </li>
                    <li className="lates-article-list-item">
                        <img className="lates-article-list-item-img" src={Labaratory3} alt=" labaratoriya rasmi" width={ 350 } height={ 246 } />
                        <div className="article-list-item-buttom">
                            <h3 className="buttom-header">
                                Natural care for healthy facial skin
                            </h3>
                            <p className="buttom-paragrf">
                                A healthy lifestyle should start from now
                                and also for your skin health. There are
                                some...
                            </p>
                            <a className="buttom-link" href="#link">Read more
                                <img src={Vector} alt="vector rasmi bor" className="buttom-link-ikonka" width={ 14 } height={ 9 } /></a>
                        </div>
                    </li>
                </ul>
                <a className="last-article-link" href="#link">View all</a>
            </div>
        </section>

    )
}

export default Article;