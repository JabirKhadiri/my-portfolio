import Banner from './components/banner';
import Header from './components/header';
import Nav from './components/nav';
import About from './components/about';
import Services from './components/services';
import Work from './components/work';
import Contact from './components/contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden' >
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
