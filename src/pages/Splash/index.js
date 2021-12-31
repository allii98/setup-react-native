import React, { Component } from 'react'
import { StyleSheet, View, Image, StatusBar } from 'react-native'
import { Msal, Work } from '../../assets'

export default class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            /* untuk berpindah halaman ke home */
            this.props.navigation.replace('mainApp')
        }, 2000)
    }
    render() {
        return (
            <View style={styles.pages}>
                <StatusBar backgroundColor="white" />
                <Image
                    source={require('../../assets/image/logo.png')}
                    style={{ width: 100, height: 86, borderRadius: 4 }}
                />
                <Msal />
                <View style={styles.work}>
                    <Work />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /* pages */
    pages: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    work: {
        position: 'absolute',
        bottom: 0,
        right: 2
    },
    /* end pages */
})
