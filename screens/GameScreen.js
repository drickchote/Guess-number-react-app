import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton'
import BodyText from '../components/BodyText';
import {Ionicons} from "@expo/vector-icons"

const generateRandomBetween = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max-min)) + min;

    if(randomNumber === exclude){
        return generateRandomBetween(min, max, exclude)
    } else{
        return randomNumber
    }
}

const GameScreen = props =>{
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice));
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const {userChoice, onGameOver} = props;

    useEffect(()=>{
        if(currentGuess === userChoice){
            onGameOver(rounds)
        }
    }, [currentGuess, onGameOver, userChoice])

    const nextGuessHandler = direction =>{

        if(
            (direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)
        ){
            Alert.alert("Don\'t lie",'Am I joke to you?',[{text:"sorry =(", style:"cancel"}])
            return;
        } 

        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        setCurrentGuess(generateRandomBetween(currentLow.current, currentHigh.current , currentGuess))
        setRounds(rounds+1)
    }

    return (
        <View style={styles.screen}>
            <BodyText>Opponent's Guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton  onPress={nextGuessHandler.bind(this,'lower')}>
                    <Ionicons name="md-remove" size={24} color="white"/>
                </MainButton>
                <MainButton  onPress={nextGuessHandler.bind(this,'greater')}>
                    <Ionicons name="md-add" size={24} color="white"/>
                </MainButton>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        justifyContent:"center",
        alignItems: "center",
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%",
    }
});

export default GameScreen;