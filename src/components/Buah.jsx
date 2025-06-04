const Buah = ({ buahList }) => {
  return (
    <main>
      <div className="buah-container">
        <h2>Daftar Buah</h2>
        <div className="buah-grid">
          {buahList.map((buah, index) => (
            <div className="buah-card" key={index}>
              <img src={buah.gambar} alt={buah.nama} className="buah-gambar" />
              <h3>{buah.nama}</h3>
              <p>Warna: {buah.warna}</p>
              <p>Harga: Rp {buah.harga}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Buah;
