# 🛍️ eComStore - Modern React eCommerce Application

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.0-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

_A fully-featured, type-safe eCommerce platform built with modern React and TypeScript_

</div>

## 📖 Project Overview

This project is a fully-featured eCommerce application built using **React**, **TypeScript**, **styled-components**, and **React Router**, with a comprehensive shopping cart system and product catalog. The application integrates with the Noroff Online Shop API to provide complete e-commerce functionality including product browsing with search and filtering, shopping cart management with quantity controls and persistence, order processing with checkout flow, and user feedback through toast notifications. Users can browse products, view detailed product information with ratings and reviews, add items to their cart, manage quantities, and complete purchases through an intuitive, responsive interface with modern accessibility features and performance optimizations.

## ✨ Key Features

### 🛒 **Shopping Experience**

- **Product Catalog** - Browse products with search and filtering capabilities
- **Product Details** - Detailed product pages with ratings, reviews, and images
- **Shopping Cart** - Add, remove, and manage product quantities
- **Persistent Cart** - Cart contents saved across browser sessions
- **Checkout Flow** - Complete order processing with confirmation

### 🎨 **Modern UI/UX**

- **Responsive Design** - Optimized for all device sizes
- **Loading States** - Skeleton loaders for enhanced user experience
- **Toast Notifications** - Real-time feedback for user actions
- **Hover Animations** - Smooth transitions and interactive elements
- **Accessibility** - WCAG compliant with proper ARIA labels

### ⚡ **Performance & Developer Experience**

- **TypeScript** - Complete type safety throughout the application
- **Lazy Loading** - Code splitting for optimized bundle sizes
- **Custom Hooks** - Reusable logic for products, cart, and localStorage
- **Memoization** - React.memo and useMemo for performance optimization
- **Debounced Search** - Efficient API calls with search optimization

## 🚀 Technologies Used

### **Frontend Stack**

- ⚛️ **React 18** - Modern React with hooks and functional components
- 📘 **TypeScript** - Type-safe development with comprehensive interfaces
- 💅 **Styled Components** - CSS-in-JS with theme support
- 🛣️ **React Router** - Client-side routing and navigation
- 🎯 **React Context** - State management for cart and notifications

### **Development Tools**

- 🔧 **Create React App** - Development environment and build tools
- 📦 **npm** - Package management
- ✅ **ESLint** - Code quality and consistency
- 🎨 **Custom UI Components** - Reusable component library

## 🏗️ Project Structure

```
src/
├── 📁 components/           # Reusable UI components
│   ├── 📁 ui/              # Core UI components (Button, Input, Card, etc.)
│   ├── 📁 layout/          # Layout components (Header, Navigation)
│   ├── 📁 products/        # Product-specific components
│   └── 📁 cart/            # Shopping cart components
├── 📁 pages/               # Page components with lazy loading
├── 📁 hooks/               # Custom React hooks
├── 📁 context/             # React Context providers
├── 📁 types/               # TypeScript type definitions
├── 📁 api/                 # API client and data fetching
└── 📁 styles/              # Global styles and theme
```

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ecom-store
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The app will automatically reload when you make changes

## 📋 Available Scripts

| Command         | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm start`     | 🚀 Runs the app in development mode                 |
| `npm test`      | 🧪 Launches the test runner                         |
| `npm run build` | 📦 Builds the app for production                    |
| `npm run eject` | ⚠️ Ejects from Create React App (one-way operation) |

## 🎯 Core Functionalities

### **Product Management**

- ✅ Browse product catalog with pagination
- ✅ Search products with debounced input
- ✅ View detailed product information
- ✅ Product ratings and reviews display
- ✅ Image handling with fallback states

### **Shopping Cart**

- ✅ Add/remove products from cart
- ✅ Update product quantities
- ✅ Cart persistence across sessions
- ✅ Real-time cart total calculations
- ✅ Clear cart functionality

### **User Experience**

- ✅ Loading states with skeleton components
- ✅ Error handling with user-friendly messages
- ✅ Toast notifications for actions
- ✅ Responsive design for all devices
- ✅ Accessibility features and keyboard navigation

## 🔧 Technical Highlights

### **TypeScript Implementation**

- 📘 **100% TypeScript coverage** with comprehensive type definitions
- 🛡️ **Type-safe API calls** with proper error handling
- 🔍 **IntelliSense support** for enhanced developer experience

### **Performance Optimizations**

- ⚡ **React.memo** for component memoization
- 🚀 **Lazy loading** with code splitting
- 🔄 **Debounced search** to optimize API calls
- 💾 **localStorage caching** for cart persistence

### **Modern React Patterns**

- 🪝 **Custom hooks** for reusable logic
- 🎯 **Context API** for state management
- 🔄 **Error boundaries** for graceful error handling
- 📱 **Responsive design** with mobile-first approach

## 🌐 API Integration

The application integrates with the **Noroff Online Shop API** to provide:

- 📦 Product catalog and details
- 🔍 Search and filtering capabilities
- 💳 Order processing and management

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This project follows modern React and TypeScript best practices. When contributing:

1. 📝 Maintain TypeScript type safety
2. 🎨 Follow the established styling patterns
3. ♿ Ensure accessibility compliance
4. 📱 Test responsive design across devices

## 📄 License

This project was created by Nik Bishop as part of a Noroff education program.

---

<div align="center">

**Built with ❤️ using React, TypeScript, and modern web technologies**


</div>
