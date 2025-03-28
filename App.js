import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    // RN에서는 h2나 div 요소를 못 쓴다. -> 왜? DOM 요소를 가지고 있지 않아서..
    // 또한 CSS에서 border라는 키가 존재하지 않음

    const [enteredGoalText, setEnteredGoalText] = useState("");
    const [goals, setGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        // 이벤트 처리하기
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        setGoals((currentGoals) => [...currentGoals, enteredGoalText]);
        // 입력 필드 초기화
        setEnteredGoalText("");
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="이름을 입력해주세요"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <Button title="저장" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                {goals.map((goal) => (
                    <Text key={goal}>{goal}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row", // default는 column..? 일반 CSS하고는 다른듯
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 5
    }
});
