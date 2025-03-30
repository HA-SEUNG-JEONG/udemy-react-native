import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    // RN에서는 h2나 div 요소를 못 쓴다. -> 왜? DOM 요소를 가지고 있지 않아서..
    // 또한 CSS에서 border라는 키가 존재하지 않음
    const [goals, setGoals] = useState([]);

    const addGoalHandler = (enteredGoalText) => {
        if (enteredGoalText.length === 0) {
            return;
        }
        setGoals((currentGoals) => [
            ...currentGoals,
            { text: enteredGoalText, key: Math.random().toString() }
        ]);
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goals}
                    alwaysBounceVertical={false}
                    renderItem={(itemData) => {
                        return <GoalItem text={itemData.item.text} />;
                    }}
                />
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
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: "white"
    }
});
