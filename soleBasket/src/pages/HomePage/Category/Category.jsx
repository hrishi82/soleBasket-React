
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="header-gender-container">
      <div className="header-gender-wrapper-box">
        <Link to="/" className="link-no-decor gender-text">Men</Link>
      </div>
      <div className="header-gender-wrapper-box">
        <Link to="/"  className="link-no-decor gender-text">Women</Link>
      </div>
      <div className="header-gender-wrapper-box">
        <Link to="/"  className="link-no-decor gender-text">Girls</Link>
      </div>
      <div className="header-gender-wrapper-box">
        <Link to="/"  className="link-no-decor gender-text">Boys</Link>
      </div>
    </section>
  );
};

export { Category }
