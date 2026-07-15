import {
  Users,
  ClipboardList,
  Mail,
  Smile,
} from "lucide-react";

import StatsCard from "./StatsCard";

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatsCard
        title="Total HCPs"
        value="25"
        icon={<Users size={28} />}
        color="bg-blue-600"
      />

      <StatsCard
        title="Interactions"
        value="78"
        icon={<ClipboardList size={28} />}
        color="bg-green-600"
      />

      <StatsCard
        title="Follow Ups"
        value="18"
        icon={<Mail size={28} />}
        color="bg-purple-600"
      />

      <StatsCard
        title="Positive Rate"
        value="89%"
        icon={<Smile size={28} />}
        color="bg-orange-500"
      />

    </div>
  );
}

export default DashboardCards;