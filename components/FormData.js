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
import GeneralStyle from '../styles/GeneralStyle';

var FormData = React.createClass({
    getInitialState() {
        return {
            pTitle: null,
            pBody: null,
            pUserId: null
        }
    },

    componentDidMount() {
        if (this.props.id !== '') {
            fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.id, {method: "GET"})
                .then((response) => response.json())
                .done((responseData) => {
                    const data = responseData;
                    this.setState({
                        pTitle: data.title,
                        pBody: data.body,
                        pUserId: String(data.userId),
                    });
                });
        }
    },

    validation() {
        let error = 0;
        if (this.state.pTitle == '' || this.state.pTitle == null) {
            error++;
        }
        if (this.state.pBody == '' || this.state.pBody == null) {
            error++;
        }
        if (this.state.pUserId == '' || this.state.pUserId == null) {
            error++;
        }

        return error > 0;
    },

    render() {
        let Insert = () => {
            if (this.validation()) {
                alert('Please fill in all the fields!');
            } else {
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: "POST",
                    data: {
                        title: this.state.pTitle,
                        body: this.state.pBody,
                        userId: this.state.pUserId
                    }
                })
                .then((response) => response.json())
                .done((responseData) => {
                    Alert.alert(
                        'Alert',
                        'Data with ID: ' + responseData.id + ' has been saved',
                        [{text: 'OK', onPress: this.props.onPress}],
                        {cancelable: false}
                    );
                });
            }
        }

        let Update = () => {
            if (this.validation()) {
                alert('Please fill in all the fields!');
            } else {
                fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.id, {
                    method: "PUT",
                    data: {
                        title: this.state.pTitle,
                        body: this.state.pBody,
                        userId: this.state.pUserId
                    }
                })
                .then((response) => response.json())
                .done((responseData) => {
                    Alert.alert(
                        'Alert',
                        'Data with ID: ' + responseData.id + ' has been updated',
                        [{text: 'OK', onPress: this.props.onPress}],
                        {cancelable: false}
                    );
                });
            }
        }

        return (
            <View style={GeneralStyle.container}>
                <View style={GeneralStyle.header}>
                    <Text style={GeneralStyle.title}>{this.props.title}</Text>
                </View>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    placeholder="Title"
                    value={this.state.pTitle}
                    onChange={(event) => this.setState({pTitle:event.nativeEvent.text})}
                />
                <Text style={styles.label}>Body</Text>
                <TextInput
                    placeholder="Body"
                    value={this.state.pBody}
                    onChange={(event) => this.setState({pBody:event.nativeEvent.text})}
                />
                <Text style={styles.label}>User ID</Text>
                <TextInput
                    placeholder="User ID"
                    keyboardType="numeric"
                    value={this.state.pUserId}
                    onChange={(event) => this.setState({pUserId:event.nativeEvent.text})}
                />
                <View style={styles.buttonView}>
                    <Button
                        onPress={this.props.onPress}
                        color="#ff7766"
                        title="Cancel"
                    />
                    <Button
                        onPress={this.props.id == '' ? Insert : Update}
                        color="#6677ff"
                        title="Save"
                    />
                </View>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        color: '#333333',
    },
    buttonView: {
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        justifyContent: 'space-between',
        marginTop: 10
    }
});

module.exports = FormData;
