// App.jsx
import React, { useRef } from "react";
import "./App.css";
import Bunga1 from "./assets/bunga1.jpg";
import Pria from "./assets/pria.jpg";
import Wanita from "./assets/wanita.jpg";
import Calender from "./assets/calendar.png";
import Clock from "./assets/clock.png";
import Location from "./assets/location.png";

function App() {
  const invitationRef = useRef(null);

  const handleOpenInvitation = () => {
    // invitationRef.current.scrollIntoView({ behavior: "smooth" });
    const landing = document.querySelector(".landing");
    // landing.style.position = "relative";
    landing.style.marginTop = "-120vh";
    landing.style.transition = "margin-top 1s ease-in-out";
    landing.style.zIndex = "1";
    landing.style.display = "none";
  };

  return (
    <div className="App">
      {/* Landing Screen */}
      <section className="landing">
        <div className="landing-background" />
        <div className="landing-content">
          <h3>THE WEDDING OF</h3>
          <h1>Romeo & Juliet</h1>
          <span>SABTU, 27 APRIL 2025</span>
          <div className="yth">
            <p>
              Kepada yth :<br />
              Bpk/Ibu/Saudara/i
            </p>
            <p className="guest-name">Rafi & Partner</p>
            <p className="note">
              Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Hadir Di
              Acara Pernikahan Kami.
            </p>

            <button className="open-btn" onClick={handleOpenInvitation}>
              📅 Buka Undangan
            </button>
          </div>
        </div>
      </section>

      {/* Invitation Content */}

      <section className="invitation">
        <div className="pawiwahan">
          <h3>THE WEDDING OF</h3>
          <h1>Romeo & Juliet</h1>
        </div>
        <p>SAVE THE DATE</p>
        <div className="countdown">
          <div>
            <strong>150</strong>
            <br />
            Hari
          </div>
          <div>
            <strong>3</strong>
            <br />
            Jam
          </div>
          <div>
            <strong>55</strong>
            <br />
            Menit
          </div>
          <div>
            <strong>33</strong>
            <br />
            Detik
          </div>
        </div>
        <h3>15 OKTOBER 2025</h3>
        {/* <button className="add-btn">📅 Tambahkan Acara</button> */}
      </section>

      <section className="wish">
        <div className="flower1">
          <img src={Bunga1} alt="Bunga1" />
        </div>
        <p className="wish-text">
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.”<br />
          (Q.S. Ar-Rum: 21)
        </p>
      </section>

      <section className="CirclePhoto">
        <h2>THE WEDDING OF</h2>
        <div className="bingkai">
          <img src={Pria} alt="" className="PhotoPria"/>
        </div>
        <div className="namaPria">
          <h3>Romeo El Gasing</h3>
          <strong>Putra Pertama dari :</strong>
          <p>Bpk. Ahmad Adnawijaya & Ibu Dedah Alimah</p>
        </div>

        <div className="bingkai">
          <img src={Wanita} alt="" className="PhotoPria"/>
        </div>
        <div className="namaPria">
          <h3>Juliet Sinombre</h3>
          <strong>Putri Kedua dari :</strong>
          <p>Bpk. Zainal Bahru & Ibu Siska Amirah</p>
        </div>
      </section>

      <section className="card">
        <h3>Insya Allah Acara Akan Dilaksanakan Pada : </h3>
          {/* <!-- FLEXBOX --> */}
          <div className="flex">
            {/* <!-- KOTAK ACARA --> */}

            <div className="kotak-acara">
              {/* <!-- JUDUL ACARA --> */}
              <div className="judul-acara">
                <h3>akad nikah</h3>
              </div>
              <div className="flex">
                {/* <!-- ICON --> */}
                <div className="icon">
                  <img src={Calender} alt="Calender" />
                  <p>Rabu <br />16&nbsp;Maret&nbsp;2023</p>
                </div>
                <div className="icon">
                  <img src={Clock} alt="Clock" />
                  <p>Pukul<br />10:00&nbsp;-&nbsp;11:00</p>
                </div>
                <div className="icon">
                  <img src={Location} alt="Location" />
                  <p>Jl. Raya puncak Gadog Harakatul Jannah</p>
                  <button className="add-btn">Lihat Lokasi</button>
                </div>
              </div>
            </div>
            </div>
      </section>
    </div>
  );
}

export default App;
