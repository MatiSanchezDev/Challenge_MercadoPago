import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { MostrarDetalles } from "./components/MostrarDetalles";
import { Error } from "../../components/Error";
import { useApiHook } from "../../../hooks/useApiHook";

export const DetailsPage = () => {
  const { id } = useParams();
  const apiFlO = `https://testapi-dev-afxk.4.us-1.fl0.io/consulta/detalle/${id}`;
  const { loading, data, error } = useApiHook(apiFlO);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {data && <MostrarDetalles data={data} loading={loading} error={error} />}
    </>
  );
};
