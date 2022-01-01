import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const dummyMenu = [
    {
        id: 1,
        nama: 'Edit Profile',
        gambar: <Icon name="user-edit" size={22} color="#6AB1D7" />,
        halaman: 'EditProfile'
    },
    {
        id: 2,
        nama: 'Change Password',
        gambar: <Icon name="lock" size={22} color="#6AB1D7" />,
        halaman: 'ChangePassword'
    },

    {
        id: 4,
        nama: 'Sign Out',
        gambar: <Icon name="sign-out-alt" size={22} color="#6AB1D7" />,
        halaman: 'Login'
    },
];