import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="left m4thewin">Middagsberget 4 the win</div>
        <div className="right">
          <br />
          <form onSubmit={this.handleSubmit} id="form">
            <label for="fråga">Funderar du på något?</label>
            <br />
            <input type="text" id="fråga" />
            <br />
            <label for="email">Din mail:</label>
            <br />
            <input type="email" id="email" name="email" />
            <br />
            <br />
            <input type="submit" value="Skicka" className="knapp" />
          </form>
        </div>
      </div>
    );
  }
}

export default Footer;
