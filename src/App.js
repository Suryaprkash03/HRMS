import React, { useContext, useState } from 'react';
import './App.css'; // Import the CSS for styling
import Header from './Components/header/Header';
import Login from './Components/login/Login';
import AppRoutes from './Components/routing/AppRoutes';
import SideBar from './Components/sidebar/SideBar';
import DataContext, { DataProvider } from './context/DataContext';
import { EmployeeProvider } from './context/EmployeeContext';

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
    <EmployeeProvider>
      <App />
      </EmployeeProvider>
  </DataProvider>
);

export default AppWrapper;