# 📄 विष्णुपूरिकर झेरॉक्स व घनश्याम विमा सेवा केंद्र
### Vishnupurikar Xerox & Ghansham Vima Seva Kendra

[![Status](https://img.shields.io/badge/Status-Live%20%26%20Active-success.svg?style=flat-square)](#)
[![Mobile](https://img.shields.io/badge/Mobile-First%20PWA%20Ready-blue.svg?style=flat-square)](#)
[![Language](https://img.shields.io/badge/Language-Marathi%20%28Default%29%20%7C%20English-darkred.svg?style=flat-square)](#)
[![Tech](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-orange.svg?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

A modern, high-performance, mobile-first web application for **विष्णुपूरिकर झेरॉक्स व घनश्याम विमा सेवा केंद्र** (*Vishnupurikar Xerox & Ghansham Vima Seva Kendra*), a premier document printing, lamination, and Life Insurance Corporation of India (LIC) advisory hub located near Kaleshwar Kaman, Vishnupuri, Nanded, Maharashtra.

Built with pure Vanilla web technologies with zero framework bloat, delivering near-instant load speeds, native mobile app navigation, and an authentic local customer experience.

---

## 🌟 Key Highlights & Mobile Experience

- 📱 **Mobile-First App Architecture**
  - Designed specifically for smartphone users with **100% fluid viewport fit** (zero horizontal overflow).
  - Native **Safe Area Insets** (`env(safe-area-inset-*)`) for iOS dynamic island / notch and modern Android gesture navigation bars.
  - Floating **Quick-Action Bottom Bar** on mobile devices offering immediate 1-tap access to **Call (`tel:`)**, **WhatsApp Direct Chat**, and **Google Maps Navigation**.

- 🌐 **Marathi-First Bilingual System (i18n)**
  - Strictly defaults to **Marathi (`mr`)** for local community convenience.
  - Seamless toggle to **English (`en`)** with state preservation across browser sessions.
  - Uses Google Fonts: *Noto Sans Devanagari* for clean Marathi typography and *DM Sans* / *Playfair Display* for English.

- 🎬 **Modern View Transitions API**
  - Smooth native app-like screen transitions (`document.startViewTransition()` & `@view-transition`) when switching languages or navigating views.

- ⚡ **Skeleton Loader**
  - Polished shimmer skeleton loading state on initial launch to eliminate layout shift and provide a native app feel.

- 🔲 **Continuous Corners (iOS Squircles)**
  - Modern continuous corner curvature (`corner-smoothing: 60%`) across all cards, buttons, badges, and modals.

- 📰 **Balanced Headlines**
  - Built with `text-wrap: balance;` on all headings and `text-wrap: pretty;` on body copy to ensure clean, orphan-free typography on every screen width.

- 📍 **One-Tap Location & Direct Navigation**
  - Integrated with verified Google Maps GPS pin (`19.1119544, 77.2902582`), interactive embedded map card, and pre-configured turn-by-turn routing links.

- 🔍 **Local SEO & Rich Snippets**
  - Structured with Schema.org `LocalBusiness` JSON-LD metadata, OpenGraph cards, and ICBM geographic tags for search engine discoverability in Nanded and surrounding regions.

---

## 🛠️ Services Provided

| Service | Details |
| :--- | :--- |
| **सर्वोत्तम झेरॉक्स & प्रिंट** | High-definition Black & White and Colour Xerox, Green Page / Ledger print, Bond paper print, and glossy photo prints. |
| **स्पायरल बाईंडिंग (Spiral Binding)** | Clean, durable spiral binding with transparent protective sheets for school, college projects, and office documentation. |
| **लॅमिनेशन (Lamination)** | Complete size coverage from small ID cards, A4 certificates, up to large A3 documents and marksheets. |
| **आयडी कार्ड मेकर & डुप्लिकेटर** | Quick new ID card creation and instant pouch-laminated duplicate ID card printing. |
| **विंडोज व कॉम्प्युटर सेवा** | Fresh Windows OS installation, essential software & driver setup, document scanning (high-res PDF), and academic/government online form submissions. |
| **घनश्याम विमा सेवा केंद्र (LIC)** | Official Life Insurance Corporation of India guidance, new policy enrollment, premium collection, and policy advisory. |

---

## 💻 Tech Stack

- **Markup:** Semantic HTML5 with accessibility attributes (`aria-expanded`, `aria-label`, semantic tags)
- **Styling:** Vanilla CSS3
  - CSS Custom Properties (Design Tokens)
  - CSS Grid & Flexbox
  - Safe Area Inset support (`env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`)
  - View Transitions API (`@view-transition`)
  - Continuous Corner Smoothing (`corner-smoothing`)
  - Balanced Typography (`text-wrap: balance`)
- **Scripting:** Vanilla JavaScript (ES6+)
  - Seamless View Transition handler
  - Skeleton Loader dismissal lifecycle
  - Client-side i18n translation engine
  - Mobile drawer navigation & touch handlers
- **SEO & Microdata:** Schema.org `LocalBusiness` JSON-LD, OpenGraph, Geo meta tags

---

## 📁 Repository Structure

```text
vishnupurikar-xerox/
│
├── index.html            # Main landing page (Marathi default, rich service catalog, map & contact)
├── developer.html        # Developer portfolio & credentials page (Gous Khan)
├── styles.css            # Complete design system, tokens, safe areas, animations & responsive queries
├── script.js             # Navigation, View Transitions, i18n dictionary, skeleton dismissal
├── README.md             # Project documentation
├── LICENSE               # MIT License
│
└── images/               # Optimized visual assets
    ├── vishnupurikar-logo-2d.svg   # Official 2D SVG brand mark
    ├── whatsapp.svg                # Clean WhatsApp vector icon
    ├── owner.jpeg                  # Owner photograph
    ├── hero-primary.png            # Hero visual asset
    ├── xerox-machine-pro.jpg       # Professional Xerox & printing visual
    ├── spiral-binding-pro.jpg      # Spiral binding showcase
    ├── lamination-pro.jpg          # Lamination service showcase
    ├── id-card-maker.png           # ID card maker visual
    ├── windows-pc-service.jpg      # Windows & PC services visual
    ├── developer-profile-upright.jpg # Developer portrait
    └── ...
```

---

## 🚀 Running Locally

No heavy node modules, build steps, or compilers required. Run with any local static HTTP server:

### Option 1: Using Node.js (npx)
```bash
# Clone the repository
git clone https://github.com/Khangulamgousamjat/vishnupurikar-xerox.git
cd vishnupurikar-xerox

# Start a local static server
npx serve .
```

### Option 2: Using Python
```bash
# Python 3
python -m http.server 8000
```

### Option 3: VS Code Live Server
Right-click `index.html` in VS Code and select **"Open with Live Server"**.

Visit `http://localhost:8000` (or the port displayed in your terminal).

---

## 📌 Business & Location Information

- **Establishment:** विष्णुपूरिकर झेरॉक्स व घनश्याम विमा सेवा केंद्र (Vishnupurikar Xerox & Ghansham Vima Seva Kendra)
- **Proprietor:** मारोती माणिकराव विष्णुपूरिकर (Maroti Manika Vishnupurikar)
- **Address:** Near Kaleshwar Kaman, Vishnupuri, Nanded, Maharashtra - 431606
- **Phone:** [+91 96579 31621](tel:+919657931621)
- **WhatsApp:** [Message on WhatsApp](https://wa.me/919657931621)
- **Email:** [Vishnupurikarmaroti1@gmail.com](mailto:Vishnupurikarmaroti1@gmail.com)
- **GPS Coordinates:** `19.1119544, 77.2902582`
- **Hours:** Monday – Saturday: 08:30 AM – 09:00 PM (IST)

---

## 👨‍💻 Developer Credits

Designed and engineered by **[Gulamgous Khan (Gous Khan)](developer.html)**:
- **Role:** Full Stack AI/ML Engineer & Software Engineer
- **Email:** [gousk2004@gmail.com](mailto:gousk2004@gmail.com)
- **Phone:** [+91 86250 76618](tel:+918625076618)
- **Profile:** [developer.html](developer.html)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).