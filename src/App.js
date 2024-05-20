import React, { useContext } from 'react';
import Login from './Components/login/Login';
import SideBar from './Components/sidebar/SideBar';
import AppRoutes from './Components/routing/AppRoutes';
import DataContext, { DataProvider } from './context/DataContext';

function App() {
  const { login, setLogin } = useContext(DataContext);

  return (
    <div className="App">
      {login ? (
        <Login setLogin={setLogin} />
      ) : (
        <div className="row">
          <SideBar />
          <div style={{ position: "relative", left: 155, width: 'auto' }}>
            <AppRoutes />
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
