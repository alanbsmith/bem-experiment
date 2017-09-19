import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Link as UnstyledLink } from 'react-router-dom';

import Body from './Body';
import Header from './Header';
import Page from './Page';
import Card from './Card';

import A from './elements/A';

class Sources extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: [],
      sources: [],
    };
  }

  componentDidMount() {
    this.fetchFavorites();
    this.fetchSources();
  }

  fetchSources() {
    axios.get('https://newsapi.org/v1/sources?language=en')
      .then(({ data }) => {
        const { sources } = data;
        this.setState({ sources });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchFavorites() {
    const root = process.env.NODE_ENV === 'production' ? 'http://localhost:8080' : 'http://localhost:3004'
    axios.get(`${root}/api/v1/favorites`)
      .then(({ data }) => {
        this.setState({ favorites: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderList(sources) {
    return sources.map((source) => (
      <Card key={source.id}>
        <Card.Link to={`/sources/${source.id }`} aria-label={`navigate to ${source.name} articles`}>
          <Card.Title>
            {source.name}
          </Card.Title>
        </Card.Link>
        <A href={`#bookmark-${source.id}`} onClick={() => { console.log(source.id) }} aria-label={`save ${source.name} to your bookmarks`}>
          <Card.Icon name="bookmark-o" aria-hidden="true" />
        </A>
        <Card.Text>
          {source.description}
        </Card.Text>
      </Card>
    ));
  }

  render() {
    return (
      <Page>
        <Header minHeight="200px">
          <Header.Content
            alignItems="flex-start"
            justifyContent="flex-end"
          >
            <Header.Title>
              Sources
            </Header.Title>
          </Header.Content>
        </Header>
        <Body>
          <Body.Content>
            <Body.Heading>favorites</Body.Heading>
            {this.renderList(this.state.favorites)}
            <Body.Heading>other sources</Body.Heading>
            {this.renderList(this.state.sources)}
          </Body.Content>
        </Body>
      </Page>
    );
  }
};

export default Sources;
