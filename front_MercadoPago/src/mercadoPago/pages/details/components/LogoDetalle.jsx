import styles from "../styles/Icons.module.css";
import logoCash from "../../../../assets/icons/cash-32.svg";
import logoQr from "../../../../assets/icons/qr_code-24.svg";
import logoCreditCard from "../../../../assets/icons/credit_card-32.svg";

export const LogoDetalle = ({ detalle }) => {
  return (
    <>
      {detalle.type === "cash" ? (
        <div className={styles.div_container}>
          <img className={styles.div_img} src={logoCash} alt={detalle.type} />
        </div>
      ) : null}

      {detalle.type === "qr" ? (
        <div className={styles.div_container}>
          <img className={styles.div_img} src={logoQr} alt={detalle.type} />
        </div>
      ) : null}

      {detalle.type === "card" ? (
        <div className={styles.div_container}>
          <img
            className={styles.div_img}
            src={logoCreditCard}
            alt={detalle.type}
          />
        </div>
      ) : null}
    </>
  );
};
