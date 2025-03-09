$(document).ready(function() {
    $('#confirmSubmit').on('click', function() {
        // Kirim form dengan AJAX atau metode yang Anda gunakan
        $('#registrationForm').submit(); // Kirim form jika tombol diklik
        
        // Setelah mengirim, panggil fungsi cetak
        setTimeout(function() {
            $('#printForm').click(); // Simulasikan klik tombol print
        }, 1000); // Tunggu 1 detik sebelum mencetak
    });

    $('#printForm').on('click', function() {
        // Ambil nilai dari form
        let nama = $('#namaLengkap').val();
        let jurusan = $('#jurusan').val();
        let jenisPendaftaran = $('#jenisPendaftaran').val();
        let asalSekolah = $('#asalSekolah').val();
        let kabupaten = $('#kabupaten').val();
        let jenisKelamin = $('input[name="jenisKelamin"]:checked').val();
        let nisn = $('#nisn').val();
        let nik = $('#nik').val();
        let tempatLahir = $('#tempatLahir').val();
        let tanggalLahir = $('#tanggalLahir').val();
        let noRegAktaLahir = $('#noRegAktaLahir').val();
        let agama = $('#agama').val();
        let kewarganegaraan = $('#kewarganegaraan').val();
        let namaNegara = $('#namaNegara').val();
        let kebutuhanKhusus = $('#kebutuhanKhusus').val();
        let alamatJalan = $('#alamatJalan').val();
        let rt = $('#rt').val();
        let rw = $('#rw').val();
        let dusun = $('#dusun').val();
        let kelurahan = $('#kelurahan').val();
        let kecamatan = $('#kecamatan').val();
        let kabupatenKota = $('#kabupatenKota').val();
        let provinsi = $('#provinsi').val();
        let kodePos = $('#kodePos').val();
        let tempatTinggal = $('#tempatTinggal').val();
        let anakKeberapa = $('#anakKeberapa').val();
        let noKKS = $('#noKKS').val();
        let penerimaKPS = $('#penerimaKPS').val();
        let usulanSekolah = $('#usulanSekolah').val();
        let penerimaKIP = $('#penerimaKIP').val();
        let noKIP = $('#noKIP').val();
        let namaKIP = $('#namaKIP').val();
        let terimaFisikKIP = $('#terimaFisikKIP').val();
        let alasanLayakPIP = $('#alasanLayakPIP').val();
        let namaAyah = $('#namaAyah').val();
        let nikAyah = $('#nikAyah').val();
        let tahunLahirAyah = $('#tahunLahirAyah').val();
        let pendidikanTerakhirAyah = $('#pendidikanTerakhirAyah').val();
        let pekerjaanAyah = $('#pekerjaanAyah').val();
        let penghasilanAyah = $('#penghasilanAyah').val();
        let kebutuhanKhususAyah = $('#kebutuhanKhususAyah').val();
        let namaIbu = $('#namaIbu').val();
        let nikIbu = $('#nikIbu').val();
        let tahunLahirIbu = $('#tahunLahirIbu').val();
        let pendidikanTerakhirIbu = $('#pendidikanTerakhirIbu').val();
        let pekerjaanIbu = $('#pekerjaanIbu').val();
        let penghasilanIbu = $('#penghasilanIbu').val();
        let kebutuhanKhususIbu = $('#kebutuhanKhususIbu').val();
        let namaWali = $('#namaWali').val();
        let nikWali = $('#nikWali').val();
        let tahunLahirWali = $('#tahunLahirWali').val();
        let pendidikanTerakhirWali = $('#pendidikanTerakhirWali').val();
        let pekerjaanWali = $('#pekerjaanWali').val();
        let penghasilanWali = $('#penghasilanWali').val();
        let notTelepon = $('#noTelepon').val();
        let noHp = $('#noHp').val();
        let email = $('#email').val();
        let tinggiBadan = $('#tinggiBadan').val();
        let beratBadan = $('#beratBadan').val();
        let lingkarKepala = $('#lingkarKepala').val();
        let jarakSekolah = $('#jarakSekolah').val();
        let jarakSekolahKm = $('#jarakSekolahKm').val();
        let waktuTempuh = $('#waktuTempuh').val();
        let modaTransportasi = $('#modaTransportasi').val();
        let jumlahSaudara = $('#jumlahSaudara').val();
        let noPesertaUjian = $('#noPesertaUjian').val();
        let noSeriIjazah = $('#noSeriIjazah').val();
        let minatEkstrakurikuler = $('#minatEkstrakurikuler').val();
        let hobi = $('#hobi').val();
        let bank = $('#bank').val();
        let noRekening = $('#noRekening').val();
        let jenisPrestasi = $('#jenisPrestasi').val();
        let tingkatPrestasi = $('#tingkatPrestasi').val();
        let namaPrestasi = $('#namaPrestasi').val();
        let tahunPrestasi = $('#tahunPrestasi').val();
        let penyelenggara = $('#penyelenggara').val();
        
        let guruPiket = $('#guruPiket').val();


        // Ambil nilai lainnya sesuai kebutuhan

        // Buat konten HTML untuk dicetak
        let printContent = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cetak Formulir Pendaftaran</title>
    <style>
        @media print {
            @page {
                size: F4; /* Atur ukuran kertas ke F4 */
                margin: 1cm; /* Atur margin */
            }
            @page {
                /* Watermark di semua halaman */
                @top-left {
                    content: "";
                }
                @top-right {
                    content: "";
                }
                @bottom-left {
                    content: "";
                }
                @bottom-right {
                    content: "";
                }
            }
            body {
                font-size: 12px;
                line-height: 1.5;
                margin: 0;
                padding: 0;
                position: relative; /* Untuk posisi watermark */
            }
            .print-container {
                max-width: 100%;
                margin: 0 auto;
                padding: 10px;
                position: relative; /* Untuk posisi watermark */
            }
            .header {
                display: flex;
                align-items: center; /* Logo dan teks sejajar vertikal */
                margin-bottom: 10px;
            }
            .header img {
                width: 100px; /* Ukuran logo */
                height: auto;
                margin-right: 10px; /* Jarak antara logo dan teks */
            }
            .header-content {
                text-align: center; /* Teks kop surat rata tengah */
                flex-grow: 1; /* Mengisi sisa ruang */
            }
            .header h2 {
                margin: 5px 0; /* Atur margin untuk judul kop surat */
                font-size: 16px;
            }
            .header p {
                margin: 3px 0; /* Atur margin untuk paragraf kop surat */
                font-size: 12px;
            }
            .header hr {
                border: 0; /* Hapus border default */
                border-top: 4px solid black; /* Garis dipertebal */
                margin: 10px 0; /* Garis pemisah di bawah kop surat */
                width: 100%; /* Garis memanjang sesuai lebar konten */
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 10px 0;
                font-size: 10px; /* Perkecil ukuran font tabel */
                position: relative; /* Untuk posisi watermark */
            }
            th, td {
                padding: 6px; /* Padding untuk sel tabel */
                border: 1px solid black;
                text-align: left;
            }
            th {
                background-color: rgb(23, 91, 168);
                color: white;
                text-align: center;
            }
            .footer {
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
            }
            .footer div {
                text-align: center;
            }
            .footer p {
                margin: 5px 0;
            }

            /* Watermark di semua halaman */
            @page {
                @top-left {
                    content: "";
                }
                @top-right {
                    content: "";
                }
                @bottom-left {
                    content: "";
                }
                @bottom-right {
                    content: "";
                }
            }
            body::after {
                content: "SPMB SMK HASYIM BOJONG"; /* Teks watermark satu baris */
                position: fixed; /* Tetap di posisi yang sama di semua halaman */
                top: 50%; /* Posisi vertikal di tengah */
                left: 50%; /* Posisi horizontal di tengah */
                transform: translate(-50%, -50%) rotate(-45deg); /* Pusatkan dan putar */
                font-size: 60px; /* Ukuran font */
                font-family: "Impact", sans-serif; /* Font tegas */
                color: rgba(0, 0, 0, 0.1); /* Warna transparan */
                z-index: -1; /* Letakkan di belakang konten */
                opacity: 0.5; /* Transparansi */
                pointer-events: none; /* Agar tidak mengganggu interaksi */
            }
        }
    </style>
</head>
<body>
    <div class="print-container">
        <!-- Kop Surat -->
        <div class="header">
            <!-- Logo di sebelah kiri -->
            <img src="image/tutwuri.png" alt="Logo Sekolah">

            <!-- Teks kop surat rata tengah -->
            <div class="header-content">
                <h2>YAYASAN AMANATUSSOLIKHA</h2>
                <h2>SMK HASYIM ASYIM ASYARI BOJONG</h2>
                <p>PROGRAM STUDI: TEKNIK KOMPUTER DAN JARINGAN – AKUNTANSI DAN KEUANGAN LEMBAGA</p>
                <p>Kampus: Jl. Raya Babakan Tuwel, Kec. Bojong, Kab. Tegal, Jawa Tengah KP: 52465</p>
                <p>Telp: (0283) 4690167</p>
                <p>Email: infosmkhasyimasyaribojong@gmail.com - Website: www.smkhasyaribojong.sch.id</p>
            </div>
        </div>

        <!-- Garis pemisah di bawah kop surat -->
        <hr class="header-hr">
        <h3 style="text-align: center; font-size: 14px;">Formulir Pendaftaran</h3>
        <table>
            <tr style="background-color:rgb(23, 91, 168); color: white;">
                <th style="width: 30%; text-align: center;">Detail</th>
                <th style="width: 70%; text-align: center;">Informasi</th>
            </tr>
            <tr>
                <td>Nama Lengkap</td>
                <td>${nama}</td>
            </tr>
            <tr>
                <td>Jurusan di Ambil</td>
                <td>${jurusan}</td>
            </tr>
              <tr>
        <td>Jenis Pendaftaran</td>
        <td>${jenisPendaftaran}</td>
    </tr>
    <tr>
        <td>Asal Sekolah</td>
        <td>${asalSekolah}</td>
    </tr>
    <tr>
        <td>Kabupaten</td>
        <td>${kabupaten}</td>
    </tr>
    <tr>
        <td>Jenis Kelamin</td>
        <td>${jenisKelamin}</td>
    </tr>
    <tr>
        <td>NISN</td>
        <td>${nisn}</td>
    </tr>
    <tr>
        <td>NIK/No.KITAS WNA</td>
        <td>${nik}</td>
    </tr>
    <tr>
        <td>Tempat Lahir</td>
        <td>${tempatLahir}</td>
    </tr>
    <tr>
        <td>Tanggal Lahir</td>
        <td>${tanggalLahir}</td>
    </tr>
    <tr>
        <td>No.Reg Akta Lahir</td>
        <td>${noRegAktaLahir}</td>
    </tr>
    <tr>
        <td>Agama</td>
        <td>${agama}</td>
    </tr>
    <tr>
        <td>Kewarganegaraan</td>
        <td>${kewarganegaraan}</td>
    </tr>
    <tr>
        <td>Nama Negara</td>
        <td>${namaNegara}</td>
    </tr>
    <tr>
        <td>Kebutuhan Khusus</td>
        <td>${kebutuhanKhusus}</td>
    </tr>
    <tr>
        <td>Alamat Jalan</td>
        <td>${alamatJalan}</td>
    </tr>
    <tr>
        <td>RT</td>
        <td>${rt}</td>
    </tr>
    <tr>
        <td>RW</td>
        <td>${rw}</td>
    </tr>
    <tr>
        <td>Dusun</td>
        <td>${dusun}</td>
    </tr>
    <tr>
        <td>Kelurahan/Desa</td>
        <td>${kelurahan}</td>
    </tr>
    <tr>
        <td>Kecamatan</td>
        <td>${kecamatan}</td>
    </tr>
    <tr>
        <td>Kabupaten/Kota</td>
        <td>${kabupatenKota}</td>
    </tr>
    <tr>
        <td>Provinsi</td>
        <td>${provinsi}</td>
    </tr>
    <tr>
        <td>Kode Pos</td>
        <td>${kodePos}</td>
    </tr>
    <tr>
        <td>Tempat Tinggal</td>
        <td>${tempatTinggal}</td>
    </tr>
    <tr>
        <td>Anak Keberapa</td>
        <td>${anakKeberapa}</td>
    </tr>
    <tr>
        <td>No.KKS (Jika Punya)</td>
        <td>${noKKS}</td>
    </tr>
    <tr>
        <td>Penerima KPS / PKH</td>
        <td>${penerimaKPS}</td>
    </tr>
    <tr>
        <td>Usulan dari sekolah (Layak PIP)</td>
        <td>${usulanSekolah}</td>
    </tr>
    <tr>
        <td>Penerima Kartu Indonesia Pintar</td>
        <td>${penerimaKIP}</td>
    </tr>
    <tr>
        <td>Nomor KIP</td>
        <td>${noKIP}</td>
    </tr>
    <tr>
        <td>Nama Tertera di KIP</td>
        <td>${namaKIP}</td>
    </tr>
    <tr>
        <td>Terima Fisik Kartu (KIP)</td>
        <td>${terimaFisikKIP}</td>
    </tr>
    <tr>
        <td>Alasan layak PIP</td>
        <td>${alasanLayakPIP}</td>
    </tr>
    <tr>
        <td>Nama Ayah kandung</td>
        <td>${namaAyah}</td>
    </tr>
    <tr>
        <td>NIK Ayah</td>
        <td>${nikAyah}</td>
    </tr>
    <tr>
        <td>Tahun Lahir</td>
        <td>${tahunLahirAyah}</td>
    </tr>
    <tr>
        <td>Pendidikan Terakhir Ayah</td>
        <td>${pendidikanTerakhirAyah}</td>
    </tr>
    <tr>
        <td>Pekerjaan Ayah</td>
        <td>${pekerjaanAyah}</td>
    </tr>
    <tr>
        <td>Penghasilan Ayah</td>
        <td>${penghasilanAyah}</td>
    </tr>
    <tr>
        <td>Berkebutuhan Khusus</td>
        <td>${kebutuhanKhususAyah}</td>
    </tr>
    <tr>
        <td>Nama Ibu kandung</td>
        <td>${namaIbu}</td>
    </tr>
    <tr>
        <td>NIK Ibu</td>
        <td>${nikIbu}</td>
    </tr>
    <tr>
        <td>Tahun Lahir</td>
        <td>${tahunLahirIbu}</td>
    </tr>
    <tr>
        <td>Pendidikan Terakhir Ibu</td>
        <td>${pendidikanTerakhirIbu}</td>
    </tr>
    <tr>
        <td>Pekerjaan Ibu</td>
        <td>${pekerjaanIbu}</td>
    </tr>
    <tr>
        <td>Penghasilan Ibu</td>
        <td>${penghasilanIbu}</td>
    </tr>
    <tr>
        <td>Berkebutuhan Khusus</td>
        <td>${kebutuhanKhususIbu}</td>
    </tr>
    <tr>
        <td>Nama Wali</td>
        <td>${namaWali}</td>
    </tr>
    <tr>
        <td>NIK Wali</td>
        <td>${nikWali}</td>
    </tr>
    <tr>
        <td>Tahun Lahir</td>
        <td>${tahunLahirWali}</td>
    </tr>
    <tr>
        <td>Pendidikan Terakhir</td>
        <td>${pendidikanTerakhirWali}</td>
    </tr>
    <tr>
        <td>Pekerjaan Wali</td>
        <td>${pekerjaanWali}</td>
    </tr>
    <tr>
        <td>Penghasilan Bulanan</td>
        <td>${penghasilanWali}</td>
    </tr>
    <tr>
        <td>No.Telepon Rumah</td>
        <td>${notTelepon}</td>
    </tr>
    <tr>
        <td>No. Hp</td>
        <td>${noHp}</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>${email}</td>
    </tr>
    <tr>
        <td>Tinggi Badan</td>
        <td>${tinggiBadan}</td>
    </tr>
    <tr>
        <td>Berat Badan (KG)</td>
        <td>${beratBadan}</td>
    </tr>
    <tr>
        <td>Lingkar Kepala (CM)</td>
        <td>${lingkarKepala}</td>
    </tr>
    <tr>
        <td>Jarak Ke Sekolah</td>
        <td>${jarakSekolah}</td>
    </tr>
    <tr>
        <td>Sebutkan dalam Kilometer</td>
        <td>${jarakSekolahKm}</td>
    </tr>
    <tr>
        <td>Waktu Tempuh</td>
        <td>${waktuTempuh}</td>
    </tr>
    <tr>
        <td>Moda Transportasi</td>
        <td>${modaTransportasi}</td>
    </tr>
    <tr>
        <td>Jumlah Saudara</td>
        <td>${jumlahSaudara}</td>
    </tr>
    <tr>
        <td>No.Peserta Ujian</td>
        <td>${noPesertaUjian}</td>
    </tr>
    <tr>
        <td>No. Seri Ijazah</td>
        <td>${noSeriIjazah}</td>
    </tr>
    <tr>
        <td>Minat Ekstrakurikuler</td>
        <td>${minatEkstrakurikuler}</td>
    </tr>
    <tr>
        <td>Hobi</td>
        <td>${hobi}</td>
    </tr>
    <tr>
        <td>Bank Yang Digunakan</td>
        <td>${bank}</td>
    </tr>
    <tr>
        <td>No Rekening</td>
        <td>${noRekening}</td>
    </tr>
    <tr>
        <td>Jenis Prestasi</td>
        <td>${jenisPrestasi}</td>
    </tr>
    <tr>
        <td>Tingkat Prestasi</td>
        <td>${tingkatPrestasi}</td>
    </tr>
    <tr>
        <td>Nama Prestasi</td>
        <td>${namaPrestasi}</td>
    </tr>
    <tr>
        <td>Tahun</td>
        <td>${tahunPrestasi}</td>
    </tr>
    <tr>
        <td>Penyelenggara</td>
        <td>${penyelenggara}</td>
    </tr>
    <tr>
        <td>Guru Piket / Pendamping SPMB</td>
        <td>${guruPiket}</td>
    </tr>
            <!-- Additional rows -->

            <!-- Tambahkan baris tabel lainnya sesuai kebutuhan -->
        </table>

        <div class="footer">
            <div>
                <p>Guru Pembimbing</p>
                <p style="font-weight: bold; margin-top: 40px;">${guruPiket}</p>
            </div>
            <div>
                <p style="font-weight: bold; margin-bottom: 0;">Tanggal: <span id="currentDate"></span></p>
                <p style="font-weight: bold; margin-bottom: 0;">Waktu: <span id="currentTime"></span></p>
                <p>Kepala Sekolah</p>
                <p style="font-weight: bold; margin-top: 40px;">H. Ali Musofi, S.Pd.I</p>
            </div>
            <div>
                <p>Ketua SPMB</p>
                <p style="font-weight: bold; margin-top: 40px;">H. Maslutfi, S.Pd.</p>
            </div>
        </div>
    </div>

    <script>
        const currentDateElement = document.getElementById('currentDate');
        const currentTimeElement = document.getElementById('currentTime');

        const today = new Date();
        const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        currentDateElement.textContent = today.toLocaleDateString('id-ID', optionsDate);

        const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        currentTimeElement.textContent = today.toLocaleTimeString('id-ID', optionsTime);
    </script>
</body>
</html>
        `;

        // Buka jendela baru untuk mencetak
        let printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write(printContent);
        printWindow.document.close();

        // Tunggu gambar dimuat sebelum mencetak
        printWindow.onload = function() {
            printWindow.print();
        };
    });
});
