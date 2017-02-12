/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    ListView,
    Navigator
} from 'react-native';
import ListViewData from './components/ListViewData';
import FormData from './components/FormData';

export default class AwesomeProject extends Component {
    switchScene(route, navigator) {
        switch (route.index) {
            case 0:
                return <ListViewData
                            title={route.title}
                            onAdd={() => {
                                navigator.push({
                                    title: 'Add Post',
                                    index: 1,
                                });
                            }}
                            onEdit={(id) => {
                                navigator.push({
                                    title: 'Edit Post',
                                    index: 2,
                                    id: id
                                })
                            }}
                        />
                break;
            case 1:
                return <FormData
                            title={route.title}
                            onPress={() => {
                                navigator.pop();
                            }}
                            id=''
                        />
                break;
            case 2:
                return <FormData
                            title={route.title}
                            onPress={() => {
                                navigator.pop();
                            }}
                            id={route.id}
                        />
                break;

            default:

        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{title: 'Post', index:0}}
                renderScene={(route, navigator) =>
                    this.switchScene(route, navigator)
                }
            />
        );
    }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
