import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

interface Goal {
    id: string;
    text: string;
}

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    // RN에서는 h2나 div 요소를 못 쓴다. -> 왜? DOM 요소를 가지고 있지 않아서..
    // 또한 CSS에서 border라는 키가 존재하지 않음
    const [goals, setGoals] = useState<Goal[]>([]);

    const addGoalHandler = (enteredGoalText: string) => {
        if (enteredGoalText.length === 0) {
            return;
        }
        setGoals((currentGoals) => [
            ...currentGoals,
            { text: enteredGoalText, id: Math.random().toString() }
        ]);
    };

    const deleteGoalHandler = (id: string) => {
        setGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== id);
        });
    };

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    };

    return (
        <View style={styles.appContainer}>
            <Button
                title="목표 추가"
                color="#5e0acc"
                onPress={startAddGoalHandler}
            />
            {modalIsVisible && (
                <GoalInput
                    onAddGoal={addGoalHandler}
                    visible={modalIsVisible}
                />
            )}
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goals}
                    alwaysBounceVertical={false}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHandler}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.id}
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
