import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ResultArea from "../ResultArea";
import ToolsArea from "../ToolsArea";
import KeyboardArea from "../KeyboardArea";


interface Props{}
export default class MainContainer extends Component<Props>{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.resultArea}>
                    <ResultArea />
                </View>
                <View style={styles.toolsArea}>
                    <ToolsArea />
                </View>
                <View style={styles.keyboardArea}>
                    <KeyboardArea />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    resultArea: {
        flex: 3,
    },
    toolsArea: {
        flex: 1
    },
    keyboardArea: {
        flex: 6,
        backgroundColor: "red"
    }
})