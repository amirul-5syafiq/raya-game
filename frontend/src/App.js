import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/homepage";
import MyRewards from "./pages/rewards";
import HowTo from "./pages/howto";
import Prizes from "./pages/prizes";

import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/myrewards" element={<MyRewards />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/prizes" element={<Prizes />} />
      </Routes>
    </Layout>
  );
}

export default App;
