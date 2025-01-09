import React, { useState } from 'react';
import { Home, Map, Settings, Activity, Bell, LogIn, AlertCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const App = () => {
  // ... previous state declarations remain the same ...
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');
  const [country, setCountry] = useState('United States');
  const [notifications, setNotifications] = useState(true);
  const [contacts, setContacts] = useState([
    { name: 'Dr. Alice Smith', phone: '123-456-7890', role: 'General Physician' },
    { name: 'Health Official John Doe', phone: '098-765-4321', role: 'Health Department Representative' }
  ]);

  // Sample data for charts
  const riskFactors = [
    { name: 'Age 60+', value: 75 },
    { name: 'Respiratory Issues', value: 60 },
    { name: 'Heart Disease', value: 45 },
    { name: 'Diabetes', value: 30 },
    { name: 'Obesity', value: 25 }
  ];

  const symptoms = [
    { name: 'Fever', value: 40 },
    { name: 'Cough', value: 30 },
    { name: 'Fatigue', value: 15 },
    { name: 'Shortness of Breath', value: 15 }
  ];

  const casualtyData = [
    { month: 'Jan', cases: 1000 },
    { month: 'Feb', cases: 1500 },
    { month: 'Mar', cases: 2200 },
    { month: 'Apr', cases: 1800 },
    { month: 'May', cases: 1200 }
  ];

  // Data Analysis Page Component
  const DataAnalysisPage = () => (
    <div className="p-4">
      <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Data Analysis</h2>
      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Overview of disease statistics:</p>
      <div className="space-y-6">
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Risk Factors</h3>
          <div className="overflow-x-auto">
            <BarChart width={350} height={200} data={riskFactors} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </div>
        </div>

        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Symptom Distribution</h3>
          <div className="overflow-x-auto">
            <PieChart width={350} height={200}>
              <Pie
                data={symptoms}
                cx={175}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                paddingAngle={5}
                dataKey="value"
              >
                {symptoms.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#4299E1', '#48BB78', '#ED8936', '#ECC94B'][index % 4]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Case Trends</h3>
          <div className="overflow-x-auto">
            <LineChart width={350} height={200} data={casualtyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="cases" stroke="#EF4444" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );

  // Updated NavigationBar to include the Data button
  const NavigationBar = () => (
    <nav className={`fixed bottom-0 w-full ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t p-4`}>
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <button onClick={() => setCurrentPage('home')} className={`flex flex-col items-center ${currentPage === 'home' ? 'text-blue-500' : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          <Home size={24} />
          <span className="text-sm">Home</span>
        </button>
        <button onClick={() => setCurrentPage('map')} className={`flex flex-col items-center ${currentPage === 'map' ? 'text-blue-500' : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          <Map size={24} />
          <span className="text-sm">Track</span>
        </button>
        <button onClick={() => setCurrentPage('emergency')} className="flex flex-col items-center text-red-600">
          <AlertCircle size={32} />
          <span className="text-sm font-bold">Emergency</span>
        </button>
        <button onClick={() => setCurrentPage('news')} className={`flex flex-col items-center ${currentPage === 'news' ? 'text-blue-500' : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          <Bell size={24} />
          <span className="text-sm">News</span>
        </button>
        <button onClick={() => setCurrentPage('data-analysis')} className={`flex flex-col items-center ${currentPage === 'data-analysis' ? 'text-blue-500' : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          <Activity size={24} />
          <span className="text-sm">Data</span>
        </button>
        <button onClick={() => setCurrentPage('settings')} className={`flex flex-col items-center ${currentPage === 'settings' ? 'text-blue-500' : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          <Settings size={24} />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </nav>
  );

  // Updated PageContent to include the data analysis route
  const PageContent = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'emergency': return <EmergencyAlertPage />;
      case 'settings': return <SettingsPage />;
      case 'news': return <NewsPage />;
      case 'login': return <LoginPage />;
      case 'map': return <div className="p-4">Map feature coming soon!</div>;
      case 'data-analysis': return <DataAnalysisPage />;
      default: return <HomePage />;
    }
  };

  // ... rest of the components remain the same ...

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
