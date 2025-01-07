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
  
  const NavigationBar = () => (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex flex-col items-center text-blue-600"
        >
          <Home size={24} />
          <span className="text-sm">Home</span>
        </button>
        <button 
          onClick={() => setCurrentPage('map')}
          className="flex flex-col items-center text-gray-600"
        >
          <Map size={24} />
          <span className="text-sm">Track</span>
        </button>
        <button 
          className="flex flex-col items-center text-red-600"
        >
          <AlertCircle size={32} />
          <span className="text-sm font-bold">Emergency</span>
        </button>
        <button 
          onClick={() => setCurrentPage('helpline')}
          className="flex flex-col items-center text-gray-600"
        >
          <Phone size={24} />
          <span className="text-sm">Helpline</span>
        </button>
        <button 
          onClick={() => setCurrentPage('settings')}
          className="flex flex-col items-center text-gray-600"
        >
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
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="flex items-center space-x-1 text-gray-600"
          >
            <LogIn size={20} />
            <span>Login</span>
          </button>
        )}
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div onClick={() => setCurrentPage('analysis')} className="bg-blue-100 p-4 rounded-lg">
        <Activity className="text-blue-600 mb-2" size={24} />
        <h2 className="font-semibold">Data Analysis</h2>
      </div>
      <div onClick={() => setCurrentPage('news')} className="bg-green-100 p-4 rounded-lg">
        <Bell className="text-green-600 mb-2" size={24} />
        <h2 className="font-semibold">News</h2>
      </div>
      <div onClick={() => setCurrentPage('map')} className="bg-yellow-100 p-4 rounded-lg">
        <Map className="text-yellow-600 mb-2" size={24} />
        <h2 className="font-semibold">Track</h2>
      </div>
      <div onClick={() => setCurrentPage('helpline')} className="bg-red-100 p-4 rounded-lg">
        <Phone className="text-red-600 mb-2" size={24} />
        <h2 className="font-semibold">Helpline</h2>
      </div>
      <div onClick={() => setCurrentPage('info')} className="bg-purple-100 p-4 rounded-lg">
        <Info className="text-purple-600 mb-2" size={24} />
        <h2 className="font-semibold">Information</h2>
      </div>
      <div onClick={() => setCurrentPage('donate')} className="bg-pink-100 p-4 rounded-lg">
        <Heart className="text-pink-600 mb-2" size={24} />
        <h2 className="font-semibold">Donate</h2>
      </div>
    </div>
  );

  const PageContent = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'analysis':
        return <div className="p-4">Data Analysis Content</div>;
      case 'news':
        return <div className="p-4">News Content</div>;
      case 'map':
        return <div className="p-4">Tracking Map Content</div>;
      case 'helpline':
        return <div className="p-4">Helpline Content</div>;
      case 'info':
        return <div className="p-4">Information Content</div>;
      case 'donate':
        return <div className="p-4">Donations Content</div>;
      case 'settings':
        return <div className="p-4">Settings Content</div>;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16 pb-20 max-w-4xl mx-auto">
        <PageContent />
      </main>
      <NavigationBar />
    </div>
  );
};

export default App;