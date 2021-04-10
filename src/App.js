import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ModalDetailFood from './components/ModalComponent/ModalDetailFood';

export const LoginContext = React.createContext()
function App() {
  const [login, setLogin] = useState(false)
  return (<>
    <BrowserRouter>
      <LoginContext.Provider value={{ login, setLogin }}>
        <Header />
        <Main />
        <Footer />
        <ModalDetailFood />
      </LoginContext.Provider>
    </BrowserRouter>
  </>
  );
}

export default App;
