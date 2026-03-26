import { useMemo, useState } from "react";
import PageShell from "../components/PageShell";
import Input from "../components/Input";
import Select from "../components/Select";
import PrimaryButton from "../components/PrimaryButton";
import { services, timeSlots } from "../data/services";

export default function ReservationPage({ setPage }) {
  const [service, setService] = useState("แพ็กเกจพิเศษ VIP");
  const [barber, setBarber] = useState("ช่างตัด");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("เลือกเวลา");

  const selected = useMemo(
    () => services.find((s) => s.title === service) ?? services[7],
    [service]
  );

  return (
    <PageShell title="reservation" page="reservation" setPage={setPage}>
      <div className="mx-auto max-w-[760px] rounded-md bg-[#efbe80] p-8">
        <div className="mb-8 text-center text-black">
          <div className="text-3xl font-medium">จองคิว</div>
          <div className="text-sm text-black/65">กรอกรายละเอียดเพื่อจองคิวใช้บริการของเรา</div>
        </div>

        <div className="space-y-5 text-black">
          <div>
            <label className="mb-2 block text-sm">เลือกบริการ*</label>
            <Select value={service} onChange={(e) => setService(e.target.value)}>
              {services.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm">เลือกช่าง*</label>
            <Select value={barber} onChange={(e) => setBarber(e.target.value)}>
              <option>ช่างตัด</option>
              <option>Mr.J</option>
              <option>Mr.R</option>
              <option>Mr.N</option>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm">เลือกวันที่*</label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
              <label className="mb-2 block text-sm">เลือกเวลา*</label>
              <Select value={slot} onChange={(e) => setSlot(e.target.value)}>
                <option>เลือกเวลา</option>
                {timeSlots.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </Select>
            </div>
          </div>

          <div className="border-t border-black/20 pt-5">
            <div className="mb-4 text-2xl">ข้อมูลผู้จอง</div>
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm">ชื่อ-นามสกุล*</label>
                <Input placeholder="กรอกชื่อของผู้จอง" />
              </div>
              <div>
                <label className="mb-2 block text-sm">เบอร์โทร*</label>
                <Input placeholder="กรอกเบอร์โทร" />
              </div>
              <div>
                <label className="mb-2 block text-sm">อีเมล</label>
                <Input placeholder="กรอกอีเมล" />
              </div>
              <div>
                <label className="mb-2 block text-sm">หมายเหตุเพิ่มเติม</label>
                <Input placeholder="ข้อความ/คำอธิบายเพิ่มเติม" />
              </div>
            </div>
          </div>

          <div className="rounded-md border border-black/30 bg-[#f2cf9c] p-5">
            <div className="mb-4 text-center text-2xl font-medium">สรุปการจอง</div>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex justify-between gap-4">
                <span>บริการ:</span>
                <span>{selected?.title}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>ระยะเวลา:</span>
                <span>{selected?.duration} นาที</span>
              </div>
              <div className="flex justify-between gap-4 border-t border-black/20 pt-3 text-xl font-semibold">
                <span>สรุปราคา:</span>
                <span>{selected?.price}B</span>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center">
            <PrimaryButton onClick={() => setPage("payment")} className="px-10">
              ดำเนินการต่อ - ชำระเงิน
            </PrimaryButton>
          </div>
        </div>
      </div>
    </PageShell>
  );
}