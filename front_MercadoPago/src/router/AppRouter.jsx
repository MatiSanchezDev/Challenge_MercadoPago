import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../mercadoPago/pages";
import { DetailsPage } from "../mercadoPago/pages";
import { Navbar } from "../mercadoPago/components/";

export const AppRouter = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/list" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailsPage />} />

        <Route path="/*" element={<Navigate to="/list" />} />
      </Routes>
    </main>
  );
};
