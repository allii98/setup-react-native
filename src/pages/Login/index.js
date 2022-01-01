import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import { Msal, Work } from '../../assets'
import { Inputan } from '../../components';
import { fonts, responsiveHeight } from '../../utils';

export default class Login extends Component {

    render() {
        return (
            <View style={styles.pages}>
                <StatusBar backgroundColor="white" />
                <View style={styles.logo}>

                    <Image
                        source={require('../../assets/image/logo.png')}
                        style={{ width: 60, height: 60 }}
                    />
                    <Msal />
                </View>
                <View style={styles.cardLogin}>
                    <Inputan label="Nik" />
                    <Inputan label="Password" secureTextEntry />
                    <TouchableOpacity style={styles.btn_login}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.register}>
                    <Text style={styles.textBlue}>Belum Punya Akun ?</Text>
                    <Text style={styles.textBlue} >Hub Dept MIS</Text>
                </TouchableOpacity>
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
        backgroundColor: 'white'
    },

    logo: {
        alignItems: 'center',
        marginTop: responsiveHeight(70),
    },
    work: {
        position: 'absolute',
        bottom: 0,
        right: -20,
        marginTop: responsiveHeight(70)
    },

    cardLogin: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 30,
        borderRadius: 10,
        marginTop: 10
    },

    btn_login: {
        backgroundColor: '#22668A',
        marginTop: 20,
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#e0e0e0',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: fonts.primary.bold,
    },
    register: {
        alignItems: 'center',
        marginTop: 10
    },
    textBlue: {
        fontSize: 18,
        fontFamily: fonts.primary.bold,
        fontWeight: 'bold',
        color: '#22668A'
    }
})
