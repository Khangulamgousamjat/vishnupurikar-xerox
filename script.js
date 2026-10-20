const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll(".gallery-grid figure").forEach((figure) => {
  const image = figure.querySelector("img");
  if (image) figure.style.setProperty("--gallery-image", `url("${image.src}")`);
});

const translations = {
  mr: {
    "nav a:nth-of-type(1)": "Services",
    "nav a:nth-of-type(2)": "Our story",
    "nav a:nth-of-type(3)": "Gallery",
    "nav a:nth-of-type(4)": "Contact",
    ".nav-call": "Call करा ↗",
    ".hero-copy .eyebrow": "तुमच्या जवळची document service",
    ".hero-copy h1": "तुमच्या छोट्या कामांना<br><em>neat finishing.</em>",
    ".hero-lede": "Xerox, Print, Binding, Lamination आणि रोजच्या document कामांसाठी एक विश्वासू जागा — आणि गरज असेल तेव्हा personal Insurance guidance.",
    ".button-primary": "Services पहा ↗",
    ".button-quiet": "<img class=\"icon-whatsapp\" src=\"images/whatsapp.svg\" alt=\"\" /> WhatsApp करा",
    ".hero-note span:last-child": "Kaleshwar Kaman जवळ, Vishnupuri, Nanded",
    ".hero-stamp strong": "मदतीसाठी<br>नेहमी तयार",
    ".hero-stamp small": "प्रेमाने, रोज",
    ".hero-card strong": "Local & trusted",
    ".hero-card small": "Printing आणि guidance एकाच ठिकाणी",
    ".trust-grid > span:first-child": "विश्वासाने Print करा",
    ".trust-item:nth-child(2)": "<b>01</b> Clear, quality documents",
    ".trust-item:nth-child(3)": "<b>02</b> Personal assistance",
    ".trust-item:nth-child(4)": "<b>03</b> तुमच्या जवळची service",
    ".services-section .eyebrow": "तुमच्या रोजच्या गरजा",
    ".services-section h2": "एका page पासून<br><em>पुढच्या step पर्यंत.</em>",
    ".services-section .section-intro": "Forms, projects, important papers आणि रोजच्या life-admin साठी लागणारी practical help — सगळं जवळच.",
    ".service-card:nth-child(1) h3": "Xerox & Print",
    ".service-card:nth-child(1) p": "Forms, applications, notes आणि रोजच्या documents साठी clear black-and-white आणि colour printing.",
    ".service-card:nth-child(1) a": "Enquiry करा ↗",
    ".service-card:nth-child(2) h3": "Binding & finishing",
    ".service-card:nth-child(2) p": "School, college, office आणि project papers ना neat finishing देऊन share करण्यासाठी ready करा.",
    ".service-card:nth-child(2) a": "याबद्दल विचारा ↗",
    ".service-card:nth-child(3) h3": "Lamination",
    ".service-card:nth-child(3) p": "Certificates, cards, notices आणि important documents safe, clear आणि durable ठेवण्यासाठी.",
    ".service-card:nth-child(3) a": "याबद्दल विचारा ↗",
    ".service-card:nth-child(4) h3": "Vima seva",
    ".service-card:nth-child(4) p": "Ghansham Vima Seva Kendra येथे Life Insurance guidance साठी clear आणि personal conversation.",
    ".service-card:nth-child(4) a": "बोला ↗",
    ".service-note strong": "काय service हवी आहे हे कळत नाही?",
    ".service-note div > span": "WhatsApp वर photo किंवा message पाठवा — सुरुवात करण्यासाठी आम्ही मदत करू.",
    ".service-note a": "WhatsApp वर विचारा ↗",
    ".shop-details-section .eyebrow": "आमच्या shop मध्ये",
    ".shop-details-section h2": "Fast service,<br><em>affordable rate.</em>",
    ".shop-details-section .section-intro": "Kaleshwar Kaman जवळ, Vishnupuri मध्ये रोजच्या document कामांसाठी लागणाऱ्या सगळ्या services एकाच ठिकाणी.",
    ".detail-card:nth-child(1) h3": "Address",
    ".detail-card:nth-child(1) p": "Near Kaleshwar Kaman, Vishnupuri, Nanded",
    ".detail-card:nth-child(2) h3": "Available services",
    ".detail-card:nth-child(3) h3": "लोक आम्हाला का निवडतात",
    ".detail-card:nth-child(3) p": "Best quality, affordable rates आणि fastest service — सगळीकडच्या ग्राहकांचा विश्वास.",
    ".story-copy .eyebrow": "Vishnupuri मधला ओळखीचा चेहरा",
    ".story-copy h2": "Local help जी<br><em>personal वाटते.</em>",
    ".story-copy > p:not(.eyebrow)": "Vishnupurikar Xerox आणि Ghansham Vima Seva Kendra एका साध्या विचाराने चालतात: practical help personal वाटली पाहिजे. Form भरताना, project print करताना, certificate protect करताना किंवा Insurance guidance घेताना तुम्हाला patient conversation आणि details कडे लक्ष मिळेल.",
    ".story-points span:nth-child(1)": "<b>01</b> रोजच्या paperwork साठी helpful",
    ".story-points span:nth-child(2)": "<b>02</b> Vishnupuri मधली familiar local service",
    ".story-points span:nth-child(3)": "<b>03</b> Clear conversation, no pressure",
    ".signature-block small": "Owner · Vishnupurikar Xerox",
    ".text-link": "भेटायला या ↗",
    ".gallery-heading .eyebrow": "People, place & proof",
    ".gallery-heading h2": "Xerox shop पेक्षा<br><em>थोडं अधिक.</em>",
    ".gallery-heading .section-intro": "आमच्या service मागचे people आणि moments — आणि Insurance work ची ओळख देणारे credential.",
    ".gallery-certificate figcaption": "<strong>Insurance work ची ओळख</strong><span>Certificate of Membership · 2023–2024</span>",
    ".gallery-grid figure:nth-child(2) figcaption": "Insurance work मधील recognition",
    ".gallery-grid figure:nth-child(3) figcaption": "Life insurance event presence",
    ".gallery-grid figure:nth-child(4) figcaption": "Community शी जोडलेले",
    ".contact-copy .eyebrow": "चला, काम सोपं करूया",
    ".contact-copy h2": "Document<br>आहे का?",
    ".contact-copy > p:last-child": "Call करा, WhatsApp करा, mail करा किंवा Kaleshwar Kaman जवळ भेट द्या. Xerox, print, forms आणि document काम आम्ही पटकन करून देतो.",
    ".contact-action:nth-child(1) small": "Call करा",
    ".contact-action:nth-child(1) strong": "96579 31621",
    ".contact-action:nth-child(2) small": "WhatsApp वर message करा",
    ".contact-action:nth-child(2) strong": "Conversation सुरू करा",
    ".contact-action:nth-child(3) small": "Mail करा",
    ".contact-action:nth-child(3) strong": "Vishnupurikarmaroti1@gmail.com",
    ".contact-address small": "पत्ता",
    ".contact-address strong": "Kaleshwar Kaman जवळ,<br>Vishnupuri, Nanded",
    ".footer-grid > div:first-child > p": "Print. Protect. Simplify.",
    ".footer-credit": "Made by Gous Khan",
    ".footer-meta span:first-child": "मराठी <b>·</b> English"
  },
  en: {
    "nav a:nth-of-type(1)": "Services",
    "nav a:nth-of-type(2)": "Our story",
    "nav a:nth-of-type(3)": "Gallery",
    "nav a:nth-of-type(4)": "Contact",
    ".nav-call": "Call us ↗",
    ".hero-copy .eyebrow": "Your neighbourhood document partner",
    ".hero-copy h1": "Small details.<br><em>Done beautifully.</em>",
    ".hero-lede": "One friendly place for printing, copies, binding, lamination and everyday document help — with personal insurance guidance when you need it.",
    ".button-primary": "Explore services ↗",
    ".button-quiet": "<img class=\"icon-whatsapp\" src=\"images/whatsapp.svg\" alt=\"\" /> WhatsApp us",
    ".hero-note span:last-child": "Near Kaleshwar Kaman, Vishnupuri, Nanded",
    ".hero-stamp strong": "Here to help",
    ".hero-stamp small": "with care, every day",
    ".hero-card strong": "Local & trusted",
    ".hero-card small": "Printing and guidance in one place",
    ".trust-grid > span:first-child": "Print with confidence",
    ".trust-item:nth-child(2)": "<b>01</b> Clear, quality documents",
    ".trust-item:nth-child(3)": "<b>02</b> Personal assistance",
    ".trust-item:nth-child(4)": "<b>03</b> Conveniently local",
    ".services-section .eyebrow": "Your everyday essentials",
    ".services-section h2": "From one page<br><em>to the next step.</em>",
    ".services-section .section-intro": "The practical help people need for forms, projects, important papers and life-admin — all close to home.",
    ".service-card:nth-child(1) h3": "Copy & print",
    ".service-card:nth-child(1) p": "Clear black-and-white and colour printing for forms, applications, notes and everyday documents.",
    ".service-card:nth-child(1) a": "Enquire now ↗",
    ".service-card:nth-child(2) h3": "Binding & finishing",
    ".service-card:nth-child(2) p": "Give school, college, office and project papers a neat, finished feel that is ready to share.",
    ".service-card:nth-child(2) a": "Ask about it ↗",
    ".service-card:nth-child(3) h3": "Lamination",
    ".service-card:nth-child(3) p": "Protect certificates, cards, notices and documents you want to keep safe, clear and durable.",
    ".service-card:nth-child(3) a": "Ask about it ↗",
    ".service-card:nth-child(4) h3": "Vima seva",
    ".service-card:nth-child(4) p": "Visit Ghansham Vima Seva Kendra for a clear, personal conversation about life insurance guidance.",
    ".service-card:nth-child(4) a": "Talk to us ↗",
    ".service-note strong": "Not sure what you need?",
    ".service-note div > span": "Send a photo or message on WhatsApp — we’ll help you get started.",
    ".service-note a": "Ask us on WhatsApp ↗",
    ".shop-details-section .eyebrow": "At our shop",
    ".shop-details-section h2": "Fast service,<br><em>affordable rate.</em>",
    ".shop-details-section .section-intro": "Everything you need for daily document work in one place near Kaleshwar Kaman, Vishnupuri.",
    ".detail-card:nth-child(1) h3": "Address",
    ".detail-card:nth-child(1) p": "Near Kaleshwar Kaman, Vishnupuri, Nanded",
    ".detail-card:nth-child(2) h3": "Available services",
    ".detail-card:nth-child(3) h3": "Why people choose us",
    ".detail-card:nth-child(3) p": "Best quality, affordable rates, and fastest service — trusted by customers from everywhere.",
    ".story-copy .eyebrow": "A familiar face in Vishnupuri",
    ".story-copy h2": "Local help that<br />feels <em>personal.</em>",
    ".story-copy > p:not(.eyebrow)": "Vishnupurikar Xerox and Ghansham Vima Seva Kendra are built around a simple idea: practical help should feel personal. Whether you are preparing a form, printing a project, protecting a certificate or looking for insurance guidance, you can expect a patient conversation and careful attention to the details.",
    ".story-points span:nth-child(1)": "<b>01</b> Helpful with everyday paperwork",
    ".story-points span:nth-child(2)": "<b>02</b> A familiar local service in Vishnupuri",
    ".story-points span:nth-child(3)": "<b>03</b> Clear conversations, no pressure",
    ".signature-block small": "Owner · Vishnupurikar Xerox",
    ".text-link": "Come say hello ↗",
    ".gallery-heading .eyebrow": "People, place & proof",
    ".gallery-heading h2": "A little more<br><em>than a xerox shop.</em>",
    ".gallery-heading .section-intro": "See the people and moments behind our service — and the credential that reflects our insurance work.",
    ".gallery-certificate figcaption": "<strong>Recognised insurance work</strong><span>Certificate of Membership · 2023–2024</span>",
    ".gallery-grid figure:nth-child(2) figcaption": "Recognition in insurance work",
    ".gallery-grid figure:nth-child(3) figcaption": "Life insurance event presence",
    ".gallery-grid figure:nth-child(4) figcaption": "Rooted in the community",
    ".contact-copy .eyebrow": "Let’s make it easy",
    ".contact-copy h2": "Have a document<br />in mind?",
    ".contact-copy > p:last-child": "Call, WhatsApp, mail or visit us near Kaleshwar Kaman. We’ll help you with Xerox, print, forms and document work quickly.",
    ".contact-action:nth-child(1) small": "Give us a call",
    ".contact-action:nth-child(1) strong": "96579 31621",
    ".contact-action:nth-child(2) small": "Message on WhatsApp",
    ".contact-action:nth-child(2) strong": "Start a conversation",
    ".contact-action:nth-child(3) small": "Mail us",
    ".contact-action:nth-child(3) strong": "Vishnupurikarmaroti1@gmail.com",
    ".contact-address small": "Find us",
    ".contact-address strong": "Near Kaleshwar Kaman,<br />Vishnupuri, Nanded",
    ".footer-grid > div:first-child > p": "Print. Protect. Simplify.",
    ".footer-credit": "Made by Gous Khan",
    ".footer-meta span:first-child": "English <b>·</b> मराठी"
  }
};

function setLanguage(language) {
  const content = translations[language];
  if (!content) return;
  Object.entries(content).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  });
  document.documentElement.lang = language === "mr" ? "mr" : "en";
  document.body.classList.toggle("marathi-mode", language === "mr");
  document.querySelectorAll(".language-option").forEach((option) => {
    option.classList.toggle("is-active", option.dataset.language === language);
  });
  localStorage.setItem("preferred-language", language);
}

document.querySelectorAll(".language-option").forEach((option) => {
  option.addEventListener("click", () => setLanguage(option.dataset.language));
});

setLanguage(localStorage.getItem("preferred-language") || "en");
