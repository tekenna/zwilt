import Header from "./common/components/Header";
import vector from "./assets/vectors/vector1.svg";
import MarketPlace from "./common/components/MarketPlace";
import HowItWorked from "./common/components/HowItWorked";
import QA from "./common/components/Q&A";
import GetStarted from "./common/components/GetStarted";
import WhyChoose from "./common/components/WhyChoose";
import FAQ from "./common/components/FAQ";
import Footer from "./common/components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full pt-[36px] flex flex-col items-center">
      <div className="w-full px-[16px] flex justify-center">
        <Header />
      </div>
      <img
        className="mt-[78px] w-full sm:h-[132px] h-fit"
        src={vector}
        alt=""
      />
      <MarketPlace />
      <HowItWorked />
      <QA />
      <GetStarted />
      <WhyChoose />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
