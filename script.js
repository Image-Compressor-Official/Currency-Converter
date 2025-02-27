// मोबाइल मेन्यू टॉगल करना
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// फूटर सेक्शन टॉगल करना
function toggleFooterSection(sectionId) {
    const content = document.getElementById(sectionId);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// मुद्रा परिवर्तन लॉजिक
document.getElementById('convert-btn').addEventListener('click', () => {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('from-amount').value;
    const toAmount = document.getElementById('to-amount');

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            if (rate) {
                const convertedAmount = (amount * rate).toFixed(2);
                toAmount.value = convertedAmount;
                document.getElementById('rate-info').textContent = `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
            } else {
                alert('API द्वारा यह मुद्रा समर्थित नहीं है।');
            }
        })
        .catch(error => {
            console.error('त्रुटि:', error);
            alert('दरें प्राप्त करने में विफल। अपनी कनेक्शन जाँच करें।');
        });
});

// मुद्राएँ स्वैप करना
document.getElementById('swap-currencies').addEventListener('click', () => {
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
});
