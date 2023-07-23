import CollegesReview from "../../Components/CollegesReview/CollegesReview";
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
    </div>
  );
};

export default Home;
