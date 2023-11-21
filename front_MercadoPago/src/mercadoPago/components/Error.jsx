import styles from "../styles/Error.module.css";
export const Error = () => {
  return (
    <div className={styles.div_container}>
      <h2>Error al cargar los datos</h2>
      <p>intente nuevamente vas tarde</p>
    </div>
  );
};
