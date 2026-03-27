import { useMemo, useState } from "react";

const services = [
  { name: "ตัดผมชายทั่วไป", price: 200, time: "30 นาที", desc: "ทรงสุภาพ เนี้ยบ ดูดีทุกวัน" },
  { name: "ตัดผมสไตล์", price: 250, time: "45 นาที", desc: "เก็บดีเทลมากขึ้น เหมาะกับสายแฟชั่น" },
  { name: "ตัดผม + โกนหนวด", price: 300, time: "50 นาที", desc: "ครบจบในครั้งเดียว" },
  { name: "แพ็กเกจ VIP", price: 1200, time: "150 นาที", desc: "ตัด สระ เซต โกน และดูแลแบบพิเศษ" },
];

const slots = [
  "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedService, setSelectedService] = useState(services[0].name);
  const [selectedBarber, setSelectedBarber] = useState("ช่าง J");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const currentService = useMemo(
    () => services.find((s) => s.name === selectedService) || services[0],
    [selectedService]
  );

  const navItems = [
    ["home", "Home"],
    ["service", "Service"],
    ["reservation", "Reservation"],
    ["payment", "Payment"],
    ["schedule", "Schedule"],
    ["login", "Login"],
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-inner">
          <div className="logo" onClick={() => setPage("home")}>
            <span className="logo-top">Duke</span>
            <span className="logo-bottom">Barber</span>
          </div>

          <nav className="nav-menu">
            {navItems.map(([key, label]) => (
              <button
                key={key}
                className={`nav-link ${page === key ? "active" : ""}`}
                onClick={() => setPage(key)}
              >
                {label}
              </button>
            ))}
          </nav>

          <button className="btn btn-primary" onClick={() => setPage("reservation")}>
            จองเลย
          </button>
        </div>
      </header>

      {page === "home" && (
        <>
          <section className="hero">
            <div className="hero-overlay" />
            <div className="container hero-content">
              <div className="hero-left">
                <div className="pill">Premium Barber Experience</div>
                <h1>Duke Barber</h1>
                <p>
                  Duke Barber
                </p>
                <div className="hero-actions">
                  <button className="btn btn-primary" onClick={() => setPage("reservation")}>
                    จองคิวตอนนี้
                  </button>
                  <button className="btn btn-secondary" onClick={() => setPage("service")}>
                    ดูบริการ
                  </button>
                </div>
              </div>

              <div className="hero-right">
                <div className="stat-card">
                  <h3>8+</h3>
                  <p>บริการหลัก</p>
                </div>
                <div className="stat-card">
                  <h3>3</h3>
                  <p>ช่างประจำร้าน</p>
                </div>
                <div className="stat-card">
                  <h3>09:00 - 18:00</h3>
                  <p>เวลาเปิดร้าน</p>
                </div>
                <div className="stat-card">
                  <h3>เลือกระบบจ่ายเงินได้ด้วยตัวเอง</h3>
                  <p>QR code / Mobile  banking / บัตรเครดิต</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-head">
                <div className="pill">Popular Services</div>
                <h2>บริการยอดนิยม</h2>
                <p>เลือกบริการยอดนิยมที่ท่านต้องการ</p>
              </div>

              <div className="grid grid-4">
                {services.map((service) => (
                  <div key={service.name} className="service-card">
                    <div className="service-top">
                      <div>
                        <h3>{service.name}</h3>
                        <p>{service.desc}</p>
                      </div>
                      <div className="price">{service.price}฿</div>
                    </div>
                    <div className="service-time">{service.time}</div>
                    <button
                      className="btn btn-primary full"
                      onClick={() => {
                        setSelectedService(service.name);
                        setPage("reservation");
                      }}
                    >
                      เลือกบริการนี้
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {page === "service" && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="pill">Services</div>
              <h2>บริการของเรา</h2>
              <p>หน้านี้เอาไว้ให้ลูกค้าเลือกบริการก่อนจอง</p>
            </div>

            <div className="grid grid-2">
              {services.map((service) => (
                <div key={service.name} className="service-card large">
                  <div className="service-top">
                    <div>
                      <h3>{service.name}</h3>
                      <p>{service.desc}</p>
                    </div>
                    <div className="price">{service.price}฿</div>
                  </div>
                  <div className="service-time">{service.time}</div>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSelectedService(service.name);
                      setPage("reservation");
                    }}
                  >
                    จองเลย
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page === "reservation" && (
        <section className="section">
          <div className="container two-col">
            <div className="panel">
              <div className="section-head left">
                <div className="pill">Reservation</div>
                <h2>จองคิว</h2>
                <p>ฟอร์มใหม่อ่านง่ายขึ้นและเป็นระเบียบกว่าเดิม</p>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label>เลือกบริการ</label>
                  <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                    {services.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label>เลือกช่าง</label>
                  <select value={selectedBarber} onChange={(e) => setSelectedBarber(e.target.value)}>
                    <option>ช่าง J</option>
                    <option>ช่าง R</option>
                    <option>ช่าง N</option>
                  </select>
                </div>

                <div className="field">
                  <label>วันที่</label>
                  <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                </div>

                <div className="field">
                  <label>เวลา</label>
                  <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                    <option value="">เลือกเวลา</option>
                    {slots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field full-span">
                  <label>ชื่อ - นามสกุล</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="กรอกชื่อของคุณ" />
                </div>

                <div className="field">
                  <label>เบอร์โทร</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="08xxxxxxxx" />
                </div>

                <div className="field">
                  <label>อีเมล</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" />
                </div>
              </div>
            </div>

            <div className="panel summary">
              <h3>สรุปการจอง</h3>
              <div className="summary-row">
                <span>บริการ</span>
                <strong>{currentService.name}</strong>
              </div>
              <div className="summary-row">
                <span>ระยะเวลา</span>
                <strong>{currentService.time}</strong>
              </div>
              <div className="summary-row">
                <span>ช่าง</span>
                <strong>{selectedBarber}</strong>
              </div>
              <div className="summary-row">
                <span>วัน / เวลา</span>
                <strong>{selectedDate || "-"} {selectedTime || ""}</strong>
              </div>
              <div className="summary-row total">
                <span>ราคารวม</span>
                <strong>{currentService.price}฿</strong>
              </div>

              <button className="btn btn-primary full" onClick={() => setPage("payment")}>
                ไปหน้าชำระเงิน
              </button>
            </div>
          </div>
        </section>
      )}

      {page === "payment" && (
        <section className="section">
          <div className="container two-col">
            <div className="panel">
              <div className="section-head left">
                <div className="pill">Payment</div>
                <h2>ชำระเงิน</h2>
                <p>จัดรูปแบบให้อ่านง่ายขึ้นและดูเป็นขั้นตอนมากขึ้น</p>
              </div>

              <div className="payment-list">
                <label className="payment-item">
                  <input type="radio" name="payment" defaultChecked />
                  <div>
                    <strong>QR Code พร้อมเพย์</strong>
                    <p>สแกนเพื่อชำระเงินได้ทันที</p>
                  </div>
                </label>

                <label className="payment-item">
                  <input type="radio" name="payment" />
                  <div>
                    <strong>บัตรเครดิต / เดบิต</strong>
                    <p>Visa, Mastercard, JCB</p>
                  </div>
                </label>

                <label className="payment-item">
                  <input type="radio" name="payment" />
                  <div>
                    <strong>Mobile Banking</strong>
                    <p>โอนผ่านแอปธนาคาร</p>
                  </div>
                </label>
              </div>

              <button className="btn btn-primary">ชำระเงิน</button>
            </div>

            <div className="panel summary">
              <h3>สรุปยอด</h3>
              <div className="summary-row">
                <span>บริการ</span>
                <strong>{currentService.name}</strong>
              </div>
              <div className="summary-row">
                <span>ราคา</span>
                <strong>{currentService.price}฿</strong>
              </div>
              <div className="summary-row total">
                <span>ยอดรวมทั้งหมด</span>
                <strong>{currentService.price}฿</strong>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === "schedule" && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="pill">Schedule</div>
              <h2>ตารางช่าง</h2>
              <p>ปรับตารางให้ดูสะอาดขึ้นและอ่านง่ายกว่าเดิม</p>
            </div>

            <div className="schedule-metrics">
              <div className="metric"><h3>3</h3><p>จำนวนช่าง</p></div>
              <div className="metric"><h3>09:00 - 18:00</h3><p>เวลาเปิดร้าน</p></div>
              <div className="metric"><h3>วันนี้</h3><p>ตารางงานปัจจุบัน</p></div>
            </div>

            <div className="panel table-panel">
              <table>
                <thead>
                  <tr>
                    <th>เวลา</th>
                    <th>ช่าง J</th>
                    <th>ช่าง R</th>
                    <th>ช่าง N</th>
                  </tr>
                </thead>
                <tbody>
                  {slots.map((slot, index) => (
                    <tr key={slot}>
                      <td>{slot}</td>
                      <td>{index === 2 ? <span className="busy">ตัดผมทั่วไป</span> : "ว่าง"}</td>
                      <td>{index === 7 ? <span className="busy">แพ็กเกจ VIP</span> : "ว่าง"}</td>
                      <td>ว่าง</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {page === "login" && (
        <section className="section">
          <div className="container small-container">
            <div className="panel login-panel">
              <div className="section-head">
                <div className="pill">Login</div>
                <h2>เข้าสู่ระบบ</h2>
                <p>แบบฟอร์มใหม่ดูสะอาดขึ้นและกดใช้ง่ายกว่าเดิม</p>
              </div>

              <div className="field">
                <label>อีเมล / เบอร์โทร</label>
                <input placeholder="example@email.com" />
              </div>

              <div className="field">
                <label>รหัสผ่าน</label>
                <input type="password" placeholder="กรอกรหัสผ่าน" />
              </div>

              <button className="btn btn-primary full">เข้าสู่ระบบ</button>

              <div className="social-box">
                <button className="btn btn-secondary full">เข้าสู่ระบบด้วย Facebook</button>
                <button className="btn btn-secondary full">เข้าสู่ระบบด้วย Line</button>
                <button className="btn btn-secondary full">เข้าสู่ระบบด้วย Google</button>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="logo footer-logo">
              <span className="logo-top">Duke</span>
              <span className="logo-bottom">Barber</span>
            </div>
            <p>ร้านตัดผมชายสไตล์พรีเมียม UX/UI ใหม่ดูดีขึ้นทั้งระบบ</p>
          </div>
          <div>
            <h4>บริการ</h4>
            <p>ตัดผม</p>
            <p>โกนหนวด</p>
            <p>แพ็กเกจ VIP</p>
          </div>
          <div>
            <h4>ติดต่อ</h4>
            <p>09:00 - 18:00</p>
            <p>02-000-0000</p>
            <p>@dukebarber</p>
          </div>
        </div>
      </footer>
    </div>
  );
}