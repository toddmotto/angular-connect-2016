// Import React
import React from "react";
import { render } from "react-dom";
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('font-awesome-webpack');

const images = {
  bg: require('../assets/bg.png'),
  twitter: require('../assets/twitter.png'),
  front: require('../assets/angular.svg'),
  telerik: require('../assets/telerik.svg'),
  ngmigrate: require('../assets/ngmigrate.svg'),
  mikeTwitter: require('../assets/mike-twitter.png'),
  type1: require('../assets/types/1.jpg'),
  type2: require('../assets/types/2.jpg'),
  type3: require('../assets/types/3.jpg'),
  type4: require('../assets/types/4.jpg'),
  type5: require('../assets/types/5.jpg'),
  type6: require('../assets/types/6.jpg'),
  architecture0: require('../assets/architecture/c-0.jpg'),
  architecture1: require('../assets/architecture/c-1.jpg'),
  architecture2: require('../assets/architecture/c-2.jpg'),
  architecture3: require('../assets/architecture/c-3.jpg'),
  architecture4: require('../assets/architecture/c-4.jpg'),
  architecture5: require('../assets/architecture/c-5.jpg'),
  architecture6: require('../assets/architecture/c-6.jpg'),
  architecture7: require('../assets/architecture/c-7.jpg'),
  architecture8: require('../assets/architecture/c-8.jpg'),
  architecture9: require('../assets/architecture/c-9.jpg'),
  architecture10: require('../assets/architecture/c-10.jpg'),
  architecture11: require('../assets/architecture/c-11.jpg'),
  architecture12: require('../assets/architecture/c-12.jpg'),
  architecture13: require('../assets/architecture/c-13.jpg'),
  architecture14: require('../assets/architecture/c-14.jpg'),
  flow0: require('../assets/flow/0.jpg'),
  flow1: require('../assets/flow/1.jpg'),
  flow2: require('../assets/flow/2.jpg'),
  flow3: require('../assets/flow/3.jpg'),
  flow4: require('../assets/flow/4.jpg'),
  flow5: require('../assets/flow/5.jpg'),
  flow6: require('../assets/flow/6.jpg'),
  flow7: require('../assets/flow/7.jpg'),
  flow8: require('../assets/flow/8.jpg'),
  flow9: require('../assets/flow/9.jpg'),
  google: require('../assets/google.png'),
};

preloader(images);

const theme = createTheme({
  primary: '#21252d',
  tertiary: '#1976D2',
  grey: '#37474f',
});

const headingFont = {
  fontFamily: 'Open Sans',
  fontWeight: '400',
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck controls={false} progress="bar" transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '45%'}} />
          </Slide>

          <Slide transition={["slide"]}>
            <Image src={images.twitter} style={{maxWidth: '60%'}} />
          </Slide>

          <Slide transition={["slide"]}>
            <Layout>
              <Fill>
                <Image src={images.telerik} style={{maxWidth: '70%'}} />
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Image src={images.ngmigrate} style={{maxWidth: '60%', margin: '55px 0 0'}} />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Image src={images.mikeTwitter} style={{ maxWidth: '100%' }} />
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Yes, the upgrade path is real...
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit lineHeight={1} style={headingFont} textColor="white">
              .component to @Component
              😍
            </Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit lineHeight={1} style={headingFont} textColor="white">
              @Component to .component
              😎
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Angular 2: what we like
            </Heading>
            <List textColor="white">
              <ListItem>Component architecture</ListItem>
              <ListItem>Stateful/stateless components</ListItem>
              <ListItem>One-way dataflow</ListItem>
              <ListItem>Lifecycle hooks</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.flow9} style={{ width: '100%' }} />
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.flow4} style={{ width: '100%' }} />
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Angular 2: what we like
            </Heading>
            <List textColor="white">
              <ListItem>Component architecture</ListItem>
              <ListItem>Stateful/stateless components</ListItem>
              <ListItem>One-way dataflow</ListItem>
              <ListItem>Lifecycle hooks</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              But Angular 1.x doesn&#39;t have them...
            </Heading>
            <Heading size={1} lineHeight={1} style={{margin: '50px 0 0'}} textColor="white">
              😢
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              ... or does it
            </Heading>
            <Heading size={1} lineHeight={1} style={{margin: '50px 0 0'}} textColor="white">
              😏
            </Heading>
          </Slide>



          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Components
            </Heading>
            <List textColor="white">
              <ListItem>Focus on stateful and stateless (smart/dumb)</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Immutable operations
            </Heading>
            <List textColor="white">
              <ListItem>Predictable dataflow</ListItem>
              <ListItem>No surprise mutations</ListItem>
              <ListItem>Control the mutation</ListItem>
              <ListItem>Fast equality checks</ListItem>
              <ListItem>Introducing Redux (ngRedux && ngrx/store)</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Thank you!
            </Heading>
            <Image src={images.twitter} style={{maxWidth: '60%'}} />
            <Heading size={8} caps lineHeight={1} style={headingFont} textColor="white">
              github.com/toddmotto/angular-connect-2016
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    )
  }
}
