import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Pranathi Yaidyapu. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;