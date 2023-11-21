import { useState } from "react";
import { Filtro } from "./Filtro";
import styles from "../styles/Saldo.module.css";
import openEye from "../../../../assets/icons/eyeOpen.svg";
import closeEye from "../../../../assets/icons/eyeClose.svg";

export const SaldoActual = ({
  data,
  cobroFiltrado,
  setCobroFiltrado,
  setMostrarCobros,
  mostrarCobros,
}) => {
  const [openCloseEye, setOpenCloseEye] = useState(true);

  const sumaTotal = cobroFiltrado.reduce(
    (total, cobroFiltrado) => total + parseInt(cobroFiltrado.amount),
    0
  );

  return (
    <div className={styles.div_container}>
      <div className={styles.div_saldo_container}>
        {openCloseEye && (
          <span className={styles.span_amount}>
            ${" "}
            {mostrarCobros
              ? sumaTotal.toLocaleString("es-ES", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "9.999,99"}
          </span>
        )}

        {openCloseEye && (
          <span onClick={() => setOpenCloseEye(!openCloseEye)}>
            <img className={styles.img_eye} src={openEye} alt="open" />
          </span>
        )}

        {openCloseEye !== true && (
          <span className={styles.span_amount}>$ ***</span>
        )}

        {openCloseEye !== true && (
          <span onClick={() => setOpenCloseEye(!openCloseEye)}>
            <img className={styles.img_eye} src={closeEye} alt="Close" />
          </span>
        )}
      </div>

      <div>
        <Filtro
          data={data}
          cobroFiltrado={cobroFiltrado}
          setCobroFiltrado={setCobroFiltrado}
          setMostrarCobros={setMostrarCobros}
        />
      </div>
    </div>
  );
};
