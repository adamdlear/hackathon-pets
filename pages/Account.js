import { Text, View, StyleSheet } from 'react-native';

const Account = ({navigation}) => {
    return (
        <View>   
            <Text>Pet's Name</Text>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text>Hello</Text>
                </View>
                <View style={styles.box}>
                    <Text>Hello</Text>
                </View>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        gap: 100,
    },
    box: {
        backgroundColor: "blue",
    }
})

export default Account;