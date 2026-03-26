export default function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`rounded-md bg-[#f49b1b] px-6 py-2 font-semibold text-[#1d1208] shadow transition hover:brightness-95 ${className}`}
    >
      {children}
    </button>
  );
}