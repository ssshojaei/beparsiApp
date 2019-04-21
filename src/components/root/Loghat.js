import React from 'react'
import { Container, Content, Root, Toast, Card, Form, Item, Icon, Input, Spinner, CardItem, Body, Text } from 'native-base'
import AppHeader from '../Header';
import AppFooter from '../Footer';
// const tokenTmp = 
import tokenTmp from '../../TOKEN'

export default class Loghat extends React.Component {
    state = {
        value: null,
        load: 'none',
        data: []
    }
    onSubmit = () => {
        let vaje = this.state.value
        if (vaje !== null) {
            vaje = vaje.trim()
            this.setState({ load: "flex" });
            fetch(
                `http://api.vajehyab.com/v3/search?token=${tokenTmp}&q=${vaje}&type=exact&filter=sareh,dehkhoda,moein`
            )
                .then(res =>
                    res.json().then(items => {
                        this.setState({
                            data: items.data.results,
                            load: 'none',
                            value: null
                        });
                    })
                )
                .catch(err =>
                    Toast.show({
                        text: 'ناتوان در بارگیری بن‌مایه‌ها!',
                        textStyle: { fontFamily: 'Vazir' },
                        type: 'danger'
                    })
                );
        }
        else {
            Toast.show({
                text: 'واژه‌ای درون‌ریزی نشده‌است!',
                textStyle: { fontFamily: 'Vazir' },
                type: 'danger'
            })
        }
    }
    render() {
        return (
            <Root>
                <Container>
                    <AppHeader title='فرهنگ واژگان' />
                    <Content padder>
                        <Card>
                            <Form>
                                <Item>
                                    <Icon active name="search" />
                                    <Input
                                        placeholder="جست‌جو در فرهنگ‌واژه‌ها"
                                        style={{ fontFamily: 'Vazir' }}
                                        onChangeText={text => this.setState({ value: text })}
                                        onSubmitEditing={this.onSubmit}
                                    />
                                </Item>
                            </Form>
                        </Card>
                        <Spinner style={{ display: this.state.load }} />
                        {this.state.data.map(item => (
                            <Card key={item.id}>
                                <CardItem>
                                    <Body>
                                        <Text numberOfLines={1} style={{ width: '100%', paddingBottom: 5, color: '#3f51b5', fontFamily: 'Vazir-Bold' }}>
                                            {item.source}
                                        </Text>
                                        <Text style={{ width: '100%', fontFamily: 'Vazir'}}>{item.text}</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        ))}
                    </Content>
                    <AppFooter active='loghat' />
                </Container>
            </Root>
        )
    }
}