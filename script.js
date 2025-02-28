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
    toggleFooter(); // Ensure footer is hidden after navigation, but allow it to be toggled
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
        },
        ar: {
            home: "محول العملات - قم بتحويل عملة أي بلد بسهولة.",
            tools: "أفضل حاسبة تحويل العملات وأسعار الصرف. 200+ دولة مدعومة، أسعار مباشرة ودعم عملات متعددة.",
            services: "أسعار الصرف الحية، التحويل الفوري، الدعم متعدد اللغات. قارن بين العملات المختلفة وشاهد اتجاهات السوق الحية.",
            privacy: "لا نجمع أو نحفظ أو نشارك أي بيانات مستخدم. منصة تبادل العملات 100% آمنة وخاصة.",
            about: "هذا موقع ويب مجاني لتحويل العملات يوفر أسعار الصرف الحية. قم بتحويل عملة أي بلد فوراً.",
            contact: "لأي استفسارات، تواصل معنا على support@stylishcurrencyconverter.com"
        },
        zh: {
            home: "货币转换器主页 - 轻松转换任何国家的货币。",
            tools: "最佳货币转换和汇率计算器。支持200+国家，实时汇率和多货币支持。",
            services: "实时汇率，立即转换，多语言支持。比较不同货币并查看实时市场趋势。",
            privacy: "我们不收集、存储或分享任何用户数据。100％安全和私密的货币交换平台。",
            about: "这是一个免费的货币转换网站，提供实时汇率。立即将任何国家的货币转换为其他货币。",
            contact: "如有任何疑问，请联系我们 support@stylishcurrencyconverter.com"
        },
        ru: {
            home: "Конвертер валют - Легко конвертируйте валюту любой страны.",
            tools: "Лучший калькулятор конвертации валют и обменных курсов. Поддержка 200+ стран, живые курсы и мультивалютная поддержка.",
            services: "Живые курсы обмена, мгновенная конвертация, поддержка множества языков. Сравните разные валюты и посмотрите живые рыночные тенденции.",
            privacy: "Мы не собираем, не храним и не делимся никакими данными пользователя. 100% безопасная и приватная платформа обмена валют.",
            about: "Это бесплатный веб-сайт конвертации валют, предоставляющий живые курсы обмена. Мгновенно конвертируйте валюту любой страны в другую.",
            contact: "Для любых вопросов, свяжитесь с нами по support@stylishcurrencyconverter.com"
        },
        pt: {
            home: "Conversor de Moedas - Converta facilmente a moeda de qualquer país.",
            tools: "Melhor calculadora de conversão de moeda e taxas de câmbio. Suporte para 200+ países, taxas ao vivo e suporte multimoeda.",
            services: "Taxas de câmbio ao vivo, conversão instantânea, suporte multilíngue. Compare diferentes moedas e veja tendências de mercado ao vivo.",
            privacy: "Não coletamos, armazenamos nem compartilhamos dados de usuário. Plataforma de troca de moedas 100% segura e privada.",
            about: "Este é um site gratuito de conversão de moedas que fornece taxas de câmbio ao vivo. Converta a moeda de qualquer país instantaneamente.",
            contact: "Para qualquer dúvida, entre em contato conosco em support@stylishcurrencyconverter.com"
        }
        // Add more languages (e.g., German, Italian, Japanese, etc.) for global coverage
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
