import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, FlatList } from 'react-native'
import HeaderComponent from '../../components/besar/HeaderComponent'
import { ButtonAction } from '../../components/kecil/'
import { fonts } from '../../utils'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            histori: [
                { id: 1, tgl: '03-01-2022', absen: 'masuk', jam: '08:30' },
                { id: 2, tgl: '03-01-2022', absen: 'keluar', jam: '18:00' },
            ]
        }
    }
    render() {
        return (
            <View style={styles.pages}>
                <StatusBar backgroundColor="#22668A" />
                <HeaderComponent />
                <ButtonAction />
                <View style={styles.riwayat}>
                    <Text style={styles.label}>Riwayat Absensi</Text>
                </View>
                <FlatList
                    data={this.state.histori}
                    renderItem={({ item, index }) =>
                        <View style={styles.box}>
                            <Text style={{ fontWeight: 'bold' }}>{item.tgl}</Text>
                            <View style={styles.isi}>
                                <Text>Absen {item.absen}</Text>
                                <Text>{item.jam}</Text>
                            </View>
                        </View>}
                    keyExtractor={(item) => item.id}
                />

            </View>

        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },

    box: {
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    isi: {
        // marginVertical: 5,
        // marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    riwayat: {
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5
    },
    label: {
        fontSize: 16,
        fontFamily: fonts.primary.bold,
        fontWeight: 'bold'
    },
    tabs: {
        backgroundColor: '#22668A',
        paddingVertical: 15,
        flexDirection: 'row',
    },
    btn_home: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    btn_profile: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

