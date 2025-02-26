function cetakKartu(nama, nisn, tempatLahir, tanggalLahir, jenisKelamin, kelas, jurusan, angkatan) {
    const printWindow = window.open('', '', 'height=1000,width=850');
    const today = new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    printWindow.document.write(`
        <html>
        <head>
            <title>Surat Keterangan Aktif Siswa</title>
            <style>
                @page {
                    size: F4;  /* 215.9mm x 330mm */
                    margin: 0;
                }
                body {
                    font-family: Times New Roman, serif;
                    margin: 3cm 2.5cm 2.5cm 2.5cm;
                    line-height: 1.5;
                    background: white;
                }
                .kop-surat {
                    display: flex;
                    align-items: center;
                    text-align: center;
                    border-bottom: 3px solid black;
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                    position: relative;
                }
                .logo-container {
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                .logo {
                    width: 90px;
                    height: auto;
                }
                .kop-text {
                    flex: 1;
                }
                .kop-text h1 {
                    font-size: 20px;
                    margin: 5px 0;
                }
                .kop-text h2 {
                    font-size: 22px;
                    margin: 5px 0;
                    font-weight: bold;
                }
                .kop-text p {
                    font-size: 14px;
                    margin: 3px 0;
                }
                .nomor-surat {
                    text-align: center;
                    margin: 30px 0;
                }
                .content {
                    margin: 20px 0;
                }
                .content p {
                    margin: 8px 0;
                }
                .tandatangan {
                    margin-top: 40px;
                    float: right;
                    text-align: center;
                    width: 250px;
                }
                .spacer {
                    height: 80px;
                }
                .label {
                    display: inline-block;
                    width: 180px;
                }
                .titik-dua {
                    display: inline-block;
                    width: 20px;
                    text-align: center;
                }
                @media print {
                    @page {
                        size: F4;
                        margin: 0;
                    }
                    body {
                        margin: 3cm 2.5cm 2.5cm 2.5cm;
                    }
                }
            </style>
        </head>
        <body>
            <div class="kop-surat">
                <div class="logo-container">
                    <img src="logo.png" alt="Logo Sekolah" class="logo">
                </div>
                <div class="kop-text">
                    <h1>YAYASAN AMANTUS SOLIKHA</h1>
                    <h2>SMK HASYIM ASY'ARI BOJONG</h2>
                    <p><strong>PROGRAM STUDI:</strong></p>
                    <p>TEKNIK KOMPUTER DAN JARINGAN - AKUNTANSI DAN KEUANGAN LEMBAGA</p>
                    <p>Alamat: Jl. Raya Babakan Tuwel, Kec. Bojong, Kab. Tegal, Jawa Tengah KP: 52465</p>
                    <p>Telp: (0283) 4690167 | Email: infosmkhasyimasyaribojong@gmail.com</p>
                </div>
            </div>

            <div class="nomor-surat">
                <h2><u>SURAT KETERANGAN AKTIF SISWA</u></h2>
                <p>Nomor: ...../SMK.HA/III/2025</p>
            </div>

            <div class="content">
                <p>Yang bertanda tangan di bawah ini:</p>
                <p><span class="label">Nama</span><span class="titik-dua">:</span>H. Ali Musofi, S.Pd.I</p>
                <p><span class="label">NIPY</span><span class="titik-dua">:</span>-</p>
                <p><span class="label">Jabatan</span><span class="titik-dua">:</span>Kepala Sekolah</p>
                
                <p style="margin-top: 20px;">Menerangkan dengan sesungguhnya bahwa:</p>
                <p><span class="label">Nama</span><span class="titik-dua">:</span>${nama}</p>
                <p><span class="label">Tempat/Tgl. Lahir</span><span class="titik-dua">:</span>${tempatLahir}, ${tanggalLahir}</p>
                <p><span class="label">Kelas</span><span class="titik-dua">:</span>${kelas}</p>
                <p><span class="label">NIS/NISN</span><span class="titik-dua">:</span>${nisn}</p>
                <p><span class="label">Jurusan</span><span class="titik-dua">:</span>${jurusan}</p>
                
                <p style="margin-top: 20px; text-align: justify;">
                    Benar nama tersebut di atas adalah peserta didik aktif pada SMK Hasyim Asy'ari Bojong Tahun Pelajaran 2024/2025.
                </p>
                
                <p style="text-align: justify;">
                    Demikian surat keterangan ini dibuat dengan sebenarnya untuk dapat dipergunakan sebagaimana mestinya.
                </p>
            </div>

            <div class="tandatangan">
                <p>Bojong, ${today}</p>
                <p>Kepala Sekolah</p>
                <div class="spacer"></div>
                <p><u>H. Ali Musofi, S.Pd.I</u></p>
                <p>NIPY. -</p>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

function unduhKartu(nama, nisn, tempatLahir, tanggalLahir, jenisKelamin, kelas, jurusan, angkatan) {
    const { jsPDF } = window.jspdf;
    // Create new PDF with F4 size (in mm)
    const doc = new jsPDF({
        format: [215.9, 330], // F4 size in mm
        unit: 'mm'
    });

    const today = new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // Add logo
    try {
        doc.addImage('logo.png', 'PNG', 20, 20, 25, 25); // Adjust position and size as needed
    } catch (error) {
        console.log('Logo could not be loaded:', error);
    }

    // Set font size and style
    doc.setFont('times', 'normal');
    
    // Header - adjusted positions for F4
    doc.setFontSize(16);
    doc.text('YAYASAN AMANTUS SOLIKHA', 107.95, 25, { align: 'center' });
    doc.setFontSize(18);
    doc.text('SMK HASYIM ASY\'ARI BOJONG', 107.95, 32, { align: 'center' });
    doc.setFontSize(12);
    doc.text('PROGRAM STUDI:', 107.95, 39, { align: 'center' });
    doc.text('TEKNIK KOMPUTER DAN JARINGAN - AKUNTANSI DAN KEUANGAN LEMBAGA', 107.95, 45, { align: 'center' });
    doc.text('Alamat: [Alamat Lengkap Sekolah]', 107.95, 51, { align: 'center' });
    doc.text('Telp: [Nomor Telepon] | Email: [Email Sekolah]', 107.95, 57, { align: 'center' });

    // Line under header
    doc.line(20, 65, 195.9, 65);
    doc.line(20, 66, 195.9, 66);

    // Title
    doc.setFontSize(14);
    doc.text('SURAT KETERANGAN AKTIF SISWA', 107.95, 80, { align: 'center' });
    doc.setFontSize(12);
    doc.text('Nomor: SMK.HA/...../...../2025', 107.95, 87, { align: 'center' });

    // Content - adjusted for F4
    doc.setFontSize(12);
    doc.text('Yang bertanda tangan di bawah ini:', 20, 100);
    doc.text('Nama', 20, 110);
    doc.text(': H. Ali Musofi, S.Pd.I', 70, 110);
    doc.text('NIP', 20, 117);
    doc.text(': 196901011995121001', 70, 117);
    doc.text('Jabatan', 20, 124);
    doc.text(': Kepala Sekolah', 70, 124);

    doc.text('Menerangkan dengan sesungguhnya bahwa:', 20, 138);
    doc.text('Nama', 20, 145);
    doc.text(`: ${nama}`, 70, 145);
    doc.text('Tempat/Tgl. Lahir', 20, 152);
    doc.text(`: ${tempatLahir}, ${tanggalLahir}`, 70, 152);
    doc.text('Kelas', 20, 159);
    doc.text(`: ${kelas}`, 70, 159);
    doc.text('NIS/NISN', 20, 166);
    doc.text(`: ${nisn}`, 70, 166);
    doc.text('Jurusan', 20, 173);
    doc.text(`: ${jurusan}`, 70, 173);

    // Main paragraph - adjusted for F4
    const paragraph = `Benar nama tersebut di atas adalah peserta didik aktif pada SMK Hasyim Asy'ari Bojong Tahun Pelajaran 2023/2024.`;
    const paragraph2 = `Demikian surat keterangan ini dibuat dengan sebenarnya untuk dapat dipergunakan sebagaimana mestinya.`;
    
    doc.text(paragraph, 20, 190, { maxWidth: 170 });
    doc.text(paragraph2, 20, 205, { maxWidth: 170 });

    // Signature - adjusted for F4
    doc.text(`Bojong, ${today}`, 130, 230);
    doc.text('Kepala Sekolah,', 130, 237);
    doc.text('H. Ali Musofi, S.Pd.I', 130, 267);
    doc.text('NIPY. - ', 130, 274);

    doc.save(`Surat_Keterangan_${nama}.pdf`);
}