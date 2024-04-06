import Header from "../component/header";
import Experience from "../component/experience";
import Company from "../component/company";
import UserExperiences from "../component/userExperiences";
import Reservation from "../component/reservation";
import Footer from "../component/footer";

function index() {

  
  return (
    <div>
      <Header />
      <Experience />
      <Company />
      <UserExperiences />
      <Reservation />
      <Footer />
    </div>
  );
}

export default index;
