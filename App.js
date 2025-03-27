import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    // RN에서는 h2나 div 요소를 못 쓴다. -> 왜? DOM 요소를 가지고 있지 않아서..
    // 또한 CSS에서 border라는 키가 존재하지 않음
    return (
        <View style={styles.appContainer}>
            <View>
                <TextInput placeholder="이름을 입력해주세요" />
                <Button title="저장" />
            </View>
            <View>
                <Text>목록</Text>
                <Text>이름</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50
    }
});
