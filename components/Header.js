import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from "../constants/colors";

import BodyTitle from '../components/BodyTitle';

const Header = props =>{
    return (
        <View style={styles.header}>
            <BodyTitle>{props.title}</BodyTitle>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:90,
        paddingTop: 36,
        backgroundColor:Colors.primary,
        alignItems:"center",
        justifyContent:"center",
    },
});


export default Header;