import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HCPList from "./pages/HCPList";
import InteractionHistory from "./pages/InteractionHistory";
import FollowUp from "./pages/FollowUp";
import AddHCP from "./pages/AddHCP";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hcps" element={<HCPList />} />
      <Route path="/history" element={<InteractionHistory />} />
      <Route path="/followup" element={<FollowUp />} />
<Route path="/add-hcp" element={<AddHCP />} />
    </Routes>
  );
}

export default App;