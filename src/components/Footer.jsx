import Logo from "./Logo";

export default function Footer() {
  const footerCols = [
    { title: "สำหรับผู้ใช้", items: ["asdxzcz", "zxczxc", "asdsaaa"] },
    { title: "เกี่ยวกับร้าน", items: ["qweqweqw", "qweqweqe", "cvbvcbnfg"] },
    { title: "ร่วมงานกับเรา", items: ["qweqweqw", "qweqweqe", "cvbvcbnfg"] },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#2c251c] px-4 py-8 md:px-8">
      <div className="grid gap-8 md:grid-cols-[140px_repeat(6,minmax(0,1fr))]">
        <div>
          <Logo />
        </div>

        {[...footerCols, ...footerCols].map((col, idx) => (
          <div key={idx}>
            <div className="mb-3 text-sm text-white/80">{col.title}</div>
            <div className="space-y-1 text-sm text-white/60">
              {col.items.map((item) => (
                <div key={item + idx}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-white/30 pt-4 text-center text-sm text-white/65">
        © 2026 Duke Barber. All rights reserved.
      </div>
    </footer>
  );
}