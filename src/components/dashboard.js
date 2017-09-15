import React from 'react'
import '../style/dashboard.css'
import testtubes from '../img/test-tubes.jpg'
const Dashboard = () => (


<div>

<ul className="c-tile-list">
        <li className="c-tile-list__item">
            <article className="c-article-tile t-web" itemscope itemtype="http://schema.org/Article">
                <div className="c-article-tile__header">
                    <a href="https://www.sitepoint.com/html-css/" className="c-article-tile__category" itemprop="keywords">
                    Mi perfil
                    </a>
                </div>

                <div className="c-article-tile__body">
                <img className="img_size" src={testtubes}/>
                </div>

                <footer className="c-article-tile__footer">
                    <span className="c-article-tile__author">
                    by <a href="https://www.sitepoint.com/author/hgiraudel/" itemprop="author">LMLA</a>
                    </span>

                    <time datetime="2016-05-12T12:00" className="c-article-tile__date" itemprop="datePublished">
                    May 12, 2016
                    </time>
                </footer>
            </article>
        </li>
    
        <li className="c-tile-list__item">
            <article className="c-article-tile t-web" itemscope itemtype="http://schema.org/Article">
                <div className="c-article-tile__header">
                    <a href="https://www.sitepoint.com/html-css/" className="c-article-tile__category" itemprop="keywords">
                    Resultados
                    </a>
                </div>

                <div className="c-article-tile__body">
                    <img className="img_size" src={testtubes}/>
                </div>

                <footer className="c-article-tile__footer">
                    <span className="c-article-tile__author">
                    by <a href="https://www.sitepoint.com/author/hgiraudel/" itemprop="author">LMLA</a>
                    </span>

                    <time datetime="2016-04-15T12:00" className="c-article-tile__date" itemprop="datePublished">
                    April 15, 2016
                    </time>
                </footer>
            </article>
        </li>
    
        <li className="c-tile-list__item">
            <article className="c-article-tile t-web" itemscope itemtype="http://schema.org/Article">
                <div className="c-article-tile__header">
                    <a href="https://www.sitepoint.com/web/" className="c-article-tile__category" itemprop="keywords">
                    Portafolio
                    </a>
                </div>

                <div className="c-article-tile__body">
                <img className="img_size" src={testtubes}/>
                </div>

                <footer className="c-article-tile__footer">
                    <span className="c-article-tile__author">
                    by <a href="https://www.sitepoint.com/author/hgiraudel/" itemprop="author">LMLA</a>
                    </span>

                    <time datetime="2016-06-10T12:00" className="c-article-tile__date" itemprop="datePublished">
                    June 10, 2016
                    </time>
                </footer>
            </article>
        </li>
        <li className="c-tile-list__item">
            <article className="c-article-tile t-web" itemscope itemtype="http://schema.org/Article">
                <div className="c-article-tile__header">
                    <a href="https://www.sitepoint.com/web/" className="c-article-tile__category" itemprop="keywords">
                    Contactenos
                    </a>
                </div>

                <div className="c-article-tile__body">
                <img className="img_size" src={testtubes}/>
                </div>

                <footer className="c-article-tile__footer">
                    <span className="c-article-tile__author">
                    by <a href="https://www.sitepoint.com/author/hgiraudel/" itemprop="author">LMLA</a>
                    </span>

                    <time datetime="2016-06-10T12:00" className="c-article-tile__date" itemprop="datePublished">
                    June 10, 2016
                    </time>
                </footer>
            </article>
        </li>
    </ul>
</div>
  
);

export default Dashboard