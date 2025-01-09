import React, { useState } from 'react';
import {
  Home, Map, Phone, Settings, AlertCircle, Bell
} from 'lucide-react';
import {
  LineChart, Line, Pie, PieChart as RePieChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [contacts, setContacts] = useState([
    { name: 'Dr. Alice Johnson', phone: '123-456-7890', role: 'General Physician' },
    { name: 'Dr. Bob Smith', phone: '098-765-4321', role: 'Pediatrician' }
  ]);
  const [newContact, setNewContact] = useState({ name: '', phone: '', role: '' });
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

  const immunodeficiencyData = [
    { name: 'Predominantly Antibody Deficiency', value: 55 },
    { name: 'Combined T-Cell and B-Cell Immunodeficiency', value: 11 },
    { name: 'Congenital phagocyte defects', value: 10 },
    { name: 'Other well-defined immunodeficiencies', value: 13 },
    { name: 'Complement deficiencies', value: 4 },
    { name: 'Autoinflammatory diseases', value: 2 },
    { name: 'Genetic defects of immune regulation', value: 3 },
    { name: 'Non-classified immunodeficiencies', value: 1 }
  ];

  const NavigationBar = () => (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <button className="p-2 hover:bg-gray-100 rounded" onClick={() => setCurrentPage('home')}><Home size={24} /></button>
        <button className="p-2 hover:bg-gray-100 rounded" onClick={() => setCurrentPage('map')}><Map size={24} /></button>
        <button className="p-2 hover:bg-gray-100 rounded" onClick={() => setCurrentPage('contacts')}><Phone size={24} /></button>
        <button className="p-2 hover:bg-gray-100 rounded" onClick={() => setCurrentPage('emergency')}><AlertCircle size={24} /></button>
        <button className="p-2 hover:bg-gray-100 rounded" onClick={() => setCurrentPage('news')}><Bell size={24} /></button>
        <button className="p-2 hover:bg-gray-100 rounded" onClick={() => setCurrentPage('settings')}><Settings size={24} /></button>
      </div>
    </nav>
  );

  const Header = () => (
    <header className="fixed top-0 w-full bg-white p-4 border-b border-gray-200">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-xl font-bold">Defense Line</h1>
        {isLoggedIn && <span className="text-gray-600">Welcome, {username}</span>}
        {!isLoggedIn && <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setCurrentPage('login')}>Login</button>}
      </div>
    </header>
  );

  const LoginPage = () => (
    <div className="p-4 mt-16">
      <div className="max-w-md mx-auto space-y-4">
        <input 
          className="w-full p-2 border rounded" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
        />
        <input 
          className="w-full p-2 border rounded"
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <button 
          className="w-full p-2 bg-blue-500 text-white rounded"
          onClick={() => { 
            if (password.length >= 6) {
              setIsLoggedIn(true); 
              setCurrentPage('home');
            } else {
              alert('Password must be at least 6 characters long');
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );

  const ContactsPage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <div className="space-y-4">
        {contacts.map((contact, idx) => (
          <div key={idx} className="p-4 border rounded">
            <div className="font-bold">{contact.name}</div>
            <div className="text-gray-600">{contact.phone}</div>
            <div className="text-gray-600">{contact.role}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <input
          className="w-full p-2 border rounded"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) => setNewContact({...newContact, name: e.target.value})}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Phone"
          value={newContact.phone}
          onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Role"
          value={newContact.role}
          onChange={(e) => setNewContact({...newContact, role: e.target.value})}
        />
        <button 
          className="w-full px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            if (newContact.name && newContact.phone && newContact.role) {
              setContacts([...contacts, newContact]);
              setNewContact({ name: '', phone: '', role: '' });
            }
          }}
        >
          Add Contact
        </button>
      </div>
    </div>
  );

  const MapPage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Disease Spread Map</h2>
      <div className="border p-4 rounded">
        <div className="grid grid-cols-8 gap-2">
          {Array(64).fill().map((_, i) => (
            <div 
              key={i} 
              className="w-8 h-8 border flex items-center justify-center"
            >
              {Math.random() < 0.2 ? 'X' : Math.random() < 0.3 ? 'O' : '·'}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">Legend:</p>
        <p className="text-sm">X = Contaminated Areas</p>
        <p className="text-sm">O = Health Centers</p>
        <p className="text-sm">· = Safe Areas</p>
      </div>
    </div>
  );

  const DataAnalysisPage = () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    return (
      <div className="p-4 mt-16">
        <h2 className="text-2xl font-bold mb-6">Disease Analysis Dashboard</h2>
        
        <div className="flex space-x-4 mb-6">
          {['overview', 'age', 'symptoms', 'immunity'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Disease Spread Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={[
                { month: 'Jan', cases: 45, deaths: 5 },
                { month: 'Feb', cases: 78, deaths: 8 },
                { month: 'Mar', cases: 132, deaths: 12 },
                { month: 'Apr', cases: 89, deaths: 7 },
                { month: 'May', cases: 156, deaths: 15 }
              ]}>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="cases" stroke="#8884d8" name="Cases" />
                <Line type="monotone" dataKey="deaths" stroke="#ff7300" name="Deaths" />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === 'age' && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Age Distribution and Risk Factors</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ageData}>
                <XAxis dataKey="age" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="cases" stroke="#8884d8" />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {ageData.map((item) => (
                <div key={item.age} className="p-4 border rounded">
                  <h4 className="font-semibold">{item.age}</h4>
                  <p className="text-sm">Risk Level: {item.risk}</p>
                  <p className="text-sm">Cases: {item.cases}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'symptoms' && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Symptom Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RePieChart>
                <Pie
                  data={symptomsData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  fill="#82ca9d"
                  label
                />
                <Legend />
              </RePieChart>
            </ResponsiveContainer>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Common Symptoms Overview:</h4>
              <ul className="space-y-2">
                {symptomsData.map((symptom) => (
                  <li key={symptom.name} className="flex justify-between border-b pb-2">
                    <span>{symptom.name}</span>
                    <span>{symptom.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'immunity' && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Immunodeficiency Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RePieChart>
                <Pie
                  data={immunodeficiencyData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  fill="#8884d8"
                  label
                />
                <Legend />
              </RePieChart>
            </ResponsiveContainer>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Detailed Breakdown:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {immunodeficiencyData.map((item) => (
                  <div key={item.name} className="p-4 border rounded">
                    <h5 className="font-semibold">{item.name}</h5>
                    <p className="text-sm">{item.value}% of cases</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

    const HomePage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Welcome to Defense Line</h2>
      <button 
        className="px-6 py-3 bg-green-500 text-white rounded"
        onClick={() => setCurrentPage('donate')}
      >
        Donate
      </button>
    </div>
  );

  const DonatePage = () => (
    <div className="p-4 mt-16 space-y-4">
      <h2 className="text-2xl font-bold">Donate</h2>
      <div className="grid grid-cols-2 gap-4">
        {[5, 10, 20, 50].map((amt) => (
          <button 
            key={amt}
            className="p-3 border rounded hover:bg-gray-100"
            onClick={() => setDonationAmount(amt)}
          >
            ${amt}
          </button>
        ))}
      </div>
      <input
        className="w-full p-2 border rounded"
        placeholder="Custom Amount"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
      />
    </div>
  );

  const EmergencyPage = () => (
    <div className="p-4 mt-16">
      <button className="w-full p-6 bg-red-600 text-white rounded-lg text-xl font-bold">
        Notify Health Authorities
      </button>
    </div>
  );

  const NewsPage = () => (
    <div className="p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">News</h2>
      <ul className="space-y-4">
        {["Breaking: New Disease Outbreak", "Health Authorities Issue Warnings", "Vaccination Campaign Updates"].map((news, idx) => (
          <li key={idx} className="p-4 shadow-lg rounded-md bg-white">{news}</li>
        ))}
      </ul>
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

  const pages = {
    home: <HomePage />,
    login: <LoginPage />,
    donate: <DonatePage />,
    contacts: <ContactsPage />,
    emergency: <EmergencyPage />,
    analysis: <DataAnalysisPage />,
    map: <MapPage />,
    settings: <SettingsPage />,
    news: <NewsPage />
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <Header />
      <main className="pb-20">{pages[currentPage]}</main>
      <NavigationBar />
    </div>
  );
};

export default App;