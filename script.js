// Toggle Navigation Menu (Auto-Hide)
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
}

// Toggle Footer (Auto-Hide)
function toggleFooter() {
    const footer = document.getElementById('footer');
    footer.classList.toggle('active');
}

// Navigate to Section (Auto-Hide)
function navigate(sectionId, hideMenu = false) {
    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    if (hideMenu) toggleMenu(); // Close menu after navigation
    toggleFooter(); // Ensure footer is hidden after navigation
}

// Currency Converter
document.getElementById('convert-btn').addEventListener('click', convertCurrency);

async function convertCurrency() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('from-amount').value;

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const result = (amount * rate).toFixed(2);
        document.getElementById('to-amount').value = result;
        document.getElementById('last-update').textContent = new Date(data.date).toLocaleDateString();
    } catch (error) {
        alert('Error fetching exchange rates. Please try again later.');
        console.error(error);
    }
}

// Multi-Language Support
function initMultiLanguage() {
    const languageSelector = document.querySelector('.language-selector select');
    changeLanguage(languageSelector.value); // Set initial language
}

function changeLanguage(lang) {
    const translations = {
        en: {
            home: "Currency Converter Home - Convert Any Country’s Currency Easily.",
            tools: "Best Currency Conversion & Exchange Rate Calculator. 200+ Countries Supported, Live Rates & Multi-Currency Support.",
            services: "Live Exchange Rates, Instant Conversion, Multi-Language Support. Compare Different Currencies & See Live Market Trends.",
            privacy: "We Do Not Collect, Store, or Share Any User Data. 100% Secure & Private Currency Exchange Platform.",
            about: "This is a Free Currency Converter Website That Provides Live Exchange Rates. Convert Any Country's Currency to Another Instantly.",
            contact: "For Any Queries, Contact Us at support@stylishcurrencyconverter.com"
        },
        es: {
            home: "Conversor de Monedas - Convierta fácilmente la moneda de cualquier país.",
            tools: "Mejor calculadora de conversión de moneda y tasas de cambio. 200+ países soportados, tasas en vivo y soporte multimoneda.",
            services: "Tasas de cambio en vivo, conversión instantánea, soporte multilingüe. Compare diferentes monedas y vea tendencias de mercado en vivo.",
            privacy: "No recopilamos, almacenamos ni compartimos datos de usuario. Plataforma de intercambio de divisas 100% segura y privada.",
            about: "Este es un sitio web gratuito de conversión de monedas que proporciona tasas de cambio en vivo. Convierta la moneda de cualquier país instantáneamente.",
            contact: "Para cualquier consulta, contáctenos en support@stylishcurrencyconverter.com"
        },
        hi: {
            home: "मुद्रा परिवर्तक होम - किसी भी देश की मुद्रा को आसानी से परिवर्तित करें।",
            tools: "सर्वश्रेष्ठ मुद्रा परिवर्तन और विनिमय दर कैलकुलेटर। 200+ देश समर्थित, लाइव रेट्स और मल्टि-करेंसी सपोर्ट।",
            services: "लाइव एक्सचेंज रेट्स, तत्काल परिवर्तन, मल्टि-भाषा सपोर्ट। विभिन्न मुद्राओं की तुलना करें और लाइव मार्केट ट्रेंड्स देखें।",
            privacy: "हम उपयोगकर्ता डेटा को न तो एकत्र करते हैं, न स्टोर करते हैं, और न ही साझा करते हैं। 100% सुरक्षित और निजी मुद्रा विनिमय मंच।",
            about: "यह एक मुफ्त मुद्रा परिवर्तक वेबसाइट है जो लाइव एक्सचेंज रेट्स प्रदान करती है। किसी भी देश की मुद्रा को तुरंत परिवर्तित करें।",
            contact: "किसी भी प्रश्न के लिए, support@stylishcurrencyconverter.com पर संपर्क करें"
        },
        fr: {
            home: "Convertisseur de Devise - Convertissez facilement la monnaie de n'importe quel pays.",
            tools: "Meilleur calculateur de conversion de devises et taux de change. 200+ pays pris en charge, taux en direct et support multi-devises.",
            services: "Taux de change en direct, conversion instantanée, support multilingue. Comparez différentes devises et consultez les tendances de marché en direct.",
            privacy: "Nous ne collectons, ne stockons ni ne partageons aucune donnée utilisateur. Plateforme d'échange de devises 100% sécurisée et privée.",
            about: "C'est un site web gratuit de conversion de devises qui fournit des taux de change en direct. Convertissez la monnaie de n'importe quel pays instantanément.",
            contact: "Pour toute question, contactez-nous à support@stylishcurrencyconverter.com"
        }
        // Extend for all global languages as needed
    };

    const sections = {
        home: document.querySelector('#home h2'),
        converter: document.querySelector('#converter h2 + p'),
        services: document.querySelector('#services p'),
        privacy: document.querySelector('#privacy p'),
        about: document.querySelector('#about p'),
        contact: document.querySelector('#contact p')
    };

    for (let section in sections) {
        if (translations[lang][section]) {
            sections[section].textContent = translations[lang][section];
        }
    }
}

// Initialize Multi-Language Support
initMultiLanguage();

// Initial Load
navigate('home', false);
