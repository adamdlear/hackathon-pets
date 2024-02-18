import { ProgressChart } from "react-native-chart-kit";

const MyProgressChart = ({ data }) => {
    return (
        <ProgressChart
            data={data}
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
    )
}

export default MyProgressChart;