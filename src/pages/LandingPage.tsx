import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import MainContents from "../components/MainContents";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <main>
        <MainContents />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
