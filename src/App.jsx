import Buah from "./components/Buah";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const dataBuah = [
    { nama: "Alpukat", warna: "Hijau", gambar: "alpukat.png", harga: "15000" },
    { nama: "Anggur", warna: "Ungu", gambar: "anggur.png", harga: "15000" },
    { nama: "Jambu", warna: "Biru", gambar: "jambu.png", harga: "15000" },
    { nama: "Jeruk", warna: "Oranye", gambar: "jeruk.png", harga: "15000" },
    { nama: "Kiwi", warna: "Coklat", gambar: "kiwi.png", harga: "15000" },
    { nama: "Lemon", warna: "Kuning", gambar: "lemon.png", harga: "15000" },
  ];

  return (
    <>
      <Header />
      <Buah buahList={dataBuah} />
      <Footer />
    </>
  );
}

export default App;