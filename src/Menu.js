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

/*

 <Menu vertical>
      <Menu.Item name="inbox" active={activeItem === 'inbox'} onClick={this.handleItemClick}>
        <Label color="teal">1</Label>
        Inbox
      </Menu.Item>

      <Menu.Item name="spam" active={activeItem === 'spam'} onClick={this.handleItemClick}>
        <Label>51</Label>
        Spam
      </Menu.Item>

      <Menu.Item name="updates" active={activeItem === 'updates'} onClick={this.handleItemClick}>
        <Label>1</Label>
        Updates
      </Menu.Item>
      <Menu.Item>
        <Input icon="search" placeholder="Search mail..." />
      </Menu.Item>
    </Menu> 

*/
