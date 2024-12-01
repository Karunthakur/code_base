import React from "react";
import PropTypes from "prop-types";

const TabData = ({ item, onChecked }) => {
    return (
        <>
            <div key={item.id} style={{ displayL: "flex", padding: "8px", marginBottom: "12px", border: "1px solid black" }}>
                <input  style={{ width: "18px", height: "18px" }} type={item.type} onClick={(e)=>onChecked(e, item.id)}  />
                <label style={{ margin: "8px", fontWeight: 600, }}>{item.widget_name}</label>
            </div>
           
        </>
    )
}

export default TabData;

TabData.propTypes = {
    item: PropTypes.array,
    onChecked: PropTypes.bool
}