// Mobile Navigation Toggle
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

  document.addEventListener("click", (e) => {
    if (mainNav.classList.contains("is-open")) {
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
}

// Current Year
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Gallery Image Setup
document.querySelectorAll(".gallery-grid figure").forEach((figure) => {
  const image = figure.querySelector("img");
  if (image) figure.style.setProperty("--gallery-image", `url("${image.src}")`);
});

// Translation Dictionary (Marathi Default <-> English) - Professional, No Cartoon Emojis
const translations = {
  mr: {
    langButtonText: "English Version",
    "nav a.nav-link:nth-of-type(1)": "सेवा",
    "nav a.nav-link:nth-of-type(2)": "आमची माहिती",
    "nav a.nav-link:nth-of-type(3)": "गॅलरी",
    "nav a.nav-link:nth-of-type(4)": "पत्ता व संपर्क",
    ".developer-link": "डेव्हलपर",
    ".nav-call": "कॉल करा <span>↗</span>",

    ".hero-copy .eyebrow": "<span></span> विष्णुपूरीतील आपले विश्वासू केंद्र",
    ".hero-copy h1": "कागदपत्रांची प्रत्येक गरज.<br /><em>अचूक आणि दर्जेदार.</em>",
    ".hero-lede": "झेरॉक्स, कलर प्रिंट, लॅमिनेशन, स्पायरल बाईंडिंग, सर्व प्रकारचे ऑनलाइन फॉर्म्स आणि एलआयसी (LIC) विमा सल्ला — विष्णुपूरीमध्ये एकाच ठिकाणी हक्काची आणि आपुलकीची सेवा.",
    ".button-location .btn-text": "दुकानाचा थेट रस्ता (Google Maps)",
    ".button-whatsapp .btn-text": "व्हॉट्सअ‍ॅपवर मेसेज करा",
    ".button-quiet .btn-text": "आमच्या सर्व सेवा",
    ".hero-map-link > span:first-child": "काळेश्वर कमान जवळ, विष्णुपूरी, नांदेड",
    ".map-badge": "थेट स्थान (Live Pin) ↗",
    ".hero-stamp strong": "आपल्या सेवेसाठी",
    ".hero-stamp small": "सदैव तत्पर",
    ".hero-card strong": "स्थानिक व विश्वासू",
    ".hero-card small": "प्रिंटिंग आणि विमा मार्गदर्शन एकाच ठिकाणी",

    ".trust-grid > span:first-child": "विश्वासाने प्रिंट करा",
    ".trust-item:nth-child(2)": "<b>०१</b> सुस्पष्ट व दर्जेदार प्रिंटिंग",
    ".trust-item:nth-child(3)": "<b>०२</b> प्रत्येक कामात वैयक्तिक मदत",
    ".trust-item:nth-child(4)": "<b>०३</b> काळेश्वर कमान जवळ हक्काचे दुकान",

    ".services-section .eyebrow": "<span></span> आपल्या रोजच्या गरजा",
    ".services-section h2": "पहिल्या पानापासून<br /><em>पूर्ण कामापर्यंत.</em>",
    ".services-section .section-intro": "शासकीय फॉर्म्स, कॉलेज प्रोजेक्ट्स, महत्त्वाची कागदपत्रे आणि दैनंदिन कामांसाठी हक्काची मदत — सर्वकाही जवळच.",
    ".service-card:nth-child(1) h3": "सर्वोत्तम झेरॉक्स &amp; प्रिंट",
    ".service-card:nth-child(1) p": "सुस्पष्ट ब्लॅक &amp; व्हाईट व कलर झेरॉक्स, ग्रीन पेज / लेजर प्रिंट, बॉन्ड पेपर प्रिंट आणि फोटो पेपरवर सर्वोत्तम दर्जाची फोटो प्रिंट.",
    ".service-card:nth-child(1) a": "चौकशी करा <span>↗</span>",
    ".service-card:nth-child(2) h3": "स्पायरल बाईंडिंग",
    ".service-card:nth-child(2) p": "शाळा, कॉलेज, ऑफिस आणि प्रोजेक्ट रिपोर्टसाठी आकर्षक, टिकाऊ आणि सुबक स्पायरल बाईंडिंग व फिनिशिंग सुविधा.",
    ".service-card:nth-child(2) a": "याबद्दल विचारा <span>↗</span>",
    ".service-card:nth-child(3) h3": "लॅमिनेशन",
    ".service-card:nth-child(3) p": "कोणत्याही आकाराचे लॅमिनेशन — लहान कार्ड साईज, A4 ते थेट A3 आकारापर्यंत महत्त्वाची कागदपत्रे व प्रमाणपत्रांचे उत्तम लॅमिनेशन.",
    ".service-card:nth-child(3) a": "याबद्दल विचारा <span>↗</span>",
    ".service-card:nth-child(4) h3": "आयडी कार्ड मेकर &amp; डुप्लिकेटर",
    ".service-card:nth-child(4) p": "नवीन ओळखपत्र तयार करणे आणि डुप्लिकेट आयडी कार्ड — उत्कृष्ट कागदी प्रिंट व मजबूत लॅमिनेशनसह (लॅमिनेटेड कार्ड्स).",
    ".service-card:nth-child(4) a": "याबद्दल विचारा <span>↗</span>",
    ".service-card:nth-child(5) h3": "विंडोज इन्स्टॉलर &amp; पीसी सेवा",
    ".service-card:nth-child(5) p": "नवीन विंडोज इन्स्टॉलेशन, आवश्यक सॉफ्टवेअर व ड्रायव्हर्स सेटअप, ऑनलाइन फॉर्म भरणे आणि हाय-क्वालिटी स्कॅनिंग.",
    ".service-card:nth-child(5) a": "याबद्दल विचारा <span>↗</span>",
    ".service-card:nth-child(6) h3": "घनश्याम विमा सेवा केंद्र",
    ".service-card:nth-child(6) p": "भारतीय जीवन विमा निगम (LIC) ची संपूर्ण माहिती, नवीन पॉलिसी, हप्ता भरणे व मार्गदर्शन यासाठी स्पष्ट व प्रामाणिक सल्ला.",
    ".service-card:nth-child(6) a": "सल्ला घ्या <span>↗</span>",
    ".service-note strong": "काय काम हवे आहे हे समजत नाही?",
    ".service-note div > span": "व्हॉट्सअ‍ॅपवर फोटो किंवा मेसेज पाठवा — आम्ही तुम्हाला लगेच मदत करू.",
    ".service-note a": "व्हॉट्सअ‍ॅपवर विचारा <span>↗</span>",
    ".showcase-card:nth-child(1) strong": "उत्कृष्ट झेरॉक्स, ग्रीन पेज &amp; बॉन्ड प्रिंट",
    ".showcase-card:nth-child(1) small": "कलर, लेजर व फोटो पेपरवर सर्वोत्तम प्रिंटिंग",
    ".showcase-card:nth-child(2) strong": "सुबक स्पायरल बाईंडिंग व फिनिशिंग",
    ".showcase-card:nth-child(2) small": "शाळा, कॉलेज, ऑफिस व प्रोजेक्ट रिपोर्ट्ससाठी",
    ".showcase-card:nth-child(3) strong": "कार्ड ते A3 साईजपर्यंत मजबूत लॅमिनेशन",
    ".showcase-card:nth-child(3) small": "प्रमाणपत्रे, गुणपत्रिका व महत्त्वाची ओळखपत्रे सुरक्षित",

    ".shop-details-section .eyebrow": "<span></span> आमच्या दुकानात",
    ".shop-details-section h2": "जलद सेवा,<br /><em>वाजवी दर.</em>",
    ".shop-details-section .section-intro": "काळेश्वर कमान जवळ, विष्णुपूरी येथे सर्व प्रकारच्या कागदपत्रांच्या कामासाठी एकाच छताखाली सोय.",
    ".detail-card:nth-child(1) h3": "पत्ता",
    ".detail-card:nth-child(1) p": "काळेश्वर कमान जवळ, विष्णुपूरी, नांदेड - ४३१६०६",
    ".detail-card:nth-child(1) a": "<span>थेट रस्ता पहा (Google Maps) ↗</span>",
    ".detail-card:nth-child(2) h3": "उपलब्ध सेवा",
    "#shop-services-list": "<li>सर्वोत्तम दर्जाची झेरॉक्स (ब्लॅक &amp; व्हाईट आणि कलर)</li><li>ग्रीन पेज / लेजर प्रिंटिंग (Green Page &amp; Ledger Print)</li><li>बॉन्ड पेपर प्रिंटिंग (Bond Paper Print)</li><li>फोटो पेपरवर उत्कृष्ट दर्जाची फोटो प्रिंट (Photo Paper Print)</li><li>सुबक स्पायरल बाईंडिंग (शाळा, कॉलेज, ऑफिस व प्रोजेक्ट्स)</li><li>सर्व आकाराचे लॅमिनेशन — कार्ड साईज, A4 ते A3 साईजपर्यंत</li><li>आयडी कार्ड मेकर आणि आयडी कार्ड डुप्लिकेटर (प्रिंट व लॅमिनेशन)</li><li>विंडोज इन्स्टॉलेशन आणि सॉफ्टवेअर / ड्रायव्हर्स सेटअप</li><li>सर्व प्रकारचे ऑनलाइन सरकारी व शैक्षणिक फॉर्म भरणे</li><li>हाय-रिझोल्यूशन डॉक्युमेंट स्कॅनिंग (PDF)</li><li>घनश्याम विमा सेवा केंद्र (LIC जीवन विमा सल्ला व मार्गदर्शन)</li>",
    ".detail-card:nth-child(3) h3": "ग्राहक आम्हाला का निवडतात?",
    ".detail-card:nth-child(3) p": "सर्वोत्तम दर्जा, परवडणारे वाजवी दर आणि सर्वात वेगवान सेवा — विष्णुपूरी व परिसरातील नागरिकांचा दृढ विश्वास.",

    ".story-copy .eyebrow": "<span></span> विष्णुपूरीतील ओळखीचा चेहरा",
    ".story-copy h2": "स्थानिक मदत, जी<br />वाटते <em>आपुलकीची.</em>",
    ".story-copy > p:not(.eyebrow)": "विष्णुपूरिकर झेरॉक्स आणि घनश्याम विमा सेवा केंद्र एका साध्या विश्वासावर सुरू आहे: लोकांना मिळणारी मदत ही केवळ व्यावसायिक न राहता आपुलकीची असावी. कोणताही फॉर्म भरताना, प्रोजेक्ट प्रिंट करताना, प्रमाणपत्र सुरक्षित करताना किंवा विम्याबद्दल मार्गदर्शन घेताना तुम्हाला नेहमी शांतपणे ऐकून घेऊन अचूक काम करून दिले जाईल.",
    ".story-points span:nth-child(1)": "<b>०१</b> रोजच्या सर्व कागदपत्रांसाठी तत्पर मदत",
    ".story-points span:nth-child(2)": "<b>०२</b> विष्णुपूरी परिसरातील विश्वासू स्थानिक सेवा",
    ".story-points span:nth-child(3)": "<b>०३</b> पारदर्शक व्यवहार आणि योग्य मार्गदर्शन",
    ".signature-block strong": "मारोती माणिकराव विष्णुपूरिकर",
    ".signature-block small": "संचालक · विष्णुपूरिकर झेरॉक्स व घनश्याम विमा सेवा केंद्र",
    ".text-link": "भेटायला नक्की या <span>↗</span>",

    ".gallery-heading .eyebrow": "<span></span> आपुलकी, काम आणि विश्वास",
    ".gallery-heading h2": "केवळ झेरॉक्स दुकान नाही,<br /><em>तर एक विश्वासू नाते.</em>",
    ".gallery-heading .section-intro": "आमच्या कामाची झलक, लोकांचा स्नेह आणि विमा क्षेत्रातील अधिकृत सन्मान.",
    ".gallery-certificate figcaption": "<strong>अधिकृत विमा कार्य सन्मान</strong><span>प्रमाणपत्र · २०२३–२०२४</span>",
    ".gallery-grid figure:nth-child(2) figcaption": "विमा कार्यातील सन्मान व ओळख",
    ".gallery-grid figure:nth-child(3) figcaption": "एलआयसी (LIC) कार्यक्रमातील उपस्थिती",
    ".gallery-grid figure:nth-child(4) figcaption": "परिसरातील नागरिकांशी जोडलेले घट्ट नाते",

    ".contact-copy .eyebrow": "<span></span> चला, काम सोपे करूया",
    ".contact-copy h2": "कागदपत्रांचे काही<br />काम आहे का?",
    ".contact-copy > p:last-child": "कॉल करा, व्हॉट्सअ‍ॅपवर मेसेज पाठवा किंवा थेट काळेश्वर कमान जवळील दुकानाला भेट द्या. झेरॉक्स, प्रिंट, फॉर्म्स आणि दस्तऐवजांची सर्व कामे आम्ही तत्काळ करून देतो.",
    ".contact-action:nth-child(1) small": "थेट फोन करा",
    ".contact-action:nth-child(1) strong": "96579 31621",
    ".contact-action:nth-child(2) small": "व्हॉट्सअ‍ॅप मेसेज",
    ".contact-action:nth-child(2) strong": "चर्चा सुरू करा",
    ".contact-action:nth-child(3) small": "ईमेल पाठवा",
    ".contact-action:nth-child(3) strong": "Vishnupurikarmaroti1@gmail.com",
    ".contact-address-link small": "दुकानाचा पत्ता (थेट रस्ता)",
    ".contact-address-link strong": "काळेश्वर कमान जवळ,<br />विष्णुपूरी, नांदेड <span>↗</span>",

    ".live-text": "थेट दुकानाचे स्थान (Live Verified Pin)",
    ".map-title": "विष्णुपूरिकर झेरॉक्स व विमा सेवा केंद्र",
    ".map-address": "काळेश्वर कमान जवळ, विष्णुपूरी, नांदेड, महाराष्ट्र - ४३१६०६",
    ".map-buttons .button-location": "<span>दुकानाचा थेट रस्ता मिळवा (Get Directions) ↗</span>",
    ".map-buttons .button-quiet": "<span>गुगल मॅप्सवर उघडा (Open in Maps) ↗</span>",
    ".map-coord": "अचूक GPS: 19.1119544, 77.2902582",
    ".map-landmark": "लँडमार्क: काळेश्वर कमान जवळ, विष्णुपूरी, नांदेड",

    ".footer-grid > div:first-child > p": "कागदपत्रांची अचूक आणि आपुलकीची सेवा.",
    ".footer-links a:nth-of-type(1)": "सेवा",
    ".footer-links a:nth-of-type(2)": "आमची माहिती",
    ".footer-links a:nth-of-type(3)": "गॅलरी",
    ".footer-links a:nth-of-type(4)": "पत्ता व संपर्क",
    ".footer-links a:nth-of-type(5)": "डेव्हलपर",
    ".footer-meta span:first-child": "मराठी <b>·</b> English",
    ".footer-meta span:last-child": "© <span id=\"year\">" + new Date().getFullYear() + "</span> विष्णुपूरिकर झेरॉक्स. सर्व हक्क सुरक्षित."
  },
  en: {
    langButtonText: "मराठी आवृत्ती",
    "nav a.nav-link:nth-of-type(1)": "Services",
    "nav a.nav-link:nth-of-type(2)": "Our story",
    "nav a.nav-link:nth-of-type(3)": "Gallery",
    "nav a.nav-link:nth-of-type(4)": "Contact",
    ".developer-link": "Developer",
    ".nav-call": "Call us <span>↗</span>",

    ".hero-copy .eyebrow": "<span></span> Your neighbourhood document partner",
    ".hero-copy h1": "Small details.<br /><em>Done beautifully.</em>",
    ".hero-lede": "One friendly place for printing, copies, binding, lamination, all online forms and LIC insurance guidance — right near Kaleshwar Kaman, Vishnupuri, Nanded.",
    ".button-location .btn-text": "Get Shop Directions (Google Maps)",
    ".button-whatsapp .btn-text": "Message on WhatsApp",
    ".button-quiet .btn-text": "Explore our services",
    ".hero-map-link > span:first-child": "Near Kaleshwar Kaman, Vishnupuri, Nanded",
    ".map-badge": "Live Pin ↗",
    ".hero-stamp strong": "Here to help",
    ".hero-stamp small": "with care, every day",
    ".hero-card strong": "Local &amp; trusted",
    ".hero-card small": "Printing and guidance in one place",

    ".trust-grid > span:first-child": "Print with confidence",
    ".trust-item:nth-child(2)": "<b>01</b> Clear, quality documents",
    ".trust-item:nth-child(3)": "<b>02</b> Personal assistance",
    ".trust-item:nth-child(4)": "<b>03</b> Conveniently local in Vishnupuri",

    ".services-section .eyebrow": "<span></span> Your everyday essentials",
    ".services-section h2": "From one page<br /><em>to the next step.</em>",
    ".services-section .section-intro": "The practical help people need for forms, college projects, certificates and life-admin — all close to home.",
    ".service-card:nth-child(1) h3": "Best Quality Xerox &amp; Print",
    ".service-card:nth-child(1) p": "Crystal clear B/W &amp; color Xerox, green ledger page print, stamp bond paper print, and highest quality photo paper prints.",
    ".service-card:nth-child(1) a": "Enquire now <span>↗</span>",
    ".service-card:nth-child(2) h3": "Spiral Binding",
    ".service-card:nth-child(2) p": "Clean, sturdy, and elegant spiral binding with transparent protective covers for school, college, office, and project reports.",
    ".service-card:nth-child(2) a": "Ask about it <span>↗</span>",
    ".service-card:nth-child(3) h3": "Lamination",
    ".service-card:nth-child(3) p": "Any size lamination — from small card size, A4 up to A3 size for certificates, marksheets, and official documents.",
    ".service-card:nth-child(3) a": "Ask about it <span>↗</span>",
    ".service-card:nth-child(4) h3": "ID Card Maker &amp; Duplicator",
    ".service-card:nth-child(4) p": "New ID card creation and instant ID card duplication — high-definition printed and pouch-laminated ID cards.",
    ".service-card:nth-child(4) a": "Ask about it <span>↗</span>",
    ".service-card:nth-child(5) h3": "Windows Installer &amp; PC Setup",
    ".service-card:nth-child(5) p": "Fresh Windows OS installation, essential software &amp; drivers setup, online application form filling, and high-res document scanning.",
    ".service-card:nth-child(5) a": "Ask about it <span>↗</span>",
    ".service-card:nth-child(6) h3": "Ghanshyam Insurance Service",
    ".service-card:nth-child(6) p": "Official LIC Life Insurance policies, premium collection, policy renewal, and trustworthy guidance.",
    ".service-card:nth-child(6) a": "Talk to us <span>↗</span>",
    ".service-note strong": "Not sure what you need?",
    ".service-note div > span": "Send a photo or message on WhatsApp — we will help you get started right away.",
    ".service-note a": "Ask on WhatsApp <span>↗</span>",
    ".showcase-card:nth-child(1) strong": "Best Quality Xerox, Green Page &amp; Bond Print",
    ".showcase-card:nth-child(1) small": "High-res color, ledger &amp; photo paper prints",
    ".showcase-card:nth-child(2) strong": "Professional Spiral Binding &amp; Finishing",
    ".showcase-card:nth-child(2) small": "School, college, office &amp; project reports",
    ".showcase-card:nth-child(3) strong": "Card to A3 Size Protective Lamination",
    ".showcase-card:nth-child(3) small": "Secure seal for certificates &amp; documents",

    ".shop-details-section .eyebrow": "<span></span> At our shop",
    ".shop-details-section h2": "Fast service,<br /><em>affordable rate.</em>",
    ".shop-details-section .section-intro": "Everything you need for daily document work in one friendly place near Kaleshwar Kaman, Vishnupuri.",
    ".detail-card:nth-child(1) h3": "Address",
    ".detail-card:nth-child(1) p": "Near Kaleshwar Kaman, Vishnupuri, Nanded - 431606",
    ".detail-card:nth-child(1) a": "<span>View on Google Maps ↗</span>",
    ".detail-card:nth-child(2) h3": "Available services",
    "#shop-services-list": "<li>Best quality Xerox (Black &amp; White and Colour)</li><li>Green page / Ledger printing</li><li>Bond paper printing</li><li>High quality photo paper print</li><li>Neat spiral binding (School, College, Office &amp; Projects)</li><li>Any size lamination — Card size, A4 up to A3</li><li>ID card maker &amp; ID card duplicator (Printed &amp; Laminated)</li><li>Windows installation &amp; software/drivers setup</li><li>All online government &amp; academic form filling</li><li>Document scanning (High-resolution PDF)</li><li>Ghanshyam Insurance Service (LIC guidance &amp; premiums)</li>",
    ".detail-card:nth-child(3) h3": "Why people choose us",
    ".detail-card:nth-child(3) p": "Best quality, affordable rates, and fastest service — trusted by community members from everywhere.",

    ".story-copy .eyebrow": "<span></span> A familiar face in Vishnupuri",
    ".story-copy h2": "Local help that<br />feels <em>personal.</em>",
    ".story-copy > p:not(.eyebrow)": "Vishnupurikar Xerox and Ghansham Vima Seva Kendra are built around a simple principle: practical help should feel personal. Whether you are filling a form, printing a project, protecting a certificate, or looking for life insurance guidance, you can expect patient attention to every detail.",
    ".story-points span:nth-child(1)": "<b>01</b> Helpful with all everyday paperwork",
    ".story-points span:nth-child(2)": "<b>02</b> A familiar local service in Vishnupuri",
    ".story-points span:nth-child(3)": "<b>03</b> Clear conversations, honest advice",
    ".signature-block strong": "Maroti Manika Vishnupurikar",
    ".signature-block small": "Owner · Vishnupurikar Xerox &amp; Ghansham Vima Seva Kendra",
    ".text-link": "Come say hello <span>↗</span>",

    ".gallery-heading .eyebrow": "<span></span> People, place &amp; proof",
    ".gallery-heading h2": "A little more<br /><em>than a xerox shop.</em>",
    ".gallery-heading .section-intro": "See the people and moments behind our service — and the credential reflecting our trusted insurance work.",
    ".gallery-certificate figcaption": "<strong>Recognised insurance work</strong><span>Certificate of Membership · 2023–2024</span>",
    ".gallery-grid figure:nth-child(2) figcaption": "Recognition in insurance service",
    ".gallery-grid figure:nth-child(3) figcaption": "Life insurance event presence",
    ".gallery-grid figure:nth-child(4) figcaption": "Deeply rooted in the local community",

    ".contact-copy .eyebrow": "<span></span> Let’s make it easy",
    ".contact-copy h2": "Have a document<br />in mind?",
    ".contact-copy > p:last-child": "Call, WhatsApp, mail or visit us near Kaleshwar Kaman. We will help you with Xerox, print, forms, and documents quickly.",
    ".contact-action:nth-child(1) small": "Give us a call",
    ".contact-action:nth-child(1) strong": "96579 31621",
    ".contact-action:nth-child(2) small": "Message on WhatsApp",
    ".contact-action:nth-child(2) strong": "Start a conversation",
    ".contact-action:nth-child(3) small": "Mail us",
    ".contact-action:nth-child(3) strong": "Vishnupurikarmaroti1@gmail.com",
    ".contact-address-link small": "Shop address (Live Map)",
    ".contact-address-link strong": "Near Kaleshwar Kaman,<br />Vishnupuri, Nanded <span>↗</span>",

    ".live-text": "Live Shop Location (Verified Pin)",
    ".map-title": "Vishnupurikar Xerox &amp; Seva Kendra",
    ".map-address": "Near Kaleshwar Kaman, Vishnupuri, Nanded, Maharashtra - 431606",
    ".map-buttons .button-location": "<span>Get Shop Directions (Google Maps) ↗</span>",
    ".map-buttons .button-quiet": "<span>Open in Google Maps ↗</span>",
    ".map-coord": "Verified GPS: 19.1119544, 77.2902582",
    ".map-landmark": "Landmark: Near Kaleshwar Kaman, Vishnupuri, Nanded",

    ".footer-grid > div:first-child > p": "Accurate, personal, and reliable document services.",
    ".footer-links a:nth-of-type(1)": "Services",
    ".footer-links a:nth-of-type(2)": "Our story",
    ".footer-links a:nth-of-type(3)": "Gallery",
    ".footer-links a:nth-of-type(4)": "Contact",
    ".footer-links a:nth-of-type(5)": "Developer",
    ".footer-meta span:first-child": "English <b>·</b> मराठी",
    ".footer-meta span:last-child": "© <span id=\"year\">" + new Date().getFullYear() + "</span> Vishnupurikar Xerox. All rights reserved."
  }
};

let currentLanguage = "mr";

function applyLanguage(lang) {
  currentLanguage = lang;
  const content = translations[lang];
  if (!content) return;

  // If on developer page, don't overwrite developer bio
  if (document.body.classList.contains("developer-page")) {
    document.documentElement.lang = lang;
    return;
  }

  // Update Big Language Button Label
  const langTextSpan = document.querySelector("#lang-text");
  if (langTextSpan) {
    langTextSpan.textContent = content.langButtonText;
  }

  // Update elements
  Object.entries(content).forEach(([selector, value]) => {
    if (selector === "langButtonText") return;
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = value;
    }
  });

  // Switch class and lang attribute
  document.documentElement.lang = lang;
  if (lang === "mr") {
    document.body.classList.add("marathi-mode");
    document.body.classList.remove("english-mode");
  } else {
    document.body.classList.add("english-mode");
    document.body.classList.remove("marathi-mode");
  }

  localStorage.setItem("preferred-language", lang);
}

// Language Toggle Button Click Handler
const langToggleBtn = document.querySelector("#lang-toggle-btn");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const nextLang = currentLanguage === "mr" ? "en" : "mr";
    applyLanguage(nextLang);
  });
}

// Initial Load: Default to Marathi ('mr')
const savedLang = localStorage.getItem("preferred-language");
if (savedLang === "en") {
  applyLanguage("en");
} else {
  // Always default to Marathi
  applyLanguage("mr");
}
