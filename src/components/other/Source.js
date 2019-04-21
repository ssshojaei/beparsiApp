import React from 'react'
import { Linking } from 'react-native'
import { Container, Content, List, ListItem, Left, Icon, Body, Text, Right } from 'native-base'
import AppHeader from '../Header';

export default class Source extends React.Component {
    render() {
        return (
            <Container>
                <AppHeader title='بن‌مایه‌ها' />
                <Content padder>
                    <List>
                        <ListItem onPress={() => Linking.openURL('https://www.beparsi.com/')}>
                            <Left>
                                <Icon name='arrow-round-back' />
                            </Left>
                            <Body>
                                <Text style={{ fontFamily: 'Vazir' }}>
                                    به‌پارسی
                                </Text>
                            </Body>
                            <Right>
                                <Icon name='md-medical' />
                            </Right>
                        </ListItem>

                        <ListItem onPress={() => Linking.openURL('http://taravat-bahar.org/barabaryab/barabaryab.php')}>
                            <Left>
                                <Icon name='arrow-round-back' />
                            </Left>
                            <Body>
                                <Text style={{ fontFamily: 'Vazir' }}>
                                    برابریاب
                                </Text>
                            </Body>
                            <Right>
                                <Icon name='md-medical' />
                            </Right>
                        </ListItem>

                        <ListItem onPress={() => Linking.openURL('https://ssshojaei.ir/')}>
                            <Left>
                                <Icon name='arrow-round-back' />
                            </Left>
                            <Body>
                                <Text style={{ fontFamily: 'Vazir' }}>
                                    سیدصالح شجاعی
                                </Text>
                            </Body>
                            <Right>
                                <Icon name='md-medical' />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}