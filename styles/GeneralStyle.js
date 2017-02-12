import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    Button,
    TextInput
} from 'react-native';

var GeneralStyle = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        margin: 10,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    header: {
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 25,
        color: '#333333',
        alignItems: 'center'
    },
});

module.exports = GeneralStyle;
