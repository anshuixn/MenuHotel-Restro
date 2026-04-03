// ============================================
// AURA & SPICE — order.js
// Cart System, Table Selector, Live Status Tracker
// ============================================

const menuData = [
  // ===== CHINESE (8) =====
  { id: 1,  name: "Dim Sum Platter",   category: "chinese", price: 249, calories: 320, image: "./assets/menu/chinese/dimsum.png",          desc: "Steamed crystal-skin dumplings filled with prawn and truffle, served with chili oil" },
  { id: 2,  name: "Kung Pao Chicken",  category: "chinese", price: 289, calories: 450, image: "./assets/menu/chinese/kungpao.png",         desc: "Wok-fired chicken with roasted peanuts, dried chilies, and Wok Hei finish" },
  { id: 3,  name: "Chilli Paneer",     category: "chinese", price: 229, calories: 380, image: "./assets/menu/chinese/chilli-paneer.png",   desc: "Crispy paneer cubes tossed in a fiery Indo-Chinese chili garlic sauce" },
  { id: 4,  name: "Hakka Noodles",     category: "chinese", price: 199, calories: 420, image: "./assets/menu/chinese/hakka-noodles.png",   desc: "Wok-tossed egg noodles with julienned vegetables and soy glaze" },
  { id: 5,  name: "Veg Manchurian",    category: "chinese", price: 209, calories: 350, image: "./assets/menu/chinese/veg-manchurian.png",  desc: "Deep-fried veggie balls in a tangy Manchurian gravy with spring onions" },
  { id: 6,  name: "Spring Rolls",      category: "chinese", price: 179, calories: 280, image: "./assets/menu/chinese/spring-rolls.png",    desc: "Golden crispy rolls stuffed with cabbage, carrots, and glass noodles" },
  { id: 7,  name: "Fried Rice",        category: "chinese", price: 219, calories: 480, image: "./assets/menu/chinese/fried-rice.png",      desc: "Classic wok-fried rice with egg, vegetables, and a hint of sesame" },
  { id: 8,  name: "Pepper Steak",      category: "chinese", price: 399, calories: 520, image: "./assets/menu/chinese/steak.png",           desc: "Seared steak strips in a black pepper sauce with bell peppers" },

  // ===== NORTH INDIAN (5) =====
  { id: 9,  name: "Butter Chicken",       category: "north-indian", price: 349, calories: 550, image: "./assets/menu/north-indian/butter-chicken.png",       desc: "Tandoori chicken in a rich, creamy tomato-butter gravy — the undisputed classic" },
  { id: 10, name: "Paneer Butter Masala", category: "north-indian", price: 299, calories: 480, image: "./assets/menu/north-indian/paneer-butter-masala.png", desc: "Soft paneer cubes in a velvety makhani gravy with a touch of cream" },
  { id: 11, name: "Chicken Biryani",      category: "north-indian", price: 329, calories: 620, image: "./assets/menu/north-indian/chicken-biryani.png",      desc: "Dum-cooked basmati rice layered with spiced chicken, saffron, and caramelized onions" },
  { id: 12, name: "Dal Makhani",          category: "north-indian", price: 249, calories: 380, image: "./assets/menu/north-indian/dal-makhani.png",          desc: "Black lentils slow-cooked overnight with butter and cream — pure comfort" },
  { id: 13, name: "Garlic Naan",          category: "north-indian", price: 69,  calories: 260, image: "./assets/menu/north-indian/garlic-naan.png",          desc: "Soft tandoori naan brushed with garlic butter and fresh coriander" },

  // ===== SOUTH INDIAN (5) =====
  { id: 14, name: "Masala Dosa",    category: "south-indian", price: 149, calories: 350, image: "./assets/menu/south-indian/masala-dosa.png",   desc: "Crispy rice-batter crepe filled with spiced potato masala, served with chutneys" },
  { id: 15, name: "Idli Sambar",    category: "south-indian", price: 119, calories: 220, image: "./assets/menu/south-indian/idli-sambar.png",   desc: "Fluffy steamed rice cakes served with hot sambar and coconut chutney" },
  { id: 16, name: "Medu Vada",      category: "south-indian", price: 99,  calories: 280, image: "./assets/menu/south-indian/medu-vada.png",     desc: "Crispy urad dal fritters — golden on the outside, soft and fluffy inside" },
  { id: 17, name: "Uttapam",        category: "south-indian", price: 139, calories: 310, image: "./assets/menu/south-indian/uttapam.png",       desc: "Thick rice pancake topped with onions, tomatoes, and green chilies" },
  { id: 18, name: "Filter Coffee",  category: "south-indian", price: 79,  calories: 80,  image: "./assets/menu/south-indian/filter-coffee.png", desc: "Traditional South Indian filter coffee — strong, frothy, and aromatic" },

  // ===== FAST FOOD (6) =====
  { id: 19, name: "Classic Smash Burger", category: "fast-food", price: 279, calories: 680, image: "./assets/menu/fast-food/burger.png",       desc: "Double-smashed beef patty with cheddar, caramelized onions, and house sauce" },
  { id: 20, name: "Loaded Fries",         category: "fast-food", price: 179, calories: 450, image: "./assets/menu/fast-food/french-fries.png", desc: "Crispy golden fries topped with cheese sauce, jalapeños, and crispy bacon bits" },
  { id: 21, name: "Steamed Momos",        category: "fast-food", price: 149, calories: 300, image: "./assets/menu/fast-food/momos.png",        desc: "Juicy chicken momos steamed in bamboo baskets, served with spicy red chutney" },
  { id: 22, name: "Penne Arrabiata",      category: "fast-food", price: 249, calories: 520, image: "./assets/menu/fast-food/pasta.png",        desc: "Al dente penne in a spicy tomato-garlic arrabiata sauce with fresh basil" },
  { id: 23, name: "Loaded Pizza",         category: "fast-food", price: 329, calories: 750, image: "./assets/menu/fast-food/pizza.png",        desc: "Hand-tossed crust loaded with mozzarella, pepperoni, olives, and jalapeños" },
  { id: 24, name: "Club Sandwich",        category: "fast-food", price: 219, calories: 480, image: "./assets/menu/fast-food/sandwich.png",     desc: "Triple-decker with grilled chicken, bacon, lettuce, tomato, and herb mayo" },

  // ===== BEVERAGES (5) =====
  { id: 25, name: "Virgin Mojito",    category: "beverages", price: 159, calories: 120, image: "./assets/menu/beverages/mojito.png",          desc: "Fresh lime, mint leaves, and soda — shaken and chilled to perfection" },
  { id: 26, name: "Cold Coffee",      category: "beverages", price: 149, calories: 200, image: "./assets/menu/beverages/cold-coffee.png",     desc: "Creamy blended cold coffee with a frothy top and a hint of vanilla" },
  { id: 27, name: "Mango Shake",      category: "beverages", price: 129, calories: 280, image: "./assets/menu/beverages/mango-shake.png",     desc: "Thick and luscious Alphonso mango shake made with real fruit pulp" },
  { id: 28, name: "Masala Chai",      category: "beverages", price: 49,  calories: 80,  image: "./assets/menu/beverages/masala-chai.png",     desc: "Spiced Indian tea with ginger, cardamom, and cloves — brewed fresh" },
  { id: 29, name: "Fresh Lime Soda",  category: "beverages", price: 89,  calories: 60,  image: "./assets/menu/beverages/fresh-lime-soda.png", desc: "Tangy lime juice with soda, cumin salt, and a touch of mint" },
];

let cart = {};
let tableNumber = "01";
let currentOrderId = null;
let statusPollInterval = null;

document.addEventListener("DOMContentLoaded", () => {
  // 1. Table Selection — from URL param or dropdown
  const params = new URLSearchParams(window.location.search);
  const selector = document.getElementById('table-selector');

  // Populate dropdown with tables 1-20
  for (let i = 1; i <= 20; i++) {
    const opt = document.createElement('option');
    opt.value = String(i).padStart(2, '0');
    opt.textContent = String(i).padStart(2, '0');
    selector.appendChild(opt);
  }

  // Set from URL param if available
  if (params.has('table')) {
    tableNumber = params.get('table');
    selector.value = tableNumber;
  }

  // Listen for table change
  selector.addEventListener('change', () => {
    tableNumber = selector.value;
  });

  // 2. Render Menu
  renderMenu('all');

  // 3. Filter Tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.filter);
    });
  });

  // 4. Cart Toggle
  document.getElementById('cart-btn').addEventListener('click', () => {
    document.getElementById('cart-panel').classList.toggle('active');
  });

  document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-panel').classList.remove('active');
  });

  // 5. Checkout
  document.getElementById('checkout-btn').addEventListener('click', submitOrder);

  // 6. Live status tracking — cross-tab + continuous polling
  window.addEventListener('storage', checkOrderStatus);

  // 7. Check status on load (in case page was reloaded)
  const savedOrderId = sessionStorage.getItem('currentOrderId');
  if (savedOrderId) {
    currentOrderId = savedOrderId;
    checkOrderStatus();
    startStatusPolling();
  }
});

function renderMenu(filter) {
  const container = document.getElementById('menu-items');
  container.innerHTML = "";

  const items = filter === 'all' ? menuData : menuData.filter(i => i.category === filter);

  items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'menu-card reveal';
    card.style.transitionDelay = `${idx * 0.08}s`;

    const qtyInCart = cart[item.id] ? cart[item.id].qty : 0;

    card.innerHTML = `
      <div class="card-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 6px;">${item.calories} cal</div>
        <div class="card-footer">
          <span class="price">₹${item.price}</span>
          <button class="btn-add" id="add-btn-${item.id}" onclick="addToCart(${item.id}, this)">${qtyInCart > 0 ? `In Cart (${qtyInCart})` : 'Add'}</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  requestAnimationFrame(() => {
    container.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
  });
}

function addToCart(id, btnEl) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;

  if (!cart[id]) {
    cart[id] = { ...item, qty: 1 };
  } else {
    cart[id].qty++;
  }

  updateCartUI();

  if (btnEl) {
    btnEl.classList.add('added');
    btnEl.textContent = '✓ Added';
    setTimeout(() => {
      btnEl.classList.remove('added');
      btnEl.textContent = `In Cart (${cart[id].qty})`;
    }, 800);
  }

  const badge = document.getElementById('cart-badge');
  badge.classList.remove('badge-bounce');
  void badge.offsetWidth;
  badge.classList.add('badge-bounce');
}

function removeFromCart(id) {
  if (!cart[id]) return;
  cart[id].qty--;
  if (cart[id].qty <= 0) {
    delete cart[id];
  }
  updateCartUI();
  const btn = document.getElementById(`add-btn-${id}`);
  if (btn) {
    const qty = cart[id] ? cart[id].qty : 0;
    btn.textContent = qty > 0 ? `In Cart (${qty})` : 'Add';
  }
}

function increaseQty(id) {
  if (cart[id]) {
    cart[id].qty++;
    updateCartUI();
    const btn = document.getElementById(`add-btn-${id}`);
    if (btn) btn.textContent = `In Cart (${cart[id].qty})`;
  }
}

function updateCartUI() {
  const cartContainer = document.getElementById('cart-items');
  const badge = document.getElementById('cart-badge');
  const totalEl = document.getElementById('cart-total');

  const items = Object.values(cart);
  let totalQty = 0;
  let totalPrice = 0;

  cartContainer.innerHTML = '';

  if (items.length === 0) {
    cartContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px 0;">Your cart is empty.</p>';
    badge.textContent = '0';
    totalEl.textContent = '₹0';
    return;
  }

  items.forEach(item => {
    totalQty += item.qty;
    totalPrice += item.price * item.qty;

    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <span class="cart-item-name">${item.name}</span>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="removeFromCart(${item.id})">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="increaseQty(${item.id})">+</button>
      </div>
      <span class="cart-item-price">₹${item.price * item.qty}</span>
    `;
    cartContainer.appendChild(row);
  });

  badge.textContent = totalQty;
  totalEl.textContent = '₹' + totalPrice;
}

function submitOrder() {
  const items = Object.values(cart);
  if (items.length === 0) {
    const btn = document.getElementById('checkout-btn');
    btn.style.transform = 'translateX(-5px)';
    setTimeout(() => btn.style.transform = 'translateX(5px)', 100);
    setTimeout(() => btn.style.transform = 'translateX(-3px)', 200);
    setTimeout(() => btn.style.transform = 'translateX(0)', 300);
    return;
  }

  // Get the current table from the selector
  tableNumber = document.getElementById('table-selector').value;

  const orderId = `ORD-${Date.now()}`;
  currentOrderId = orderId;
  sessionStorage.setItem('currentOrderId', orderId);

  const order = {
    id: orderId,
    table: tableNumber,
    items: items.map(i => ({ id: i.id, name: i.name, qty: i.qty, price: i.price })),
    total: items.reduce((sum, item) => sum + item.price * item.qty, 0),
    status: 'new',
    timestamp: new Date().toISOString()
  };

  let orders = JSON.parse(localStorage.getItem('auraOrders') || '[]');
  orders.push(order);
  localStorage.setItem('auraOrders', JSON.stringify(orders));

  cart = {};
  updateCartUI();
  document.getElementById('cart-panel').classList.remove('active');

  const overlay = document.getElementById('success-overlay');
  overlay.classList.add('active');
  setTimeout(() => {
    overlay.classList.remove('active');
    showTracker('new');
    startStatusPolling();
  }, 2500);

  const activeFilter = document.querySelector('.filter-tab.active');
  renderMenu(activeFilter ? activeFilter.dataset.filter : 'all');
}

// ============================================
// LIVE STATUS TRACKER — Continuous Polling
// ============================================
function startStatusPolling() {
  // Clear any existing interval
  if (statusPollInterval) clearInterval(statusPollInterval);

  // Poll every 2 seconds to check for status changes
  statusPollInterval = setInterval(() => {
    checkOrderStatus();
  }, 2000);
}

function checkOrderStatus() {
  if (!currentOrderId) return;
  const orders = JSON.parse(localStorage.getItem('auraOrders') || '[]');
  const myOrder = orders.find(o => o.id === currentOrderId);

  if (myOrder && myOrder.status) {
    showTracker(myOrder.status);
  }
}

function showTracker(status) {
  const tracker = document.getElementById('live-tracker');
  const statusEl = document.getElementById('tracker-status');
  const descEl = document.getElementById('tracker-desc');
  const dot = document.getElementById('tracker-dot');

  tracker.classList.add('visible');

  const table = document.getElementById('table-selector').value;

  const states = {
    new: {
      title: '🍽️ Order Received!',
      desc: 'The kitchen has received your order and will start preparing it shortly.',
      color: 'var(--status-new)'
    },
    cooking: {
      title: '👨‍🍳 Chef is Cooking!',
      desc: 'Your meal is being prepared with care and passion.',
      color: 'var(--status-cooking)'
    },
    ready: {
      title: '✨ Your Meal is on the Way!',
      desc: `A waiter is bringing your food to Table ${table}. Bon appétit!`,
      color: 'var(--status-ready)'
    },
    completed: {
      title: '😊 Enjoy Your Meal!',
      desc: 'We hope you love it. Let us know if you need anything else.',
      color: 'var(--text-muted)'
    }
  };

  const s = states[status] || states.new;
  statusEl.textContent = s.title;
  statusEl.style.color = s.color;
  descEl.textContent = s.desc;
  dot.style.background = s.color;
  dot.style.boxShadow = `0 0 12px ${s.color}`;

  // ---- Update step-by-step progress circles ----
  const stepOrder = ['new', 'cooking', 'ready', 'completed'];
  const currentIndex = stepOrder.indexOf(status);

  const stepColors = {
    new: 'var(--status-new)',
    cooking: 'var(--status-cooking)',
    ready: 'var(--status-ready)',
    completed: 'var(--text-muted)'
  };

  // Update step circles
  document.querySelectorAll('.tracker-step').forEach(step => {
    const stepName = step.dataset.step;
    const stepIndex = stepOrder.indexOf(stepName);
    const circle = step.querySelector('.step-circle');

    if (stepIndex <= currentIndex) {
      // Active/completed step
      circle.style.background = stepColors[stepName];
      circle.style.color = 'white';
      circle.style.border = 'none';
      circle.style.boxShadow = `0 0 12px ${stepColors[stepName]}`;
    } else {
      // Inactive step
      circle.style.background = 'var(--bg-surface)';
      circle.style.color = 'var(--text-dim)';
      circle.style.border = '2px solid var(--glass-border)';
      circle.style.boxShadow = 'none';
    }
  });

  // Update connecting lines
  const lines = document.querySelectorAll('.step-line');
  lines.forEach((line, idx) => {
    if (idx < currentIndex) {
      line.style.background = stepColors[stepOrder[idx + 1]];
    } else {
      line.style.background = 'var(--glass-border)';
    }
  });

  // Stop polling when completed
  if (status === 'completed' && statusPollInterval) {
    setTimeout(() => {
      clearInterval(statusPollInterval);
      statusPollInterval = null;
    }, 5000);
  }
}
