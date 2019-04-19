import React from 'react'
import { StatusBar } from 'react-native'
import { Container, Spinner, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'

import styles from '../assets/styles'

export default class Splash extends React.Component {
    componentWillMount(){
        setTimeout(() => {
            if(true) {
                Actions.reset('root')
            }
            else {
                Actions.reset('auth')
            }
        }, 1000)
    }

    render (){
        const style = styles.index
        return (
            <Container style={style.splashContainer} >
                <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
                <Text style={style.splashText}>
                    به پارسی
                </Text>
                <Spinner />
            </Container>
        )
    }
}