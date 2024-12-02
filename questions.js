const questions = [
    {
        question: "Dalam pelaksanaan Pengarusutamaan Gender (PUG), terdapat tujuh prasyarat utama. Mana di antara berikut ini yang tidak termasuk prasyarat tersebut?",
        answers: [
            "Komitmen pemerintah daerah dalam bentuk peraturan resmi",
            "Data terpilah berdasarkan jenis kelamin",
            "Implementasi kebijakan berbasis keadilan sosial",
            "Alat analisis gender seperti Gender Analysis Pathway (GAP)",
            "Partisipasi masyarakat dalam pelaksanaan PUG"
        ],
        correct: 2 // Jawaban benar: "Implementasi kebijakan berbasis keadilan sosial"
    },
    {
        question: "Peraturan Presiden Nomor 101 Tahun 2022 tentang Strategi Nasional Penghapusan Kekerasan Terhadap Anak (Stranas PKTA) menyebutkan tujuh strategi utama. Apa yang menjadi fokus dari strategi 'Norma dan Nilai Anti Kekerasan'?",
        answers: [
            "Membangun sistem informasi terpadu untuk pemantauan kasus",
            "Mengubah budaya yang mendukung kekerasan melalui edukasi dan kampanye",
            "Memastikan akses layanan hukum dan medis bagi korban kekerasan",
            "Melibatkan dunia usaha dalam penghapusan eksploitasi anak",
            "Mengintegrasikan kebijakan anti kekerasan ke dalam peraturan daerah"
        ],
        correct: 1 // Jawaban benar: "Mengubah budaya yang mendukung kekerasan melalui edukasi dan kampanye"
    },
    {
        question: "Dalam konteks Kabupaten/Kota Layak Anak (KLA), dokumen apa yang menjadi acuan utama bagi pemerintah daerah untuk menyusun rencana aksi lokal?",
        answers: [
            "Rencana Strategis Pemerintah Daerah (Renstra)",
            "Dokumen Nasional Kebijakan KLA",
            "Peraturan Daerah tentang Perlindungan Anak",
            "Rencana Anggaran dan Pendapatan Daerah (RAPD)",
            "Peraturan Menteri PPPA Nomor 6 Tahun 2023"
        ],
        correct: 1 // Jawaban benar: "Dokumen Nasional Kebijakan KLA"
    },
    {
        question: "Apa yang dimaksud dengan 'Indeks Kualitas Keluarga' (IKK) dalam Permen PPPA Nomor 7 Tahun 2022, dan bagaimana pengukurannya?",
        answers: [
            "Mengukur kesetaraan gender dalam keluarga melalui survei tahunan",
            "Indeks yang mengevaluasi kondisi fisik, ekonomi, dan sosial keluarga",
            "Alat untuk memonitor partisipasi perempuan dalam pembangunan",
            "Instrumen yang digunakan untuk menilai kesejahteraan anak di tingkat desa",
            "Metode untuk menilai kualitas kebijakan terkait pemberdayaan perempuan"
        ],
        correct: 1 // Jawaban benar: "Indeks yang mengevaluasi kondisi fisik, ekonomi, dan sosial keluarga"
    },
    {
        question: "Menurut Undang-Undang Nomor 35 Tahun 2014 tentang Perlindungan Anak, apa yang dimaksud dengan 'anak yang memerlukan perlindungan khusus,' dan berikan satu contohnya?",
        answers: [
            "Anak yang hidup dalam kondisi ekonomi rendah",
            "Anak yang terlibat dalam konflik bersenjata sebagai pelaku kekerasan",
            "Anak yang menghadapi diskriminasi berbasis gender di tempat kerja",
            "Anak yang memiliki disabilitas dan memerlukan pendidikan inklusif",
            "Anak yang mendapatkan hak sipil dan kebebasan penuh"
        ],
        correct: 1 // Jawaban benar: "Anak yang terlibat dalam konflik bersenjata sebagai pelaku kekerasan"
    },
    {
        question: "Menurut Peraturan Presiden Nomor 101 Tahun 2022 tentang Strategi Nasional Penghapusan Kekerasan Terhadap Anak (Stranas PKTA), apa tujuan dari strategi 'Akses Layanan Terintegrasi'?",
        answers: [
            "Membuka lebih banyak layanan konsultasi gender di wilayah terpencil",
            "Menyediakan akses layanan pemulihan yang mudah dan terstandar bagi korban",
            "Meningkatkan jumlah rumah aman untuk perempuan dan anak",
            "Menyediakan pelatihan pencegahan kekerasan kepada masyarakat umum",
            "Memastikan pelaporan kasus kekerasan seksual tepat waktu"
        ],
        correct: 1 // Jawaban benar: "Menyediakan akses layanan pemulihan yang mudah dan terstandar bagi korban"
    },
    {
        question: "Dalam konteks Peraturan Gubernur Jawa Timur Nomor 39 Tahun 2020, siapa yang bertugas sebagai ketua Pokja PUG di tingkat provinsi?",
        answers: [
            "Gubernur",
            "Kepala Dinas Pemberdayaan Perempuan dan Perlindungan Anak",
            "Kepala Bappeda",
            "Sekretaris Daerah",
            "Kepala Badan Kepegawaian Daerah"
        ],
        correct: 2 // Jawaban benar: "Kepala Bappeda"
    },
    {
        question: "Apa yang menjadi fokus utama dari strategi 'Pengasuhan Berkualitas' dalam Stranas PKTA?",
        answers: [
            "Membentuk sistem pemantauan berbasis komunitas untuk keluarga berisiko tinggi",
            "Peningkatan kapasitas orang tua/pengasuh dalam memberikan pengasuhan tanpa kekerasan",
            "Meningkatkan keterlibatan LSM dalam advokasi kebijakan perlindungan anak",
            "Membuka lebih banyak lembaga rehabilitasi anak",
            "Mengadakan pelatihan bagi pekerja sosial tentang kekerasan berbasis gender"
        ],
        correct: 1 // Jawaban benar: "Peningkatan kapasitas orang tua/pengasuh dalam memberikan pengasuhan tanpa kekerasan"
    },
    {
        question: "Apa isi utama dari Peraturan Daerah Provinsi Jawa Timur Nomor 9 Tahun 2019 tentang Pengarusutamaan Gender (PUG)?",
        answers: [
            "Penyediaan dana bantuan sosial untuk perempuan korban kekerasan",
            "Integrasi analisis gender dalam semua tahap perencanaan pembangunan daerah",
            "Peningkatan jumlah perempuan dalam jabatan publik di tingkat provinsi",
            "Penyediaan rumah aman bagi korban kekerasan gender",
            "Pemenuhan kuota keterwakilan perempuan dalam badan legislatif daerah"
        ],
        correct: 1 // Jawaban benar: "Integrasi analisis gender dalam semua tahap perencanaan pembangunan daerah"
    },
    {
        question: "Dalam UU Nomor 35 Tahun 2014 tentang Perlindungan Anak, apa bentuk perlindungan hukum bagi anak korban kekerasan?",
        answers: [
            "Rehabilitasi fisik dan psikis tanpa biaya",
            "Penempatan anak di rumah aman hingga usia 18 tahun",
            "Perlindungan identitas anak selama proses hukum",
            "Pemisahan anak dari pelaku di lingkungan keluarga",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa yang menjadi salah satu indikator keberhasilan Pengarusutamaan Gender (PUG) menurut Peraturan Gubernur Jawa Timur Nomor 39 Tahun 2020?",
        answers: [
            "Bertambahnya fasilitas publik ramah anak",
            "Meningkatnya keterwakilan perempuan dalam jabatan strategis",
            "Kesetaraan akses, partisipasi, kontrol, dan manfaat pembangunan bagi laki-laki dan perempuan",
            "Tercapainya target pembangunan berkelanjutan (SDGs)",
            "Penurunan angka kekerasan berbasis gender"
        ],
        correct: 2 // Jawaban benar: "Kesetaraan akses, partisipasi, kontrol, dan manfaat pembangunan bagi laki-laki dan perempuan"
    },
    {
        question: "Menurut Permen PPPA Nomor 6 Tahun 2023, apa saja dimensi pengukuran kualitas keluarga?",
        answers: [
            "Kesejahteraan ekonomi, pendidikan anak, kesehatan ibu",
            "Ketahanan fisik, ekonomi, sosial-psikologis, sosial-budaya, dan legalitas struktur keluarga",
            "Peran keluarga dalam pendidikan, politik, dan ekonomi",
            "Kesehatan reproduksi, pendidikan, dan pendapatan",
            "Lingkungan, pendidikan, kesehatan, dan kesejahteraan ekonomi"
        ],
        correct: 1 // Jawaban benar: "Ketahanan fisik, ekonomi, sosial-psikologis, sosial-budaya, dan legalitas struktur keluarga"
    },
    {
        question: "Apa prinsip utama dari Standar Layanan Perlindungan Perempuan dan Anak (PPA) menurut Permen PPPA No. 2 Tahun 2022?",
        answers: [
            "Nondiskriminasi, layanan berkelanjutan, dan kesetaraan gender",
            "Pemisahan data antara laki-laki dan perempuan",
            "Pendekatan berbasis komunitas",
            "Pemenuhan kuota perempuan dalam lembaga layanan",
            "Penekanan pada rehabilitasi ekonomi korban"
        ],
        correct: 0 // Jawaban benar: "Nondiskriminasi, layanan berkelanjutan, dan kesetaraan gender"
    },
    {
        question: "Apa tujuan dari Peraturan Presiden Nomor 25 Tahun 2021 tentang Kebijakan Kabupaten/Kota Layak Anak (KLA)?",
        answers: [
            "Menjamin perlindungan khusus bagi anak-anak yang terisolasi",
            "Menjadikan setiap kabupaten/kota di Indonesia sebagai tempat yang layak untuk anak-anak",
            "Menurunkan angka pekerja anak di tingkat provinsi",
            "Meningkatkan angka partisipasi anak dalam pendidikan formal",
            "Membangun infrastruktur ramah anak di semua kabupaten/kota"
        ],
        correct: 1 // Jawaban benar: "Menjadikan setiap kabupaten/kota di Indonesia sebagai tempat yang layak untuk anak-anak"
    },
    {
        question: "Apa peran utama Tim Penggerak PUG di tingkat daerah?",
        answers: [
            "Mengawasi implementasi kebijakan publik",
            "Mengkoordinasikan dan menyusun dokumen perencanaan responsif gender",
            "Memberikan pelatihan kepada masyarakat tentang kesetaraan gender",
            "Membentuk kebijakan pengarusutamaan gender di sektor privat",
            "Menyediakan fasilitas publik khusus perempuan"
        ],
        correct: 1 // Jawaban benar: "Mengkoordinasikan dan menyusun dokumen perencanaan responsif gender"
    },
    {
        question: "Apa yang dimaksud dengan Anak yang Memerlukan Perlindungan Khusus (AMPK) dalam PP No. 78 Tahun 2021?",
        answers: [
            "Anak yang menghadapi diskriminasi gender di tempat kerja",
            "Anak yang memerlukan layanan tambahan karena situasi tertentu seperti kekerasan atau eksploitasi",
            "Anak dengan kondisi kesehatan yang membutuhkan rehabilitasi",
            "Anak yang tinggal di daerah terpencil dengan akses minim terhadap pendidikan",
            "Semua jawaban benar"
        ],
        correct: 1 // Jawaban benar: "Anak yang memerlukan layanan tambahan karena situasi tertentu seperti kekerasan atau eksploitasi"
    },
    {
        question: "Menurut UU Nomor 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual, apa bentuk kekerasan seksual berbasis elektronik?",
        answers: [
            "Ancaman penyebaran video pribadi",
            "Perdagangan anak secara daring",
            "Pelecehan seksual melalui media sosial",
            "Pemaksaan berbagi konten intim",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa saja klaster hak anak yang diatur dalam Kebijakan KLA?",
        answers: [
            "Hak sipil dan kebebasan, lingkungan keluarga, kesehatan dasar, pendidikan, dan perlindungan khusus",
            "Hak hidup, pendidikan, kesehatan, ekonomi, dan politik",
            "Pendidikan, kesehatan, kesejahteraan, lingkungan, dan rekreasi",
            "Lingkungan keluarga, kesehatan dasar, ekonomi, politik, dan sosial",
            "Perlindungan hukum, pendidikan, kesehatan, dan kesejahteraan"
        ],
        correct: 0 // Jawaban benar: "Hak sipil dan kebebasan, lingkungan keluarga, kesehatan dasar, pendidikan, dan perlindungan khusus"
    },
    {
        question: "Apa sanksi administratif yang dapat dikenakan pada instansi daerah jika gagal memenuhi ketentuan data terpilah gender?",
        answers: [
            "Peringatan tertulis",
            "Pemotongan anggaran tahunan",
            "Penghentian bantuan atau insentif daerah",
            "Pembekuan program pembangunan daerah",
            "a dan c"
        ],
        correct: 4 // Jawaban benar: "a dan c"
    },
    {
        question: "Menurut Permen PPPA No. 3 Tahun 2023, apa saja sub-urusan pemerintahan di bidang Pemberdayaan Perempuan dan Perlindungan Anak?",
        answers: [
            "Sistem data gender, kualitas hidup perempuan, perlindungan perempuan, kualitas keluarga, pemenuhan hak anak",
            "Pendidikan, ekonomi, kesehatan, lingkungan, dan hukum",
            "Perlindungan hukum, kesehatan reproduksi, data anak, dan kesejahteraan keluarga",
            "Infrastruktur, pendidikan, ekonomi, dan sosial",
            "Pengembangan desa layak anak, pendidikan, dan kesehatan"
        ],
        correct: 0 // Jawaban benar: "Sistem data gender, kualitas hidup perempuan, perlindungan perempuan, kualitas keluarga, pemenuhan hak anak"
    },
    {
        question: "Apa tujuan utama dari Gender Analysis Pathway (GAP) dalam pelaksanaan Pengarusutamaan Gender (PUG)?",
        answers: [
            "Memastikan alokasi anggaran khusus perempuan",
            "Mengidentifikasi kesenjangan gender dan memberikan solusi melalui kebijakan",
            "Memprioritaskan perempuan dalam semua kebijakan pemerintah",
            "Mengurangi partisipasi laki-laki dalam pengambilan keputusan",
            "Menyediakan pelatihan kesetaraan gender untuk pegawai pemerintah"
        ],
        correct: 1 // Jawaban benar: "Mengidentifikasi kesenjangan gender dan memberikan solusi melalui kebijakan"
    },
    {
        question: "Dalam UU Nomor 35 Tahun 2014, apa perbedaan utama antara anak korban kekerasan fisik dan anak korban eksploitasi ekonomi?",
        answers: [
            "Anak korban kekerasan fisik mendapatkan rehabilitasi sosial, sedangkan anak korban eksploitasi ekonomi mendapatkan bantuan hukum",
            "Anak korban kekerasan fisik dilindungi di rumah aman, sedangkan anak korban eksploitasi ekonomi tetap dalam keluarga",
            "Anak korban kekerasan fisik membutuhkan perawatan medis, sedangkan anak korban eksploitasi ekonomi fokus pada pendidikan kembali",
            "Anak korban kekerasan fisik mendapatkan perlindungan jangka pendek, sedangkan anak korban eksploitasi ekonomi jangka panjang",
            "Semua jawaban benar"
        ],
        correct: 2 // Jawaban benar: "Anak korban kekerasan fisik membutuhkan perawatan medis, sedangkan anak korban eksploitasi ekonomi fokus pada pendidikan kembali"
    },
    {
        question: "Apa salah satu elemen penting dalam penyusunan Gender Budget Statement (GBS)?",
        answers: [
            "Penyediaan data keuangan yang terpisah antara laki-laki dan perempuan",
            "Analisis situasi, rencana aksi, indikator kinerja, dan alokasi anggaran",
            "Peningkatan jumlah fasilitas publik khusus perempuan",
            "Prioritas alokasi anggaran untuk perempuan dan anak di bawah umur",
            "Penurunan ketimpangan ekonomi berbasis gender"
        ],
        correct: 1 // Jawaban benar: "Analisis situasi, rencana aksi, indikator kinerja, dan alokasi anggaran"
    },
    {
        question: "Apa peran utama dari Focal Point dalam pelaksanaan PUG di instansi pemerintah?",
        answers: [
            "Memberikan pelatihan tentang kesetaraan gender kepada masyarakat",
            "Mengkoordinasikan analisis gender di perangkat daerah",
            "Mengawasi pelaksanaan kebijakan ramah gender di tingkat nasional",
            "Membuat kebijakan anggaran yang spesifik untuk perempuan",
            "Mengembangkan indikator keberhasilan program berbasis gender"
        ],
        correct: 1 // Jawaban benar: "Mengkoordinasikan analisis gender di perangkat daerah"
    },
    {
        question: "Apa saja lima strategi utama dalam Kebijakan Kabupaten/Kota Layak Anak (KLA)?",
        answers: [
            "Hak hidup, pendidikan, lingkungan keluarga, perlindungan khusus, dan kesehatan",
            "Pendidikan, ekonomi, kesehatan, perlindungan hukum, dan partisipasi anak",
            "Hak sipil, pendidikan, lingkungan keluarga, kesehatan, dan perlindungan khusus",
            "Lingkungan keluarga, pendidikan, perlindungan hukum, ekonomi, dan sosial",
            "Partisipasi anak, perlindungan hukum, pendidikan, lingkungan, dan rekreasi"
        ],
        correct: 2 // Jawaban benar: "Hak sipil, pendidikan, lingkungan keluarga, kesehatan, dan perlindungan khusus"
    },
    {
        question: "Menurut Permen PPPA Nomor 3 Tahun 2023, apa tanggung jawab utama pemerintah provinsi dalam bidang Pemberdayaan Perempuan dan Perlindungan Anak?",
        answers: [
            "Menyusun Rencana Aksi Nasional",
            "Membentuk Pokja PUG dan meningkatkan partisipasi perempuan",
            "Memberikan pelatihan kesetaraan gender kepada masyarakat lokal",
            "Menyediakan data terpilah berbasis gender untuk daerah lain",
            "Memastikan alokasi anggaran khusus perempuan di kabupaten/kota"
        ],
        correct: 1 // Jawaban benar: "Membentuk Pokja PUG dan meningkatkan partisipasi perempuan"
    },
    {
        question: "Apa bentuk kerja sama yang dapat dilakukan oleh pemerintah daerah dalam implementasi PUG sesuai Peraturan Gubernur Jawa Timur Nomor 39 Tahun 2020?",
        answers: [
            "Penelitian, advokasi, dan pelatihan",
            "Penambahan dana alokasi khusus untuk perempuan",
            "Peningkatan fasilitas publik khusus anak",
            "Pembentukan kebijakan bersama dengan masyarakat",
            "Semua jawaban benar"
        ],
        correct: 0 // Jawaban benar: "Penelitian, advokasi, dan pelatihan"
    },
    {
        question: "Apa indikator utama keberhasilan Kebijakan Kabupaten/Kota Layak Anak (KLA)?",
        answers: [
            "Penurunan angka anak jalanan di perkotaan",
            "Terpenuhinya hak anak pada lima klaster hak utama",
            "Meningkatnya jumlah sekolah ramah anak",
            "Penurunan angka pekerja anak di tingkat kabupaten",
            "Semua jawaban benar"
        ],
        correct: 1 // Jawaban benar: "Terpenuhinya hak anak pada lima klaster hak utama"
    },
    {
        question: "Dalam Permen PPPA No. 2 Tahun 2022, apa pendekatan utama yang digunakan dalam manajemen kasus untuk perlindungan anak?",
        answers: [
            "Sistem peradilan restoratif",
            "Identifikasi, asesmen, intervensi, pemantauan, dan evaluasi",
            "Pemulihan kondisi korban melalui pelatihan ekonomi",
            "Pembentukan jejaring masyarakat berbasis desa",
            "Pengembangan fasilitas perlindungan berbasis komunitas"
        ],
        correct: 1 // Jawaban benar: "Identifikasi, asesmen, intervensi, pemantauan, dan evaluasi"
    },
    {
        question: "Menurut Peraturan Presiden Nomor 101 Tahun 2022, bagaimana norma dan nilai anti kekerasan terhadap anak dapat diubah?",
        answers: [
            "Dengan memberlakukan sanksi berat bagi pelaku kekerasan anak",
            "Melalui kampanye publik, edukasi, dan forum diskusi",
            "Dengan membangun lebih banyak rumah aman untuk anak",
            "Melibatkan dunia usaha dalam program CSR ramah anak",
            "Mengembangkan modul pendidikan berbasis hak anak"
        ],
        correct: 1 // Jawaban benar: "Melalui kampanye publik, edukasi, dan forum diskusi"
    },
    {
        question: "Menurut Peraturan Presiden Nomor 101 Tahun 2022, apa saja komponen utama dari Stranas Penghapusan Kekerasan Terhadap Anak (PKTA)?",
        answers: [
            "Kebijakan publik, norma sosial, data nasional, dan pelibatan masyarakat",
            "Kondisi kekerasan, arah kebijakan, strategi, kerangka kelembagaan, dan koordinasi",
            "Penegakan hukum, perubahan norma budaya, dan pembangunan infrastruktur",
            "Pendidikan publik, sistem pelaporan, dan jejaring pemerintah daerah",
            "Data kasus kekerasan, pelibatan pihak internasional, dan koordinasi lokal"
        ],
        correct: 1 // Jawaban benar: "Kondisi kekerasan, arah kebijakan, strategi, kerangka kelembagaan, dan koordinasi"
    },
    {
        question: "Apa yang dimaksud dengan konsep 'beban ganda' dalam analisis kesetaraan gender?",
        answers: [
            "Beban pekerjaan tambahan akibat kurangnya sumber daya manusia",
            "Peningkatan tanggung jawab perempuan di sektor publik dan domestik",
            "Kewajiban pemerintah untuk menyesuaikan anggaran berbasis gender",
            "Kesenjangan ekonomi antara perempuan dan laki-laki",
            "Ketidakseimbangan dalam akses pendidikan antara anak perempuan dan laki-laki"
        ],
        correct: 1 // Jawaban benar: "Peningkatan tanggung jawab perempuan di sektor publik dan domestik"
    },
    {
        question: "Apa yang dimaksud dengan parameter kesetaraan gender dalam Permen PPPA Nomor 6 Tahun 2023?",
        answers: [
            "Indikator keberhasilan program kesetaraan gender di tingkat daerah",
            "Ukuran untuk menganalisis perspektif gender dalam peraturan hukum",
            "Strategi untuk menghapuskan diskriminasi berbasis gender di sektor pendidikan",
            "Alat untuk mengevaluasi kesenjangan gender dalam program pemerintah",
            "Panduan untuk mengukur keberhasilan pelatihan gender"
        ],
        correct: 1 // Jawaban benar: "Ukuran untuk menganalisis perspektif gender dalam peraturan hukum"
    },
    {
        question: "Menurut Permen PPPA Nomor 2 Tahun 2022, apa tujuan utama dari fungsi layanan perlindungan perempuan dan anak?",
        answers: [
            "Memberikan pelatihan ekonomi kepada perempuan korban kekerasan",
            "Menyediakan layanan perlindungan yang cepat, akurat, komprehensif, dan terintegrasi",
            "Memastikan semua anak mendapatkan akses pendidikan dasar",
            "Memberikan bantuan hukum kepada keluarga kurang mampu",
            "Membentuk jejaring perlindungan berbasis masyarakat"
        ],
        correct: 1 // Jawaban benar: "Menyediakan layanan perlindungan yang cepat, akurat, komprehensif, dan terintegrasi"
    },
    {
        question: "Dalam konteks UU Nomor 11 Tahun 2012 tentang Sistem Peradilan Pidana Anak (SPPA), apa yang dimaksud dengan keadilan restoratif?",
        answers: [
            "Sistem peradilan yang memulihkan hak anak korban pelanggaran",
            "Penyelesaian perkara dengan melibatkan pelaku, korban, keluarga, dan masyarakat",
            "Proses peradilan yang fokus pada pemberian hukuman kepada pelaku anak",
            "Pendekatan berbasis komunitas untuk menyelesaikan masalah hukum",
            "Upaya pemerintah untuk memberikan rehabilitasi hukum kepada anak"
        ],
        correct: 1 // Jawaban benar: "Penyelesaian perkara dengan melibatkan pelaku, korban, keluarga, dan masyarakat"
    },
    {
        question: "Apa bentuk utama pencegahan kekerasan seksual berbasis elektronik menurut UU Nomor 12 Tahun 2022?",
        answers: [
            "Penyediaan layanan rehabilitasi digital bagi korban",
            "Edukasi tentang keamanan digital dan pelaporan kasus secara cepat",
            "Pemblokiran seluruh konten yang dianggap berpotensi melanggar hukum",
            "Penerapan denda administratif pada pengguna media sosial yang terlibat",
            "Pelibatan lembaga internasional dalam pelaporan kasus"
        ],
        correct: 1 // Jawaban benar: "Edukasi tentang keamanan digital dan pelaporan kasus secara cepat"
    },
    {
        question: "Dalam UU Nomor 35 Tahun 2014, apa bentuk perlindungan khusus bagi anak penyandang disabilitas?",
        answers: [
            "Rehabilitasi sosial dan pendidikan inklusif",
            "Pelatihan keterampilan berbasis ekonomi",
            "Penyediaan fasilitas rumah sakit khusus anak",
            "Pemberian bantuan sosial berbasis kebutuhan keluarga",
            "Penempatan anak dalam lembaga pelatihan mandiri"
        ],
        correct: 0 // Jawaban benar: "Rehabilitasi sosial dan pendidikan inklusif"
    },
    {
        question: "Apa fokus utama dari klaster 'Lingkungan Keluarga dan Pengasuhan Alternatif' dalam Kebijakan KLA?",
        answers: [
            "Menyediakan pelatihan pengasuhan untuk keluarga berisiko tinggi",
            "Memastikan anak mendapatkan pengasuhan yang aman dan tanpa kekerasan",
            "Meningkatkan jumlah fasilitas penitipan anak di kabupaten/kota",
            "Membangun sistem pelaporan pengasuhan yang ramah anak",
            "Meningkatkan alokasi anggaran untuk pendidikan berbasis keluarga"
        ],
        correct: 1 // Jawaban benar: "Memastikan anak mendapatkan pengasuhan yang aman dan tanpa kekerasan"
    },
    {
        question: "Apa saja tantangan yang diidentifikasi dalam pelaksanaan Stranas PKTA menurut Perpres Nomor 101 Tahun 2022?",
        answers: [
            "Faktor ekonomi dan budaya yang membenarkan kekerasan serta kurangnya pemahaman jejaring sosial",
            "Minimnya data nasional tentang kasus kekerasan terhadap anak",
            "Tidak adanya kebijakan khusus untuk perlindungan anak di tingkat daerah",
            "Kurangnya pendanaan dan perhatian masyarakat terhadap masalah anak",
            "Semua jawaban benar"
        ],
        correct: 0 // Jawaban benar: "Faktor ekonomi dan budaya yang membenarkan kekerasan serta kurangnya pemahaman jejaring sosial"
    },
    {
        question: "Apa langkah pertama dalam pendekatan manajemen kasus untuk perlindungan anak?",
        answers: [
            "Intervensi langsung terhadap pelaku kekerasan",
            "Identifikasi kasus untuk menentukan jenis masalah dan tingkat risiko",
            "Penyediaan layanan rehabilitasi sosial untuk korban",
            "Penyusunan laporan untuk pengadilan anak",
            "Pemantauan perkembangan korban selama 6 bulan"
        ],
        correct: 1 // Jawaban benar: "Identifikasi kasus untuk menentukan jenis masalah dan tingkat risiko"
    },
    {
        question: "Menurut UU Nomor 11 Tahun 2012 tentang SPPA, apa tujuan utama dari pendekatan diversi?",
        answers: [
            "Memastikan pelaku anak dipenjara dalam kondisi aman",
            "Menghindari perampasan kemerdekaan anak dengan penyelesaian di luar pengadilan",
            "Menyediakan akses pendidikan kepada pelaku anak selama proses hukum",
            "Meningkatkan keterlibatan masyarakat dalam penegakan hukum",
            "Memberikan hukuman setimpal untuk mendidik pelaku anak"
        ],
        correct: 1 // Jawaban benar: "Menghindari perampasan kemerdekaan anak dengan penyelesaian di luar pengadilan"
    },
    {
        question: "Apa tanggung jawab utama UPTD PPA menurut Permen PPPA No. 2 Tahun 2022?",
        answers: [
            "Melakukan penelitian tentang kesetaraan gender di tingkat provinsi",
            "Menyediakan layanan pengaduan, pendampingan, dan penampungan sementara bagi korban",
            "Meningkatkan partisipasi perempuan dalam pemerintahan lokal",
            "Mengembangkan standar layanan perlindungan anak berbasis digital",
            "Menyusun kebijakan pemberdayaan perempuan di tingkat kabupaten"
        ],
        correct: 1 // Jawaban benar: "Menyediakan layanan pengaduan, pendampingan, dan penampungan sementara bagi korban"
    },
    {
        question: "Apa fungsi utama data terpilah menurut Peraturan Menteri Dalam Negeri Nomor 15 Tahun 2008?",
        answers: [
            "Mengidentifikasi kebutuhan spesifik laki-laki dan perempuan dalam pembangunan",
            "Meningkatkan jumlah perempuan dalam sektor pekerjaan informal",
            "Menyediakan statistik tentang pendidikan anak di daerah terpencil",
            "Memastikan alokasi anggaran yang merata di setiap wilayah",
            "Menghitung kontribusi ekonomi rumah tangga perempuan"
        ],
        correct: 0 // Jawaban benar: "Mengidentifikasi kebutuhan spesifik laki-laki dan perempuan dalam pembangunan"
    },
    {
        question: "Menurut Perpres Nomor 25 Tahun 2021, bagaimana peran masyarakat dalam Kebijakan KLA?",
        answers: [
            "Melaporkan pelanggaran hak anak kepada pihak berwenang",
            "Berpartisipasi dalam kampanye kesadaran hak anak",
            "Memberikan dukungan sosial kepada keluarga anak korban",
            "Membangun jaringan perlindungan anak berbasis komunitas",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa bentuk pelanggaran administratif yang diatur dalam Permen PPPA No. 4 Tahun 2014 terkait pelaksanaan PPRG?",
        answers: [
            "Tidak menyediakan data terpilah",
            "Tidak menyusun Gender Budget Statement (GBS)",
            "Tidak melibatkan perempuan dalam pengambilan keputusan",
            "Tidak melaporkan hasil analisis gender tahunan",
            "Semua jawaban benar"
        ],
        correct: 0 // Jawaban benar: "Tidak menyediakan data terpilah"
    },
    {
        question: "Apa yang dimaksud dengan 'Manfaat' dalam konteks analisis gender menurut Peraturan Menteri PPPA?",
        answers: [
            "Tingkat keadilan dalam distribusi sumber daya kepada kelompok masyarakat",
            "Keuntungan yang dinikmati oleh laki-laki dan perempuan dari pembangunan",
            "Dampak sosial dari kebijakan yang bersifat ramah gender",
            "Pengaruh jangka panjang dari alokasi anggaran berbasis gender",
            "Keberhasilan program dalam meningkatkan pendapatan perempuan"
        ],
        correct: 1 // Jawaban benar: "Keuntungan yang dinikmati oleh laki-laki dan perempuan dari pembangunan"
    },
    {
        question: "Apa peran Inspektorat Daerah dalam pengawasan pelaksanaan PUG?",
        answers: [
            "Melakukan audit terhadap anggaran yang tidak responsif gender",
            "Mengawasi implementasi kebijakan berbasis gender di perangkat daerah",
            "Menyusun laporan tahunan tentang capaian PUG di tingkat nasional",
            "Memberikan pelatihan kepada staf pemerintah daerah tentang analisis gender",
            "Menyediakan panduan pelaksanaan PUG di sektor swasta"
        ],
        correct: 1 // Jawaban benar: "Mengawasi implementasi kebijakan berbasis gender di perangkat daerah"
    },
    {
        question: "Apa hak utama anak korban pornografi yang diatur dalam PP No. 78 Tahun 2021?",
        answers: [
            "Hak untuk mendapatkan perlindungan identitas",
            "Hak atas rehabilitasi sosial dan psikologis",
            "Hak untuk berpartisipasi dalam proses hukum yang ramah anak",
            "Hak untuk mendapatkan akses pendidikan kembali",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Menurut UU Nomor 12 Tahun 2022, apa yang dimaksud dengan 'pemaksaan kontrasepsi' sebagai tindak pidana kekerasan seksual?",
        answers: [
            "Memaksa seseorang untuk menggunakan alat kontrasepsi tertentu",
            "Menghalangi seseorang mendapatkan akses kontrasepsi",
            "Memaksa penggunaan kontrasepsi untuk tujuan eksploitasi seksual",
            "Memberikan informasi palsu tentang kontrasepsi",
            "Menjual kontrasepsi tanpa izin resmi"
        ],
        correct: 0 // Jawaban benar: "Memaksa seseorang untuk menggunakan alat kontrasepsi tertentu"
    },
    {
        question: "Apa langkah terakhir dalam pendekatan manajemen kasus untuk perlindungan perempuan dan anak?",
        answers: [
            "Pemulihan psikososial korban",
            "Terminasi atau penutupan kasus setelah kebutuhan terpenuhi",
            "Penyusunan laporan evaluasi untuk instansi terkait",
            "Penyediaan layanan lanjutan untuk korban dan keluarga",
            "Pemantauan pasca-intervensi selama 12 bulan"
        ],
        correct: 1 // Jawaban benar: "Terminasi atau penutupan kasus setelah kebutuhan terpenuhi"
    },
    {
        question: "Apa indikator keberhasilan pelaksanaan PUG di daerah menurut Permen PPPA No. 4 Tahun 2014?",
        answers: [
            "Penurunan angka kekerasan terhadap perempuan dan anak",
            "Peningkatan jumlah perempuan dalam jabatan strategis",
            "Tersedianya dokumen Gender Budget Statement (GBS) dan data terpilah",
            "Penurunan angka kemiskinan rumah tangga perempuan",
            "Meningkatnya partisipasi perempuan dalam pembangunan ekonomi"
        ],
        correct: 2 // Jawaban benar: "Tersedianya dokumen Gender Budget Statement (GBS) dan data terpilah"
    },
    {
        question: "Apa peran utama dari 'Tim Penggerak PUG' di tingkat provinsi?",
        answers: [
            "Menyediakan layanan rehabilitasi sosial bagi perempuan korban kekerasan",
            "Mengkoordinasikan penyusunan dokumen perencanaan yang responsif gender",
            "Mengawasi implementasi kebijakan perlindungan anak di kabupaten/kota",
            "Memberikan pelatihan gender kepada masyarakat lokal",
            "Mengatur pengelolaan data terpilah berbasis gender di sektor swasta"
        ],
        correct: 1 // Jawaban benar: "Mengkoordinasikan penyusunan dokumen perencanaan yang responsif gender"
    },
    {
        question: "Apa hak yang harus diberikan kepada anak yang menjadi korban perdagangan manusia sesuai UU Nomor 35 Tahun 2014?",
        answers: [
            "Rehabilitasi sosial dan ekonomi",
            "Pemulihan psikologis melalui layanan konseling",
            "Perlindungan identitas selama proses hukum",
            "Penempatan di rumah aman atau shelter khusus",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa tujuan utama dari Peraturan Menteri PPPA Nomor 7 Tahun 2022 tentang Peningkatan Kualitas Keluarga?",
        answers: [
            "Memberikan bantuan finansial kepada keluarga yang rentan secara ekonomi",
            "Mendorong peran aktif keluarga dalam penghapusan diskriminasi gender",
            "Meningkatkan kualitas keluarga berdasarkan dimensi legalitas, fisik, ekonomi, sosial-psikologis, dan sosial-budaya",
            "Memastikan anak mendapatkan pendidikan dasar yang layak",
            "Memperkuat peran perempuan dalam pengasuhan keluarga"
        ],
        correct: 2 // Jawaban benar: "Meningkatkan kualitas keluarga berdasarkan dimensi legalitas, fisik, ekonomi, sosial-psikologis, dan sosial-budaya"
    },
    {
        question: "Apa peran dari Gender Analysis Pathway (GAP) dalam pelaksanaan kebijakan berbasis gender?",
        answers: [
            "Mengidentifikasi dan memetakan isu gender dalam perencanaan kebijakan",
            "Menyediakan data statistik tentang perempuan di sektor formal",
            "Memberikan pelatihan gender kepada pejabat publik",
            "Mengawasi implementasi program responsif gender di tingkat nasional",
            "Menghitung alokasi anggaran yang diperlukan untuk program pemberdayaan perempuan"
        ],
        correct: 0 // Jawaban benar: "Mengidentifikasi dan memetakan isu gender dalam perencanaan kebijakan"
    },
    {
        question: "Apa yang dimaksud dengan 'perlindungan khusus' bagi anak korban konflik bersenjata menurut PP No. 78 Tahun 2021?",
        answers: [
            "Pemulihan psikologis melalui terapi kelompok",
            "Evakuasi, reunifikasi keluarga, dan pemenuhan kebutuhan dasar",
            "Penyediaan pendidikan darurat di wilayah konflik",
            "Penempatan anak di daerah aman hingga konflik selesai",
            "Semua jawaban benar"
        ],
        correct: 1 // Jawaban benar: "Evakuasi, reunifikasi keluarga, dan pemenuhan kebutuhan dasar"
    },
    {
        question: "Apa manfaat dari dokumen Gender Budget Statement (GBS)?",
        answers: [
            "Menyediakan panduan teknis bagi pemerintah dalam alokasi anggaran",
            "Membantu mengidentifikasi kesenjangan gender dalam penggunaan anggaran",
            "Memastikan transparansi dan akuntabilitas anggaran berbasis gender",
            "Semua jawaban benar",
            "Tidak ada jawaban yang benar"
        ],
        correct: 3 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa langkah utama dalam pengawasan pelaksanaan PPRG menurut Permen PPPA No. 4 Tahun 2014?",
        answers: [
            "Penyusunan laporan tahunan oleh perangkat daerah",
            "Penggunaan alat analisis seperti GAP untuk menilai kebijakan",
            "Pemantauan dan evaluasi secara berkala terhadap pelaksanaan program",
            "Melibatkan masyarakat dalam pengawasan kebijakan",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Dalam konteks Kebijakan KLA, apa yang dimaksud dengan 'perlindungan khusus anak'?",
        answers: [
            "Anak yang berada dalam situasi darurat, seperti konflik bersenjata atau bencana",
            "Anak yang menjadi korban kekerasan seksual atau eksploitasi",
            "Anak yang membutuhkan perlindungan karena disabilitas atau diskriminasi",
            "Semua jawaban benar",
            "Tidak ada jawaban yang benar"
        ],
        correct: 3 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa tugas utama Dinas PPPA di tingkat provinsi dalam pelaksanaan PUG?",
        answers: [
            "Membentuk tim advokasi untuk pengarusutamaan gender",
            "Mengkoordinasikan penyediaan data terpilah gender",
            "Menyusun kebijakan yang responsif gender di tingkat daerah",
            "Melakukan sosialisasi PUG kepada masyarakat",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa yang menjadi fokus utama dari klaster 'Hak Sipil dan Kebebasan' dalam Kebijakan KLA?",
        answers: [
            "Memberikan dokumen identitas bagi setiap anak",
            "Menjamin hak anak untuk menyuarakan pendapat",
            "Melindungi anak dari diskriminasi berbasis status sosial",
            "Memastikan hak anak atas perlindungan hukum",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa komponen kunci yang diatur dalam Stranas PKTA terkait 'Layanan Terintegrasi'?",
        answers: [
            "Penyediaan layanan kesehatan khusus anak",
            "Sistem pelaporan dan rujukan berbasis teknologi",
            "Pelatihan petugas di bidang perlindungan anak",
            "Koordinasi lintas sektor untuk penanganan kasus anak",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa yang menjadi tantangan terbesar dalam implementasi PPRG di tingkat daerah?",
        answers: [
            "Kurangnya pemahaman tentang analisis gender di kalangan pegawai",
            "Keterbatasan data terpilah gender yang akurat",
            "Tidak adanya kebijakan anggaran yang responsif gender",
            "Lemahnya koordinasi antar-instansi pemerintah",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Menurut UU Nomor 35 Tahun 2014, apa prioritas perlindungan anak yang menjadi korban kejahatan seksual?",
        answers: [
            "Pemulihan fisik dan psikologis secara komprehensif",
            "Penyediaan layanan hukum gratis untuk korban",
            "Penempatan korban di tempat aman sementara",
            "Memberikan akses pendidikan tanpa biaya",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa langkah pertama dalam proses diversifikasi kasus anak menurut UU SPPA?",
        answers: [
            "Mengidentifikasi kasus anak melalui laporan masyarakat",
            "Melakukan mediasi antara korban dan pelaku anak",
            "Melibatkan tokoh masyarakat dalam penyelesaian kasus",
            "Menyusun rencana rehabilitasi untuk pelaku anak",
            "Menentukan tingkat risiko pelaku anak sebelum pengadilan"
        ],
        correct: 0 // Jawaban benar: "Mengidentifikasi kasus anak melalui laporan masyarakat"
    },
    {
        question: "Apa tujuan utama dari pendekatan manajemen kasus dalam perlindungan anak?",
        answers: [
            "Memberikan layanan rehabilitasi jangka panjang untuk anak korban",
            "Meningkatkan akses keadilan melalui proses hukum yang ramah anak",
            "Menjamin kebutuhan anak korban dipenuhi secara komprehensif dan berkelanjutan",
            "Menyediakan bantuan hukum kepada keluarga korban",
            "Meningkatkan partisipasi anak dalam pengambilan keputusan"
        ],
        correct: 2 // Jawaban benar: "Menjamin kebutuhan anak korban dipenuhi secara komprehensif dan berkelanjutan"
    },
    {
        question: "Apa hak utama anak yang menjadi korban eksploitasi ekonomi sesuai PP No. 78 Tahun 2021?",
        answers: [
            "Rehabilitasi sosial dan pelatihan keterampilan",
            "Akses pendidikan formal dan informal",
            "Perlindungan hukum dan identitas selama proses hukum",
            "Pemulihan fisik dan psikologis",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa fungsi utama dari Pokja PUG di tingkat daerah?",
        answers: [
            "Melakukan sosialisasi kesetaraan gender di masyarakat",
            "Mengawasi implementasi kebijakan ramah gender di perangkat daerah",
            "Membantu menyusun program dan anggaran yang responsif gender",
            "Meningkatkan kapasitas staf daerah melalui pelatihan gender",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Menurut Permen PPPA No. 6 Tahun 2023, apa saja indikator kualitas keluarga?",
        answers: [
            "Legalitas, ketahanan fisik, ekonomi, sosial-psikologis, dan sosial-budaya",
            "Pendidikan, kesehatan, ekonomi, dan perlindungan hukum",
            "Kesejahteraan anak, pengasuhan, dan partisipasi perempuan",
            "Peran ayah, ibu, dan anak dalam pengambilan keputusan keluarga",
            "Pemenuhan hak anak di lingkungan rumah dan masyarakat"
        ],
        correct: 0 // Jawaban benar: "Legalitas, ketahanan fisik, ekonomi, sosial-psikologis, dan sosial-budaya"
    },
    {
        question: "Apa yang dimaksud dengan 'Partisipasi Anak' dalam konteks Kebijakan KLA?",
        answers: [
            "Anak-anak berperan aktif dalam pengambilan keputusan yang memengaruhi mereka",
            "Anak-anak menjadi agen perubahan di tingkat komunitas",
            "Anak-anak dilibatkan dalam penyusunan kebijakan ramah anak",
            "Anak-anak memiliki forum untuk menyuarakan pendapat mereka",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa peran utama Dinas PPPA dalam Stranas PKTA?",
        answers: [
            "Menyediakan data kasus kekerasan anak secara nasional",
            "Mengembangkan sistem pelaporan dan rujukan terintegrasi",
            "Memberikan pelatihan kepada aparat penegak hukum tentang kekerasan anak",
            "Memastikan pelaksanaan program PKTA di daerah berjalan optimal",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa langkah penting dalam penyusunan program PPRG di tingkat kabupaten/kota?",
        answers: [
            "Analisis situasi gender dan pengumpulan data terpilah",
            "Penyusunan dokumen anggaran yang responsif gender",
            "Sosialisasi kebijakan kepada masyarakat lokal",
            "Melibatkan tokoh masyarakat dalam advokasi gender",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa komponen utama dari klaster 'Kesehatan Dasar dan Kesejahteraan' dalam Kebijakan KLA?",
        answers: [
            "Penyediaan layanan kesehatan gratis bagi anak",
            "Program pencegahan penyakit menular pada anak",
            "Pemenuhan kebutuhan gizi anak di daerah terpencil",
            "Penyediaan layanan sanitasi yang ramah anak",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa yang menjadi fokus utama klaster 'Pendidikan, Pemanfaatan Waktu Luang, dan Kegiatan Budaya' dalam Kebijakan KLA?",
        answers: [
            "Menjamin hak anak untuk memperoleh pendidikan formal dan informal",
            "Memberikan akses kegiatan budaya yang ramah anak",
            "Memastikan anak memiliki waktu luang yang produktif dan aman",
            "Mendorong keterlibatan anak dalam kegiatan sosial-budaya",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa langkah strategis dalam pencegahan kekerasan berbasis gender di sekolah sesuai Peraturan Menteri PPPA?",
        answers: [
            "Mengintegrasikan materi kesetaraan gender dalam kurikulum",
            "Meningkatkan kapasitas guru tentang pencegahan kekerasan",
            "Membentuk tim pencegahan kekerasan di setiap sekolah",
            "Menyediakan sistem pelaporan kekerasan yang ramah anak",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa prinsip dasar yang harus diterapkan dalam manajemen kasus anak korban kekerasan?",
        answers: [
            "Kerahasiaan informasi korban",
            "Kepentingan terbaik bagi anak",
            "Layanan komprehensif dan berkelanjutan",
            "Pelibatan keluarga dalam proses rehabilitasi",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa indikator utama keberhasilan pelaksanaan Stranas PKTA di tingkat provinsi?",
        answers: [
            "Penurunan angka kekerasan terhadap anak di wilayah tersebut",
            "Peningkatan jumlah layanan perlindungan anak di kabupaten/kota",
            "Tersedianya data nasional kekerasan terhadap anak yang akurat",
            "Keterlibatan masyarakat dalam kampanye anti-kekerasan anak",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Menurut UU Nomor 35 Tahun 2014, apa langkah yang harus dilakukan pemerintah terhadap anak dalam situasi darurat bencana?",
        answers: [
            "Memberikan perlindungan hukum kepada anak korban",
            "Menyediakan tempat aman bagi anak yang terpisah dari keluarganya",
            "Menyediakan kebutuhan dasar seperti makanan, air, dan pakaian",
            "Memberikan akses pendidikan darurat untuk anak korban bencana",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa langkah penting dalam pengembangan Kabupaten/Kota Layak Anak (KLA) di tingkat lokal?",
        answers: [
            "Membentuk gugus tugas KLA di setiap kabupaten/kota",
            "Melibatkan komunitas lokal dalam pengembangan program KLA",
            "Meningkatkan kapasitas pemerintah daerah tentang Kebijakan KLA",
            "Menyusun peraturan daerah yang mendukung program KLA",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa yang dimaksud dengan 'Pengarusutamaan Hak Anak' (PUHA) dalam Kebijakan KLA?",
        answers: [
            "Integrasi hak anak dalam semua tahap pembangunan daerah",
            "Pelibatan anak dalam penyusunan program pembangunan lokal",
            "Penyesuaian kebijakan daerah untuk mendukung hak anak",
            "Menjamin keterwakilan anak dalam perencanaan pembangunan",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa tujuan utama dari pelaksanaan Gender Responsive Planning and Budgeting (GRPB)?",
        answers: [
            "Memastikan semua program pemerintah memiliki dampak setara pada laki-laki dan perempuan",
            "Meningkatkan partisipasi perempuan dalam pembuatan kebijakan",
            "Mengalokasikan anggaran yang lebih besar untuk pemberdayaan perempuan",
            "Mengurangi kesenjangan ekonomi antara laki-laki dan perempuan",
            "Menghapus diskriminasi berbasis gender dalam sektor pendidikan"
        ],
        correct: 0 // Jawaban benar: "Memastikan semua program pemerintah memiliki dampak setara pada laki-laki dan perempuan"
    },
    {
        question: "Apa indikator utama keberhasilan pelaksanaan PUG di tingkat nasional?",
        answers: [
            "Tersedianya undang-undang tentang kesetaraan gender",
            "Penurunan angka kekerasan berbasis gender di masyarakat",
            "Integrasi analisis gender dalam dokumen perencanaan pembangunan nasional",
            "Peningkatan jumlah perempuan dalam jabatan publik strategis",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa peran utama dari Layanan Perlindungan Anak Terpadu Berbasis Masyarakat (PATBM)?",
        answers: [
            "Melaporkan kasus kekerasan terhadap anak di komunitas",
            "Mencegah terjadinya kekerasan terhadap anak melalui pendekatan komunitas",
            "Memberikan pelatihan kepada masyarakat tentang perlindungan anak",
            "Menyediakan layanan konseling untuk anak korban kekerasan",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa yang menjadi dasar hukum dari implementasi Perencanaan dan Penganggaran Responsif Gender (PPRG)?",
        answers: [
            "Peraturan Presiden tentang Kesetaraan Gender",
            "UU Nomor 17 Tahun 2003 tentang Keuangan Negara",
            "Permen PPPA tentang Pengarusutamaan Gender",
            "Peraturan Menteri Dalam Negeri Nomor 15 Tahun 2008",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Menurut Perpres Nomor 101 Tahun 2022, apa strategi utama untuk mengubah norma sosial yang mendukung kekerasan terhadap anak?",
        answers: [
            "Edukasi melalui kampanye kesadaran publik",
            "Melibatkan tokoh masyarakat dalam advokasi",
            "Mengintegrasikan nilai anti kekerasan dalam pendidikan formal",
            "Meningkatkan partisipasi media dalam promosi anti kekerasan",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa fungsi utama dari Rencana Aksi Nasional (RAN) Perlindungan Anak?",
        answers: [
            "Mengarahkan program daerah untuk melindungi anak dari kekerasan",
            "Menyediakan pedoman nasional tentang hak anak",
            "Mengkoordinasikan pelaksanaan program perlindungan anak lintas sektor",
            "Mengintegrasikan perlindungan anak dalam kebijakan pembangunan nasional",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa tujuan utama dari penyediaan data terpilah gender di tingkat daerah?",
        answers: [
            "Memastikan kebijakan yang diambil berbasis kebutuhan nyata laki-laki dan perempuan",
            "Meningkatkan efisiensi penggunaan anggaran daerah",
            "Mengidentifikasi kelompok rentan di masyarakat",
            "Membantu daerah memenuhi target kesetaraan gender nasional",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa manfaat utama dari program Kabupaten/Kota Layak Anak (KLA)?",
        answers: [
            "Menurunkan angka pekerja anak di tingkat lokal",
            "Meningkatkan akses pendidikan bagi anak di daerah terpencil",
            "Memastikan hak anak terpenuhi secara menyeluruh di tingkat daerah",
            "Membentuk jejaring perlindungan anak berbasis komunitas",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa prinsip utama dalam pemberdayaan perempuan menurut Permen PPPA?",
        answers: [
            "Keadilan dan kesetaraan gender",
            "Partisipasi aktif perempuan dalam pengambilan keputusan",
            "Akses yang setara ke sumber daya ekonomi",
            "Perlindungan hukum bagi perempuan dari diskriminasi",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa yang menjadi salah satu kriteria penting untuk daerah yang ingin mendapatkan predikat KLA?",
        answers: [
            "Tersedianya data anak yang terintegrasi di tingkat kabupaten/kota",
            "Adanya regulasi daerah yang mendukung perlindungan hak anak",
            "Tersedianya fasilitas publik yang ramah anak",
            "Tersedianya forum anak untuk partisipasi anak di tingkat daerah",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa manfaat utama dari integrasi kebijakan Pengarusutamaan Gender (PUG) dalam pembangunan daerah?",
        answers: [
            "Meningkatkan kesejahteraan masyarakat secara menyeluruh",
            "Mengurangi kesenjangan sosial antara laki-laki dan perempuan",
            "Memastikan perencanaan pembangunan yang inklusif",
            "Meningkatkan akses layanan publik bagi perempuan dan anak",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa fokus utama dari strategi 'Perlindungan Khusus' dalam Kebijakan Kabupaten/Kota Layak Anak (KLA)?",
        answers: [
            "Mengurangi angka anak korban kekerasan fisik dan seksual",
            "Melindungi anak dalam situasi darurat seperti bencana dan konflik",
            "Memberikan perhatian khusus pada anak dengan kebutuhan khusus",
            "Menyediakan layanan rehabilitasi bagi anak korban eksploitasi",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa tantangan terbesar dalam pelaksanaan PUG di tingkat kabupaten/kota?",
        answers: [
            "Keterbatasan anggaran untuk program responsif gender",
            "Kurangnya pemahaman tentang kesetaraan gender di masyarakat lokal",
            "Minimnya data terpilah gender yang akurat",
            "Lemahnya koordinasi antar-stakeholder di daerah",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa yang dimaksud dengan 'gender mainstreaming' dalam konteks kebijakan pembangunan?",
        answers: [
            "Integrasi perspektif gender di semua tahap proses pembangunan",
            "Prioritas pemberdayaan perempuan dalam semua sektor pembangunan",
            "Penghapusan diskriminasi berbasis gender di masyarakat",
            "Meningkatkan partisipasi perempuan dalam perencanaan pembangunan",
            "Semua jawaban benar"
        ],
        correct: 0 // Jawaban benar: "Integrasi perspektif gender di semua tahap proses pembangunan"
    },
    {
        question: "Apa kriteria utama keberhasilan PPRG di tingkat provinsi?",
        answers: [
            "Tersedianya Gender Budget Statement (GBS) di semua perangkat daerah",
            "Penurunan angka kekerasan berbasis gender di masyarakat",
            "Peningkatan jumlah program responsif gender yang didanai oleh pemerintah",
            "Adanya sistem monitoring dan evaluasi kebijakan berbasis gender",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa langkah penting dalam penguatan layanan perlindungan perempuan dan anak di tingkat lokal?",
        answers: [
            "Menyediakan fasilitas rumah aman bagi korban kekerasan",
            "Melatih petugas layanan untuk memahami isu gender",
            "Membentuk sistem rujukan yang terintegrasi di tingkat daerah",
            "Mengembangkan jejaring kerja antar-instansi terkait",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa yang menjadi prioritas utama dalam pelaksanaan Stranas PKTA di daerah?",
        answers: [
            "Meningkatkan kapasitas lembaga perlindungan anak",
            "Membangun sistem data nasional kasus kekerasan anak",
            "Memberikan edukasi kepada masyarakat tentang hak anak",
            "Menyediakan akses rehabilitasi bagi anak korban kekerasan",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa peran pemerintah daerah dalam mendukung Kebijakan Kabupaten/Kota Layak Anak (KLA)?",
        answers: [
            "Menyusun regulasi daerah yang mendukung hak anak",
            "Menyediakan anggaran untuk program ramah anak",
            "Membentuk gugus tugas KLA di tingkat kabupaten/kota",
            "Mengintegrasikan kebijakan KLA dalam pembangunan daerah",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    },
    {
        question: "Apa langkah pertama dalam penyelesaian kasus anak melalui pendekatan keadilan restoratif?",
        answers: [
            "Identifikasi kasus melalui laporan resmi",
            "Mediasi antara pelaku dan korban anak",
            "Penyelidikan oleh aparat hukum terkait kasus tersebut",
            "Melibatkan keluarga dan komunitas dalam proses penyelesaian",
            "Menyusun rekomendasi penyelesaian kasus untuk pengadilan"
        ],
        correct: 0 // Jawaban benar: "Identifikasi kasus melalui laporan resmi"
    },
    {
        question: "Apa prinsip utama dalam Kebijakan KLA untuk melibatkan anak dalam pengambilan keputusan?",
        answers: [
            "Hak anak untuk menyuarakan pendapat mereka",
            "Kepentingan terbaik bagi anak dalam semua keputusan",
            "Pengakuan atas potensi anak sebagai agen perubahan",
            "Memberikan forum yang aman untuk diskusi anak",
            "Semua jawaban benar"
        ],
        correct: 4 // Jawaban benar: "Semua jawaban benar"
    }
];



