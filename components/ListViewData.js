import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ListView,
    Alert,
    Button,
    ScrollView
} from 'react-native';
import GeneralStyle from '../styles/GeneralStyle';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var ListViewData = React.createClass ({
    getInitialState() {
        return {
            dataSource: ds.cloneWithRows(['', '']),
        }
    },

    componentDidMount(){
        this.showAllData();
    },

    showAllData() {
        fetch('https://jsonplaceholder.typicode.com/posts', {method: "GET"})
        .then((response) => response.json())
        .then((responseData) =>
        this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseData)})
        )
        .done(() => {

        });
    },

    deleteData(rowData) {
        fetch('https://jsonplaceholder.typicode.com/posts/' + rowData.id, {method: "DELETE"})
        .done(() => {
            Alert.alert(
                'Your data has been successfully deleted',
                'Data Details: \n\n' +
                'ID : ' + rowData.id + '\n\n' +
                'Title : ' + rowData.title + '\n\n' +
                'Body : ' + rowData.body + '\n\n' +
                'User ID : ' + rowData.userId,
                [{text: 'OK', onPress: this.props.onPress}],
                {cancelable: false}
            );
            this.showAllData();
        });
    },

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight onPress = {() => {
                this.pressRow(rowData);
            }}>
            <View style={styles.row}>
                <Text style={styles.content}>{rowData.title}</Text>
            </View>
            </TouchableHighlight>
        );
    },

    pressRow(rowData) {
        Alert.alert(
            'Post Details',
            'ID : ' + rowData.id + '\n\n' +
            'Title : ' + rowData.title + '\n\n' +
            'Body : ' + rowData.body + '\n\n' +
            'User ID : ' + rowData.userId,
            [
                {text: 'Cancel', onPress: () => console.log('Cancel')},
                {text: 'Edit', onPress: () => this.props.onEdit(rowData.id)},
                {text: 'Delete', onPress: () => this.deleteData(rowData)},
            ],
            {cancelable: false}
        );
    },

    render() {
        return (
            <View style={GeneralStyle.container}>
                <View style={GeneralStyle.header}>
                    <Text style={GeneralStyle.title}>{this.props.title}</Text>
                </View>
                <Button
                    onPress={this.props.onAdd}
                    color="#6677ff"
                    title="Add Post"
                />
                <ScrollView style={{marginBottom: 70}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                    />
                </ScrollView>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor: "#ddd",
        justifyContent: 'space-between'
    },
    content: {
        fontSize: 20,
        color: '#333333',
        margin: 20,
    },
});


module.exports = ListViewData;
