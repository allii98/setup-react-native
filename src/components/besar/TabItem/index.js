import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { fonts } from '../../../utils'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icons = () => {
        if (label === 'Home') {
            return isFocused ? <Icon name="home" size={22} color="#e0e0e0" /> : <Icon name="home" size={22} color="#6AB1D7" />;
        }


        if (label === 'Profile') {
            return isFocused ? <Icon name="user" size={22} color="#e0e0e0" /> : <Icon name="user" size={22} color="#6AB1D7" />;
        }

        return <Icon name="home" size={22} color="#6AB1D7" />;
    };
    return (
        <TouchableOpacity


            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
            </Text> */}
            <Icons />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: (isFocused) => ({
        color: isFocused ? '#e0e0e0' : '#6AB1D7',
        fontSize: 14,
        marginTop: 4,
        fontFamily: fonts.primary.bold
    }),
})
