window.onload = () => {
  
  const input = document.querySelector('.input');
  const copyButton = document.querySelector('.btn-copy');
  copyButton.addEventListener('click', () => {
    // value input 
    const value = input.value.trim();
    // jika input kosong
    if (!value) return alert('field is empty!');
    // jalankan fungsi copy()
    copyText();
  });
  
  function copyText() {
    // ambil value input
    input.select();
    // salin teks 
    document.execCommand('copy');
    // tampilkan pesan berhasil disalin
    alert('text has been copied!');
  }
  
}