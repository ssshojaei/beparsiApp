import React from 'react'
import { StatusBar, Image } from 'react-native'
import { Container, Spinner, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'

import styles from '../assets/styles'
const logo = require('../assets/images/iconOnly.png')

export default class Splash extends React.Component {
    componentWillMount(){
        setTimeout(() => {
            Actions.reset('root')
            // if(true) {
            //     Actions.reset('root')
            // }
            // else {
            //     Actions.reset('auth')
            // }
        }, 1000)
    }

    render (){
        const style = styles.index
        return (
            <Container style={style.splashContainer} >
                <StatusBar backgroundColor='#3e50b4ff' barStyle="light-content" />
                {/* <Text style={style.splashText}>
                    به پارسی
                </Text> */}
                <Image
                    source={logo}
                />
                <Spinner color='#ffffff' style={{ marginTop: 30 }} />
            </Container>
        )
    }
}