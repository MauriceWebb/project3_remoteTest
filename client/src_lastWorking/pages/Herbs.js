import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import image from '../assets/images/hrbs_home.png';

class Books extends Component {
  state = {
    herbs: []
  };

  componentDidMount() {
    this.loadHerbs();
  }

  loadHerbs = () => {
    API.getHerbs()
      .then(res => this.setState({ herbs: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadHerbs())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadHerbs())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <div
              className="jumbotron jumbotron-fluid"
              style={
                { height: 400,
                  backgroundImage: "url('https://files.slack.com/files-pri/TEHQVKZJ5-FKV6YFA4S/image_from_ios.png?pub_secret=70d8c30ac5')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }
              }
            >
              <h1>What Books Should I Read?</h1>
            </div>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Herbs On My List</h1>
            </Jumbotron>
            {this.state.herbs.length ? (
              <List>
                {this.state.herbs.map(herb =>
                  herb.name ? (
                    <ListItem key={herb._id}>
                      <Link to={"/herbs/" + herb._id}>
                        <strong>{herb.name}</strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteBook(herb._id)} />
                    </ListItem>
                  ) : null
                )}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
