const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCodes = ['saathi', 'bubu', 'babe', 'baby', 'sweetheart', 'sweetu', 'sathi', 'munai', 'my love', 'my world']; // Add multiple secret names
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim().toLowerCase();
    
    if (secretCodes.includes(userInput)) {
        resultDiv.innerHTML = 'Baby';
        window.location.href = nextPageUrl; // Redirect to new page
    } else {
        resultDiv.innerHTML = 'না না, তুমি তো আমার বেব না! তাহলে কে তুমি? আমার প্রেমের রাজ্যে অনধিকার প্রবেশ করেছো? কোথায় আমার বেব?';
		resultDiv.style.color = 'red';
        resultDiv.style.fontWeight = 'bold';
        resultDiv.style.backgroundColor = '#ffdada';
        resultDiv.style.border = '2px solid red';
        resultDiv.style.padding = '10px';
        resultDiv.style.borderRadius = '5px';
        resultDiv.style.textAlign = 'center';
        resultDiv.style.marginBottom = '10px';
        resultDiv.style.animation = 'fadeIn 0.5s ease-in-out';
	}
});
