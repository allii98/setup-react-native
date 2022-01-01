import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fonts, responsiveHeight } from '../../../utils'

const CardMenu = ({ menu, navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(menu.halaman)} >
            <View style={styles.menu} >
                {menu.gambar}
                <Text style={styles.text} >{menu.nama}</Text>
            </View>
            <Icon name="angle-right" size={22} color="#424242" />
        </TouchableOpacity>
    )
}

export default CardMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginHorizontal: 25,
        padding: responsiveHeight(20),
        borderRadius: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: fonts.primary.bold,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center'

    }

})
