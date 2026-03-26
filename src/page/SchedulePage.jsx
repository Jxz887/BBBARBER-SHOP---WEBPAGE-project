import { useState } from "react";
import { Calendar, CircleUserRound } from "lucide-react";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Input from "../components/Input";
import { timeSlots } from "../data/services";

export default function SchedulePage({ setPage }) {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <PageShell title="Barber" page="schedule" setPage={setPage}>
      <div className="mx-auto max-w-[980px]">
        <div className="mb-8">
          <div className="text-3xl">ตารางจองช่าง</div>
          <div className="text-sm text-white/70">ตรวจสอบตารางเวลาการทำงานและวันจองคิวสำหรับคิวของช่าง</div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="flex items-center gap-4">
            <Calendar size={34} />
            <div>
              <div className="text-3xl font-semibold">5</div>
              <div className="text-sm text-black/65">จำนวนคิว</div>
            </div>
          </Card>

          <Card className="flex items-center gap-4">
            <CircleUserRound size={34} />
            <div>
              <div className="text-3xl font-semibold">3</div>
              <div className="text-sm text-black/65">ช่าง</div>
            </div>
          </Card>
        </div>

        <div className="mt-6">
          <Input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        </div>

        <div className="mt-6 overflow-hidden rounded-md border border-black/20 bg-[#d9ac70] text-black">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#d1a063]">
                <th className="border border-black/20 px-3 py-3 text-left">วันที่</th>
                <th className="border border-black/20 px-3 py-3 text-left">ช่าง</th>
                <th className="border border-black/20 px-3 py-3 text-left">ช่าง</th>
                <th className="border border-black/20 px-3 py-3 text-left">ช่าง</th>
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((t, idx) => (
                <tr key={t} className="odd:bg-[#ddb177] even:bg-[#d6a56a]">
                  <td className="border border-black/20 px-3 py-3">{t}</td>
                  <td className="border border-black/20 px-3 py-3">ว่าง</td>
                  <td className="border border-black/20 px-3 py-3">
                    {idx === 0 ? (
                      <div className="leading-4">
                        <div>ตัดผมชายทั่วไป</div>
                        <div>User name</div>
                        <div>วันเกิด</div>
                      </div>
                    ) : (
                      "ว่าง"
                    )}
                  </td>
                  <td className="border border-black/20 px-3 py-3">ว่าง</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Card className="mt-6">
          <div className="mb-2 font-medium">ข้อมูลเพิ่มเติม</div>
          <ul className="space-y-1 text-sm text-black/70">
            <li>• ตารางอาจมีการเปลี่ยนแปลงได้</li>
            <li>• กรุณาจองล่วงหน้าอย่างน้อย 2 ชั่วโมง</li>
            <li>• สามารถจองล่วงหน้าได้สูงสุด 30 วัน</li>
          </ul>
        </Card>
      </div>
    </PageShell>
  );
}