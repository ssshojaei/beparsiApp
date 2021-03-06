import React, { Component } from 'react'
import { Header, Left, Button, Icon, Title, Right, Body } from 'native-base'
import { Actions } from 'react-native-router-flux';

export default class AppHeader extends Component {
  render() {
    return (
        <Header>
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 6, alignItems: 'flex-end' }}>
                <Title style={{ fontFamily: 'Vazir' }}>{this.props.title}</Title>
            </Body>
            <Right style={{ flex: 1 }}>
                <Button onPress={() => Actions.drawerOpen() } transparent>
                    <Icon name='menu' />
                </Button>
            </Right>
        </Header>
    )
  }
}
