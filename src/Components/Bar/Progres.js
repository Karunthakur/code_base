import React from "react";

import "./Progres.css";
import { Flex } from "antd";


const ProgressBar = ({ data }) => {

    const TotalValue = data.children.reduce((a, c) => a + c.value, 0);
    return (
        <>
            <span style={{ marginLeft: "10px", fontSize: '16px', fontWeight: 700 }}>{TotalValue}</span>
            <span style={{ marginLeft: "8px", fontSize: '12px', fontWeight: 700 }}>{data.widget_text}</span>
            <div style={{ display: "flex", height: "6px", marginLeft: "24px", width: "88%", border: '1px solid none', borderRadius: "10px" }}>
                {data.children.map((item, index) => (
                    <div key={index} style={{ width: "100%", background: item.fill, transition: "100% 2s" }} />
                ))}
            </div>
            <Flex  wrap gap="small">
                {data.children.map((parent, i) => (
                    <div style={{ marginLeft: "15%" }}>
                        <div style={{ 'color': parent.fill, 'width': "80px", }}>
                            <i style={{
                                display: "inline-block",
                                marginTop: "7px",
                                backgroundColor: parent.fill,
                                width: "10px",
                                height: "10px",
                                marginRight: "10px",
                                color: "#596579",
                                fontWeight: 500,
                            }} />
                            <span>{parent.name}</span>
                        </div>
                    </div>
                ))}
            </Flex>
        </>
    )
}
export default ProgressBar;