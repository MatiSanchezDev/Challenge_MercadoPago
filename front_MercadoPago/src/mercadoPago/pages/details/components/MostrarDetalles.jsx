import styles from "../styles/Details.module.css";
import { LogoDetalle } from "./LogoDetalle";

export const MostrarDetalles = ({ data, loading, error }) => {
  return (
    <div
      className={loading || error ? styles.div_hidden : styles.div_container}
    >
      <LogoDetalle detalle={data} />
      <p className={styles.p_title}>{data.title}</p>
      <span className={styles.span_desc}>{data.description}</span>
      <span className={styles.span_amount}>$ {data.amount}</span>
    </div>
  );
};
