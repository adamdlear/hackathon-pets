import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

const InputButton = ({ title }) => {
    return (
        <Pressable color="white" style={styles.inputButton}>
            <Text style={styles.innerText}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    inputButton: {
        width: "80%",
        padding: 10,
        backgroundColor: "#b08cfc",
        borderRadius: 3,
    },
    innerText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }
})

export default InputButton;