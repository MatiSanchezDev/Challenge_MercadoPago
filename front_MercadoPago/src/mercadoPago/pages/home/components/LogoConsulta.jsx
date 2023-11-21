import styles from "../styles/Icons.module.css";
import logoCash from "../../../../assets/thumbnails/cash-16.svg";
import logoQr from "../../../../assets/thumbnails/qr_code-16.svg";
import logoCreditCard from "../../../../assets/thumbnails/credit_card-16.svg";

export const LogoConsulta = ({ consulta }) => {
  return (
    <>
      {consulta.type === "cash" ? (
        <div className={styles.div_container}>
          <img className={styles.div_img} src={logoCash} alt={consulta.type} />
        </div>
      ) : null}

      {consulta.type === "qr" ? (
        <div className={styles.div_container}>
          <img className={styles.div_img} src={logoQr} alt={consulta.type} />
        </div>
      ) : null}

      {consulta.type === "card" ? (
        <div className={styles.div_container}>
          <img
            className={styles.div_img}
            src={logoCreditCard}
            alt={consulta.type}
          />
        </div>
      ) : null}
    </>
  );
};
