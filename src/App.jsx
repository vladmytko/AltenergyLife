import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/MainPage/Header'
import About from './components/MainPage/About'
import InstallationServices from './components/MainPage/InstallationServices'
import Contact from './components/MainPage/Contact'
import Footer from './components/MainPage/Footer'
import Certificates from './components/MainPage/Certificates'
import StrategyIntro from './components/MainPage/StrategyIntro'
import StrategyServices from './components/StrategyComponents/StrategyServices'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import { useEffect } from 'react'

const App = () => {

  const location = useLocation();

  useEffect(() => {
    // If we have a hash, scroll to the section
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // No hash => new page/route, scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (

      <div className='min-h-screen w-full overflow-hidden flex flex-col'>
        <main className='flex-1'>   
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <StrategyIntro />
                  <InstallationServices />
                  <Contact />
                  <Certificates />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/strategy-services" element={<StrategyServices />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Routes>
          </main>
          <Footer />
      </div>
      
  )
}

export default App
