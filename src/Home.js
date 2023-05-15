//import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from './components/FeatureProducts';

const Home = () => {
  const data = {
    name: "My Store",
  };

  return (
    <>
      <HeroSection myData={data} />
 
      <Services />
      <Trusted />
      <FeatureProducts/>
    </>
  );
};

export default Home;
