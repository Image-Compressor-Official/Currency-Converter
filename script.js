// Toggle mobile menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Toggle footer section details
function toggleFooterSection(sectionId) {
    const content = document.getElementById(`${sectionId}-details`);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// Currency Conversion Logic
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
                alert('Currency not supported by API.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch rates. Check your connection.');
        });
});

// Swap Currencies
document.getElementById('swap-currencies').addEventListener('click', () => {
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
});
