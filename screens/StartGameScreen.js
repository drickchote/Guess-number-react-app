import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input'
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import BodyTitle from '../components/BodyTitle';
import MainButton from '../components/MainButton';
const StartGameScreen = props =>{

    const [enteredValue, setEnteredValue] = useState("")
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""))
    }

    const resetInputHandler = () =>{
        setEnteredValue("")
        setConfirmed(false)
    }

    const confirmInputHandler = ()=>{
        const chosenNumber = parseInt(enteredValue)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                "Invalid Number",
                "Number has to be a number between 1 and 99.",
                [{text:"Okay", style:'destructive', onPress: resetInputHandler}]
            )
            return;
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue("")
        Keyboard.dismiss()
    }

    let confirmedOutput;

    if(confirmed){
        confirmedOutput = 
        <Card style={styles.sumaryContainer}>
            <BodyText>Chosen Number:</BodyText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <View>
                <MainButton onPress={props.onStartGame.bind(this,selectedNumber)}>
                    Start Game
                </MainButton>
            </View>
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <BodyTitle style={styles.title}>Start a New Game!</BodyTitle>
                <Card style={styles.container}>
                    <BodyText>Select a Number</BodyText>
                    <Input 
                        style={styles.input}  
                        blurOnSubmit={true}
                        autoCapitalize='none'   
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}    
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button color={Colors.accent} title="Reset" onPress={resetInputHandler}/>
                        </View>
                        <View style={styles.button}>
                            <Button type="submit" color={Colors.primary} title="Confirm" onPress={confirmInputHandler}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    container:{
        width: "80%",
        maxWidth:"80%",
        alignItems:"center",
    },  
    sumaryContainer:{
        marginTop:20,
        alignItems:"center"
    },
    buttonContainer:{
        flexDirection: "row",
        width: "100%",
        justifyContent:"space-between",
        paddingHorizontal: 15
    },
    button:{
        width: "50%",
        padding:10
    },

    input: {
        width: 50,
        textAlign: "center"
    }
});



export default StartGameScreen;
