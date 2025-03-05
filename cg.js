document.getElementById('content-generator-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const category = document.getElementById('category').value;
  const style = document.getElementById('style').value;
  const authorStyle = document.getElementById('author-style').value;
  const about = document.getElementById('about').value;
  const area = document.getElementById('area').value;
  const wordCount = document.getElementById('word-count').value;
  const keywords = document.getElementById('keywords').value;

  // Generate prompt
  const prompt = `Buatkan saya ${category} ${style} dengan gaya penulisan ${authorStyle} tentang ${about} di ${area}, ${wordCount} kata dengan kata kunci ${keywords}.`;

  // Display prompt
  document.getElementById('generated-prompt').textContent = prompt;
  document.getElementById('output').classList.remove('hidden');
});

// Copy to Clipboard Functionality
document.getElementById('copy-button').addEventListener('click', function () {
  const promptText = document.getElementById('generated-prompt').textContent;

  // Use Clipboard API to copy text
  navigator.clipboard.writeText(promptText).then(() => {
    alert('Prompt berhasil disalin ke clipboard!');
  }).catch((err) => {
    console.error('Gagal menyalin teks: ', err);
  });
});
