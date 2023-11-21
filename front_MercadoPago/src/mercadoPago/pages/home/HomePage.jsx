import { useHome } from "../../../hooks/useHome";
import { ListaFiltrados, ListaOperaciones } from "./components/";
import { SaldoActual } from "./components/SaldoActual";
import { Loader, Error } from "../../components";
import { useApiHook } from "../../../hooks/useApiHook";

const apiFl0 = "https://testapi-dev-afxk.4.us-1.fl0.io/consulta";
//const apiLocalHost = "http://localhost:1234/consulta";

export const HomePage = () => {
  const { cobroFiltrado, setCobroFiltrado, mostrarCobros, setMostrarCobros } =
    useHome();
  const { data, loading, error } = useApiHook(apiFl0);

  return (
    <section>
      <div>
      {loading && <Loader />}
      </div>

      {loading !== true && (
        <SaldoActual
          data={data}
          cobroFiltrado={cobroFiltrado}
          setCobroFiltrado={setCobroFiltrado}
          setMostrarCobros={setMostrarCobros}
          mostrarCobros={mostrarCobros}
        />
      )}

      {error && <Error />}

      {mostrarCobros === false && <ListaOperaciones data={data} />}

      {mostrarCobros && <ListaFiltrados cobroFiltrado={cobroFiltrado} />}
    </section>
  );
};
