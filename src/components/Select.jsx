import { ChevronDown } from "lucide-react";

export default function Select({ children, ...props }) {
  return (
    <div className="relative">
      <select
        {...props}
        className="w-full appearance-none rounded-md border border-black/20 bg-[#e5b272] px-4 py-3 text-sm text-black outline-none focus:ring-2 focus:ring-[#f49b1b]"
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black/70" size={18} />
    </div>
  );
}