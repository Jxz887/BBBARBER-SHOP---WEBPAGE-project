import { Menu } from "lucide-react";
import Logo from "./Logo";
import { heroImg } from "../assets/images";

export default function Navbar({ page, setPage, title }) {
  const nav = [
    { key: "home", label: "Home" },
    { key: "service", label: "Service" },
    { key: "reservation", label: "Reservation" },
    { key: "schedule", label: "ตารางจอง" },
    { key: "login", label: "Log In / Sign In" },
  ];

  return (
    <div className="relative h-[120px] overflow-hidden border-b border-white/10 md:h-[150px]">
      <img src={heroImg} alt="barber" className="h-full w-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute left-4 top-4">
        <Logo />
      </div>

      <div className="absolute right-4 top-4 md:hidden">
        <button className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm text-black">
          Menu <Menu size={16} />
        </button>
      </div>

      <div className="absolute right-4 top-6 hidden items-center gap-6 text-sm md:flex">
        {nav.map((item) => (
          <button
            key={item.key}
            onClick={() => setPage(item.key)}
            className={`${page === item.key ? "text-white" : "text-white/80 hover:text-white"}`}
          >
            {item.label}
          </button>
        ))}
        <button className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs text-black">
          Menu <Menu size={14} />
        </button>
      </div>

      {title && (
        <div className="absolute left-4 top-2 text-sm capitalize text-white/60 md:hidden">
          {title}
        </div>
      )}
    </div>
  );
}