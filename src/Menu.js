import settings from './assets/settings.png';
import safesSearch from './assets/saveSerach.png';
import searchHistory from './assets/searchHistory.png';
import myBing from './assets/myBing.png';
import privacy from './assets/privacy.png';
import feedback from './assets/feedback.png';
import homepage from './assets/homepage.png';

const MenuContent = () => (
  <>
    <div className="menu">
      <div>
        <img src={settings} alt="settings" />
        Settings
      </div>
      <div>
        <img src={safesSearch} alt="safesSearch" />
        Safe Search
      </div>
      <div>
        <img src={searchHistory} alt="searchHistory" />
        Search History
      </div>

      <div>
        <img src={privacy} alt="privacy" />
        Privacy
      </div>
      <div>
        <img src={myBing} alt="myBing" />
        My Bing
      </div>
      <div>
        <img src={feedback} alt="feedback" />
        Feedback
      </div>
      <div>
        <img src={homepage} alt="homepage" />
        Customise your homepage
      </div>
    </div>
  </>
);
export default MenuContent;
