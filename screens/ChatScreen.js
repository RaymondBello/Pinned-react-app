import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Chat Screen</Text>
            <Button
                title="Click Me"
                onPress={() => alert("Clicked")}
            />
        </View>
    )
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5B5E6A",
    
    }
})
