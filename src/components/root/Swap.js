import React from 'react'
import { Container, Content, Card, Form, Item, Icon, Input, Spinner, ListItem, Body, List, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'
import AppHeader from '../Header';
import AppFooter from '../Footer';

export default class Swap extends React.Component {
    render() {
        return (
            <Container>
                <AppHeader title='بازگردان نویسه' />
                <Content padder>
                </Content>
                <AppFooter active='swap' />
            </Container>
        )
    }
}