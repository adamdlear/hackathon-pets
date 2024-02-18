import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import InputButton from "../components/InputButton"

const Dashboard = ({navigation}) => {
    const foodData = {
        labels: ["Calories"],
        data: [.50]
    }
    const exerciseData = {
        data: [.25]
    }
    return (
        <SafeAreaView style={{backgroundColor: "white", height: "100%"}}>   
            <Text style={styles.petName}>Fido</Text>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.boxHeader}>Food</Text>
                    <ProgressChart
                        data={foodData}
                        width={125}
                        height={125}
                        chartConfig={{
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientToOpacity: 0,
                            color: (opacity = 1) => `rgba(116, 148, 252, ${opacity})`,
                            strokeWidth: 10, // optional, default 3
                        }}
                        hideLegend={true}
                    />
                    <InputButton title="Input Food"></InputButton>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxHeader}>Exercise</Text>
                    <ProgressChart
                        data={exerciseData}
                        width={125}
                        height={125}
                        chartConfig={{
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientToOpacity: 0,
                            color: (opacity = 1) => `rgba(116, 148, 252, ${opacity})`,
                            strokeWidth: 10, // optional, default 3
                        }}
                        hideLegend={true}
                    />
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
        backgroundColor: "lightgray",
        borderRadius: 5,
        alignItems: "center",
    },
})

export default Dashboard;