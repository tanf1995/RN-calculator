import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native';


interface Props{}
export default class MainContainer extends Component<Props>{

    render(){
        return (
            <View style={styles.container}>
                {/* <Text style={styles.process}>7x8</Text> */}
                {/* <TextInput 
                    style={styles.process} 
                    value="7x8" 
                    keyboardType='numeric'
                /> */}

                <TouchableWithoutFeedback 
                    onPress={() => console.log("ss")}
                    style={{backgroundColor: "blue", height: 300}}
                >
                    <TextInput 
                        // style={styles.process} 
                        value="7x8"
                        keyboardType='numeric'
                    />
                    {/* <Text style={styles.result}>56</Text> */}
                </TouchableWithoutFeedback>

                <Text style={styles.result}>56</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 30
    },
    process: {
        flex: 6,
        textAlign: "right",
        fontSize: 36
    },
    result: {
        flex: 4,
        fontSize: 36,
        textAlign: "right"
    }
})