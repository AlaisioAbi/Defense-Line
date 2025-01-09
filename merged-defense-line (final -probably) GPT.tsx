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
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('en');
  const [contacts, setContacts] = useState([]); // State for storing contacts
  const [newContact, setNewContact] = useState({ name: '', phone: '', role: '' }); // New contact input
  const [alertNotification, setAlertNotification] = useState(false); // Alert Notification toggle

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
  ];

  const HomePage = () => (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-blue-100 p-4 rounded-lg">
        <Activity className="text-blue-600 mb-2" size={24} />
        <h2 className="font-semibold">Welcome, {username}</h2>
      </div>
      {/* Other home page content here */}
    </div>
  );

  const HelplinePage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="p-4 border rounded bg-white">
            <h3 className="font-bold">{contact.name}</h3>
            <p>{contact.role}</p>
            <p>{contact.phone}</p>
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setContacts([...contacts, newContact]);
          setNewContact({ name: '', phone: '', role: '' });
        }}
        className="mt-4 space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={newContact.phone}
          onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Role"
          value={newContact.role}
          onChange={(e) => setNewContact({ ...newContact, role: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">
          Add Contact
        </button>
      </form>
    </div>
  );

  const SettingsPage = () => (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="space-y-2">
        <label className="block text-gray-700">Alert Notification</label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={alertNotification}
            onChange={(e) => setAlertNotification(e.target.checked)}
            className="mr-2"
          />
          Enable Notifications
        </label>
      </div>
      {/* Other settings content */}
    </div>
  );

  const PageContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'contacts':
        return <HelplinePage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <header className="fixed top-0 w-full bg-white border-b p-4">
        <h1 className="text-2xl font-bold">Defense Line</h1>
        {isLoggedIn && <span className="text-gray-600">Logged in as {username}</span>}
      </header>
      <main className="pt-16 pb-20 max-w-4xl mx-auto">
        <PageContent />
      </main>
      <footer className="fixed bottom-0 w-full bg-white border-t p-4">
        {/* Navigation buttons */}
      </footer>
    </div>
  );
};

export default App;