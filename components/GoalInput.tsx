import { useState } from "react";
import {
    Button,
    StyleSheet,
    TextInput,
    View,
    Modal,
    Image
} from "react-native";

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
                <Image
                    source={require("../assets/images/goal.png")}
                    style={styles.image}
                />
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
        backgroundColor: "#311b6b"
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
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
        backgroundColor: "#cccccc"
    }
});
