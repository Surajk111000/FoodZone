# 🍔 FoodZone - Modern Food Delivery Application

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

## 📋 Overview

**FoodZone** is a modern, responsive web application for browsing and exploring a diverse menu of delicious food items. Built with cutting-edge technologies, it offers a seamless user experience with real-time search and filtering capabilities.

### ✨ Key Features

- 🔍 **Smart Search**: Real-time food search with instant results
- 🏷️ **Category Filtering**: Filter foods by meal type (Breakfast, Lunch, Dinner)
- 📱 **Fully Responsive**: Beautiful UI that works on all devices (desktop, tablet, mobile)
- 🎨 **Modern Design**: Glassmorphism UI with smooth animations
- ⚡ **Fast Performance**: Optimized rendering and lazy loading
- 🎯 **Clean Architecture**: Well-organized, maintainable code structure
- 🔗 **RESTful API**: Structured backend with multiple endpoints
- 🛡️ **CORS Enabled**: Secure cross-origin communication

---

## 📦 Project Structure

```
FoodZone/
├── app/                              # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/               # Header with search
│   │   │   ├── FilterButtons/        # Category filter buttons
│   │   │   ├── FoodCard/             # Individual food card
│   │   │   ├── SearchResults/        # Results container
│   │   │   ├── Footer/               # Footer component
│   │   │   └── SearchResults/        # (Legacy - can be removed)
│   │   ├── constants/
│   │   │   └── index.js              # App constants
│   │   ├── styles/
│   │   │   └── GlobalStyles.jsx      # Global theme & styles
│   │   ├── App.jsx                   # Main app component
│   │   └── main.jsx                  # Entry point
│   ├── public/                       # Static assets
│   │   ├── logo.svg
│   │   ├── bg.png
│   │   └── ...images
│   ├── index.html                    # HTML template
│   ├── package.json
│   └── vite.config.js               # Vite configuration
│
├── server/                           # Backend (Express + TypeScript)
│   ├── src/
│   │   ├── data/
│   │   │   └── foodData.ts           # Food database
│   │   ├── routes/
│   │   │   └── foodRoutes.ts         # API routes
│   │   └── index.ts                  # Server entry point
│   ├── public/
│   │   └── images/                   # Food images
│   ├── dist/                         # Compiled JavaScript
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                         # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v14.0 or higher
- **npm**: v6.0 or higher

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Surajk111000/FoodZone.git
cd FoodZone
```

#### 2. Install Frontend Dependencies

```bash
cd app
npm install
```

#### 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

### Running the Application

#### Development Mode (Both servers)

**Terminal 1 - Start Frontend:**

```bash
cd app
npm run dev
```

Frontend will be available at: **http://localhost:5173/**

**Terminal 2 - Start Backend:**

```bash
cd server
npm run server
```

Backend will be running on: **http://localhost:9000/**

#### Production Build

```bash
# Build frontend
cd app
npm run build

# Build backend
cd ../server
npm run build
```

---

## 🔌 API Endpoints

### Base URL: `http://localhost:9000`

### Endpoints

#### 1. **Health Check**
- **GET** `/health`
- **Description**: Check if server is running
- **Response**:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2026-03-09T12:00:00.000Z"
}
```

#### 2. **Get All Foods**
- **GET** `/api/foods` or `/`
- **Description**: Retrieve all food items
- **Response**:
```json
[
  {
    "id": 1,
    "name": "Boiled Egg",
    "price": 10,
    "text": "Perfectly boiled protein-packed eggs...",
    "image": "/images/egg.png",
    "type": "breakfast"
  },
  ...
]
```

#### 3. **Get Food by ID**
- **GET** `/api/foods/:id`
- **Description**: Get a specific food item
- **Example**: `/api/foods/1`

#### 4. **Filter by Type**
- **GET** `/api/foods/type/:type`
- **Description**: Get foods by meal type
- **Types**: `breakfast`, `lunch`, `dinner`
- **Example**: `/api/foods/type/breakfast`

---

## 🎨 UI/UX Features

### Design Highlights

- **Glassmorphism Effect**: Modern frosted glass appearance
- **Gradient Backgrounds**: Beautiful color gradients throughout
- **Smooth Animations**: Hover effects and transitions
- **Responsive Grid**: Auto-adjusting layout for all screen sizes
- **Color Scheme**:
  - Primary: `#ff4343` (Red)
  - Background: `#323334` to `#1a1a1a` (Dark)
  - Accent: Gradients and glows

### Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px

---

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern UI library
- **Vite**: Fast build tool and development server
- **Styled Components**: CSS-in-JS styling
- **JavaScript (ES6+)**: Modern JavaScript

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **TypeScript**: Type-safe JavaScript
- **CORS**: Cross-origin resource sharing

### Development Tools
- **npm**: Package manager
- **Nodemon**: Auto-reload development server
- **TSC**: TypeScript compiler

---

## 📝 Available Scripts

### Frontend (`app/` directory)

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend (`server/` directory)

```bash
npm run watch        # Watch TypeScript compilation
npm run dev          # Start development server with nodemon
npm run server       # Run both watch and dev concurrently
npm start            # Start production server
```

---

## 🔐 Security & Best Practices

- ✅ **CORS Protection**: Properly configured CORS headers
- ✅ **Error Handling**: Global error middleware
- ✅ **Input Validation**: Type checking with TypeScript
- ✅ **Production Optimization**: Tree-shaking and code splitting
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Accessibility**: ARIA labels and semantic HTML

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 🚀 Performance Optimizations

- ✨ **Code Splitting**: Separate vendor chunks
- 🎯 **Lazy Loading**: Images loaded on demand
- 📦 **Tree Shaking**: Unused code removal
- ⚡ **Minification**: Terser compression
- 🔄 **Viewport Detection**: Efficient re-rendering

---

## 📚 Future Enhancements

- [ ] User authentication system
- [ ] Shopping cart functionality
- [ ] Order management
- [ ] Payment integration
- [ ] User ratings and reviews
- [ ] Admin dashboard
- [ ] Database integration (MongoDB)
- [ ] Dark/Light theme toggle
- [ ] Multiple language support
- [ ] Push notifications

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💼 Author

**Suraj Koli**

- GitHub: [@Surajk111000](https://github.com/Surajk111000)
- Project: [FoodZone Repository](https://github.com/Surajk111000/FoodZone)

---

## 🙏 Acknowledgments

- Inspired by modern food delivery applications
- Built with React and Express.js community
- Thanks to all contributors and testers

---

## 📞 Support

For support, email or open an issue on GitHub.

---

## 📈 Project Statistics

- **Frontend**: 2000+ lines of code
- **Backend**: 500+ lines of code
- **Components**: 6 major components
- **API Endpoints**: 4 endpoints
- **Responsive Breakpoints**: 3+

---

**Made with ❤️ by Suraj Koli**

⭐ If you found this helpful, please give it a star!
