import PageShell from "../components/PageShell";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import { team1, team2, team3, cut1, cut2, cut3, heroImg } from "../assets/images";

export default function HomePage({ setPage }) {
  return (
    <PageShell title="Home page" page="home" setPage={setPage}>
      <section className="relative overflow-hidden rounded-md">
        <img src={heroImg} alt="hero" className="h-[300px] w-full object-cover md:h-[380px]" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 grid items-center px-8 md:grid-cols-2">
          <div className="max-w-md text-white">
            <div className="mb-3 text-3xl font-medium">ร้านตัดผมชายมืออาชีพ</div>
            <p className="mb-5 text-sm text-white/85">
              สบาย สะอาด บริการคุณภาพมากกว่า 30 ปี
              <br />
              เปิดทุกวัน 09:00 AM - 18:00 PM, Closed every 21st
            </p>
            <div className="flex gap-3">
              <PrimaryButton onClick={() => setPage("reservation")}>จองเลย</PrimaryButton>
              <button className="rounded-md bg-white/90 px-5 py-2 text-sm text-black">ดูรีวิว</button>
            </div>
          </div>

          <div className="hidden items-center justify-center md:flex">
            <div className="text-center text-[#d9b06a]"> // Logo แบบมีตัวหนังสือประกอบ //
              <div className="text-7xl font-serif italic">Duke</div>
              <div className="-mt-2 text-6xl font-serif italic">barber</div>
              <div className="mt-2 text-sm tracking-[0.25em]">SINCE 1920</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 rounded-md bg-[#efbe80] p-6 md:grid-cols-[1.1fr_2fr]">
        <div className="text-black">
          <h2 className="mb-3 text-2xl font-semibold">รู้จักกับของเรา</h2>
          <p className="max-w-[260px] text-sm leading-5 text-black/80">
            Duke Barber คือร้านตัดผมสไตล์คลาสสิกที่ผสมความทันสมัย เน้นความสะอาด งานละเอียด และประสบการณ์ที่เป็นกันเอง
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { img: team1, name: "Mr.J" },
            { img: team2, name: "Mr.R" },
            { img: team3, name: "Mr.N" },
          ].map((m) => (
            <div key={m.name} className="overflow-hidden rounded-md border border-black/20 bg-white/40">
              <img src={m.img} alt={m.name} className="h-44 w-full object-cover" />
              <div className="p-2 text-center text-sm text-black">{m.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-6 text-center text-3xl">ทำไมต้องเลือกเรา</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["ช่างมืออาชีพ", "7ปี+", "ประสบการณ์"],
            ["ลูกค้า", "10,000+", "คน"],
            ["คุณภาพ", "สูง", "ผลิตภัณฑ์เข้าถึงไว"],
          ].map((s) => (
            <Card key={s[0]} className="text-center">
              <div className="text-2xl font-medium">{s[0]}</div>
              <div className="mt-3 text-5xl font-semibold">{s[1]}</div>
              <div className="mt-2">{s[2]}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-md bg-[#403427]/70 p-6">
        <div className="mb-6 text-center">
          <div className="text-3xl">บริการของเรา</div>
          <div className="text-sm text-white/75">เลือกบริการที่ใช่สำหรับคุณ</div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            [cut1, "ตัด"],
            [cut2, "ดูแลผม"],
            [cut3, "โกนหนวด/แต่งเครา"],
          ].map(([img, title]) => (
            <div key={title} className="overflow-hidden rounded-md">
              <img src={img} alt={title} className="h-48 w-full rounded-md object-cover" />
              <div className="pt-2 text-center">{title}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setPage("service")}
            className="rounded-md bg-[#efbe80] px-5 py-2 text-sm text-black"
          >
            ดูบริการทั้งหมด
          </button>
        </div>
      </section>

      <section className="mt-8 border-y border-white/10 py-8 text-center">
        <div className="mb-4 text-4xl">พร้อมเปลี่ยนลุคไปกับเรา</div>
        <PrimaryButton onClick={() => setPage("reservation")}>จองเลย</PrimaryButton>
      </section>
    </PageShell>
  );
}