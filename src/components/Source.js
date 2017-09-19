import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from './Header';
import Page from './Page';
import Body from './Body';
import Card from './Card';
import A from './elements/A';


class Source extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:8080/api/v1/articles?id=${id}`)
      .then(({ data }) => {
        const { articles } = data;
        this.setState({ articles });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderArticles() {
    return this.state.articles.map((article, i) => (
      <Card key={i}>
        <Card.Title>
          <A href={article.url} target="_blank">
            {article.title}
          </A>
        </Card.Title>
        <Card.Text>
          {article.description}
        </Card.Text>
      </Card>
    ))
  }

  formattedTitle() {
    const { id } = this.props.match.params;
    return id.toUpperCase().replace(/-/g,' ');
  }

  render() {
    const { history } = this.props;
    return (
      <Page>
        <Header minHeight="200px">
          <A
            aria-label="navigate back to the previous page"
            onClick={() => history.goBack()}
          >
            <Header.Icon
              aria-hidden="true"
              name="arrow-circle-o-left"
              size="2x"
            />
          </A>
          <Header.Content
            alignItems="flex-start"
            justifyContent="flex-end"
          >
            <Header.Title>
              {this.formattedTitle()}
            </Header.Title>
          </Header.Content>
        </Header>
        <Body>
          <Body.Content>
            {this.renderArticles()}
          </Body.Content>
        </Body>
      </Page>
    );
  }
};

Source.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Source;
