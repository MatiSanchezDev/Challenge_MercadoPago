import { useState } from "react";
export const useHome = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [cobroFiltrado, setCobroFiltrado] = useState([]);
  const [mostrarCobros, setMostrarCobros] = useState(false);
  const [error, setError] = useState(null);

  return {
    loading,
    setLoading,
    data,
    setData,
    cobroFiltrado,
    setCobroFiltrado,
    mostrarCobros,
    setMostrarCobros,
    error,
    setError,
  };
};
