import React from 'react'
import { Text, Container, Content, ListItem, Left, Body, Right, List, Icon, View } from 'native-base'
import { Image, StyleSheet, Linking, Share } from 'react-native'
import { Actions } from 'react-native-router-flux'

const banner = require ('../assets/images/banner.png')

export default class DrawerLayout extends React.Component {
    onShare = () => {
        Share.share({
            title: 'TitleTest',
            message: `
فارسی سَره یا پارسی سَره، آن گونه از زبان فارسی است که تهی از واژه‌های بیگانه یا دارای کمینه‌ای از آن‌ها باشد.
به پارسی ابزاری برای پارسی نویسی است
💠💠💠💠💠
دریافت رایگان: 
https://myket.ir/app/ir.ssshojaei.beparsi
            `
        })
    }
    render (){
        return (
            <Container>
                <Content
                    bounces={false}
                    style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
                >
                    <Image source={banner} style={{ width: '100%', height: 170 }} />
                    <List style={{ marginRight: 15 }}>
                        <ListItem icon onPress={() => Actions.jump('add')}>
                            <Left />
                            <Body>
                                <Text style={{ fontFamily: 'Vazir' }}>پیشنهاد واژه</Text>
                            </Body>
                            <Right>
                                <View style={styles.itemIcon}>
                                    <Icon active name='md-add' style={{ fontSize: 20 }} />
                                </View>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => Actions.jump('archive')}>
                            <Left />
                            <Body>
                                <Text style={{ fontFamily: 'Vazir' }}>واژه‌های من</Text>
                            </Body>
                            <Right>
                                <View style={styles.itemIcon}>
                                    <Icon active name='md-filing' style={{ fontSize: 20 }} />
                                </View>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={this.onShare}>
                            <Left />
                            <Body>
                                <Text style={{ fontFamily: 'Vazir' }}>هم‌رسانی برنامه</Text>
                            </Body>
                            <Right>
                                <View style={styles.itemIcon}>
                                    <Icon active name='md-share' style={{ fontSize: 20 }} />
                                </View>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => Linking.openURL('myket://comment?id=ir.ssshojaei.beparsi')}>
                            <Left />
                            <Body>
                                <Text style={{ fontFamily: 'Vazir' }}>برتری بخشی برنامه</Text>
                            </Body>
                            <Right>
                                <View style={styles.itemIcon}>
                                    <Icon active name='md-star' style={{ fontSize: 20 }} />
                                </View>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => Actions.jump('source')}>
                            <Left />
                            <Body>
                                <Text style={{ fontFamily: 'Vazir' }}>بن‌مایه‌ها</Text>
                            </Body>
                            <Right>
                                <View style={styles.itemIcon}>
                                    <Icon active name='md-analytics' style={{ fontSize: 20 }} />
                                </View>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => Linking.openURL('https://github.com/ssshojaei/beparsiApp')}>
                            <Left />
                            <Body>
                                <Text style={{ fontFamily: 'Vazir' }}>بن‌مایه‌ی متن برنامه</Text>
                            </Body>
                            <Right>
                                <View style={styles.itemIcon}>
                                    <Icon active name='md-code' style={{ fontSize: 20 }} />
                                </View>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => Linking.openURL('http://t.me/ssshojaei')}>
                            <Left />
                            <Body>
                                <Text style={{ fontFamily: 'Vazir' }}>گفت‌گو با سازنده</Text>
                            </Body>
                            <Right>
                                <View style={styles.itemIcon}>
                                    <Icon active name='md-send' style={{ fontSize: 20 }} />
                                </View>
                            </Right>
                        </ListItem>
                        <ListItem style={{ backgroundColor: '#0966af', borderRadius: 5 }} icon onPress={() => alert()}>
                            <Left />
                            <Body>
                                <Text style={{ fontFamily: 'Vazir', color: '#ffffff' }}>هم‌یاری</Text>
                            </Body>
                            <Right>
                                <View style={styles.itemIcon}>
                                    <Icon active name='md-rose' style={{ fontSize: 20, color: '#ffffff' }} />
                                </View>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create ({
    itemIcon: {
        borderRadius: 10,
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center'
    }
})