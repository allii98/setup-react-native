import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native'
import { dummyProfile } from '../../data'
import { responsiveWidth, fonts } from '../../utils'
import { Inputan } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataProvinsi: [],
            dataKota: [],
            profile: dummyProfile
        }
    }
    render() {
        const { dataProvinsi, dataKota, profile } = this.state
        return (
            <View style={styles.pages}>
                <StatusBar backgroundColor="#22668A" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.btn_edit}>
                        <Icon name="edit" size={22} color="#22668A" />
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <Image source={profile.avatar} style={styles.foto} />
                    </View>
                    <View>
                        <Inputan label="Nama" value={profile.nama} />
                        <Inputan label="Departemen" value={profile.dept} />
                        <Inputan label="Jabatan" value={profile.jabatan} />
                        <Inputan label="Email" value={profile.email} />
                        <Inputan label="No. Handphone" value={profile.nomerHp} />
                    </View>
                    <TouchableOpacity style={styles.btn_simpan}>
                        <Text style={styles.text}>Simpan</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 30,
        paddingTop: 10
    },
    foto: {
        width: responsiveWidth(150),
        height: responsiveWidth(150),
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: -responsiveWidth(75)
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 5
    },
    btn_edit: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 10
    },
    btn_simpan: {
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
    }
})
