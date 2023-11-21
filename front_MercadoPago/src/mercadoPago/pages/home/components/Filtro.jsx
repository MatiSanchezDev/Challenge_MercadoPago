import { useState } from "react";
import styles from "../styles/Filtro.module.css";
import chevronDown from "../../../../assets/icons/chevron_down.svg";

const initialState = {
  qr: false,
  card: false,
  cash: false,
};

export const Filtro = ({
  data,
  cobroFiltrado,
  setCobroFiltrado,
  setMostrarCobros,
}) => {
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [filtrosSeleccionados, setFiltrosSeleccionados] =
    useState(initialState);
  const [counter, setCounter] = useState(0);

  const toggleMostrarFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  };

  const onHandleCheckBox = (e) => {
    setFiltrosSeleccionados({
      ...filtrosSeleccionados,
      [e.target.value]: e.target.checked,
    });

    if (e.target.checked) {
      const filtro = data.filter((cobro) => cobro.type === e.target.value);
      setCobroFiltrado([...cobroFiltrado, ...filtro]);
      setCounter(counter + 1);
      setMostrarCobros(false);
    } else {
      const filtro = cobroFiltrado.filter(
        (cobro) => cobro.type !== e.target.value
      );
      setCobroFiltrado([...filtro]);
      setMostrarCobros(false);
      setCounter(counter - 1);
    }
  };

  const aplicarFiltros = () => {
    if (
      filtrosSeleccionados.qr === false &&
      filtrosSeleccionados.cash === false &&
      filtrosSeleccionados.card === false
    ) {
      return setMostrarFiltros(false);
    }
    setMostrarCobros(true);
    setMostrarFiltros(false);
  };

  const desmarcarTodos = () => {
    setFiltrosSeleccionados(initialState);
    setCobroFiltrado([]);
    setMostrarCobros(false);
    setCounter(0);
  };

  return (
    <div className={styles.div_container}>
      <button
        className={styles.button_mostrarFiltros}
        onClick={toggleMostrarFiltros}
      >
        Filtros {counter > 0 && <span>({counter})</span>}{" "}
        <img
          className={styles.chevronDown}
          src={chevronDown}
          alt="Desplegar Filtros"
        />
      </button>

      {mostrarFiltros && (
        <div className={styles.div_filters_container}>
          <div className={styles.div_input_label}>
            <input
              type="checkbox"
              value="qr"
              id="qr"
              checked={filtrosSeleccionados.qr}
              name="qr"
              onChange={onHandleCheckBox}
              className={styles.input_checkbox}
            />
            <label htmlFor="qr" className={styles.filter_label}>
              Cobro con QR
            </label>
          </div>
          <div className={styles.div_input_label}>
            <input
              type="checkbox"
              value="card"
              id="card"
              name="card"
              onChange={onHandleCheckBox}
              checked={filtrosSeleccionados.card}
              className={styles.input_checkbox}
            />
            <label htmlFor="card" className={styles.filter_label}>
              Cobro con tarjeta
            </label>
          </div>
          <div className={styles.div_input_label}>
            <input
              type="checkbox"
              value="cash"
              id="cash"
              name="cash"
              onChange={onHandleCheckBox}
              checked={filtrosSeleccionados.cash}
              className={styles.input_checkbox}
            />
            <label htmlFor="cash" className={styles.filter_label}>
              Cobro con efectivo
            </label>
          </div>

          <div className={styles.div_buttons}>
            <button
              className={styles.button_aplicarFiltros}
              onClick={aplicarFiltros}
            >
              Aplicar
            </button>
            <button className={styles.button_limpiar} onClick={desmarcarTodos}>
              Limpiar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
