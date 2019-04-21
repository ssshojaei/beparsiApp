import EStyleSheet from 'react-native-extended-stylesheet';

export const drawer = EStyleSheet.create ({
    container: {
        flex: 1
    },
    imageHeader: {
        height: 180,
        width: '100%'
    }
})

export const index = EStyleSheet.create ({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3e50b4ff'
    },
    splashText: {
        color: 'white',
        fontSize: 18,
        fontFamily: '$Font'
    }
})

export default styles = {
    index
}