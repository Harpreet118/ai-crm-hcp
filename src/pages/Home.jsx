import Layout from "../components/layout/Layout";
import DashboardCards from "../components/dashboard/DashboardCard";
import InteractionForm from "../components/form/InteractionForm";
import ChatPanel from "../components/chat/ChatPanel";

function Home() {
  return (
    <Layout>
      <DashboardCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <InteractionForm />
        <ChatPanel />
      </div>
    </Layout>
  );
}

export default Home;