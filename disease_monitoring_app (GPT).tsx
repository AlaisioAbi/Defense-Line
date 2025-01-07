
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
  AlertCircle 
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');
  const [notifications, setNotifications] = useState(true);

  const getRandomHeadline = (source) => {
    const headlines = {
      FOX: [
        "Breaking: New Disease Outbreak in Major City",
        "Health Officials Warn About Rising Death Toll",
        "Vaccination Campaigns Ramping Up Globally"
      ],
      BBC: [
        "Latest Updates: Pandemic Response Efforts",
        "Global Death Toll Reaches Record Levels",
        "Experts Share New Findings on Disease Spread"
      ],
      CNN: [
        "Urgent: Hospitals Overwhelmed by Patients",
        "New Travel Restrictions Announced",
        "Government Allocates Funds for Healthcare"
      ],
      Al Jazeera: [
        "Developing: Spread of New Variant Confirmed",
        "Medical Supplies Shortage Hits Developing Nations",
        "World Leaders Discuss Global Response to Crisis"
      ],
      NDTV: [
        "India Reports Record High in Cases",
        "Vaccination Drives Expanded Nationwide",
        "Health Experts Advise Caution During Festivals"
      ],
      Sky News: [
        "Breaking: European Nations Implement New Lockdowns",
        "UK Health Authorities Announce Emergency Measures",
        "Scientists Develop Promising New Treatment"
      ]
    };

    const sourceHeadlines = headlines[source];
    return sourceHeadlines[Math.floor(Math.random() * sourceHeadlines.length)];
  };

  const NavigationBar = () => (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <button onClick={() => setCurrentPage('home')} className="flex flex-col items-center text-blue-600">
          <Home size={24} />
          <span className="text-sm">Home</span>
        </button>
        <button onClick={() => setCurrentPage('map')} className="flex flex-col items-center text-gray-600">
          <Map size={24} />
          <span className="text-sm">Track</span>
        </button>
        <button onClick={() => setCurrentPage('emergency')} className="flex flex-col items-center text-red-600">
          <AlertCircle size={32} />
          <span className="text-sm font-bold">Emergency</span>
        </button>
        <button onClick={() => setCurrentPage('news')} className="flex flex-col items-center text-gray-600">
          <Bell size={24} />
          <span className="text-sm">News</span>
        </button>
        <button onClick={() => setCurrentPage('settings')} className="flex flex-col items-center text-gray-600">
          <Settings size={24} />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </nav>
  );

  const Header = () => (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 p-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <div className="flex items-center space-x-2">
          <Activity className="text-blue-600" size={32} />
          <h1 className="text-2xl font-bold text-blue-600">Defense Line</h1>
        </div>
        {!isLoggedIn && (
          <button onClick={() => setCurrentPage('login')} className="flex items-center space-x-1 text-gray-600">
            <LogIn size={20} />
            <span>Login</span>
          </button>
        )}
      </div>
    </header>
  );

  const LoginPage = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full p-2 border rounded mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full p-2 border rounded mb-4"
      />
      <button
        onClick={() => {
          setIsLoggedIn(true);
          setCurrentPage('home');
        }}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Login
      </button>
    </div>
  );

  const MapPage = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Track</h2>
      <img src="/map-image.jpg" alt="Map" className="w-full rounded" />
    </div>
  );

  const NewsPage = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">News</h2>
      <button
        onClick={() => alert(getRandomHeadline('FOX'))}
        className="block w-full bg-blue-500 text-white p-2 rounded mb-2"
      >
        FOX News
      </button>
      <button
        onClick={() => alert(getRandomHeadline('BBC'))}
        className="block w-full bg-green-500 text-white p-2 rounded mb-2"
      >
        BBC News
      </button>
      <button
        onClick={() => alert(getRandomHeadline('CNN'))}
        className="block w-full bg-red-500 text-white p-2 rounded mb-2"
      >
        CNN
      </button>
      <button
        onClick={() => alert(getRandomHeadline('Al Jazeera'))}
        className="block w-full bg-yellow-500 text-white p-2 rounded mb-2"
      >
        Al Jazeera
      </button>
      <button
        onClick={() => alert(getRandomHeadline('NDTV'))}
        className="block w-full bg-purple-500 text-white p-2 rounded mb-2"
      >
        NDTV
      </button>
      <button
        onClick={() => alert(getRandomHeadline('Sky News'))}
        className="block w-full bg-indigo-500 text-white p-2 rounded"
      >
        Sky News
      </button>
    </div>
  );

  const EmergencyPage = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold text-red-600 mb-4">Emergency</h2>
      <button className="w-full bg-red-600 text-white p-4 rounded text-lg font-bold">
        Push to Notify Health Authorities
      </button>
    </div>
  );

  const SettingsPage = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Theme</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)} className="w-full p-2 border rounded">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Language</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full p-2 border rounded">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Notifications</label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
          className="mr-2"
        />
        Enable Notifications
      </div>
    </div>
  );

  const PageContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'map':
        return <MapPage />;
      case 'news':
        return <NewsPage />;
      case 'emergency':
        return <EmergencyPage />;
      case 'settings':
        return <SettingsPage />;
      case 'login':
        return <LoginPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <Header />
      <main className="pt-16 pb-20 max-w-4xl mx-auto">
        <PageContent />
      </main>
      <NavigationBar />
    </div>
  );
};

export default App;

