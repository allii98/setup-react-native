import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { responsiveHeight, fonts } from '../../utils'
import { Inputan } from '../../components';

export default class ChangePassword extends Component {
    render() {
        return (
            <View style={styles.pages}>
                <View>
                    <Inputan label="Password Lama" secureTextEntry />
                    <Inputan label="Password Baru" secureTextEntry />
                    <Inputan label="Konfirmasi Password Baru" secureTextEntry />
                </View>

                <TouchableOpacity style={styles.btn_simpan}>
                    {/* <Icon name="arrow-right" size={22} color="#e0e0e0" /> */}
                    <Text style={styles.text}>Simpan</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 30,
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    btn_simpan: {
        flexDirection: 'row',
        backgroundColor: '#22668A',
        marginTop: 20,
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        padding: responsiveHeight(15)
    },
    text: {
        color: '#e0e0e0',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: fonts.primary.bold,
    }
})
