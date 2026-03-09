# 🍕 FoodZone - Modern Food Delivery App (Frontend Only)

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-4.3.5-purple?logo=vite)
![Styled Components](https://img.shields.io/badge/Styled--Components-6.0-pink?logo=styled-components)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?logo=netlify)

## 🎯 Overview

**FoodZone** is a **stateless, frontend-only** modern food delivery app built with **React 18** + **Vite**. No backend needed! Browse 12 delicious foods, search in real-time, manage your cart, and save favorites to your wishlist.

**🚀 Live:** [foodzone-react-node.netlify.app](https://foodzone-react-node.netlify.app)

## ✨ All Features

- 🔍 Real-time search filtering
- 🏷️ Category filtering (Breakfast, Lunch, Dinner)
- 🛒 Shopping cart with live count badge
- ❤️ Wishlist/Favorites system
- 📱 Fully responsive design
- 🎨 Modern glassmorphism UI
- 💫 Smooth animations & transitions
- ⚡ Zero backend = instant loading
- 🌙 Dark theme optimized
- 📊 12 pre-loaded food items

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite 4.3** - Fast build tool
- **Styled Components** - Beautiful CSS-in-JS
- **Context API** - Global state management
- **Netlify** - Cloud deployment
- **ES6+ JavaScript** - Modern syntax

## 🚀 Quick Start

`ash
git clone https://github.com/yourusername/FoodZone.git
cd FoodZone/app
npm install
npm run dev
`

App runs at http://localhost:5174/

## 📁 Project Structure

`
FoodZone/
├── app/                         # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/         # Search + cart badge
│   │   │   ├── FilterButtons/  # Category filters
│   │   │   ├── FoodCard/       # Food item card
│   │   │   ├── SearchResults/  # Grid layout
│   │   │   ├── FoodModal/      # Details modal (NEW)
│   │   │   ├── Cart/           # Cart sidebar (NEW)
│   │   │   ├── Wishlist/       # Favorites (NEW)
│   │   │   └── Footer/         # Footer
│   │   ├── constants/          # MOCK_FOOD_DATA
│   │   ├── context/            # Global state (NEW)
│   │   ├── styles/             # Theme & animations
│   │   ├── App.jsx             # Main component
│   │   └── main.jsx            # Entry point
│   ├── package.json
│   └── vite.config.js
├── netlify.toml                 # Deployment config
└── README.md
`

## 📊 Mock Data (12 Items)

| # | Food | Price | Category | Icon |
|---|------|-------|----------|------|
| 1 | Boiled Egg | \ | Breakfast | 🥚 |
| 2 | Ramen | \ | Lunch | 🍜 |
| 3 | Grilled Chicken | \ | Dinner | 🍗 |
| 4 | Cake | \ | Breakfast | 🍰 |
| 5 |burger | \ | Lunch | 🍔 |
| 6 | Pancake | \ | Breakfast | 🥞 |
| 7 | Pizza | \ | Lunch | 🍕 |
| 8 | Salmon | \ | Dinner | 🐟 |
| 9 | Coffee | \ | Breakfast | ☕ |
| 10 | Pasta | \ | Lunch | 🍝 |
| 11 | Steak | \ | Dinner | 🥩 |
| 12 | Donut | \ | Breakfast | 🍩 |

## 🎨 UI Features

✅ Glassmorphism design with blur effects  
✅ Gradient backgrounds & smooth shadows  
✅ Staggered card animations on load  
✅ Bouncing logo & hover effects  
✅ Responsive grid (auto-fit)  
✅ Dark theme perfect for food apps  
✅ Custom scrollbar styling  
✅ Mobile-first responsive design

## 📱 Responsive Breakpoints

- **Desktop** (>1024px)
- **Tablet** (768-1024px)
- **Mobile** (<768px)
- **Small Mobile** (<480px)

## 🌐 Deployment (Netlify)

### Setup
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: cd app && npm run build
4. Publish: pp/dist
5. Deploy!

### Auto-Deploy
Every push to GitHub automatically triggers deployment.

## 📝 Commands

`ash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview build
`

## 🎯 New Features Added

### 1. Shopping Cart
- Add items from food cards
- Live count badge in header
- View cart contents
- Remove items

### 2. Wishlist System
- Heart icon to save favorites
- Dedicated wishlist section
- Persistent across session

### 3. Food Details Modal
- Click card for full details
- Large emoji display
- Complete description
- Quick add to cart

### 4. Global State (Context)
- Cart management
- Wishlist tracking
- Shared across components

### 5. Enhanced Animations
- Staggered card entrance
- Smooth hover effects
- Loading spinner
- Transition effects

## 🤝 Contributing

`ash
git checkout -b feature/your-feature
git commit -m Add your feature
git push origin feature/your-feature
`

## 📄 License

MIT License - Free to use and modify

## 👨‍💻 Author

**Your Name** - Full Stack Developer
- GitHub: [@yourusername](https://github.com/yourusername)
- Portfolio: [yoursite.com](https://yoursite.com)

## 🔗 Links

- **Live Demo**: https://foodzone-react-node.netlify.app
- **GitHub**: https://github.com/yourusername/FoodZone
- **Issues**: https://github.com/yourusername/FoodZone/issues

---

**Made with ❤️ for modern frontend development**

⭐ **Star this repo if you found it useful!**
