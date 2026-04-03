# 🍽️ Aura & Spice — Fine Dining Reimagined

A premium, real-time restaurant management web application featuring a minimalist dark-mode "Antigravity" aesthetic with scroll-driven animations, QR-based ordering, and a live kitchen dashboard.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## ✨ Features

### 🏠 Homepage
- Scroll-driven reveal animations (fade, slide, scale)
- Parallax cuisine images that shift as you scroll
- Floating food emoji particles in the hero section
- Animated number counters (Years, Cuisines, Dishes, Guests)
- Horizontal drag-to-scroll photo gallery
- Glassmorphic header transformation on scroll

### 🛒 QR Order Page
- **Table Detection** — Parses table number from URL (`?table=05`)
- **Category Filters** — All, 🔥 Chinese, 🍕 Italian, 🥩 Mains
- **Smart Cart** — Add/remove items with `+`/`−` quantity controls
- **Success Animation** — Animated checkmark overlay on order placement
- **Live Status Tracker** — Real-time updates as the kitchen processes your order

### 👨‍🍳 Staff Kitchen Portal
- **Kanban Board** — 4 columns: Pending → In Progress → Ready to Serve → Completed
- **One-Click Actions** — "Start Cooking", "Mark Ready", "Complete & Bill" buttons
- **Drag & Drop** — Drag order cards between columns
- **Real-Time Sync** — Orders appear instantly via `localStorage` cross-tab events
- **Clear All** — Two-click safety confirmation to clear all orders

---

## 🎨 Design Language

| Element | Value |
|---------|-------|
| **Background** | Charcoal `#0a0a0a` |
| **Accent** | Deep Gold `#D4AF37` |
| **Text** | Off-White `#F5F5F5` |
| **Headings** | *Playfair Display* (Serif) |
| **Body** | *Inter* (Sans-serif) |
| **Effects** | Glassmorphism, soft shadows, parallax, micro-animations |

---

## 🚀 Running Locally

### Prerequisites

- **Python 3** (pre-installed on macOS/Linux) — used as a simple local web server
- A modern web browser (Chrome, Firefox, Safari, Edge)

> **No Node.js, no npm, no build tools required.** This is a zero-dependency project.

### Steps

1. **Clone or download** this repository:
   ```bash
   git clone <your-repo-url>
   cd Experiments
   ```

2. **Start the local server:**
   ```bash
   python3 -m http.server 3000
   ```

3. **Open in your browser:**

   | Page | URL |
   |------|-----|
   | Homepage | [http://localhost:3000](http://localhost:3000) |
   | Order Page (Table 5) | [http://localhost:3000/order.html?table=05](http://localhost:3000/order.html?table=05) |
   | Staff Portal | [http://localhost:3000/staff.html](http://localhost:3000/staff.html) |

4. **To stop the server**, press `Ctrl + C` in the terminal.

### Simulating QR Codes

In a real restaurant, each table would have a QR code linking to:
```
http://yourdomain.com/order.html?table=XX
```
Replace `XX` with the table number (e.g., `01`, `02`, `15`). For local testing, use:
```
http://localhost:3000/order.html?table=08
```

---

## 🌐 Hosting / Deployment

Since this is a **static site** (no backend server needed), it can be deployed for free on any static hosting platform:

### Option 1: GitHub Pages (Free)

1. Push your code to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://yourusername.github.io/repo-name/`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **"Add new site" → "Deploy manually"**
3. Drag and drop the entire project folder
4. Your site is live instantly with a `.netlify.app` URL

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click **"New Project" → Import your Git repository**
3. Leave all settings as default, click **Deploy**
4. Live at `https://your-project.vercel.app`

### Option 4: Firebase Hosting (Free tier)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting    # Select your project, set public dir to "."
firebase deploy
```

> **Note:** After deploying, replace `localhost:3000` in any QR codes with your actual domain.

---

## 📁 Project Structure

```
Experiments/
├── index.html              # Homepage — scroll-driven experience
├── order.html              # QR order page — digital menu + cart
├── staff.html              # Kitchen portal — Kanban dashboard
├── README.md               # You are here
├── css/
│   ├── style.css           # Core design system + all shared styles
│   └── staff-dashboard.css # Staff portal specific styles
├── js/
│   ├── main.js             # Homepage: scroll engine, parallax, particles
│   ├── order.js            # Order page: cart, filters, checkout, tracker
│   └── staff.js            # Staff: Kanban, drag-drop, real-time sync
└── assets/
    ├── dimsum.png           # Chinese — Szechuan Dumplings
    ├── kungpao.png          # Chinese — Kung Pao Chicken
    ├── pasta.png            # Italian — Truffle Mushroom Risotto
    ├── pizza.png            # Italian — Wood-Fired Margherita
    └── steak.png            # Mains — Signature Ribeye
```

---

## 🔄 How Real-Time Sync Works

Since this is a frontend-only project, real-time sync between the **Order Page** and **Staff Portal** is achieved using the browser's **`localStorage` + `StorageEvent` API**:

1. Guest places an order → saved to `localStorage` as JSON
2. Staff portal polls `localStorage` every 1 second
3. Cross-tab communication via `window.addEventListener('storage', ...)`

> **For production**, replace `localStorage` with **Firebase Firestore** for true multi-device, multi-browser real-time sync.

---

## 🛣️ Future Roadmap

- [ ] Migrate to **React + TypeScript** (Vite)
- [ ] Add **Firebase Firestore** for real-time backend
- [ ] Implement **staff authentication** (login/logout)
- [ ] Add **order history** and analytics dashboard
- [x] **Mobile-responsive** optimization
- [ ] **Payment integration** (Stripe/Razorpay)
- [ ] **Push notifications** for order status updates

---

## 📄 License

This project is for educational and portfolio purposes. Feel free to use and modify.

---

<p align="center">
  <strong>Aura & Spice</strong> — Where Aura Meets Spice ✨
</p>
