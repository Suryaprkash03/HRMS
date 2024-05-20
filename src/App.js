import Login from './Components/login/Login';
import SideBar from './Components/sidebar/SideBar'
import AppRoutes from './Components/routing/AppRoutes'
import { useState } from 'react';
function App() {
  const [login, setLogin] = useState(true)
  return (
    <>
      {login ? <Login setLogin={setLogin} />:
        <div className='row'>
          <SideBar />
          <div style={{ position: "relative", left: 155, width: 'auto' }}>
            <AppRoutes />
          </div>
        </div>}
    </>
  )
}

export default App;
