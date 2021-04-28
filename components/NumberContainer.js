import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        borderColor:Colors.accent,
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 10,
        alignItems:"center"
    },
    text:{
        color:Colors.accent,
        fontSize: 20,
    }
});

export default NumberContainer;