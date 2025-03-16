function generateSuratDiterima(siswa) {
    // Ambil data siswa dari parameter
    const {
        nama = "Nama tidak tersedia",
        nisn = "NISN tidak tersedia",
        tanggalLahir = "Tanggal lahir tidak tersedia",
        jenisKelamin = "Jenis kelamin tidak tersedia",
        namaIbu = "Nama ibu tidak tersedia",
        nomorUrut
    } = siswa;

    // Format nomor surat (01/SMK.HA/III/2025)
    const bulanRomawi = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
    const bulanSekarang = new Date().getMonth(); // 0 (Jan) - 11 (Des)
    const nomorSurat = `${String(nomorUrut).padStart(2, '0')}/SMK.HA/SPMB/${bulanRomawi[bulanSekarang]}/${new Date().getFullYear()}`;

    // Nama bulan dalam bahasa Indonesia
    const namaBulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const tanggalSekarang = new Date();
    const tanggal = tanggalSekarang.getDate();
    const bulan = namaBulan[tanggalSekarang.getMonth()];
    const tahun = tanggalSekarang.getFullYear();

    // Buat konten surat
    const surat = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Surat Keterangan Diterima</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
                background-color: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
            .kop-surat {
                display: flex;
                align-items: justify;
                border-bottom: 2px solid #000; /* Warna garis diubah menjadi hitam */
                padding-bottom: 20px;
                margin-bottom: 30px;
            }
            .kop-surat img {
                width: 150px; /* Ukuran logo diperbesar dari 100px menjadi 150px */
                margin-right: 20px;
            }
            .kop-surat .teks-kop {
                flex: 1;
                text-align: center;
            }
            .kop-surat h1 {
                font-size: 24px;
                margin: 0;
                color: #000; /* Warna hitam */
            }
            .kop-surat h2 {
                font-size: 20px;
                margin: 5px 0;
                color: #333;
            }
            .kop-surat p {
                font-size: 14px;
                margin: 5px 0;
                color: #555;
            }
            .content {
                padding: 20px;
            }
            .content h2 {
                text-align: center;
                font-size: 20px;
                margin-bottom: 20px;
                color: #333;
            }
            .content .nomor-surat {
                text-align: center;
                font-size: 16px;
                margin-bottom: 20px;
                color: #555;
            }
            .content .data-siswa {
                margin-bottom: 20px;
            }
          .content .data-siswa p {
                    font-size: 16px;
                    line-height: 1.8;
                    color: #555;
                    margin: 5px 0;
                    display: flex; /* Menggunakan flex untuk menyejajarkan tanda : */
                }
                .content .data-siswa p strong {
                    width: 120px; /* Lebar tetap untuk label */
                    display: inline-block;
                }
            .footer {
                text-align: right;
                margin-top: 40px;
                padding-right: 50px;
            }
            .footer p {
                margin: 5px 0;
                font-size: 14px;
                color: #555;
            }
            .footer .nipy {
                text-align: left; /* NIPY sebelah kiri */
                margin-left: 50px; /* Memberikan jarak dari tepi kiri */
            }
            .button-container {
                text-align: center;
                margin-top: 30px;
            }
            .button-container button {
                background-color: #28a745;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                margin: 0 10px;
                font-size: 16px;
                transition: background-color 0.3s ease;
            }
            .button-container button:hover {
                background-color: #218838;
            }
            @media print {
                body {
                    padding: 0;
                    background-color: white;
                }
                .container {
                    box-shadow: none;
                    border: none;
                }
                .button-container {
                    display: none;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="kop-surat">
                <img src="image/hasyri.png" alt="Logo Sekolah"> <!-- Ukuran logo sudah diperbesar dalam CSS -->
                <div class="teks-kop">
                    <h1>YAYASAN AMANATUSSOLIKHA</h1>
                    <h1>SMK HASYIM ASY'ARI BOJONG</h1>
                    <p>PROGRAM STUDI</p>
                    <p>TEKNIK KOMPUTER DAN JARINGAN - AKUNTANSI DAN KEUANGAN LEMBAGA</p>
                    <p>Alamat: Kampus: Jl. Raya Babakan Tuwel, Kec. Bojong, Kab. Tegal, Jawa Tengah KP: 52465</p>
                    <p>Telp: (0283) 4690167 | Email: infosmkhasyimasyaribojong@gmail.com</p>
                </div>
            </div>
            <div class="content">
                <h2>SURAT KETERANGAN DITERIMA</h2>
                <p class="nomor-surat">Nomor: ${nomorSurat}</p>
                <p>Yang bertanda tangan di bawah ini, Kepala Sekolah Menengah Kejuruan (SMK) HASYIM ASY'ARI BOJONG, menerangkan bahwa:</p>
                <div class="data-siswa">
                    <p><strong>Nama:</strong> ${nama}</p>
                    <p><strong>NISN:</strong> ${nisn}</p>
                    <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
                    <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
                    <p><strong>Nama Ibu:</strong> ${namaIbu}</p>
                </div>
                <p>Telah dinyatakan <strong>DITERIMA</strong> sebagai siswa di SMK HASYIM ASY'ARI BOJONG Tahun Pelajaran ${new Date().getFullYear()}/${new Date().getFullYear() + 1}. Diharapkan yang bersangkutan dapat segera melakukan daftar ulang dan melengkapi persyaratan administrasi sesuai dengan ketentuan yang berlaku.</p>
                <p>Demikian surat keterangan ini dibuat untuk dapat dipergunakan sebagaimana mestinya.</p>
            </div>
            <div class="footer">
                <p>Bojong, ${tanggal} ${bulan} ${tahun}</p>
                <p>Kepala Sekolah,</p>
                <br><br><br>
                <p><strong>H. Ali Musofi, S.Pd.I</strong></p>
               
            </div>
            <div class="button-container">
                <button onclick="window.print()"><i class="fas fa-print"></i> Cetak</button>
                <button onclick="saveAsPDF()"><i class="fas fa-download"></i> Simpan PDF</button>
            </div>
        </div>

        <!-- Script untuk save PDF -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
        <script>
            const { jsPDF } = window.jspdf;

            function saveAsPDF() {
                const doc = new jsPDF('p', 'mm', 'a4');
                const element = document.querySelector('.container');
                doc.html(element, {
                    callback: function (doc) {
                        doc.save('Surat_Keterangan_Diterima.pdf');
                    },
                    margin: [10, 10, 10, 10],
                    autoPaging: 'text',
                    width: 190,
                    windowWidth: element.clientWidth
                });
            }
        </script>
    </body>
    </html>
`;

    // Buka surat di tab baru
    const newWindow = window.open();
    newWindow.document.write(surat);
    newWindow.document.close();
}
