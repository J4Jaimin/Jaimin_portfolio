import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import TimeLine from './components/TimeLine';
import Services from './components/Services';
import { Toaster } from 'react-hot-toast';

import './styles/app.scss';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <TimeLine />
      <Services />
      <Contact />
      <Toaster />
    </>
  );
}

export default App;
