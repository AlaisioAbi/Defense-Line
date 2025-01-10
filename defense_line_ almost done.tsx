
import React, { useState } from 'react';
import {
  Home,
  Map,
  Phone,
  Settings,
  Info,
  Activity,
  Bell,
  Heart,
  LogIn,
  AlertCircle,
  Navigation,
  BarChart,
  Newspaper,
  DollarSign
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { Switch } from '@/components/ui/switch';

const App = () => {
  // State variables to manage application state
  const [currentPage, setCurrentPage] = useState('home'); // Tracks the current active page
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login status
  const [username, setUsername] = useState(''); // Stores the username
  const [password, setPassword] = useState(''); // Stores the password
  const [theme, setTheme] = useState('light'); // Stores the theme (light/dark)
  const [country, setCountry] = useState(''); // Stores selected country
  const [language, setLanguage] = useState('en'); // Stores selected language
  const [contacts, setContacts] = useState([]); // Stores contact list
  const [newContact, setNewContact] = useState({ name: '', phone: '', role: '' }); // Stores new contact details
  const [alertNotification, setAlertNotification] = useState(false); // Tracks alert notifications
  const [address, setAddress] = useState(''); // Stores address information

  // Handler function for login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    setIsLoggedIn(true);
  };

  // Component for the login page
  const LoginPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
    </div>
  );

  // Components for different pages
  const HomePage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Home</h2>
      {/* Add your home page content here */}
    </div>
  );

  const HelplinePage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Helpline</h2>
      {/* Add your helpline content here */}
    </div>
  );

  const SettingsPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      {/* Add your settings content here */}
    </div>
  );

  const NavigationPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Navigation</h2>
      {/* Add your navigation content here */}
    </div>
  );

  const DataAnalysisPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Data Analysis</h2>
      {/* Add your data analysis content here */}
    </div>
  );

  const NewsPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">News</h2>
      {/* Add your news content here */}
    </div>
  );

  const InfoPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Information</h2>
      {/* Add your info content here */}
    </div>
  );

  const DonatePage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Donate</h2>
      {/* Add your donation content here */}
    </div>
  );

  // Function to render the current page based on state
  const PageContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'contacts':
        return <HelplinePage />;
      case 'settings':
        return <SettingsPage />;
      case 'login':
        return <LoginPage />;
      case 'navigation':
        return <NavigationPage />;
      case 'analysis':
        return <DataAnalysisPage />;
      case 'news':
        return <NewsPage />;
      case 'info':
        return <InfoPage />;
      case 'donate':
        return <DonatePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <header className="fixed top-0 w-full bg-white border-b p-4">
        <h1 className="text-2xl font-bold">Defense Line</h1>
        {isLoggedIn ? (
          <span className="text-gray-600">Logged in as {username}</span>
        ) : (
          <button
            onClick={() => setCurrentPage('login')}
            className="text-blue-500 hover:text-blue-600"
          >
            Login
          </button>
        )}
      </header>
      <main className="pt-16 pb-20 max-w-4xl mx-auto">
        <PageContent />
      </main>
      <footer className="fixed bottom-0 w-full bg-white border-t p-4">
        <nav className="grid grid-cols-5 gap-2">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
          >
            <Home size={20} />
            <span className="text-xs">Home</span>
          </button>
          <button 
            onClick={() => setCurrentPage('navigation')} 
            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
          >
            <Navigation size={20} />
            <span className="text-xs">Navigation</span>
          </button>
          <button 
            onClick={() => setCurrentPage('contacts')} 
            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
          >
            <Phone size={20} />
            <span className="text-xs">Contacts</span>
          </button>
          <button 
            onClick={() => setCurrentPage('analysis')} 
            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
          >
            <BarChart size={20} />
            <span className="text-xs">Analysis</span>
          </button>
          <button 
            onClick={() => setCurrentPage('news')} 
            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
          >
            <Newspaper size={20} />
            <span className="text-xs">News</span>
          </button>
          <button 
            onClick={() => setCurrentPage('info')} 
            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
          >
            <Info size={20} />
            <span className="text-xs">Info</span>
          </button>
          <button 
            onClick={() => setCurrentPage('donate')} 
            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
          >
            <DollarSign size={20} />
            <span className="text-xs">Donate</span>
          </button>
          <button 
            onClick={() => setCurrentPage('settings')} 
            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
          >
            <Settings size={20} />
            <span className="text-xs">Settings</span>
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default App;
