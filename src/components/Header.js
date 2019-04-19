import React, { Component } from 'react'
import { Header, Left, Button, Icon, Title, Right, Body } from 'native-base'

export default class AppHeader extends Component {
  render() {
    return (
        <Header>
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 6, alignItems: 'flex-end' }}>
                <Title style={{ fontFamily: 'Vazir' }}>{this.props.title}</Title>
            </Body>
            <Right style={{ flex: 1 }}>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Right>
        </Header>
    )
  }
}
