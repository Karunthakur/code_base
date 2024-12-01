import React from "react";
import { PieChart, Pie, Label, Legend, Cell, ResponsiveContainer } from "recharts";

const Pie_Chart = ({ data }) => {
    const renderColorFullLegendText = (value) => (
        <span style={{ color: "black", fontWeight: 500 }}>
            {value}
        </span>
    )
    const TotalValue = data.children.reduce((a, c) => a + c.value, 0);

    return (
        <ResponsiveContainer width={500} height={150}>
            <PieChart
                stackOffset="expand"
            >
                <Legend
                    height={150}
                    layout="vertical"
                    verticalAlign="middle"
                    iconSize={10}
                    padding={0}
                    iconType="square"
                    formatter={renderColorFullLegendText}
                />
                <Pie
                    data={data.children}
                    cx={55}
                    cy={55}
                    stroke="none"
                    innerRadius={40}
                    outerRadius={60}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    stackId="a"
                >
                    {
                        data.children.map((ent, i) => <Cell fill={ent.fill} />)
                    }
                    <Label
                        position="center"
                        width={30}
                        style={{
                            fontSize: "14px",
                            fontFamily: "Arial",
                            color: "black",
                        }}
                    >
                        {TotalValue + "%"}
                    </Label>
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
export default Pie_Chart