import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Router, Scene, Drawer } from 'react-native-router-flux'

EStyleSheet.build ({
    $PrimaryColor: '#3F51B5',
    $SecondaryColor: '#E91E63',
    $Font: 'Vazir'
})

import Search from './components/root/Search'
import DrawerLayout from './components/DrawerLayout'
import Swap from './components/root/Swap'
import Loghat from './components/root/Loghat'
import Splash from './components/Splash'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Scene hideNavBar>
                    <Scene key='root' hideNavBar>
                        <Drawer
                            key='drawer'
                            contentComponent={DrawerLayout}
                            drawerPosition='right'
                        >
                            <Scene hideNavBar>
                                <Scene key='search' component={Search} initial />
                                <Scene key='swap' component={Swap} />
                                <Scene key='loghat' component={Loghat} />
                            </Scene>
                        </Drawer>
                    </Scene>
                    <Scene key='splash' component={Splash} initial />
                </Scene>
            </Router>
        )
    }
}