import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
} from 'native-base';
import Header from '../../header/header';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          navigation={this.props.navigation.openDrawer}
          icon={<Icon name="menu" />}
          title="home"
        />
        <Content>
          <Text>This is Content section</Text>
        </Content>
      </Container>
    );
  }
}
