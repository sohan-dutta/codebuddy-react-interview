import Router from './Router';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import MyHeader from './Headers';

const App = () => (
  <>
    <MyHeader />

    <Router />
  </>
);

export default App;
