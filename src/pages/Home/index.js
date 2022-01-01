import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import HeaderComponent from '../../components/besar/HeaderComponent'
import { FlatGrid } from 'react-native-super-grid';
import { fonts } from '../../utils'
import { dummyKategori } from '../../data'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            histori: [
                { id: 1, tgl: '03-01-2022', absen: 'masuk', jam: '08:30' },
                { id: 2, tgl: '03-01-2022', absen: 'keluar', jam: '18:00' },
            ],
            menus: dummyKategori
        }
    }
    render() {
        const { histori } = this.state
        return (
            <View style={styles.pages}>
                <StatusBar backgroundColor="#22668A" />
                <HeaderComponent />
                {/* untuk button absen dan histori */}
                <View style={styles.container}>
                    <FlatGrid
                        itemDimension={80}
                        data={this.state.menus}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(item.halaman)} style={styles.boxs}>
                                <Icon name={item.icon} size={45} color="#6AB1D7" />
                                <Text style={styles.text}>{item.nama}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                {/* end untuk button absen dan histori */}

                <View style={styles.riwayat}>
                    <Text style={styles.label}>Riwayat Absensi</Text>
                </View>
                <FlatList
                    data={histori}
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
        marginTop: 5,
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
    container: {
        marginTop: -30
    },
    text: {
        fontFamily: fonts.primary.bold,
        fontSize: 14,
    },
    boxs: {
        backgroundColor: '#fafafa',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

