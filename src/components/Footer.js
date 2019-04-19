import React, { Component } from 'react'
import { Footer, FooterTab, Button, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux';

export default class AppFooter extends Component {
    state = {
        loghat: false,
        swap: false,
        search: false
    }
    componentDidMount() {
        this.setState({ [this.props.active]: true })
    }
  render() {
    return (
        <Footer>
            <FooterTab>
                <Button
                    active={this.state.loghat}
                    onPress={() => Actions.replace('loghat')}
                >
                    <Icon name='md-book' />
                </Button>
                <Button
                    active={this.state.swap}
                    onPress={() => Actions.replace('swap')}
                >
                    <Icon name='md-swap' />
                </Button>
                <Button
                    active={this.state.search}
                    onPress={() => Actions.replace('search')}
                >
                    <Icon name='md-search' />
                </Button>
            </FooterTab>
        </Footer>
    )
  }
}
