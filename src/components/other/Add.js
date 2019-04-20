import React from 'react'
import { Alert } from 'react-native'
import { Container, Content, Card, Form, Button, Text, Toast, Root, Spinner, Item, Icon, Input } from 'native-base'
import AppHeader from '../Header';
import DeviceInfo from 'react-native-device-info'
import { Actions } from 'react-native-router-flux';

export default class Swap extends React.Component {
    state = {
        input: null,
        output: null,
        name: null,
        mac: null
    }
    componentDidMount() {
        const mac = DeviceInfo.getUniqueID()
        this.setState({ mac })
    }
    onSubmit = () => {
        const {input, output, mac, name} = this.state
        if (input !== null) {
            if (output !== null) {
                fetch('https://ssshojaei.ir/api/beparsi/add.php', {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }),
                    body: `title=${input}&sub=${output}&ip=${mac}&user=${name}`
                })
                    .then(response => response.json())
                    .then(responseText => {
                        if (responseText.status === 200) {
                            this.setState ({
                                input: null,
                                output: null
                            })
                            Alert.alert(
                                'افزوده شد',
                                'سپاس از یاری شما\nواژگان پیشنهادی شما به دست ما رسید',
                                [
                                    { text: 'بازگشت', onPress: () => Actions.reset('root') }
                                ]
                            )
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
            else {
                Toast.show({
                    text: 'واژه‌ی جایگزینی را درون‌ریزی کنید!',
                    textStyle: { fontFamily: 'Vazir' },
                    type: 'warning',
                    duration: 2000
                })
            }
        }
        else {
            Toast.show({
                text: 'واژه‌ای را درون‌ریزی کنید!',
                textStyle: {fontFamily: 'Vazir'},
                type: 'warning',
                duration: 2000
            })
        }
    }
    render() {
        return (
            <Root>
                <Container>
                    <AppHeader title='پیشنهاد واژه' />
                    <Content padder>
                        <Card>
                            <Form>
                                <Item>
                                    <Icon active name='md-add' />
                                    <Input
                                        placeholder='واژه‌ی بیگانه را درون ریزی کنید'
                                        style={{ fontFamily: 'Vazir' }}
                                        onChangeText={text => this.setState({ input: text })}
                                        maxLength={35}
                                        value={this.state.input}
                                    />
                                </Item>
                            </Form>
                        </Card>
                        <Card>
                            <Form>
                                <Item>
                                    <Icon active name='md-refresh' />
                                    <Input
                                        placeholder='پیشنهاد‌های جایگزین'
                                        style={{ fontFamily: 'Vazir' }}                                        onChangeText={text => this.setState({ input: text })}
                                        onChangeText={text => this.setState({ output: text })}
                                        maxLength={50}
                                        value={this.state.output}
                                    />
                                </Item>
                            </Form>
                        </Card>
                        <Card>
                            <Form>
                                <Item>
                                    <Icon active name='md-person' />
                                    <Input
                                        placeholder='نام نمایشی شما (دلخواه)'
                                        style={{ fontFamily: 'Vazir' }}                                        onChangeText={text => this.setState({ input: text })}
                                        onChangeText={text => this.setState({ name: text })}
                                        maxLength={20}
                                        value={this.state.name}
                                    />
                                </Item>
                            </Form>
                        </Card>
                        <Button
                            full
                            primary
                            iconRight
                            rounded
                            style={{ marginTop: 20 }}
                            onPress={this.onSubmit}
                        >
                            <Text style={{ fontFamily: 'Vazir' }}>
                                فرستادن
                            </Text>
                            <Icon name='md-send' />
                        </Button>
                    </Content>
                </Container>
            </Root>
        )
    }
}