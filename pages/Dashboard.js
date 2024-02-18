import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import InputButton from "../components/InputButton"

const Dashboard = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: "white", height: "100%"}}>   
            <Text style={styles.petName}>Fido</Text>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.boxHeader}>Food</Text>
                    <InputButton title="Input Food"></InputButton>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxHeader}>Exercise</Text>
                    <InputButton title="Input Exercise"></InputButton>
                </View>
            </View>
        </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
    petName: {
        textAlign: "center",
        fontSize: 36,
        padding: 25,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    boxHeader: {
        fontSize: 16,
        padding: 20,
    },
    box: {
        height: 300,
        width: 150,
        backgroundColor: "lightergrey",
        borderRadius: 5,
        alignItems: "center",
    },
})

export default Dashboard;