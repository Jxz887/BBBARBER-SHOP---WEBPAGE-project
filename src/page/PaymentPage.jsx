import { useState } from "react";
import { CreditCard, Landmark, Smartphone, QrCode } from "lucide-react";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";

export default function PaymentPage({ setPage }) {
  const [method, setMethod] = useState("qr");

  const methods = [
    { key: "qr", label: "QR Code พร้อมเพย์", desc: "สแกน QR Code เพื่อชำระเงิน", icon: QrCode },
    { key: "card", label: "บัตรเครดิต/เดบิต", desc: "Visa, Mastercard, CB", icon: CreditCard },
    { key: "banking", label: "Mobile Banking", desc: "โอนผ่านแอปพลิเคชันธนาคาร", icon: Smartphone },
    { key: "bank", label: "โอนผ่านธนาคาร", desc: "โอนผ่านตู้ ATM หรือสาขาธนาคาร", icon: Landmark },
  ];

  return (
    <PageShell title="payment" page="reservation" setPage={setPage}>// ใช้ PageShell เดียวกับ ReservationPage เพราะโครงสร้างคล้ายกัน //
      <div className="mx-auto max-w-[980px] text-white">
        <div className="mb-8 text-center">
          <div className="text-3xl">ชำระเงิน</div>
          <div className="text-sm text-white/70">ยืนยันการจองและชำระเงินเพื่อเสร็จสิ้นขั้นตอนจองคิว</div>// คำอธิบายสั้นๆ เกี่ยวกับขั้นตอนการชำระเงิน //
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
          <Card>
            <div className="grid gap-6 md:grid-cols-[1.25fr_1fr]">// แบ่งเป็นสองคอลัมน์สำหรับรายละเอียดการจองและสรุปยอด //
              <div>
                <div className="mb-3 text-lg font-semibold">รายละเอียดการจอง</div>
                <div className="mb-1 text-sm text-black/70">ตัดผมครบวงจร</div>
                <div className="mb-4 text-3xl font-semibold">250B</div>

                <div className="grid grid-cols-2 gap-3 border-t border-black/20 pt-4 text-sm">
                  <div>
                    <div className="text-black/60">วันที่</div>
                    <div>วันเสาร์ที่ 1 มกราคม 2569</div>
                  </div>
                  <div>
                    <div className="text-black/60">เวลา</div>
                    <div>เวลา 13:00 น.</div>
                  </div>
                </div>

                <div className="mt-4 border-t border-black/20 pt-4 text-sm">
                  <div><b>ช่าง</b> Mr.J</div>
                  <div className="mt-1"><b>ผู้จอง</b></div>
                  <div>Sarum ss</div>
                  <div>เบอร์ 05663xxxx</div>
                  <div>Gmail: xxxxxx1xxx@gmail.com</div>
                </div>
              </div>

              <div>
                <div className="mb-3 text-lg font-semibold">สรุปยอด</div>
                <div className="space-y-2 border-b border-black/20 pb-4 text-sm">
                  <div className="flex justify-between"><span>รายละเอียด:</span><span>250B</span></div>
                  <div className="flex justify-between"><span>ยอดรวมทั้งสิ้น:</span><span>250B</span></div>
                </div>

                <div className="mt-4 rounded-md border border-black/20 bg-white/15 p-4 text-sm">
                  <div className="mb-2 font-medium">ข้อมูลเพิ่มเติม</div>
                  <ul className="space-y-1 text-black/70">
                    <li>• กรุณาชำระเงินก่อนเวลา</li>
                    <li>• การจองจะสมบูรณ์หลังชำระภายใน 20 นาที</li>
                    <li>• มาถึงก่อนเวลา 10 นาที</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="mb-4 text-lg font-semibold">เลือกช่องทางการชำระเงิน</div>
            <div className="space-y-3">
              {methods.map((m) => {
                const Icon = m.icon;
                const active = method === m.key;

                return (
                  <button
                    key={m.key}
                    onClick={() => setMethod(m.key)}
                    className={`flex w-full items-center gap-3 rounded-md border p-4 text-left transition ${active ? "border-black/40 bg-[#d1a063]" : "border-black/20 bg-[#c89a61]"
                      }`}
                  >
                    <div className={`h-4 w-4 rounded-full border border-black/40 ${active ? "bg-white" : "bg-transparent"}`} />
                    <Icon size={18} />
                    <div>
                      <div className="font-medium">{m.label}</div>
                      <div className="text-xs text-black/70">{m.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <PrimaryButton>ชำระเงิน</PrimaryButton>
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}