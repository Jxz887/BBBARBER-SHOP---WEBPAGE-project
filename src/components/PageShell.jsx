import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({ title, page, setPage, children }) {
  return (
    <div className="min-h-screen w-full bg-[#0f0f10] text-white">
      <div className="mx-auto max-w-[1200px] bg-[#1c1814] shadow-2xl">
        <Navbar page={page} setPage={setPage} title={title} />

        <div className="min-h-[calc(100vh-270px)] bg-gradient-to-r from-[#25211c] via-[#1f1b17] to-[#2a241d] px-4 py-6 md:px-8 md:py-8">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
}