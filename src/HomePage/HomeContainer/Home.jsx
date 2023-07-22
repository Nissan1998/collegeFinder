import CollegesReview from "../../Components/CollegesReview/CollegesReview";
import Footer from "../../Components/Footer";
import MasonryGallery from "../../Components/Gallery/MasonryGallery";

import CollegeCards from "./CollegeCards";
import RecommendedResearchPapers from "./RecommendedResearchPapers";
const Home = () => {
  return (
    <div id="home">
      <CollegeCards />
      <MasonryGallery />
      <RecommendedResearchPapers />
      <CollegesReview />
      <Footer />
    </div>
  );
};

export default Home;
