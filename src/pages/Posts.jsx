import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Jumbotron, Image } from 'react-bootstrap';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const rawResponse = await fetch('https://codebuddy.review/posts', {
          method: 'GET',
        });
        const response = await rawResponse.json();
        console.log(response);
        setPosts(response.data.posts);
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, []);
  return (
    <>
      <Jumbotron>
        <h1>Posts</h1>
      </Jumbotron>
      <Container>
        <Row>
          {posts.map(post => (
            <Col style={{ marginBottom: '1rem' }} lg={4} md={6} sm={12}>
              <Card>
                <Card.Img src={post.image} />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col xs={3}>
                        <Image fluid src={post.avatar} roundedCircle />
                      </Col>
                      <Col>
                        {post.firstName} <small>{post.lastName}</small>
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text className="text-muted">
                    <p>{post.writeup}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <small>#{post.id}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Posts;
