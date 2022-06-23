import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import "./style.css";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />

      {/*Не знал к какой странице отнести portfolio, поэтому пусть пока статично будет на всех*/}

      <section className="portfolio">
        <div className="container portfolio__container">
          <h2 className="portfolio__title">Portfolio</h2>
          <p className="portfolio__description">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
      </section>

      <Outlet />
    </>
  );
};
