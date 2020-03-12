import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
        <Container>

          <Content />
          <Footer>
            <FooterTab>
              <Button vertical onPress={()=>this.props.navigation.navigate('Fetch')}>
                {/*<Icon name="apps" />*/}
                <Icon name="home"  />
                <Text>Home</Text>
              </Button>
              <Button vertical>
                <Icon name="ios-qr-scanner" />
                <Text>SCAN QR</Text>
              </Button>
              <Button vertical active>
                <Icon active name="navigate" />
                <Text>Navigate</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>Profile</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
    );
  }
}
