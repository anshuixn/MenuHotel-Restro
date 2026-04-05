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

- **Node.js** (v14 or higher) — required for the Express backend API
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Steps

1. **Clone or download** this repository:
   ```bash
   git clone <your-repo-url>
   cd Experiments
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local server:**
   ```bash
   npm start
   ```
   *(Behind the scenes, this runs `node server.js`)*

4. **Testing on your Mac (Staff View):**
   The terminal will output the local links. You can click on the `Home Page` link or the `Staff Portal` link:
   - `http://localhost:3000/staff.html` (Staff Dashboard)
   - *Sign in using `admin` / `admin` to access the Kanban board.*

5. **Testing on your Smartphone (Customer View):**
   To experience the real-time syncing, connect your smartphone to the **same Wi-Fi network** as your Mac.
   - The terminal will automatically detect and print your Mac's Local IP Address (e.g., `http://192.168.1.5:3000/`).
   - Open Safari/Chrome on your phone and type that exact link provided by the terminal.
   - Tap "Order Now" to enter the fast and responsive mobile ordering system!
   
6. **Watch the Magic ✨**
   - Submit a burger order on your Smartphone.
   - The order will instantly pop up on your Mac's Kanban board.
   - Click "Start Cooking" on your Mac.
   - Your Smartphone's Live Status Tracker will instantly update to "Chef is Cooking!"

7. **To stop the server**, press `Ctrl + C` in the terminal.

In a real restaurant, each table would have a QR code linking to:
```
http://yourdomain.com/order.html?table=XX
```
Replace `XX` with the table number (e.g., `01`, `02`, `15`). For local testing, the terminal will provide a convenient order link like:
```
http://localhost:3000/order.html?table=01
```

---

## 🌐 Hosting / Deployment

The project now consists of a frontend and a lightweight **Node.js backend**. To deploy it to the internet, you can host the `server.js` file on services like Render, Heroku, or Railway which support Node.js.

### Option 1: Render / Railway (Free Tier)

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

Real-time sync between the **Order Page** and **Staff Portal** is achieved using a **Node.js Express Backend**:

1. Guest places an order → sent to the `/api/orders` endpoint via `fetch()`
2. Backend temporarily stores orders in server memory (or file system)
3. Staff portal polls the new `/api/orders` endpoint every 2 seconds
4. Status changes on the Staff Portal ("Start Cooking") immediately reflect on the Customer's mobile device during their next polling cycle.

---

## 🛣️ Future Roadmap

- [x] Migrate to a real backend API (Node.js/Express)
- [x] Implement **staff authentication** and employee management (Key-Gated)
- [x] **Mobile-responsive** optimization
- [ ] Migrate to **React + TypeScript** (Vite)
- [ ] Add persistence to the backend (Database like MongoDB or PostgreSQL)
- [ ] Add **order history** and analytics dashboard
- [ ] **Payment integration** (Stripe/Razorpay)
- [ ] **Push notifications** for order status updates

---

## 📄 License

This project is for educational and portfolio purposes. Feel free to use and modify.

---

<p align="center">
  <strong>Aura & Spice</strong> — Where Aura Meets Spice ✨
</p>
