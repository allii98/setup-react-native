import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, StatusBar, Image } from 'react-native'
import { dummyProfile } from '../../data'
import { fonts, responsiveHeight, responsiveWidth } from '../../utils'

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: dummyProfile
        }
    }

    render() {
        const { profile } = this.state
        return (
            <View style={styles.pages}>
                <StatusBar backgroundColor="#22668A" />
                <View style={styles.container}>
                    <Image source={profile.avatar} style={styles.foto} />
                    <View style={styles.profile}>

                        <Text style={styles.nama}>{profile.nama}</Text>
                        <Text style={styles.desc}>{profile.nik}</Text>
                        <Text style={styles.desc}>{profile.alamat} {profile.kota}</Text>
                    </View>
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: '#22668A'
    },
    container: {
        position: 'absolute',
        bottom: 0,
        height: responsiveHeight(680),
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    foto: {
        width: responsiveWidth(150),
        height: responsiveWidth(150),
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: -responsiveWidth(75)
    },
    profile: {
        marginTop: 10,
        alignItems: 'center',
    },
    nama: {
        fontFamily: fonts.primary.bold,
        fontWeight: 'bold',
        fontSize: 24
    },
    desc: {
        fontFamily: fonts.primary.regular,
        fontWeight: 'normal',
        fontSize: 18
    },


})

