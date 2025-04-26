export async function sendEmail(to: string, subject: string, text: string) {
    console.log('Mengirim email...');
    console.log('Kepada:', to);
    console.log('Judul:', subject);
    console.log('Isi:', text);
    
    // Ini hanya simulasi console.log.
    // Kalau mau produksi beneran, kamu perlu pakai nodemailer atau layanan email seperti SendGrid.
  
    return true;
  }
  