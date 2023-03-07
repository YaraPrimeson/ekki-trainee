import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import Accessories from "./pages/Accessories";
import Toys from "./pages/Toys";
import Dogbed from "./pages/Dogbed";
import Carryingbags from "./pages/Carryingbags";
import Clothes from "./pages/Clothes";
import Delivery from "./pages/Delivery";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="toys" element={<Toys />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="carryingbags" element={<Carryingbags />} />
        <Route path="dogbed" element={<Dogbed />} />
        <Route path="delivery" element={<Delivery />}/>
        </Route>
      </Routes>
  );
};
export default AppRouter;
