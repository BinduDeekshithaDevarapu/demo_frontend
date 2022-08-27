
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    console.log(title +" / "+content)
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    const url = process.env.REACT_APP_URL+'/api/todos'
    await fetch(url, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: title,
            content : content,
          }),
        })
        .then((response) => console.log(response.json()))
        .then(setSubmit(true))
        .catch((error) => {
          console.error(error);
        });
  };


  return (
    <Container>
        {/* display success message */}
        {submit ? (<p className="text-success">Your todo added Successfully</p>) : (<p className="text-danger">Your todo has an issue</p>)}
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
              <Form onSubmit={(e)=>handleSubmit(e)}>
              {/* email */}
              <Form.Group controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" name="title"
            value={title} onChange={(e) => setTitle(e.target.value)} />
              </Form.Group>

              {/* password */}
              <Form.Group controlId="formBasicContent">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name="content"
            value={content} onChange={(e) => setContent(e.target.value)} />
              </Form.Group>

              {/* submit button */}
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}></Col>
      </Row>
    </Container>
  );
}

export default App;
