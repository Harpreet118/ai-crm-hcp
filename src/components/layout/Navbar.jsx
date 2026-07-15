import { Bot, Bell, Search, UserCircle2 } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-slate-600 hover:text-blue-600 transition";

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Bot className="text-white" size={22} />
          </div>

          <div>
            <h1 className="font-bold text-lg">AI CRM HCP</h1>
            <p className="text-xs text-slate-500">
              Healthcare Assistant
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink
  to="/add-hcp"
  className={linkClass}
>
  Add HCP
</NavLink>
          <NavLink to="/hcps" className={linkClass}>
            HCPs
          </NavLink>

          <NavLink to="/history" className={linkClass}>
            History
          </NavLink>

          <NavLink to="/followup" className={linkClass}>
            Follow Ups
          </NavLink>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 border rounded-lg px-3 py-2">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-sm"
            />
          </div>

          <Bell className="cursor-pointer text-slate-600" />

          <UserCircle2
            size={34}
            className="text-blue-600 cursor-pointer"
          />
        </div>

      </div>
    </header>
  );
}

export default Navbar;