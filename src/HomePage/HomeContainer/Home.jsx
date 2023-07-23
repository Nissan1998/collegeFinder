import CollegesReview from "../../Components/CollegesReview/CollegesReview";
import Counter from "../../Components/Counter/Counter";
import Footer from "../../Components/Footer";
import MasonryGallery from "../../Components/Gallery/MasonryGallery";

import CollegeCards from "./CollegeCards";
import OurRecord from "./OurRecord";
import RecommendedResearchPapers from "./RecommendedResearchPapers";
const Home = () => {
  return (
    <div id="home">
      <CollegeCards />
      <OurRecord />
      <MasonryGallery />
      <RecommendedResearchPapers />
      <CollegesReview />
      <Footer />
    </div>
  );
};

export default Home;
