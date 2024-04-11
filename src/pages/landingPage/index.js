import About from "./About";
import OurService from "./OurService";
import Price from "./Price";
import IntroPage from "./IntroPage";
import ContactUs from "./ContactUs";
import "./index.scss"


function LandingPage() {
  return (
    <>
      <IntroPage></IntroPage>
      <About></About>
      {/* <OurService></OurService>
      <Price></Price>
      <ContactUs></ContactUs> */}
    </>
  );
}

export default LandingPage;
