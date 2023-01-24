import "./Footer.scss";

function Footer({ user }) {
  return !user ? (
    <div className="footer"></div>
  ) : (
    <div className="footer">
      <h1>Footer</h1>
    </div>
  );
}

export default Footer;
