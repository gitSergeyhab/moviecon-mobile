import React, { FC } from "react";
import { Bar, CartesianChart } from "victory-native";
import { LinearGradient, useFont, vec } from "@shopify/react-native-skia";
import SpaceMono from "@/assets/fonts/SpaceMono-Regular.ttf";
import { getData } from "../helpers";

export interface BarChartProps {
  barData: number[];
  labelColor?: string;
}
export const BarChart: FC<BarChartProps> = ({
  barData,
  labelColor = "#ffaf02",
}) => {
  const font = useFont(SpaceMono, 10);
  const data = getData(barData, 6);

  return (
    <CartesianChart
      data={data}
      xKey="resultName"
      yKeys={["count"]}
      domain={{ y: [0] }}
      domainPadding={{ left: 50, right: 50 }}
      axisOptions={{
        font,
        labelColor,
      }}
    >
      {({ points, chartBounds }) => {
        console.log({ points, chartBounds }, points.count);
        return (
          <Bar
            chartBounds={chartBounds}
            points={points.count}
            roundedCorners={{ topLeft: 5, topRight: 5 }}
            animate={{ type: "spring" }}
          >
            <LinearGradient
              start={vec(0, 0)}
              end={vec(0, 400)}
              colors={["#ffaf02", "#643700"]}
            />
          </Bar>
        );
      }}
    </CartesianChart>
  );
};
