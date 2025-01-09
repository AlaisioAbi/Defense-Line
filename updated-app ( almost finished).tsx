
import React, { useState } from 'react';
import { Home, Map, Settings, Activity, Bell, LogIn, AlertCircle } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');
  const [contacts, setContacts] = useState([
    { name: 'Dr. Alice Smith', phone: '123-456-7890', role: 'General Physician' },
    { name: 'Health Official John Doe', phone: '098-765-4321', role: 'Health Department Representative' }
  ]);

  // Function to add a new contact to the list
  const addContact = (newContact) => setContacts([...contacts, newContact]);

  // Home page component displaying welcome message and emergency button
  const HomePage = () => (
    <div className="p-4">
      <div className="mb-6">
        <h2 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Welcome to Defense Line</h2>
        <p className={`text-gray-600 ${theme === 'dark' ? 'text-gray-300' : ''}`}>Your trusted disease monitoring platform</p>
        {isLoggedIn && <p className={`text-gray-600 ${theme === 'dark' ? 'text-gray-300' : ''}`}>Logged in as: {username}</p>}
      </div>
      <div className="space-y-4">
        <div className={`bg-blue-100 p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900' : ''}`}>
          <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Active Monitoring</h3>
          <p className={`${theme === 'dark' ? 'text-gray-300' : ''}`}>Currently monitoring: 127 locations</p>
        </div>
        <div className={`bg-green-100 p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900' : ''}`}>
          <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Emergency Contacts</h3>
          <ul className="space-y-2">
            {contacts.map((contact, index) => (
              <li key={index} className={`p-2 bg-white rounded ${theme === 'dark' ? 'bg-gray-700' : ''}`}>
                <h3 className={`font-bold text-blue-600 ${theme === 'dark' ? 'text-blue-300' : ''}`}>{contact.name}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : ''}`}>Role: {contact.role}</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : ''}`}>Phone: <a href={`tel:${contact.phone}`} className="text-blue-500">{contact.phone}</a></p>
              </li>
            ))}
          </ul>
        </div>
        <button 
          onClick={() => setCurrentPage('emergency-alert')} 
          className="w-full bg-red-600 text-white p-4 rounded text-lg font-bold"
        >
          Alert Health Officials
        </button>
      </div>
    </div>
  );

  // Emergency alert page component for notifying health officials
  const EmergencyAlertPage = () => (
    <div className="p-4">
      <h2 className={`text-xl font-bold text-red-600 mb-4 ${theme === 'dark' ? 'text-red-300' : ''}`}>Emergency Alert</h2>
      <p className={`${theme === 'dark' ? 'text-gray-300' : ''}`}>If you are infected, notify health officials immediately.</p>
      <button 
        onClick={() => alert('Health officials have been notified!')} 
        className="w-full bg-red-600 text-white p-4 rounded text-lg font-bold"
      >
        Notify Health Officials
      </button>
    </div>
  );

  // Login page component with username and password fields
  const LoginPage = () => (
    <div className="p-4">
      <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`block w-full p-2 border rounded mb-4 ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`block w-full p-2 border rounded mb-4 ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`}
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

  // Renders the appropriate page based on the current state
  const PageContent = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'emergency-alert': return <EmergencyAlertPage />;
      case 'login': return <LoginPage />;
      default: return <HomePage />;
    }
  };

  // Main render function with Header, PageContent, and NavigationBar
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

// Exporting the main App component
export default App;
