import React, { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [contacts, setContacts] = useState([
    {
      name: 'Dr. Alice Smith',
      phone: '123-456-7890',
      role: 'General Physician',
    },
    {
      name: 'Health Official John Doe',
      phone: '098-765-4321',
      role: 'Health Department Representative',
    },
  ]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const manageContacts = () => {
    alert('Managing contacts will be implemented soon!');
  };

  const HomePage = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Helpline Contacts</h2>
      <ul className="space-y-2">
        {contacts.map((contact, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded">
            <h3 className="font-bold text-blue-600">{contact.name}</h3>
            <p>Role: {contact.role}</p>
            <p>
              Phone: <a href={`tel:${contact.phone}`} className="text-blue-500">{contact.phone}</a>
            </p>
          </li>
        ))}
      </ul>
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
            className="bg-blue-600 text-white p-2 rounded mb-4"
          >
            Add Contact
          </button>
          <button
            onClick={manageContacts}
            className="bg-green-600 text-white p-2 rounded"
          >
            Manage Contacts
          </button>
        </div>
      </div>
    );
  };

  const PageContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 p-4">
        <h1 className="text-2xl font-bold text-blue-600">Disease Monitoring App</h1>
      </header>
      <main className="pt-16 pb-20 max-w-4xl mx-auto">
        <PageContent />
      </main>
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <button onClick={() => setCurrentPage('home')} className="text-blue-600">
            Home
          </button>
          <button onClick={() => setCurrentPage('settings')} className="text-gray-600">
            Settings
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;
