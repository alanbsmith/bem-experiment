import React from 'react';

import Header from './Header';
import Page from './Page';
import Section from './Section';

function Home() {
  return (
    <Page>
      <Header>
        <Header.Icon />
        <Header.Title>
          Newsly
        </Header.Title>
        <Header.Subtitle>
          a smarter way to stay informed
        </Header.Subtitle>
      </Header>
      <Page.Body>
        <Section>
          <Section.Title>
            curate your news
          </Section.Title>
          <Section.Text>
            Feel overwhelmed with news but want to stay infromed?
            Newsly Lets you choose the news you want to read and skip the rest.
          </Section.Text>
        </Section>
        <Section rightAlign>
          <Section.Title>
            powered by NewsAPI
          </Section.Title>
          <Section.Text>
            70+ major news sources are at your fingertips.
            Get the latest from your favorite sources.
          </Section.Text>
        </Section>
        <Section>
          <Section.Title>
            bookmark articles
          </Section.Title>
          <Section.Text>
            News moves fast. Save the articles that matter and read them later.
          </Section.Text>
        </Section>
      </Page.Body>
    </Page>
  );
};


export default Home;
