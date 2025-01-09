import React, { useState } from 'react';
import {
  Home, Map, Phone, Settings, AlertCircle, Bell
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
  const [donationAmount, setDonationAmount] = useState('');

  // Disease data for analysis
  const ageData = [
    { age: '0-20', cases: 45, risk: 'Low' },
    { age: '21-40', cases: 78, risk: 'Medium' },
    { age: '41-60', cases: 120, risk: 'High' },
    { age: '60+', cases: 156, risk: 'Very High' }
  ];

  const symptomsData = [
    { name: 'Fever', value: 35 },
    { name: 'Cough', value: 25 },
    { name: 'Fatigue', value: 20 },
    { name: 'Body Aches', value: 15 },
    { name: 'Other', value: 5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const LoginPage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4" onSubmit={(e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setCurrentPage('home');
      }}>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      </form>
    </div>
  );

  const MapPage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Map View</h2>
      <div className="bg-gray-100 h-64 rounded flex items-center justify-center">
        Map Interface Coming Soon
      </div>
    </div>
  );

  const ContactsPage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h3 className="font-bold">Dr. Alice Johnson</h3>
          <p className="text-gray-600">General Physician</p>
          <p>123-456-7890</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-bold">Dr. Bob Smith</h3>
          <p className="text-gray-600">Pediatrician</p>
          <p>098-765-4321</p>
        </div>
      </div>
    </div>
  );

  const EmergencyPage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Emergency Services</h2>
      <div className="space-y-4">
        <button className="w-full p-4 bg-red-500 text-white rounded">
          Call Emergency Services
        </button>
        <div className="p-4 border rounded">
          <h3 className="font-bold">Emergency Numbers</h3>
          <p>Police: 911</p>
          <p>Ambulance: 911</p>
          <p>Fire Department: 911</p>
        </div>
      </div>
    </div>
  );

  const NewsPage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h3 className="font-bold">Latest Health Advisory</h3>
          <p className="text-gray-600">Updated guidelines for prevention measures</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-bold">Community Updates</h3>
          <p className="text-gray-600">New vaccination center locations</p>
        </div>
      </div>
    </div>
  );

  const NavigationBar = () => (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <button 
          className={`p-2 rounded ${currentPage === 'home' ? 'bg-blue-100' : 'hover:bg-gray-100'}`} 
          onClick={() => setCurrentPage('home')}
        >
          <Home size={24} />
        </button>
        <button 
          className={`p-2 rounded ${currentPage === 'map' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
          onClick={() => setCurrentPage('map')}
        >
          <Map size={24} />
        </button>
        <button 
          className={`p-2 rounded ${currentPage === 'contacts' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
          onClick={() => setCurrentPage('contacts')}
        >
          <Phone size={24} />
        </button>
        <button 
          className={`p-2 rounded ${currentPage === 'emergency' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
          onClick={() => setCurrentPage('emergency')}
        >
          <AlertCircle size={24} />
        </button>
        <button 
          className={`p-2 rounded ${currentPage === 'news' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
          onClick={() => setCurrentPage('news')}
        >
          <Bell size={24} />
        </button>
        <button 
          className={`p-2 rounded ${currentPage === 'settings' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
          onClick={() => setCurrentPage('settings')}
        >
          <Settings size={24} />
        </button>
      </div>
    </nav>
  );

  const Header = () => (
    <header className="fixed top-0 w-full bg-white p-4 border-b border-gray-200">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-xl font-bold">Defense Line</h1>
        {isLoggedIn && (
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, {username}</span>
            <button 
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => {
                setIsLoggedIn(false);
                setUsername('');
                setPassword('');
                setCurrentPage('home');
              }}
            >
              Logout
            </button>
          </div>
        )}
        {!isLoggedIn && <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setCurrentPage('login')}>Login</button>}
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Welcome to Defense Line</h2>
      <div className="space-y-4">
        <button 
          className="w-full px-6 py-3 bg-green-500 text-white rounded"
          onClick={() => setCurrentPage('donate')}
        >
          Donate
        </button>
        <button 
          className="w-full px-6 py-3 bg-blue-500 text-white rounded"
          onClick={() => setCurrentPage('analysis')}
        >
          View Data Analysis
        </button>
      </div>
    </div>
  );

  const DataAnalysisPage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-6">Disease Analysis Dashboard</h2>
      <div className="space-y-8">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={ageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" />
              <YAxis />
              <Line type="monotone" dataKey="cases" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={symptomsData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {symptomsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const DonatePage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
      <form className="space-y-4" onSubmit={(e) => {
        e.preventDefault();
        alert(`Thank you for your donation of $${donationAmount}`);
        setDonationAmount('');
      }}>
        <div>
          <input
            type="number"
            placeholder="Amount"
            className="w-full p-2 border rounded"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );

  const SettingsPage = () => (
    <div className="p-4 mt-16 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="space-y-2">
        <label className="block text-gray-700">Theme</label>
        <select 
          className="w-full p-2 border rounded"
          value={theme} 
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700">Country</label>
        <input 
          className="w-full p-2 border rounded"
          value={country} 
          onChange={(e) => setCountry(e.target.value)} 
          placeholder="Country" 
        />
      </div>
    </div>
  );

  // Updated pages object to include all pages
  const pages = {
    home: <HomePage />,
    login: <LoginPage />,
    map: <MapPage />,
    contacts: <ContactsPage />,
    emergency: <EmergencyPage />,
    news: <NewsPage />,
    analysis: <DataAnalysisPage />,
    settings: <SettingsPage />,
    donate: <DonatePage />
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <Header />
      <main className="pb-20">{pages[currentPage] || <HomePage />}</main>
      <NavigationBar />
    </div>
  );
};

export default App;
