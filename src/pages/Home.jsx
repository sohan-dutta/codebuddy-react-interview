import HomeWallpaper from '../assets/penguin.jpeg';
import SearchSection from '../SearchSection';

const Home = () => (
  <>
    <div className="home">
      <img className="homeWallpaperImage" src={HomeWallpaper} alt="homeWallpaper" />

      <SearchSection />
    </div>
  </>
);

export default Home;

/*
const navigate = useNavigate();
const onSubmit = () => navigate('/posts');

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

return (
    <main>
      <div className="bg-light p-5 mb-5">
        <h1>React + Bootstrap v4</h1>
        <p>React template with Bootstrap version v4</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
      <Container>
        <Form>
          <Button onClick={onSubmit}>Goto Posts</Button>
        </Form>
      </Container>
    </main>
  );
};

export default Home;


*/
