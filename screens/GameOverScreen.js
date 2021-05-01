import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import BodyText from '../components/BodyText';
import BodyTitle from '../components/BodyTitle';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <BodyTitle>The game is over!</BodyTitle>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/success.png')}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.guessRounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            </View>
            <MainButton onPress={props.onRestart}>
                New game
            </MainButton>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    imageContainer:{
        width:300,
        height: 300,
        borderRadius:200,
        borderWidth: 2,
        overflow:"hidden",
        marginVertical: 30,
        
    },
    image:{
        width:"100%",
        height:"100%",
        resizeMode:'cover'
    },
    highlight:{
        color: Colors.primary,
        fontFamily: "open-sans-bold",
    },
    resultContainer:{
        marginHorizontal:30,
        marginVertical: 20,
    },
    resultText:{
        textAlign: "center",
        fontSize: 20
    }
});

export default GameOverScreen;