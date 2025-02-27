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

// Currency Conversion Logic (Using ExchangeRate-API or similar)
document.getElementById('convert-btn').addEventListener('click', () => {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('from-amount').value;
    const toAmount = document.getElementById('to-amount');

    // Simulate API call (replace with real API)
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            if (rate) {
                const convertedAmount = (amount * rate).toFixed(2);
                toAmount.value = convertedAmount;
                document.getElementById('rate-info').textContent = `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency} (Updated now)`;
            } else {
                alert('Currency not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
            alert('Failed to fetch exchange rates. Check your internet connection.');
        });
});

// Swap Currencies
document.getElementById('swap-currencies').addEventListener('click', () => {
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
    convertCurrencies(); // Re-run conversion
});

// Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
        if (window.innerWidth < 768) {
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});
