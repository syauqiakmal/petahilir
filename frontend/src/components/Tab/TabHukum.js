import React, { useState } from 'react';
import './Tab.css';

const TabHukum = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeTab, setActiveTab] = useState('Menu1');
  const [submenuVisible, setSubmenuVisible] = useState(null);
  const [tabTransition, setTabTransition] = useState(false);

  const TabHukum = [
    {
      id: 'Menu1',
      label: 'Landasan Hukum Hilirisasi',
      submenu: null,
    },
    {
      id: 'Menu2',
      label: 'Kebijakan Hilirisasi Mineral di Berbagai Negara',
      submenu: null
    },
    {
        id: 'Menu3',
        label: 'Sengketa Mineral di Berbagai Negara',
        submenu: null
    },
    {
        id: 'Menu4',
        label: 'Dampak Hilirisasi Mineral dalam Perdagangan Internasional',
        submenu: null
    },
    {
        id: 'Menu6',
        label: 'Kesimpulan',
        submenu: null
    },
    {
        id: 'Menu7',
        label: 'Rekomendasi',
        submenu: null
    },
  ];

  const ContentHukum = {
    Menu1: {
        title: 'Landasan Hukum Hilirisasi',
        description: '<table><thead><tr><th>NO</th><th>PERATURAN PERUNDANG-UNDANGAN</th><th>TENTANG</th></tr></thead><tbody><tr><td colspan="3"><b>UNDANG-UNDANG</b></td></tr><tr><td>1</td><td>Undang-Undang Nomor 4 Tahun 2009</td><td>Undang-Undang tentang Pertambangan Mineral dan Batubara</td></tr><tr><td>2</td><td>Undang-Undang Nomor 3 Tahun 2014</td><td>Perindustrian</td></tr><tr><td>3</td><td>Undang-Undang Nomor 3 Tahun 2020</td><td>Perubahan Atas Undang-Undang Nomor 4 Tahun 2009 tentang Pertambangan Mineral dan Batubara</td></tr><tr><td>4</td><td>Undang-Undang Nomor 6 Tahun 2023</td><td>Penetapan Peraturan Pemerintah Pengganti Undang-Undang Nomor 2 Tahun 2022 tentang Cipta Kerja Menjadi Undang-Undang</td></tr><tr><td colspan="3"><b>PERATURAN PEMERINTAH</b></td></tr><tr><td>1</td><td>Peraturan Pemerintah Nomor 14 Tahun 2015</td><td>Rencana Induk Pembangunan Industri Nasional 2015-2035</td></tr><tr><td>2</td><td>Peraturan Pemerintah Nomor 1 Tahun 2017</td><td>Perubahan Keempat atas Peraturan Pemerintah Nomor 23 Tahun 2010 tentang Pelaksanaan Kegiatan Usaha Pertambangan Mineral dan Batubara</td></tr><tr><td>3</td><td>Peraturan Pemerintah Nomor 96 Tahun 2021</td><td>Pelaksanaan Kegiatan Usaha Pertambangan Mineral dan Batubara</td></tr><tr><td>4</td><td>Peraturan Pemerintah Nomor 25 Tahun 2024</td><td>Perubahan Atas Peraturan Pemerintah Nomor 96 Tahun 2021 tentang Pelaksanaan Kegiatan Usaha Pertambangan Mineral dan Batubara</td></tr><tr><td colspan="3"><b>PERATURAN MENTERI</b></td></tr><tr><td>1</td><td>Peraturan Menteri ESDM No. 1 Tahun 2014</td><td>Peningkatan Nilai Tambah Mineral Melalui Kegiatan Pengolahan dan Pemurnian Mineral Di Dalam Negeri</td></tr><tr><td>2</td><td>Peraturan Menteri ESDM No. 25 Tahun 2018</td><td>Pengusahaan Pertambangan Mineral Dan Batubara</td></tr><tr><td>3</td><td>Peraturan Menteri ESDM No. 11 Tahun 2019</td><td>Perubahan Kedua Atas Peraturan Menteri Energi Dan Sumber Daya Mineral Nomor 25 Tahun 2018 Tentang Pengusahaan Pertambangan Mineral Dan Batubara</td></tr><tr><td>4</td><td>Peraturan Menteri ESDM No. 17 Tahun 2020</td><td>Perubahan Ketiga Atas Peraturan Menteri Energi dan Sumber Daya Mineral Nomor 25 Tahun 2018 tentang Pengusahaan Pertambangan Mineral dan Batubara</td></tr><tr><td>5</td><td>Peraturan Menteri ESDM No. 16 Tahun 2021</td><td>Perubahan Atas Peraturan Menteri Energi dan Sumber Daya Mineral Nomor 7 Tahun 2020 tentang Tata Cara Pemberian Wilayah, Perizinan, dan Pelaporan Pada Kegiatan Usaha Pertambangan Mineral dan Batubara</td></tr><tr><td>6</td><td>Peraturan Menteri ESDM No. 10 Tahun 2023</td><td>Tata Cara Penyusunan, Penyampaian, dan Persetujuan Rencana Kerja dan Anggaran Biaya serta Tata Cara Pelaporan Pelaksanaan Kegiatan Usaha Pertambangan Mineral dan Batubara</td></tr><tr><td>7</td><td>Peraturan Menteri Perdagangan No. 119 Tahun 2015</td><td>Ketentuan Ekspor Produk Pertambangan Hasil Pengolahan dan Pemurnian</td></tr><tr><td colspan="3"><b>KEPUTUSAN MENTERI</b></td></tr><tr><td>1</td><td>Keputusan Menteri ESDM No. 375.K/MB.01/MEM.B/2023</td><td>Pedoman Permohonan, Evaluasi, dan Pemrosesan Perluasan Wilayah Izin Usaha Pertambangan dan Wilayah Izin Usaha Pertambangan Khusus Dalam Rangka Konservasi Mineral dan Batu Bara</td></tr><tr><td>2</td><td>Keputusan Menteri ESDM No. 69.K/MB.01/MEM.B/2024</td><td>Penetapan Jenis Komoditas yang Tergolong dalam Klasifikasi Mineral Strategis</td></tr><tr><td colspan="3"><b>PERATURAN DAERAH</b></td></tr><tr><td>1</td><td>Peraturan Daerah Provinsi Kalimantan Selatan Nomor 6 Tahun 2023</td><td>Rencana Tata Ruang Wilayah Provinsi Kalimantan Selatan Tahun 2023-2042</td></tr><tr><td>2</td><td>Peraturan Daerah Provinsi Lampung Nomor 12 Tahun 2019</td><td>Perubahan Atas Peraturan Daerah 1 Tahun 2010 tentang RTRW Tahun 2009 Sampai Dengan Tahun 2029</td></tr><tr><td>3</td><td>Peraturan Daerah (Perda) Provinsi Sulawesi Selatan Nomor 3 Tahun 2022</td><td>Rencana Tata Ruang Wilayah Provinsi Sulawesi Selatan Tahun 2022 - 2041</td></tr><tr><td>4</td><td>Peraturan Daerah (Perda) Kabupaten Bintan Nomor 1 Tahun 2020</td><td>Rencana Tata Ruang Wilayah Kabupaten Bintan Tahun 2020 - 2040</td></tr><tr><td>5</td><td>Peraturan Daerah (Perda) Kabupaten Muara Enim Nomor 24 Tahun 2008</td><td>Perubahan atas Perda Kab. Muara Enim No.30 Tahun 2001 Tentang Pengusahaan Pertambangan Umum</td></tr><tr><td>6</td><td>Peraturan Daerah Kabupaten Kayong Utara Provinsi Kalimantan Barat Nomor 11 Tahun 2014</td><td>Izin Pertambangan Rakyat</td></tr><tr><td>7</td><td>Peraturan Daerah Kabupaten Pasuruan Nomor 7 Tahun 2010</td><td>Izin Usaha Pertambangan Mineral dan Batuan di Kabupaten Pasuruan</td></tr><tr><td>8</td><td>Peraturan Daerah (Perda) Kabupaten Banjar Nomor 8 Tahun 2020</td><td>Rencana Perlindungan dan Pengelolaan Lingkungan Hidup</td></tr></tbody></table>',
    },
    Menu2: {
        title: 'Kebijakasan Hilirisasi Mineral di Berbagai Negara',
        description: '<ul><li><strong>Australia</strong><br>Australia memiliki kebijakan hilirisasi yang kuat, dengan fokus pada pengembangan industri pengolahan mineral.</li><li><strong>Bostwana</strong><br>Botswana, sebagai produsen berlian besar, fokus pada peningkatan nilai ekonomi bijih melalui proses benefisiasi dan kerja sama dengan perusahaan pertambangan.</li><li><strong>Chili</strong><br>Chili penghasil tembaga terbesar dunia, berusaha kembangkan hilirisasi dan tingkatkan investasi asing.</li><li><strong>Filipina</strong><br>Filipina telah menerapkan kebijakan untuk mendorong pengolahan tambang dalam negeri, seperti mempertimbangkan larangan ekspor mineral mentah nikel.</li><li><strong>Rusia</strong><br>Rusia menerapkan kebijakan untuk pengolahan mineral dalam negeri.</li><li><strong>Tiongkok</strong><br>Tiongkok berhasil memaksimalkan hilirisasi mineral melalui investasi dalam teknologi, insentif pajak, dan kemitraan publik-swasta, mengendalikan rantai pasok global. Jumlah teks kebijakan meningkat pesat dari 1994 hingga 2018.</li><li><strong>Zambia</strong><br>Zambia menjajaki cara untuk meningkatkan pengolahan tembaga dan mineral.</li><li><strong>Zimbabwe</strong><br>Zimbabwe telah menerapkan peraturan untuk mendorong hilirisasi mineral, tetapi hasilnya tidak signifikan. Hanya Indonesia dan Tiongkok yang mengajukan gugatan ke WTO</li></ul>',
    },
    Menu3: {
        title: 'Sengketa Mineral di Berbagai Negara',
        description: '<ul><li><strong>EU vs. Indonesia di WTO (DS 592)</strong> <ul><li>Uni Eropa menggugat Indonesia di WTO terkait larangan ekspor bijih nikel.</li><li>Larangan diberlakukan pada 22 November 2019.</li><li>Masalah utama: kewajiban Tingkat Komponen Dalam Negeri (TKDN) dan dugaan pelanggaran regulasi WTO terkait UU Minerba.</li></ul></li><li><strong>Rare Earths Amerika Serikat vs. Tiongkok (DS 431)</strong> <ul><li>Kebijakan Cina tentang pembatasan ekspor bahan mentah mendapat perhatian WTO.</li><li>Kasus diajukan oleh Amerika Serikat, Uni Eropa, dan Jepang terkait mineral tanah jarang.</li></ul></li><li><strong>Ikan Herring dan Salmon Amerika Serikat vs. Kanada (1987 WL 421961)</strong> <ul><li>Kanada melarang ekspor ikan herring dan salmon.</li><li>Amerika Serikat menilai kebijakan tersebut bertentangan dengan GATT.</li><li>Panel WTO memutuskan tindakan Kanada melanggar GATT, meskipun alasan Kanada adalah menjaga cadangan ikan.</li></ul></li></ul>',
    },
    Menu4: {
        title: 'Dampak Hilirisasi Mineral dalam Perdagangan Internasional',
        description: '<ul><li><strong>Peningkatan Nilai Tambah</strong><br>Hilirisasi mineral meningkatkan nilai tambah mineral dan menciptakan produk jadi yang lebih bernilai.</li><li><strong>Penciptaan Lapangan Kerja</strong><br>Hilirisasi mineral mendorong pertumbuhan industri pengolahan dan membuka lapangan pekerjaan.<li><strong>Pengurangan Ketergantungan</strong><br>Hilirisasi mineral mengurangi ketergantungan pada ekspor bahan mentah dan mendorong diversifikasi ekonomi.<li><strong>Peningkatan Daya Saing</strong><br>Hilirisasi mineral meningkatkan daya saing industri dalam negeri dan mendorong pertumbuhan ekonomi.</li></ul>',
    },
    Menu6: {
        title: 'Kesimpulan',
        description: '<ul><li>Undang-Undang No. 4 Tahun 2009 yang kemudian direvisi dengan Undang-Undang No. 3 tahun 2020 tentang Pertambangan Mineral dan Batubara dan sejumlah aturan turunannya menjadi dasar hilirisasi.</li><li>Kebijakan perundang-undangan tentang hilirisasi dinilai tidak konsisten dan berubah-ubah sehingga menimbulkan ketidakpastian hukum khususnya bagi pengusaha yang bergerak dalam bidang pertambangan.</li><li>Peraturan perundang-undangan terkait dengan hilirisasi ini secara substantif pernah diuji di Mahkamah Konstitusi dan Mahkamah Agung namun putusan MK dan MA menolak secara keseluruhan Judicial Review tersebut.</li><li>Indonesia menghadapi gugatan Uni Eropa terkait dengan larangan ekspor bijih nikel yang dimenangkan oleh Uni Eropa. Indonesia saat ini telah mengajukan permintaan Banding ke Appellate Body.</li><li>Ditemukan ketidakseseragaman Peraturan Daerah yang mengatur tentang hilirisasi.</li></ul>',
        reference:''
    },
    Menu7: {
        title: 'Rekomendasi',
        description: '<ul><li>Dalam pemberian Izin Usaha Tambang maka pemerintah mencegah terjadinya keberpihakan pada perusahaan tertentu, sehingga tidak ada diskriminasi dalam penerbitan izin usaha tambang di bidang mineral ini.</li><li>Pengaturan mengenai hilirisasi harus didukung dengan upaya pencegahan terhadap penyelundupan bijih nikel yang dipasok oleh aktivitas penambangan ilegal.</li><li>Perlu ada regulasi untuk memudahkan dan melonggarkan ekspor mineral dari perusahaan yang bergerak di bidang hilirisasi, termasuk regulasi jaminan pembangunan fasilitas pengolahan dalam negeri.</li><li>Perlunya menjadikan isu lingkungan sebagai bagian tak terpisahkan dari kebijakan mengenai hilirisasi tambang, termasuk dengan memperhatikan prinsip ESG (<i>Environmental, Social, and Governance</i>).</li></ul>',
        reference:''
    },
  };

  const handleMenuClick = (menuId, hasSubmenu) => {
    if (hasSubmenu) {
      setSubmenuVisible((prev) => (prev === menuId ? null : menuId));
      setActiveSubmenu(null);
      setActiveTab(menuId);
      triggerTransition();
    } else {
      setActiveTab(menuId);
      setSubmenuVisible(null);
      setActiveSubmenu(null);
      triggerTransition();
    }
  };

  const handleSubmenuClick = (submenuId) => {
    setActiveSubmenu(submenuId);
    setActiveTab(null);
    triggerTransition();
  };

  const triggerTransition = () => {
    setTabTransition(false);
    setTimeout(() => {
      setTabTransition(true);
    }, 50);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-sidebar">
        <p className="tabs-intro">
        Informasi hukum strategis terkait perjanjian investasi internasional dan analisis regulasi global untuk mendukung penguatan posisi hukum dalam diplomasi hilirisasi.
        </p>
        {TabHukum.map((TabHukum) => (
          <div key={TabHukum.id} className="menu-section">
            <div
              className={`tab-button ${
                activeTab === TabHukum.id && !activeSubmenu ? 'active' : ''
              }`}
              onClick={() => handleMenuClick(TabHukum.id, !!TabHukum.submenu)}
            >
              <span>{TabHukum.label}</span>
              {TabHukum.submenu && (
                <span className="arrow">
                  {submenuVisible === TabHukum.id ? '▲' : '▼'}
                </span>
              )}
            </div>
            {TabHukum.submenu && submenuVisible === TabHukum.id && (
              <ul className="submenu">
                {TabHukum.submenu.map((submenu) => (
                  <li key={submenu.id}>
                    <button
                      className={`submenu-button ${
                        activeSubmenu === submenu.id ? 'active' : ''
                      }`}
                      onClick={() => handleSubmenuClick(submenu.id)}
                    >
                      {submenu.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className={`tabs-content ${tabTransition ? 'active' : ''}`}
        key={activeSubmenu || activeTab}>
        {activeSubmenu ? (
          <>
            <h2>{ContentHukum[activeSubmenu].label}</h2>
            <p>{ContentHukum[activeSubmenu].description}</p>
            {ContentHukum[activeSubmenu]?.image && (
              <img
                src={ContentHukum[activeSubmenu].image}
                alt={ContentHukum[activeSubmenu]?.label}
                id="tabs-image"
              />
            )}
          </>
        ) : (
          <>
            <h2>{ContentHukum[activeTab]?.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: ContentHukum[activeTab].description }}></p>
            {ContentHukum[activeTab]?.image && (
              <img
                src={ContentHukum[activeTab].image}
                alt={ContentHukum[activeTab]?.label}
                id="tabs-image-hukum"
              />
            )}
            {ContentHukum[activeTab]?.description2 && (
                <p dangerouslySetInnerHTML={{ __html: ContentHukum[activeTab].description2 }}></p>
            )}
            <div className="referensi">
              {ContentHukum[activeTab]?.reference && (
                <>
                  <h4>Referensi</h4>
                  <p
                    id="ref"
                    className="ref-penelitian"
                    dangerouslySetInnerHTML={{ __html: ContentHukum[activeTab].reference }}
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TabHukum;