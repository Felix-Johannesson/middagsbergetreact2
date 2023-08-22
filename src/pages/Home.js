import React from "react";
import Config from "../Config.json";
import { Helmet } from "react-helmet";
//import { NavLink, Link } from "react-router-dom";
import videoBG from "../assets/hero.mp4";
import snowboard_placeholder from "../assets/snowboard_placeholder.jpg";
import markus_spiske from "../assets/markus-spiske.jpg";
import skis from "../assets/skis.jpg";
import snowboard from "../assets/snowboard.jpg";
import pistkarta from "../assets/pistkarta.jpeg";
import BackToTopButton from "../components/BackToTopButton";

const TITLE = "Hem | " + Config.SITE_TITLE;
const CANONICAL = Config.SITE_DOMAIN + "/";

class Home extends React.Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>{TITLE}</title>
          <link rel="canonical" href={CANONICAL} />
        </Helmet>
        <div className="hero" id="hero">
          <video
            src={videoBG}
            autoPlay
            loop
            muted
            className="background-video"
          />

          <div className="content">
            <div className="title">
              <h1 id="title">Middagsberget</h1>
              <p id="subtitle">Nära till ett bra åk</p>
            </div>
            <div className="button">
              <a href="/#öppettider">
                <div className="öppettider-knapp">Öppettider</div>
              </a>
              <a href="/#priser">
                <div className="priser-knapp">Priser</div>
              </a>
              <a href="/#uthyrning">
                <div className="uthyrning-knapp">Uthyrning</div>
              </a>
              <a href="/#lär-dig">
                <div className="lär-dig-knapp">Lär dig åka</div>
              </a>
              <a href="/#pistkarta">
                <div className="pistkarta-knapp">Pistkarta</div>
              </a>
            </div>
          </div>
        </div>
        <div className="avdelare" id="öppettider">
          <h2 className="oppettider">Öppettider</h2>
        </div>
        <div className="öppettider">
          <div
            className="grid-item picture"
            style={{ backgroundImage: `url(${snowboard_placeholder})` }}
          ></div>
          <div className="grid-item table">
            <table>
              <tr>
                <th className="vänsteruppe">Vecka</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th className="högeruppe">10</th>
              </tr>
              <tbody>
                <tr>
                  <td>Tisdag</td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                </tr>
                <tr className="mörk">
                  <td>Onsdag</td>
                  <td>18:00 - 21:30</td>
                  <td>
                    11:00 - 16:00 <br />
                    18:00 - 21:30
                  </td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                  <td>18:00 - 21:30</td>
                </tr>
                <tr>
                  <td>Lördag</td>
                  <td>10:00 - 20:00</td>
                  <td>10:00 - 20:00</td>
                  <td>10:00 - 20:00</td>
                  <td>10:00 - 20:00</td>
                  <td>10:00 - 20:00</td>
                  <td>10:00 - 20:00</td>
                  <td>10:00 - 20:00</td>
                  <td>10:00 - 20:00</td>
                </tr>
                <tr className="mörk">
                  <td className="vänsternere">Onsdag</td>
                  <td>10:00 - 16:00</td>
                  <td>10:00 - 17:00</td>
                  <td>10:00 - 17:00</td>
                  <td>10:00 - 17:00</td>
                  <td>10:00 - 17:00</td>
                  <td>10:00 - 17:00</td>
                  <td>10:00 - 16:30</td>
                  <td className="högernere">10:00 - 17:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="avdelare" id="priser">
          <h2 className="priser-titel">Priser</h2>
        </div>
        <div className="priser">
          <div className="table">
            <table>
              <tr>
                <th className="vänsteruppe"></th>
                <th>Dagskort</th>
                <th>
                  Halvdagskort
                  <p className="undertitel">Från 13:00</p>
                </th>
                <th>
                  Kvällskort
                  <p className="undertitel">Från 13:00</p>
                </th>
                <th>Säsongskort</th>
                <th className="högeruppe">
                  Säsongskort
                  <p className="undertitel">Medlem i friluftsfrämjandet</p>
                </th>
              </tr>
              <tbody>
                <tr>
                  <td>Vuxen</td>
                  <td>240:-</td>
                  <td>200:-</td>
                  <td>180:-</td>
                  <td>2 400:-</td>
                  <td>2 300:-</td>
                </tr>
                <tr className="mörk">
                  <td>Ungdom, Student, Pensionär</td>
                  <td>190:-</td>
                  <td>150:-</td>
                  <td>140:-</td>
                  <td>1 900:-</td>
                  <td>1 800:-</td>
                </tr>
                <tr>
                  <td>Familj</td>
                  <td>740:-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>5 900:-</td>
                  <td>5 700:-</td>
                </tr>

                <tr>
                  <td className="info" colspan="4">
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Illum nemo au djsaiopd djkwoapdw jdopawd jopdawanoj
                      djwoapdjwtem doloremque nisi est sint in accusantium,
                      harum alias fuga
                    </div>
                  </td>
                  <td></td>
                  <td className="kassa info">
                    <a href="kassa.html">Till Kassan</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="picture"
            style={{ backgroundImage: `url(${markus_spiske})` }}
          ></div>
        </div>
        <div className="avdelare" id="uthyrning">
          <h2 className="uthyrning-knapp">Uthyrning</h2>
        </div>
        <div className="uthyrning">
          <div className="produkt-grid">
            <div className="produkt produkt1">
              <img src={skis} alt="skidor" className="produktbild" />
              <button className="overlay" id="add_to_cart">
                LÄGG TILL
                <p>(Fler detaljer i nästa steg)</p>
              </button>
              <div className="produkt-info">
                SKIDOR
                <br />
                Vuxen <br />
                Från 290:-/dag
              </div>
            </div>
            <div className="produkt produkt2">
              <img src={skis} alt="skidor" className="produktbild" />
              <a href="#" className="overlay">
                LÄGG TILL
                <p>(Fler detaljer i nästa steg)</p>
              </a>
              <div className="produkt-info">
                SKIDPAKET
                <br />
                Vuxen <br />
                Från 350:-/dag
              </div>
            </div>
            <div className="produkt produkt3">
              <img src={snowboard} alt="skidor" className="produktbild" />
              <a href="#" className="overlay">
                LÄGG TILL
                <p>(Fler detaljer i nästa steg)</p>
              </a>
              <div className="produkt-info">
                SNOWBOARD
                <br />
                Vuxen <br />
                Från 290:-/dag
              </div>
            </div>
            <div className="produkt produkt4">
              <img src={snowboard} alt="skidor" className="produktbild" />
              <a href="#" className="overlay">
                LÄGG TILL
                <p>(Fler detaljer i nästa steg)</p>
              </a>
              <div className="produkt-info">
                SNOWBOARDPAKET
                <br />
                Vuxen <br />
                Från 350:-/dag
              </div>
            </div>
            <div className="produkt produkt4">
              <img src={skis} alt="skidor" className="produktbild" />
              <a href="#" className="overlay">
                LÄGG TILL
                <p>(Fler detaljer i nästa steg)</p>
              </a>
              <div className="produkt-info">
                SKIDOR
                <br />
                Barn <br />
                Från 180:-/dag
              </div>
            </div>
            <div className="produkt produkt4">
              <img src={skis} alt="skidor" className="produktbild" />
              <a href="#" className="overlay">
                LÄGG TILL
                <p>(Fler detaljer i nästa steg)</p>
              </a>
              <div className="produkt-info">
                SKIDPAKET
                <br />
                Barn <br />
                Från 250:-/dag
              </div>
            </div>
            <div className="produkt produkt4">
              <img src={snowboard} alt="skidor" className="produktbild" />
              <a href="#" className="overlay">
                LÄGG TILL
                <p>(Fler detaljer i nästa steg)</p>
              </a>
              <div className="produkt-info">
                SNOWBOARDPAKET
                <br />
                Barn <br />
                Från 250:-/dag
              </div>
            </div>
            <div className="produkt produkt4">
              <img src={snowboard} alt="skidor" className="produktbild" />
              <a href="#" className="overlay">
                LÄGG TILL
                <p>(Fler detaljer i nästa steg)</p>
              </a>
              <div className="produkt-info">
                SNOWBOARDPAKET
                <br />
                Barn <br />
                Från 250:-/dag
              </div>
            </div>
          </div>
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            porro! Corporis iste quod omnis eos. Laborum assumenda
            necessitatibus nesciunt cum consequatur ullam nihil harum?
            Reiciendis vitae non aliquid odio velit ratione
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            porro! Corporis iste quod omnis eos. Laborum assumenda
            necessitatibus nesciunt cum.
            <a href="kassa.html">
              <div className="uthyrning-till-kassa">Till Kassan</div>
            </a>
          </div>
        </div>
        <div className="avdelare" id="lär-dig">
          <h2 className="lär-dig-knapp">Lär dig åka</h2>
        </div>
        <div className="lär-dig">
          <div className="picture-container">
            <video src={videoBG} controls className="picture"></video>
          </div>

          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              ducimus voluptatum a dolores tempore praesentium, non possimus
              temporibus, aspernatur maxime sint? Repudiandae distinctio
              voluptatibus doloremque saepe animi possimus. Exercitationem natus
              obcaecati iusto sed! Mollitia!
            </p>
            <a
              href="https://docs.google.com/forms/d/1CLQvqvVp3AzX8_Rch7EFCzQXbIK8jp4beSusImLlONc/viewform?edit_requested=true"
              target="_blank"
            >
              <div className="knapp">Till anmälan</div>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              ducimus voluptatum a dolores tempore praesentium, non possimus
              temporibus, aspernatur maxime sint? Repudiandae distinctio
              voluptatibus doloremque saepe animi possimus. Exercitationem natus
              obcaecati iusto sed! Mollitia!
            </p>
            <a
              href="https://docs.google.com/forms/d/1CLQvqvVp3AzX8_Rch7EFCzQXbIK8jp4beSusImLlONc/viewform?edit_requested=true"
              target="_blank"
            >
              <div className="knapp">Till anmälan</div>
            </a>
          </div>
        </div>

        <div className="avdelare" id="pistkarta">
          <h2 className="pistkarta-knapp">Pistkarta</h2>
        </div>

        <div className="pistkarta-remsa">
          <div className="pistkarta-container">
            <div className="slider-inner">
              <img src={pistkarta} className="active" />
            </div>
            <div className="pistinfo2">Klicka på kartan för detaljer.</div>
          </div>
        </div>
        <BackToTopButton />
      </main>
    );
  }
}

export default Home;
