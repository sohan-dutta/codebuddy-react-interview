const changeLanguage = [
  ' हिंदी',
  ' বাংলা',
  'اردو',
  'ਪੰਜਾਬੀ',
  'मराठी',
  'తెలుగు',
  'தமிழ்',
  'ಕನ್ನಡ',
  'ગુજરાતી',
  'മലയാളം',
  'ଓଡ଼ିଆ',
];

const Languages = () => (
  <>
    <div className="switch_lang">
      <h7>Languages:</h7>

      {changeLanguage.map(myLang => (
        <a href="go" aria-label="Hindi">
          {myLang}
        </a>
      ))}
    </div>
  </>
);
export default Languages;
