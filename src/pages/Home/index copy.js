import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Home extends Component {
    render() {
        return (
            <View style={styles.pages}>
                <StatusBar backgroundColor="#22668A" />
                <View style={styles.headers}>
                    <Text style={{ color: '#e0e0e0' }}>Home</Text>
                </View>
                {/* contents */}
                <View style={styles.content}>
                    <Text>Home Screen</Text>
                </View>

                {/* button tab */}
                <View style={styles.tabs}>

                    <TouchableOpacity style={styles.btn_home}>
                        <Icon name="home" size={22} color="#e0e0e0" />
                        <Text style={{ color: '#e0e0e0' }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={styles.btn_profile}>
                        <Icon name="user" size={22} color="#6AB1D7" />
                        <Text style={{ color: '#6AB1D7' }}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: 'white'
    },
    headers: {
        backgroundColor: '#22668A',
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        backgroundColor: '#22668A',
        paddingVertical: 15,
        flexDirection: 'row',
    },
    btn_home: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    btn_profile: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})
