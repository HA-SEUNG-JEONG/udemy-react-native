import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

interface GoalInputProps {
    onAddGoal: (enteredGoalText: string) => void;
    onCancel: () => void;
    visible: boolean;
}

function GoalInput(props: GoalInputProps) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="이름을 입력해주세요"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="저장" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="취소" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
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
    buttonContainer: {
        marginTop: 8,
        flexDirection: "row",
        justifyContent: "center",
        width: "40%",
        marginHorizontal: 8
    },
    button: {
        width: 100,
        marginHorizontal: 8,
        marginVertical: 4
    }
});
