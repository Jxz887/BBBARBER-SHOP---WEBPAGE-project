import { Clock3 } from "lucide-react";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import { services } from "../data/services";

export default function ServicePage({ setPage }) {
  return (
    <PageShell title="service" page="service" setPage={setPage}>
      <div className="mb-8 text-center">
        <div className="text-3xl">บริการของเรา</div>
        <div className="text-sm text-white/75">เลือกบริการที่เหมาะสมกับคุณ ที่นี่ได้เลย</div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((s) => (
          <Card
            key={s.title}
            className={`relative flex min-h-[310px] flex-col justify-between ${
              s.featured ? "ring-4 ring-[#f49b1b]" : ""
            }`}
          >
            <div>
              <div className="mx-auto mb-3 w-fit rounded-sm bg-[#f49b1b] px-8 py-1 text-center text-sm font-bold text-black">
                {s.name || "จองด่วน"}
              </div>
              <h3 className="text-2xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-black/70">{s.subtitle}</p>

              <div className="mt-4 flex items-center justify-between text-3xl font-semibold">
                <span>{s.price}B</span>
                <span className="flex items-center gap-1 text-base font-normal">
                  <Clock3 size={15} /> {s.duration}นาที
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-black/75">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4 text-center">
              <PrimaryButton onClick={() => setPage("reservation")} className="px-10 py-1.5 text-sm">
                จองเลย
              </PrimaryButton>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}