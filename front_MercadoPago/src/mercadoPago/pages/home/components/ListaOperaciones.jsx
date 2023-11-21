import { Link } from "react-router-dom";
import styles from "../styles/Consultas.module.css";
import { LogoConsulta } from "./LogoConsulta";
import chavronRight from "../../../../assets/icons/chevron_right.svg";

export const ListaOperaciones = ({ data }) => {
  return (
    <>
      {data?.map((consulta) => (
        <Link
          to={`/detail/${consulta.id}`}
          className={styles.div_container}
          key={consulta.id}
        >
          <div className={styles.container_logo}>
            <LogoConsulta consulta={consulta} />
          </div>
          <div className={styles.container_title_desc}>
            <p className={styles.p_tittle}>{consulta.title}</p>
            <span className={styles.span_desc}>{consulta.description}</span>
          </div>
          <div className={styles.container_amount}>
            <span className={styles.span_amount}>${consulta.amount}</span>
            <img className={styles.chevronRight} src={chavronRight} alt="ir" />
          </div>
        </Link>
      ))}
    </>
  );
};
