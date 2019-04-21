import React from 'react'
import { Keyboard, Clipboard, Share } from 'react-native'
import { Container, Content, Card, Form, Textarea, Button, Text, View, Toast, Root, Spinner } from 'native-base'
import AppHeader from '../Header';
import AppFooter from '../Footer';

export default class Swap extends React.Component {
    state = {
        text: null,
        output: null,
        load: 'none'
    }
    onSubmit = () => {
        let inpText = this.state.text
        if (inpText !== null) {
            inpText = inpText.trim()
            Keyboard.dismiss()
            this.setState({ load: 'flex' })
            fetch(`http://ssshojaei.ir/api/beparsi/swap.php?text=${inpText}`)
                .then(res =>
                    res.json().then(item =>
                        this.setState({
                            output: item.result,
                            load: 'none'
                        })
                    )
                )
                .catch(err =>
                    Toast.show({
                        text: 'نمی‌توان به میزبان درخواست داد',
                        textStyle: { fontFamily: 'Vazir' },
                        type: 'danger',
                        duration: 2000
                    })
                )
        }
        else {
            Toast.show({
                text: 'واژه‌ای را درون‌ریزی کنید',
                textStyle: { fontFamily: 'Vazir' },
                type: 'warning',
                duration: 2000
            })
        }
    }
    onCopy = () => {
        if(this.state.output !== null){
            Clipboard.setString(this.state.output)
            Toast.show({
                text: 'رونوشت شد',
                textStyle: { fontFamily: 'Vazir' },
                type: 'success'
            })
        }
    }
    onShare = () => {
        if(this.state.output !== null){
            Share.share({
                message: this.state.output,
                title: 'فرستادن به ...'
            })
        }
    }
    render() {
        return (
            <Root>
                <Container>
                    <AppHeader title='بازگردان نویسه' />
                    <Content padder>
                        <Card>
                            <Form style={{ flex: 1 }}>
                                <Textarea
                                    rowSpan={5}
                                    placeholder='نویسه‌ی خود را درون ریزی کنید'
                                    style={{ fontFamily: 'Vazir' }}
                                    onChangeText={text => this.setState({ text })}
                                />
                            </Form>
                            <Button onPress={this.onSubmit} block transparent primary>
                                <Text style={{ fontFamily: 'Vazir' }}>فرستادن</Text>
                            </Button>
                        </Card>
                        <Spinner style={{ display: this.state.load }} />
                        <Card>
                            <Form style={{ flex: 1 }}>
                                <Textarea
                                    rowSpan={5}
                                    placeholder='بازگردان نویسه نمایش داده می‌شود...'
                                    style={{ fontFamily: 'Vazir' }}
                                    value={this.state.output}
                                />
                            </Form>
                            <View style={{ flexDirection: 'row' }}>
                                <Button
                                    transparent
                                    style={{ width: '50%' }}
                                    success
                                    onPress={this.onShare}
                                >
                                    <Text style={{ width: '100%', textAlign: 'center', fontFamily: 'Vazir' }}>
                                        هم‌رسانی
                                </Text>
                                </Button>
                                <Button
                                    transparent
                                    style={{ width: '50%' }}
                                    onPress={this.onCopy}
                                >
                                    <Text style={{ width: '100%', textAlign: 'center', fontFamily: 'Vazir' }}>
                                        رونوشت
                                </Text>
                                </Button>
                            </View>
                        </Card>
                    </Content>
                    <AppFooter active='swap' />
                </Container>
            </Root>
        )
    }
}