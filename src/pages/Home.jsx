import Navbar from "../components/layout/Navbar.jsx";
import InteractionForm from "../components/form/InteractionForm.jsx";
import ChatPanel from "../components/chat/ChatPanel.jsx";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <InteractionForm />
        <ChatPanel />
      </div>
    </div>
  );
}

export default Home;