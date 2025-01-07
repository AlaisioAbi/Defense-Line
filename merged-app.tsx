import React, { useState } from 'react';
import { Home, Map, Settings, Activity, Bell, LogIn, AlertCircle } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');
  const [notifications, setNotifications] = useState(true);
  const [contacts, setContacts] = useState([
    { name: 'Dr. Alice Smith', phone: '123-456-7890', role: 'General Physician' },
    { name: 'Health Official John Doe', phone: '098-765-4321', role: 'Health Department Representative' }
  ]);

  const addContact = (newContact) => setContacts([...contacts, newContact]);

  const getRandomHeadline = (source) => {
    const headlines = {
      FOX: ["Breaking: New Disease Outbreak in Major City", "Health Officials Warn About Rising Death Toll"],
      BBC: ["Latest Updates: Pandemic Response Efforts", "Global Death Toll Reaches Record Levels"],
      CNN: ["Urgent: Hospitals Overwhelmed by Patients", "New Travel Restrictions Announced"]
    };
    return headlines[source][Math.floor(Math.random() * headlines[source].length)];
  };

  const HomePage = () => (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Welcome to Defense Line</h2>
        <p className="text-gray-600">Your trusted disease monitoring platform</p>
      </div>
      <div className="space-y-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Active Monitoring</h3>
          <p>Currently monitoring: 127 locations</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Emergency Contacts</h3>
          <ul className="space-y-2">
            {contacts.map((contact, index) => (
              <li key={index} className="p-2 bg-white rounded">
                <h3 className="font-bold text-blue-600">{contact.name}</h3>
                <p>Role: {contact.role}</p>
                <p>Phone: <a href={`tel:${contact.phone}`} className="text-blue-500">{contact.phone}</a></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const MapPage = () => {
    const dublinLocations = [
      { id: 1, x: 200, y: 120, status: 'alert', name: 'St. James Hospital', type: 'hospital' },
      { id: 2, x: 150, y: 150, status: 'safe', name: 'Trinity College', type: 'education' },
      { id: 3, x: 280, y: 140, status: 'alert', name: 'Beaumont Hospital', type: 'hospital' }
    ];

    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Dublin Monitoring Map</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <path
              d="M100,100 C150,80 200,80 250,100 C300,120 350,150 350,200 C350,250 300,280 250,280 C200,280 150,250 100,200 C50,150 50,120 100,100"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="2"
            />
            <path
              d="M50,150 C100,140 200,160 350,150"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="3"
            />
            {dublinLocations.map((loc) => (
              <g key={loc.id}>
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r="6"
                  fill={loc.status === 'alert' ? '#EF4444' : '#3B82F6'}
                  className="cursor-pointer"
                  onClick={() => alert(`${loc.name}\nStatus: ${loc.status.toUpperCase()}`)}
                />
                <text x={loc.x} y={loc.y - 10} fontSize="10" textAnchor="middle" fill="#374151">
                  {loc.name}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    );
  };

  const NewsPage = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">News</h2>
      {['FOX', 'BBC', 'CNN'].map(source => (
        <button
          key={source}
          onClick={() => alert(getRandomHeadline(source))}
          className="block w-full bg-blue-500 text-white p-2 rounded mb-2"
        >
          {source} News
        </button>
      ))}
    </div>
  );

  const EmergencyPage = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold text-red-600 mb-4">Emergency</h2>
      <button 
        onClick={() => alert('Emergency alert sent to health authorities!')}
        className="w-full bg-red-600 text-white p-4 rounded text-lg font-bold"
      >
        Push to Notify Health Authorities
      </button>
    </div>
  );

  const SettingsPage = () => {
    const [newContact, setNewContact] = useState({ name: '', phone: '', role: '' });

    const handleAddContact = () => {
      if (newContact.name && newContact.phone && newContact.role) {
        addContact(newContact);
        setNewContact({ name: '', phone: '', role: '' });
      } else {
        alert('Please fill in all fields');
      }
    };

    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <div className="space-y-4">
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
            <label className="block font-semibold mb-1">Add Contact</label>
            <input
              type="text"
              placeholder="Name"
              value={newContact.name}
              onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Phone"
              value={newContact.phone}
              onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Role"
              value={newContact.role}
              onChange={(e) => setNewContact({ ...newContact, role: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <button
              onClick={handleAddContact}
              className="w-full bg-blue-600 text-white p-2 rounded"
            >
              Add Contact
            </button>
          </div>
        </div>
      </div>
    );
  };

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

  const PageContent = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'map': return <MapPage />;
      case 'news': return <NewsPage />;
      case 'emergency': return <EmergencyPage />;
      case 'settings': return <SettingsPage />;
      case 'login': return <LoginPage />;
      default: return <HomePage />;
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