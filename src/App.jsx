import { useState } from "react";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ReservationPage from "./pages/ReservationPage";
import PaymentPage from "./pages/PaymentPage";
import SchedulePage from "./pages/SchedulePage";
import SignInPage from "./pages/SignInPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-[#0d0d0e] p-0 md:p-6">
      <div className="mx-auto max-w-[1280px] overflow-hidden md:rounded-2xl">
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "service" && <ServicePage setPage={setPage} />}
        {page === "reservation" && <ReservationPage setPage={setPage} />}
        {page === "payment" && <PaymentPage setPage={setPage} />}
        {page === "schedule" && <SchedulePage setPage={setPage} />}
        {page === "signin" && <SignInPage setPage={setPage} />}
        {page === "login" && <LoginPage setPage={setPage} />}
      </div>

      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
        <button onClick={() => setPage("signin")} className="rounded-full bg-white px-4 py-2 text-sm shadow">
          Sign in
        </button>
        <button onClick={() => setPage("login")} className="rounded-full bg-white px-4 py-2 text-sm shadow">
          Log in
        </button>
      </div>
    </div>
  );
}