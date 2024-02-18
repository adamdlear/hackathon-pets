import { LineChart } from "react-native-chart-kit";

const MyLineChart = ({ data }) => {
    return (
        <LineChart
            data={data}
            width={350}
            height={200}
            chartConfig={{
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                useShadowColorFromDataset: false,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                strokeWidth: 3, // optional, default 3
                propsForLabels: {
                    enabled: false
                }
            }}/>
    )
}

export default MyLineChart;