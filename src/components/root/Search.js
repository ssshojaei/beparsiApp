import React from 'react'
import { Root, Container, Content, Card, Form, Item, Icon, Input, Spinner, ListItem, Body, List, Text, Toast } from 'native-base'
import { Clipboard } from 'react-native'
import AppHeader from '../Header';
import AppFooter from '../Footer';

export default class Home extends React.Component {
    state = {
        value: null,
        load: 'none',
        data: []
    }
    onSubmit = () => {
        let vaje = this.state.value
        if (vaje !== null){
            vaje = vaje.trim()
            this.setState ({ load: 'flex' })
            fetch(`http://ssshojaei.ir/api/beparsi/vaje/${vaje}`)
            .then(res =>
                res.json().then(items => {
                    this.setState({
                        data: items,
                        load: 'none',
                        value: null
                    })
                    console.log(this.state.data)
                })
            )
            .catch (err =>
                Toast.show({
                    text: 'نمی‌توان به میزبان درخواست داد',
                    textStyle: { fontFamily: 'Vazir'},
                    type: 'danger',
                    duration: 2000
                })
            )
        }
        else {
            Toast.show({
                text: 'واژه‌ای را درون‌ریزی کنید',
                textStyle: { fontFamily: 'Vazir' },
                type: 'danger',
                duration: 2000
            })
        }
    }
    onCopy = sub => {
        Clipboard.setString(sub)
        Toast.show ({
            text: `'${sub}' رونوشت شد`,
            textStyle: {fontFamily: 'Vazir'},
            type: 'success'
        })
    }
    render() {
        return (
            <Root>
                <Container>
                    <AppHeader title='به پارسی' />
                    <Content padder>
                        <Card>
                            <Form>
                                <Item>
                                    <Icon active name='search' />
                                    <Input
                                        placeholder='جست‌جوی واژه‌ی بیگانه'
                                        style={{ fontFamily: 'Vazir' }}
                                        value={this.state.value}
                                        onChangeText={text => this.setState({ value: text })}
                                        onSubmitEditing={this.onSubmit}
                                    />
                                </Item>
                            </Form>
                        </Card>
                        <Spinner style={{ display: this.state.load }} />
                        <List>
                            {((this.state.data.status !== 0) ? 
                                this.state.data.map(item => (
                                    <ListItem
                                        key={item.id}
                                        avatar
                                        onLongPress={() => this.onCopy(item.sub)}
                                    >
                                        <Body>
                                            <Text style={{ fontFamily: 'Vazir-Bold' }}>{item.title}</Text>
                                            <Text
                                                note
                                                style={{ fontFamily: 'Vazir' }}
                                            >
                                                {item.sub}
                                            </Text>
                                            {(item.user) ?
                                                <Text
                                                    note
                                                    numberOfLines={1}
                                                    style={{ fontFamily: 'Vazir', color: '#2196F3' }}
                                                >
                                                    پیشنهادی از: {item.user}
                                                </Text> : null}
                                        </Body>
                                    </ListItem>
                                ))
                                :
                                <ListItem
                                    avatar
                                    key={1}
                                >
                                    <Body>
                                        <Text style={{ fontFamily: 'Vazir-Bold'}}>
                                            جست‌جو دستاوردی نداشت
                                        </Text>
                                        <Text
                                            note
                                            numberOfLines={1}
                                            style={{ fontFamily: 'Vazir' }}
                                        >
                                            واژه‌ی دیگری را جست‌جو کنید
                                        </Text>
                                    </Body>
                                </ListItem>
                            )}
                        </List>
                    </Content>
                    <AppFooter active='search' />
                </Container>
            </Root>
        )
    }
}