const Buah = () => {
  const dataBuah = [
    {
      nama: "Alpukat",
      warna: "Hijau",
      gambar: "alpukat.png",
      harga: "15000",
    },
    {
      nama: "Anggur",
      warna: "Ungu",
      gambar: "anggur.png",
      harga: "15000",
    },
    {
      nama: "Jambu",
      warna: "Biru",
      gambar: "jambu.png",
      harga: "15000",
    },
    {
      nama: "Jeruk",
      warna: "Oranye",
      gambar: "jeruk.png",
      harga: "15000",
    },
    {
      nama: "Kiwi",
      warna: "Coklat",
      gambar: "kiwi.png",
      harga: "15000",
    },
    {
      nama: "Lemon",
      warna: "Kuning",
      gambar: "lemon.png",
      harga: "15000",
    },
  ];

  return (
    <main>
      <div className="buah-container">
        <h2>Daftar Buah</h2>
        <div className="buah-grid">
          {dataBuah.map((buahh, index) => (
            <div className="buah-card" key={index}>
              <img
                src={buahh.gambar}
                alt={buahh.nama}
                className="buah-gambar"
              />
              <h3>{buahh.nama}</h3>
              <p>Warna: {buahh.warna}</p>
              <p>Harga: Rp {buahh.harga}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Buah;
