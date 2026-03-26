import PageShell from "../components/PageShell";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

export default function LoginPage({ setPage }) {
  return (
    <PageShell title="log in" page="login" setPage={setPage}>
      <div className="mx-auto flex max-w-[640px] justify-center py-6 md:py-10">
        <div className="w-full max-w-[430px] text-center">
          <div className="mb-5 text-5xl">Log In</div>

          <div className="space-y-4">
            <Input placeholder="เบอร์โทร / อีเมล *" />
            <Input type="password" placeholder="รหัสผ่าน" />
            <PrimaryButton className="w-full py-3 text-4xl leading-none">ถัดไป</PrimaryButton>
          </div>

          <div className="mt-3 text-right text-sm underline underline-offset-2">สมัครสมาชิก</div>

          <div className="my-4 flex items-center gap-3 text-xs text-white/70">
            <div className="h-px flex-1 bg-white/40" />
            <span>หรือ</span>
            <div className="h-px flex-1 bg-white/40" />
          </div>

          <div className="space-y-3">
            {[
              ["Facebook", "📘"],
              ["Line", "💬"],
              ["Google", "🟡"],
            ].map(([label, icon]) => (
              <button
                key={label}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#efbe80] px-4 py-3 text-black"
              >
                <span>{icon}</span>
                <span>เข้าสู่ระบบด้วย {label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}