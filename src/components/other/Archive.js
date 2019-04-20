import React from 'react'
import { Container, Content, List, ListItem, Left, Body, Text, Badge, Toast, Root } from 'native-base'
import AppHeader from '../Header';
import DeviceInfo from 'react-native-device-info'

export default class Archive extends React.Component {
    state = {
        load: 'none',
        data: []
    }
    componentDidMount(){
        this.setState({ load: 'flex' })
        const mac = DeviceInfo.getUniqueID()
        fetch(`https://ssshojaei.ir/api/beparsi/getItems.php?mac=${mac}`)
        .then(res =>
            res.json().then(items => {
                if (items.status !== 0){
                    this.setState ({
                        load: 'none',
                        data: items
                    })
                }
            })
        )
        .catch(err =>
            Toast.show ({
                text: 'میزبان در دسترس نیست',
                textStyle: { fontFamily: 'Vazir' },
                type: 'danger',
                duration: 2000
            })
        )
    }
    render() {
        return (
            <Root>
                <Container>
                    <AppHeader title='واژه‌های من' />
                    <Content padder>
                        <List>
                            {
                            ((this.state.data.length > 0) ?
                                this.state.data.map(item =>
                                    <ListItem key={item.id}>
                                        <Left>
                                            <Badge
                                                warning={((item.isShow == 0) ? true : false)}
                                                success={((item.isShow == 1) ? true : false)}
                                            >
                                                <Text style={{ fontFamily: 'Vazir' }}>{((item.isShow == 0) ? 'به زودی' : 'افزوده شده')}</Text>
                                            </Badge>
                                        </Left>
                                        <Body>
                                            <Text style={{ fontFamily: 'Vazir-Bold' }}>{item.title}</Text>
                                            <Text note style={{ fontFamily: 'Vazir' }}>{item.sub}</Text>
                                        </Body>
                                    </ListItem>
                                ) : 
                                    <ListItem key={1}>
                                        <Left>
                                            <Badge danger>
                                                <Text style={{ fontFamily: 'Vazir' }}>یافت نشد!</Text>
                                            </Badge>
                                        </Left>
                                        <Body>
                                            <Text style={{ fontFamily: 'Vazir-Bold' }}>تاکنون واژه‌ای را درون‌ریزی نکرده‌اید</Text>
                                            <Text note style={{ fontFamily: 'Vazir' }}>با افزودن واژه‌ها، ما را یاری کنید</Text>
                                        </Body>
                                    </ListItem>
                            )}
                        </List>
                    </Content>
                </Container>
            </Root>
        )
    }
}