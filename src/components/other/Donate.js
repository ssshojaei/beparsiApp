import React from 'react'
import { Container, Content, Text, Button } from 'native-base'
import AppHeader from '../Header';
import { StyleSheet, Alert } from 'react-native'
import RNCustomBilling from 'react-native-custom-billing'
import DeviceInfo from 'react-native-device-info'
import { Actions } from 'react-native-router-flux';


export default class Donate extends React.Component {
    donate = (value) => {
        const mac = DeviceInfo.getUniqueID()
        RNCustomBilling.open()
            .then(() => RNCustomBilling.purchase(`hamyari${value}`, mac, 0))
            .then(() => {
                Alert.alert(
                    'سپاس',
                    'از همیاری شما در گسترش برنامه سپاس گزاریم',
                    [
                        { text: 'بازگشت', onPress: () => Actions.reset('root') }
                    ]
                )
                return RNCustomBilling.close()
            })
            .catch(() => 
            Alert.alert(
                'نافرجام',
                'پرداخت نافرجام بود، سپاس از انگیزه‌ی شما',
                [
                    { text: 'بازگشت' }
                ]
            ))
    }
    render() {
        return (
            <Container>
                <AppHeader title='همیاری' />
                <Content padder>
                    <Text style={{ fontFamily: 'Vazir', textAlign: 'center' }}>بکارگیری این برنامه رایگان است و همیشه رایگان خواهد بود، همیاری دارایی شما در بهبود برنامه و فراهم کردن هزینه‌های گسترش ما را یاری می‌کند</Text>
                    <Button onPress={() => this.donate(1)} style={styles.button} full rounded info>
                        <Text style={{ fontFamily: 'Vazir-Bold' }}>۱۰۰۰ تومان</Text>
                    </Button>
                    <Button onPress={() => this.donate(2)} style={styles.button} full rounded primary>
                        <Text style={{ fontFamily: 'Vazir-Bold' }}>۲۰۰۰ تومان</Text>
                    </Button>
                    <Button onPress={() => this.donate(3)} style={styles.button} full rounded warning>
                        <Text style={{ fontFamily: 'Vazir-Bold' }}>۵۰۰۰ تومان</Text>
                    </Button>
                    <Button onPress={() => this.donate(4)} style={styles.button} full rounded success>
                        <Text style={{ fontFamily: 'Vazir-Bold' }}>۱۰۰۰ تومان</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create ({
    button: {
        marginTop: 15
    }
})