import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import InputButton from "../components/InputButton"
import MyProgressChart from '../components/MyProgressChart';
import MyLineChart from "../components/MyLineChart";

const Dashboard = ({navigation}) => {
    const foodData = {
        labels: ["Calories"],
        data: [.50]
    }

    const exerciseData = {
        data: [.25]
    }

    const lineChartData = {
        labels: ['Dec', 'Jan', 'Feb'],
        datasets: [
            {
                data: [80, 75, 70],
                color: (opacity = 1) => `rgba(116, 148, 252, ${opacity})`,
                withShadow: false,
            },
            {
                data: [30, 45, 60],
                color: (opacity = 1) => `rgba(168, 136, 255, ${opacity})`,
            }
        ],
        legend: ['Weight (lbs)', 'Calories Burnt']
    }

    return (
        <SafeAreaView style={{backgroundColor: "white", height: "100%"}}>   
            <Text style={styles.petName}>Griff</Text>
            <View style={styles.container1}>
                <View style={styles.container2}>
                    <View style={styles.box}>
                        <Text style={styles.boxHeader}>Food</Text>
                        <MyProgressChart data={foodData}></MyProgressChart>
                        <InputButton title="Input Food"></InputButton>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.boxHeader}>Exercise</Text>
                        <MyProgressChart data={exerciseData}></MyProgressChart>
                        <InputButton title="Input Exercise"></InputButton>
                    </View>
                </View>
                <View style={styles.box2}>
                    <MyLineChart data={lineChartData}/>
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
    container1: {
        marginLeft: 16,
        marginRight: 16,
        gap: 22,
    },
    container2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 16,
    },
    boxHeader: {
        fontSize: 22,
        paddingTop: 20,
        paddingBottom: 10,
    },
    box: {
        height: 250,
        width: 170,
        backgroundColor: "lightgray",
        borderRadius: 5,
        alignItems: "center",
    },
    box2: {
        alignItems: "center",
        backgroundColor: "lightgray",
        borderRadius: 5,
    }
})

export default Dashboard;