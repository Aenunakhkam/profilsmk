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
        let noSeriSkun = $('#noSeriSkhun').val();
        let minatEkstrakurikuler = $('#minatEkstrakurikuler').val();
        let hobi = $('#hobi').val();
        let bank = $('#bank').val();
        let noRekening = $('#noRekening').val();
        let rekeningAtasNama = $('#rekeningAtasNama').val();
        let jenisPrestasi = $('#jenisPrestasi').val();
        let tingkatPrestasi = $('#tingkatPrestasi').val();
        let namaPrestasi = $('#namaPrestasi').val();
        let tahunPrestasi = $('#tahunPrestasi').val();
        let penyelenggara = $('#penyelenggara').val();
        
        let guruPiket = $('#guruPiket').val();

        let printContent = `
<div style="display: flex; align-items: center; justify-content: space-between;">
    <img src="image/tutwuri.png" alt="Logo Sekolah" style="width: 150px; height: auto; margin-right: 20px;">
    <div style="text-align: center; margin-top: 2px; flex-grow: 1;">
        <h2 style="white-space: nowrap;">YAYASAN AMANATUSSOLIKHA</h2>
        <h2 style="white-space: nowrap;">SMK HASYIM ASYIM ASYARI BOJONG</h2>
        <p style="white-space: normal; margin: 0;">PROGRAM STUDI: TEKNIK KOMPUTER DAN JARINGAN – AKUNTANSI DAN KEUANGAN LEMBAGA</p>
        <p style="white-space: normal; margin: 0;">Kampus: Jl. Raya Babakan Tuwel, Kec. Bojong, Kab. Tegal, Jawa Tengah KP: 52465 Telp: (0283) 4690167
        Email: infosmkhasyimasyaribojong@gmail.com - Website: www.smkhasyaribojong.sch.id</p>
        <hr style="border: 2px solid black; margin: 10px 0; max-width: 100%; width: calc(100% - 40px);">
    </div>
    <img src="image/logo2.png" alt="Logo Sekolah" style="width: 150px; height: auto; margin-left: 20px;">
</div>

<hr>
<h3 style="text-align: center;">Formulir Pendaftaran</h3>
<table class="table table-bordered" style="width: 100%; border-collapse: collapse; margin: 20px auto; text-align: center;">
    <tr style="background-color: #4CAF50; color: white;">
        <th style="padding: 12px; border: 1px solid black; width: 30%;">Detail</th>
        <th style="padding: 12px; border: 1px solid black; width: 70%;">Informasi</th>
    </tr>
    <tr>
        <td style="padding: 10px; border: 1px solid black;">Nama Lengkap</td>
        <td style="padding: 10px; border: 1px solid black;">${nama}</td>
    </tr>
    <tr>
        <td style="padding: 10px; border: 1px solid black;">Jurusan di Ambil</td>
        <td style="padding: 10px; border: 1px solid black;">${jurusan}</td>
    </tr>

        <tr>
            <td style="padding: 10px; border: 1px solid black;">Jenis Pendaftaran</td>
            <td style="padding: 10px; border: 1px solid black;">${jenisPendaftaran}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Asal Sekolah</td>
            <td style="padding: 10px; border: 1px solid black;">${asalSekolah}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Kabupaten</td>
            <td style="padding: 10px; border: 1px solid black;">${kabupaten}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Jenis Kelamin</td>
            <td style="padding: 10px; border: 1px solid black;">${jenisKelamin}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">NISN</td>
            <td style="padding: 10px; border: 1px solid black;">${nisn}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">NIK/No.KITAS WNA</td>
            <td style="padding: 10px; border: 1px solid black;">${nik}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Tempat Lahir</td>
            <td style="padding: 10px; border: 1px solid black;">${tempatLahir}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Tanggal Lahir</td>
            <td style="padding: 10px; border: 1px solid black;">${tanggalLahir}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">No.Reg Akta Lahir</td>
            <td style="padding: 10px; border: 1px solid black;">${noRegAktaLahir}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Agama</td>
            <td style="padding: 10px; border: 1px solid black;">${agama}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Kewarganegaraan</td>
            <td style="padding: 10px; border: 1px solid black;">${kewarganegaraan}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Nama Negara</td>
            <td style="padding: 10px; border: 1px solid black;">${namaNegara}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Kebutuhan Khusus</td>
            <td style="padding: 10px; border: 1px solid black;">${kebutuhanKhusus}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Alamat Jalan</td>
            <td style="padding: 10px; border: 1px solid black;">${alamatJalan}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">RT</td>
            <td style="padding: 10px; border: 1px solid black;">${rt}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">RW</td>
            <td style="padding: 10px; border: 1px solid black;">${rw}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Dusun</td>
            <td style="padding: 10px; border: 1px solid black;">${dusun}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Kelurahan/Desa</td>
            <td style="padding: 10px; border: 1px solid black;">${kelurahan}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Kecamatan</td>
            <td style="padding: 10px; border: 1px solid black;">${kecamatan}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Kabupaten/Kota</td>
            <td style="padding: 10px; border: 1px solid black;">${kabupatenKota}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Provinsi</td>
            <td style="padding: 10px; border: 1px solid black;">${provinsi}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Kode Pos</td>
            <td style="padding: 10px; border: 1px solid black;">${kodePos}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Tempat Tinggal</td>
            <td style="padding: 10px; border: 1px solid black;">${tempatTinggal}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Anak Keberapa</td>
            <td style="padding: 10px; border: 1px solid black;">${anakKeberapa}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">No.KKS (Jika Punya)</td>
            <td style="padding: 10px; border: 1px solid black;">${noKKS}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Penerima KPS / PKH</td>
            <td style="padding: 10px; border: 1px solid black;">${penerimaKPS}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Usulan dari sekolah (Layak PIP)</td>
            <td style="padding: 10px; border: 1px solid black;">${usulanSekolah}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Penerima Kartu Indonesia Pintar</td>
            <td style="padding: 10px; border: 1px solid black;">${penerimaKIP}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Nomor KIP</td>
            <td style="padding: 10px; border: 1px solid black;">${noKIP}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Nama Tertera di KIP</td>
            <td style="padding: 10px; border: 1px solid black;">${namaKIP}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Terima Fisik Kartu (KIP)</td>
            <td style="padding: 10px; border: 1px solid black;">${terimaFisikKIP}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Alasan layak PIP</td>
            <td style="padding: 10px; border: 1px solid black;">${alasanLayakPIP}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Nama Ayah kandung</td>
            <td style="padding: 10px; border: 1px solid black;">${namaAyah}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">NIK Ayah</td>
            <td style="padding: 10px; border: 1px solid black;">${nikAyah}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Tahun Lahir</td>
            <td style="padding: 10px; border: 1px solid black;">${tahunLahirAyah}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Pendidikan Terakhir Ayah</td>
            <td style="padding: 10px; border: 1px solid black;">${pendidikanTerakhirAyah}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Pekerjaan Ayah</td>
            <td style="padding: 10px; border: 1px solid black;">${pekerjaanAyah}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Penghasilan Ayah</td>
            <td style="padding: 10px; border: 1px solid black;">${penghasilanAyah}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Berkebutuhan Khusus</td>
            <td style="padding: 10px; border: 1px solid black;">${kebutuhanKhususAyah}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Nama Ibu kandung</td>
            <td style="padding: 10px; border: 1px solid black;">${namaIbu}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">NIK Ibu</td>
            <td style="padding: 10px; border: 1px solid black;">${nikIbu}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Tahun Lahir</td>
            <td style="padding: 10px; border: 1px solid black;">${tahunLahirIbu}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Pendidikan Terakhir Ibu</td>
            <td style="padding: 10px; border: 1px solid black;">${pendidikanTerakhirIbu}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Pekerjaan Ibu</td>
            <td style="padding: 10px; border: 1px solid black;">${pekerjaanIbu}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Penghasilan Ibu</td>
            <td style="padding: 10px; border: 1px solid black;">${penghasilanIbu}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Berkebutuhan Khusus</td>
            <td style="padding: 10px; border: 1px solid black;">${kebutuhanKhususIbu}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Nama Wali</td>
            <td style="padding: 10px; border: 1px solid black;">${namaWali}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">NIK Wali</td>
            <td style="padding: 10px; border: 1px solid black;">${nikWali}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Tahun Lahir</td>
            <td style="padding: 10px; border: 1px solid black;">${tahunLahirWali}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Pendidikan Terakhir</td>
            <td style="padding: 10px; border: 1px solid black;">${pendidikanTerakhirWali}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Pekerjaan Wali</td>
            <td style="padding: 10px; border: 1px solid black;">${pekerjaanWali}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Penghasilan Bulanan</td>
            <td style="padding: 10px; border: 1px solid black;">${penghasilanWali}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">No.Telepon Rumah</td>
            <td style="padding: 10px; border: 1px solid black;">${notTelepon}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">No. Hp</td>
            <td style="padding: 10px; border: 1px solid black;">${noHp}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Email</td>
            <td style="padding: 10px; border: 1px solid black;">${email}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Tinggi Badan</td>
            <td style="padding: 10px; border: 1px solid black;">${tinggiBadan}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Berat Badan (KG)</td>
            <td style="padding: 10px; border: 1px solid black;">${beratBadan}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Lingkar Kepala (CM)</td>
            <td style="padding: 10px; border: 1px solid black;">${lingkarKepala}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Jarak Ke Sekolah</td>
            <td style="padding: 10px; border: 1px solid black;">${jarakSekolah}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Sebutkan dalam Kilometer</td>
            <td style="padding: 10px; border: 1px solid black;">${jarakSekolahKm}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Waktu Tempuh</td>
            <td style="padding: 10px; border: 1px solid black;">${waktuTempuh}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Moda Transportasi</td>
            <td style="padding: 10px; border: 1px solid black;">${modaTransportasi}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Jumlah Saudara</td>
            <td style="padding: 10px; border: 1px solid black;">${jumlahSaudara}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">No.Peserta Ujian</td>
            <td style="padding: 10px; border: 1px solid black;">${noPesertaUjian}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">No. Seri Ijazah</td>
            <td style="padding: 10px; border: 1px solid black;">${noSeriIjazah}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Minat Ekstrakurikuler</td>
            <td style="padding: 10px; border: 1px solid black;">${minatEkstrakurikuler}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Hobi</td>
            <td style="padding: 10px; border: 1px solid black;">${hobi}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Bank Yang Digunakan</td>
            <td style="padding: 10px; border: 1px solid black;">${bank}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">No Rekening</td>
            <td style="padding: 10px; border: 1px solid black;">${noRekening}</td

        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Jenis Prestasi</td>
            <td style="padding: 10px; border: 1px solid black;">${jenisPrestasi}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Tingkat Prestasi</td>
            <td style="padding: 10px; border: 1px solid black;">${tingkatPrestasi}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Nama Prestasi</td>
            <td style="padding: 10px; border: 1px solid black;">${namaPrestasi}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Tahun</td>
            <td style="padding: 10px; border: 1px solid black;">${tahunPrestasi}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Penyelenggara</td>
            <td style="padding: 10px; border: 1px solid black;">${penyelenggara}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid black;">Guru Piket / Pendamping SPMB</td>
            <td style="padding: 10px; border: 1px solid black;">${guruPiket}</td>
        </tr>



    <!-- Add more rows similarly -->
  
</table>

<div style="margin-top: 100px; display: flex; justify-content: space-between; align-items: flex-start;">
    <div style="text-align: left;">
        <p>Guru Pembimbing</p>
        <p style="font-weight: bold; margin-top: 60px;">${guruPiket}</p>
    </div>
    <div style="text-align: center;">
        <div style="margin-bottom: 20px;">
            <p style="font-weight: bold; margin-bottom: 0;">Tanggal: <span id="currentDate"></span></p>
            <p style="font-weight: bold; margin-bottom: 0;">Waktu: <span id="currentTime"></span></p>
        </div>
        <p>Kepala Sekolah</p>
        <p style="font-weight: bold; margin-top: 60px;">H. Ali Musofi,S.Pd.I</p>
    </div>
    <div style="text-align: right;">
        <p>Ketua SPMB</p>
        <p style="font-weight: bold; margin-top: 60px;">H. Maslutfi,S.Pd.</p>
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
        `;
        
        
        let printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Cetak Formulir</title>');
        printWindow.document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write(printContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    });
});