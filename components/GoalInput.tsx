import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface GoalInputProps {
    onAddGoal: (enteredGoalText: string) => void;
}

function GoalInput(props: GoalInputProps) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText: string) => {
        // 이벤트 처리하기
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="이름을 입력해주세요"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title="저장" onPress={addGoalHandler} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
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
    }
});
