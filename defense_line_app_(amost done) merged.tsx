
import React, { useState } from 'react';
import {
  Home,
  Phone,
  Settings,
  Info,
  Navigation,
  BarChart,
  Newspaper,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';
import { Switch } from '@/components/ui/switch';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [contacts, setContacts] = useState([
    { name: 'Dr. John Doe', phone: '+123456789', role: 'Chief Medical Officer' },
    { name: 'Nurse Jane Smith', phone: '+987654321', role: 'Senior Nurse' },
    { name: 'Dr. Emily Davis', phone: '+192837465', role: 'Emergency Specialist' }
  ]);
  const [newContact, setNewContact] = useState({ name: '', phone: '', role: '' });
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('en');
  const [address, setAddress] = useState('');
  const [showEmergencyAlert, setShowEmergencyAlert] = useState(false);

  const sampleData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' }
  ];

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'France',
    'Germany',
    'Spain'
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
      setCurrentPage('home');
    }
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (newContact.name && newContact.phone) {
      setContacts([...contacts, newContact]);
      setNewContact({ name: '', phone: '', role: '' });
    }
  };

  const EmergencyAlert = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Emergency Alert</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="mb-4 text-gray-800">This will alert nearby health officials about your condition.</p>
        <button
          onClick={() => {
            alert('Emergency services have been notified');
            setShowEmergencyAlert(false);
            setCurrentPage('home');
          }}
          className="w-full p-6 bg-red-600 text-white text-xl font-bold rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300"
        >
          ALERT EMERGENCY SERVICES
        </button>
        <button
          onClick={() => {
            setShowEmergencyAlert(false);
            setCurrentPage('home');
          }}
          className="w-full mt-4 p-2 border border-gray-300 text-gray-600 rounded hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-200">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded text-gray-800"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded text-gray-800"
            required
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );

  const HomePage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome{isLoggedIn ? `, ${username}` : ''}</h2>
      <button
        onClick={() => setShowEmergencyAlert(true)}
        className="w-full mb-6 p-4 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center gap-2"
      >
        <AlertCircle size={24} />
        Emergency Alert
      </button>
      <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-700">
        <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Quick Stats</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const HelplinePage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
      
      {/* Add Contact Form */}
      <form onSubmit={handleAddContact} className="mb-6 bg-white p-4 rounded-lg shadow dark:bg-gray-700">
        <h3 className="text-lg font-semibold mb-4 dark:text-gray-100">Add New Contact</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200">Name</label>
            <input
              type="text"
              value={newContact.name}
              onChange={(e) => setNewContact({...newContact, name: e.target.value})}
              className="w-full p-2 border rounded text-gray-800"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200">Phone Number</label>
            <input
              type="tel"
              value={newContact.phone}
              onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
              className="w-full p-2 border rounded text-gray-800"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200">Role</label>
            <input
              type="text"
              value={newContact.role}
              onChange={(e) => setNewContact({...newContact, role: e.target.value})}
              className="w-full p-2 border rounded text-gray-800"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Contact
          </button>
        </div>
      </form>

      {/* Contact List */}
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow dark:bg-gray-700">
            <h3 className="font-semibold dark:text-gray-100">{contact.name}</h3>
            <p className="text-blue-500 dark:text-blue-300">{contact.phone}</p>
            {contact.role && <p className="text-gray-600 dark:text-gray-300">{contact.role}</p>}
          </div>
        ))}
      </div>
    </div>
  );

  const SettingsPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-700">
          <h3 className="font-semibold mb-4 dark:text-gray-100">Preferences</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full p-2 border rounded text-gray-800"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full p-2 border rounded text-gray-800"
              >
                <option value="">Select a country</option>
                {countries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border rounded text-gray-800"
                rows={3}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="dark:text-gray-100">Dark Mode</span>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const NavigationPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Navigation</h2>
      <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-700">
        <p className="dark:text-gray-100">Interactive map and navigation features will be displayed here.</p>
      </div>
    </div>
  );

  const DataAnalysisPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Data Analysis</h2>
      <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-700">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const NewsPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-700">
          <h3 className="font-semibold dark:text-gray-100">Defense System Update</h3>
          <p className="dark:text-gray-300">Latest updates and improvements to the defense system...</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-700">
          <h3 className="font-semibold dark:text-gray-100">Security Alert</h3>
          <p className="dark:text-gray-300">Important security information and updates...</p>
        </div>
      </div>
    </div>
  );

  const InfoPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Information Center</h2>
      <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-700">
        <h3 className="font-semibold mb-2 dark:text-gray-100">About Defense Line</h3>
        <p className="dark:text-gray-300">Comprehensive information about our defense management system...</p>
      </div>
    </div>
  );

  const DonatePage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Support Our Cause</h2>
      <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-700">
        <h3 className="font-semibold mb-2 dark:text-gray-100">Make a Donation</h3>
        <p className="mb-4 dark:text-gray-300">Help support our defense initiatives</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Donate Now
        </button>
      </div>
    </div>
  );

  const PageContent = () => {
    if (showEmergencyAlert) {
      return <EmergencyAlert />;
    }

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
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`fixed top-0 w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b p-4 z-10`}>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Defense Line</h1>
          {isLoggedIn ? (
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Welcome, {username}</span>
          ) : (
            <button
              onClick={() => setCurrentPage('login')}
              className="text-blue-500 hover:text-blue-600"
            >
              Login
            </button>
          )}
        </div>
      </header>
      
      <main className="pt-16 pb-20 max-w-4xl mx-auto">
        <PageContent />
      </main>

      <footer className={`fixed bottom-0 w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-t p-4 z-10`}>
        <nav className="grid grid-cols-8 gap-2">

          <button 
            onClick={() => setCurrentPage('info')} 
            className={`flex flex-col items-center ${currentPage === 'info' ? 'text-blue-500' : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-600`}
          >
            <Info size={20} />
            <span className="text-xs">Info</span>
          </button>
          <button 
            onClick={() => setCurrentPage('donate')} 
            className={`flex flex-col items-center ${currentPage === 'donate' ? 'text-blue-500' : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-600`}
          >
            <DollarSign size={20} />
            <span className="text-xs">Donate</span>
          </button>
          <button 
            onClick={() => setCurrentPage('settings')} 
            className={`flex flex-col items-center ${currentPage === 'settings' ? 'text-blue-500' : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-600`}
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
