import SearchIcon from './assets/searchIcon.png';
import Mic from './assets/mic.png';
import Lens from './assets/lens.png';
import Languages from './Languages';

const SeachSection = () => (
  <>
    <div className="searchBox">
      <form className="searchSection">
        <div className="inputBox">
          <input type="text" placeholder="Search" />
        </div>

        <div className="IconsInSearch">
          <span className="signInLogoContainer">
            <img className="signInLogo" src={Mic} alt="Mic" />
          </span>
          <span className="signInLogoContainer">
            <img className="signInLogo" src={Lens} alt="Lens" />
          </span>
          <span>
            <img className="signInLogo" src={SearchIcon} alt="SearchIcon" />
          </span>
        </div>
      </form>

      <Languages />
    </div>
  </>
);

export default SeachSection;
