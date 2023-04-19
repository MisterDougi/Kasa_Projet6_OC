import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <img src={logo} alt="logoKasaFooter" />
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
