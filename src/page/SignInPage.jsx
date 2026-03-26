import PageShell from "../components/PageShell";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

export default function SignInPage({ setPage }) {
  return (
    <PageShell title="sign in" page="login" setPage={setPage}>// ใช้ PageShell เดียวกับ LoginPage เพราะโครงสร้างคล้ายกัน //
      <div className="mx-auto flex max-w-[640px] justify-center py-10 md:py-16">
        <div className="w-full max-w-[420px] text-center">
          <div className="mb-5 text-5xl">Sign in</div>
          <div className="space-y-4">
            <Input placeholder="เบอร์โทร / อีเมล *" />
            <Input placeholder="ชื่อ *" />
            <PrimaryButton className="w-full py-3 text-4xl leading-none">ถัดไป</PrimaryButton>
          </div>
        </div>
      </div>
    </PageShell>// หน้า Sign In แบบง่ายๆ มีแค่ช่องกรอกเบอร์โทร/อีเมล ชื่อ และปุ่มถัดไป //
  );
}




