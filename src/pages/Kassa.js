import React from "react";
import Config from "../Config.json";
import { Helmet } from "react-helmet";
import { NavLink, Link } from "react-router-dom";

const TITLE = "Kassa | " + Config.SITE_TITLE;
const CANONICAL = Config.SITE_DOMAIN + "/";

class Kassa extends React.Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>{TITLE}</title>
          <link rel="canonical" href={CANONICAL} />
        </Helmet>
        <div className="avdelare avdelare-kassa">
          <h2 className="kassa-knapp" id="kassa-knapp">
            kassa
          </h2>
        </div>
        <div className="kassa-table">
          <table>
            <tr>
              <th className="vänsteruppe">Produkt</th>
              <th>Kostnad</th>
              <th>Antal</th>
              <th className="högeruppe">Totalt</th>
            </tr>
            <tbody>
              <tr>
                <td>Skidor, vuxen</td>
                <td>290:-</td>
                <td>1</td>
                <td>290:-</td>
              </tr>
              <tr className="mörk">
                <td className="vänsternere">Dagskort, vuxen</td>
                <td>240:-</td>
                <td>2</td>
                <td className="högernere">480:-</td>
              </tr>
              <tr>
                <td className="info" colspan="4">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum nemo au.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="kassa-form">
          <h3>Kontaktinformation</h3>
          <form action="/kassa.html">
            <label for="text">Din mail:</label>
            <br />
            <input type="text" id="email_kassa" name="email_kassa" />
            <br />
            <label for="förnamn">Förnamn:</label>
            <br />
            <input type="text" id="förnamn" name="förnamn" />
            <br />
            <label for="efternamn">Efternamn:</label>
            <br />
            <input type="text" id="efternamn" name="efternamn" />
            <br />
            <label for="adress">Adress:</label>
            <br />
            <input type="text" id="adress" name="adress" />
            <br />
            <input type="submit" value="Köp nu" className="knapp" />
          </form>
        </div>
      </main>
    );
  }
}

export default Kassa;
