/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Logo from './assets/Logo.png';
import SignInLogo from './assets/SignInLogo.png';
import rewardsLogo from './assets/rewardIcon.png';
import hamburgerLogo from './assets/hamburger.png';
import Menu from './Menu';

function MyHeader() {
  const [hamclick, setHamClick] = useState(false);

  return (
    <>
      <div className="headerContainer">
        <div className="header">
          <div className="leftSideOfHeader">
            <img className="headerLogo" src={Logo} alt="Logo" />
            <div className="LeftheaderLinks">
              <span>Images</span>
              <span>Videos</span>
              <span>Maps</span>
            </div>
          </div>
          <div className="rightSideOfHeader">
            <div className="RightheaderLinks">
              <span className="signInLogoSpanContainer">
                Sign In
                <span>
                  <img className="signInLogo" src={SignInLogo} alt="Sign In" />
                </span>
              </span>

              <span className="signInLogoSpanContainer">
                Rewards
                <span>
                  <img className="signInLogo" src={rewardsLogo} alt="rewardsLogo" />
                </span>
              </span>

              <span>
                <button type="button" onClick={() => setHamClick(!hamclick)}>
                  <img className="signInLogo" src={hamburgerLogo} alt="hamburgerLogo" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      {hamclick && (
        <>
          <div className="modalIsHere" onClick={() => setHamClick(!hamclick)} />
          <Menu />
        </>
      )}
    </>
  );
}

export default MyHeader;
