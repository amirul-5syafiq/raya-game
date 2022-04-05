import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/homepage";
import MyRewards from "./pages/rewards";
import HowTo from "./pages/howto";
import Prizes from "./pages/prizes";
import PlayScreen from "./pages/playscreen";

import Layout from "./components/layout/Layout";
function App() {
  return (
    // <Layout>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/myrewards" element={<MyRewards />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/playscreen" element={<PlayScreen />} />
      </Routes>
      // </Layout>

  );
}

export default App;
