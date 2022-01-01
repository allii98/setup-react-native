import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, StatusBar, Image } from 'react-native'
import { dummyProfile, dummyMenu } from '../../data'
import { fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { RFValue } from "react-native-responsive-fontsize"
import { ListMenu } from '../../components/'

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: dummyProfile,
            menus: dummyMenu
        }
    }

    render() {
        const { profile, menus } = this.state
        return (
            <View style={styles.pages}>
                <StatusBar backgroundColor="#22668A" />
                <View style={styles.container}>
                    <Image source={profile.avatar} style={styles.foto} />
                    <View style={styles.profile}>

                        <Text style={styles.nama}>{profile.nama}</Text>
                        <Text style={styles.desc}>{profile.jabatan}</Text>
                        {/* <Text style={styles.desc}>{profile.alamat}, {profile.kota}</Text> */}
                    </View>

                    <ListMenu menus={menus} navigation={this.props.navigation} />
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
        height: responsiveHeight(652),
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
        fontSize: RFValue(24, 896)
    },
    desc: {
        fontFamily: fonts.primary.regular,
        fontWeight: 'normal',
        fontSize: RFValue(18, 896)
    },


})

