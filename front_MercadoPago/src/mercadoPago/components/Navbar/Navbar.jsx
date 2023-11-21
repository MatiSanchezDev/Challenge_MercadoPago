import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logoMP from "../../../assets/icons/mp_logo.svg";
import arrowLeft from "../../../assets/icons/MdiArrowLeft.svg";

export const Navbar = () => {
  const location = useLocation();
  const mostrarFlecha = location.pathname !== "/list";

  return (
    <nav className={styles.nav}>
      {mostrarFlecha && (
        <Link
          className={styles.nav_link_arrow}
          to={"#"}
          onClick={() => window.history.back()}
        >
          <img className={styles.nav_arrow_left} src={arrowLeft} alt="Atrás" />
        </Link>
      )}
      <Link className={styles.nav_img} to={"/list"}>
        <img className={styles.nav_img} src={logoMP} alt="Mercado Pago" />
      </Link>
    </nav>
  );
};
