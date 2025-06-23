# 🌐 React Router Demo App

A comprehensive React application showcasing React Router DOM implementation with dynamic routing, API data fetching, and modern component architecture. Perfect for learning client-side routing and building multi-page React applications.

## ✨ Features

- **Multi-Page Navigation**: Seamless client-side routing between 5+ different pages
- **Dynamic Route Parameters**: User profile pages with URL-based parameters (`/user/:userid`)
- **API Data Loading**: GitHub profile integration with React Router's loader functions
- **Active Navigation States**: Visual feedback for current page with NavLink highlighting
- **Nested Routing**: Consistent header/footer layout across all pages
- **Real-time Data**: Live GitHub follower count and profile avatar display
- **Modern UI Components**: Clean, professional design with hover effects and transitions

## 🚀 Technologies Used

- **React 18** with functional components and hooks
- **React Router DOM** for client-side routing and navigation
- **Tailwind CSS** for responsive styling and utility-first design
- **GitHub API** for real-time user data fetching
- **Vite** for fast development server and optimized builds

## 🎯 How It Works

The application demonstrates key React Router concepts:

1. **Router Setup**: Uses `createBrowserRouter` with nested route configuration
2. **Layout Component**: Wraps all pages with consistent header and footer
3. **Navigation**: `NavLink` components with active state styling
4. **Data Loading**: `loader` functions fetch API data before component renders
5. **Dynamic Routes**: URL parameters passed to components via `useParams`
6. **Programmatic Navigation**: Router hooks for navigation control

## 🎨 Design Highlights

- **Professional Layout**: Clean header with logo and navigation menu
- **Interactive Elements**: Hover effects on buttons and navigation links
- **Visual Feedback**: Active page highlighting and smooth transitions
- **Social Media Icons**: GitHub, Discord, Twitter, and other platform links

## 🗂️ Project Structure

```
src/
├── Components/
│   ├── Header/
│   │   └── Header.jsx       # Navigation header with NavLink routing
│   ├── Home/
│   │   └── Home.jsx         # Landing page with hero section
│   ├── About/
│   │   └── About.jsx        # Company information and image
│   ├── Contact/
│   │   └── Contact.jsx      # Contact form and company details
│   ├── Footer/
│   │   └── Footer.jsx       # Site footer with social links
│   ├── Github/
│   │   └── Github.jsx       # GitHub API integration with loader
│   └── User/
│       └── User.jsx         # Dynamic user profile component
├── assets/
│   └── react.svg           # React logo asset
├── App.jsx                 # Main app component (minimal routing setup)
├── Layout.jsx              # Layout wrapper with header/footer
├── main.jsx                # Router configuration and app entry
└── style files...
```

## 💡 Code Quality Features

- **Modular Architecture**: Well-organized component structure with separation of concerns
- **React Router v6**: Latest routing patterns with createBrowserRouter
- **Data Fetching Optimization**: Loader functions for efficient API calls
- **State Management**: Proper use of hooks (useParams, useLoaderData)
- **Reusable Components**: Consistent header/footer across all pages
- **Clean Code Practices**: Clear component naming and file organization
- **Performance Optimized**: Efficient routing with code splitting potential

## 🌐 Page Overview

### 🏠 Home (`/`)
- **Hero Section**: Eye-catching landing area with call-to-action
- **Download Button**: Interactive button with SVG icon
- **Image Gallery**: Responsive image layout with nature photography
- **Typography**: Large headings and descriptive text

### ℹ️ About (`/about`)
- **Company Story**: Professional content about React development
- **Image Integration**: High-quality imagery from Pexels
- **Responsive Layout**: Two-column design that stacks on mobile
- **Content Sections**: Multiple paragraphs with engaging copy

### 📞 Contact (`/contact`)
- **Contact Form**: Full-featured form with name, email, and phone fields
- **Company Information**: Address, phone, and email display
- **Interactive Icons**: Location, phone, and email SVG icons
- **Form Validation**: Input focus states and styling
### 👤 User Profile (`/user/:userid`)
- **Dynamic Content**: Displays user ID from URL parameters
- **Parameter Handling**: Uses `useParams` hook for route data
- **Clean Display**: Simple, centered user information layout

### 🐙 GitHub (`/github`)
- **API Integration**: Real-time GitHub profile data
- **Loader Function**: Pre-loads data before component renders
- **Profile Display**: Shows follower count and avatar image
- **Data Optimization**: Efficient API calls with React Router loaders

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/keval06/react-router
cd react-router

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛣️ Routing Configuration

The app uses modern React Router v6 patterns:

```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
        path='github' 
        element={<Github/>}
        loader={githubInfoLoader}
      />
    </Route>
  )
)
```

## 📡 API Integration

### GitHub Profile Loader
```javascript
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/keval06')
    return response.json()
}
```

**Features:**
- **Pre-loading**: Data fetched before component renders
- **Error Handling**: Proper async/await error management
- **Performance**: Eliminates loading states in components
- **Caching**: React Router handles response caching

## 🎮 Navigation Features

- **Active States**: Current page highlighted with orange-700 color
- **Brand Integration**: Logo linking to home page

## 📱 Responsive Design Highlights

- **Mobile-First**: Tailwind's responsive prefixes (sm:, md:, lg:)
- **Flexible Grids**: CSS Grid and Flexbox for layout management
- **Adaptive Images**: Responsive image sizing and positioning
- **Touch-Friendly**: Proper button and link sizing for mobile
- **Breakpoint Management**: Consistent behavior across devices

## 🔗 External Integrations

- **GitHub API**: Live user data (followers, avatar, profile info)
- **Pexels Images**: High-quality stock photography
- **Social Platforms**: GitHub, Discord, Twitter, Facebook integration
- **Brand Assets**: Professional logo and branding elements

## 🎯 Learning Objectives

Perfect for understanding:
- **React Router v6**: Modern routing patterns and best practices
- **Component Architecture**: Modular design and file organization
- **API Integration**: Data fetching with loader functions
- **State Management**: useParams, useLoaderData hooks
- **Responsive Design**: Mobile-first CSS with Tailwind
- **Navigation UX**: Active states and user feedback

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request
---
*Built with 🌟 using React Router DOM and modern web technologies*