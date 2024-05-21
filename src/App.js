import React, { useContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/login/Login';
import SideBar from './Components/sidebar/SideBar';
import AppRoutes from './Components/routing/AppRoutes';
import DataContext, { DataProvider } from './context/DataContext';
import Header from './Components/header/Header';
import './App.css'; // Import the CSS for styling

function App() {
  const { login, setLogin } = useContext(DataContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`App ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {!login ? (
        <Login setLogin={setLogin} />
      ) : (
        <div className="app-container">
          <Header isOpen={!sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="main-container">
            <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="content">
              <AppRoutes />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const AppWrapper = () => (
  <DataProvider>
      <App />
  </DataProvider>
);

export default AppWrapper;