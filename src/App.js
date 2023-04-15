import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './containers/Header/Header';
import Marketers from './containers/Marketers/Marketers';
import ImageGenerator from './containers/ImageGenerator/ImageGenerator';
import HowItWorks from './containers/HowItWorks/HowItWorks';
import Enrich from './containers/Enrich/Enrich';
import Faq from './containers/Faq/Faq';
import ProductContent from './containers/ProductContent/ProductContent';
import DiscoverMore from './containers/DiscoverMore/DiscoverMore';
import AIProductDescription from './containers/AIProductDescription/AIProductDescription';
import Footer from './containers/Footer/Footer';
import ProductDescriptionExamples from './containers/ProductDescriptionExamples/ProductDescriptionExamples';

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Header/>
      <Marketers/>
      <ImageGenerator/>
      <HowItWorks/>
      <Enrich/>
      <ProductDescriptionExamples/>
      <Faq/>
      <ProductContent/>
      <DiscoverMore/>
      <AIProductDescription/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
