export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-md border p-4 shadow-lg ${className}`}
      style={{
        backgroundColor: "#efbe80",
        borderColor: "rgba(239,190,128,0.25)",
        color: "#1a1208",
      }}
    >
      {children}
    </div>
  );
}