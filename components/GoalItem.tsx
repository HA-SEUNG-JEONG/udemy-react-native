import { Pressable, StyleSheet, Text, View, Alert } from "react-native";

interface GoalItemProps {
    id: string;
    text: string;
    onDeleteItem: (id: string) => void;
}

function GoalItem(props: GoalItemProps) {
    const deleteGoalHandler = () => {
        Alert.alert("목표 삭제", "이 목표를 삭제하시겠습니까?", [
            {
                text: "취소",
                style: "cancel"
            },
            {
                text: "삭제",
                style: "destructive",
                onPress: () => props.onDeleteItem(props.id)
            }
        ]);
    };
    return (
        <Pressable
            onPress={deleteGoalHandler}
            style={({ pressed }) => pressed && styles.pressedItem}
            android_ripple={{ color: "#210644" }}
        >
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc"
    },
    goalText: {
        color: "white"
    },
    pressedItem: {
        opacity: 0.5
    }
});
