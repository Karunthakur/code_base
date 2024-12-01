import React from "react";
import PropTypes from 'prop-types';
import { Card, Button, Empty } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

const Pie_Chart = React.lazy(() => import("../Bar/Pie"));
const Progress_Bar = React.lazy(() => import("../Bar/Progres"));

const Dashboard = ({ open, setOpen, setState, state,openAddWidget }) => {
    const delet_Widget = (data, id) => {
        const updateData = data.reduce((acc, el) => {
            if (el.id !== id) {
                const updateEl = { ...el };
                if (Array.isArray(updateEl.children)) {
                    updateEl.children = delet_Widget(updateEl.children, id)
                }
                acc.push(updateEl);
            }
            return acc;
        }, [])
        return updateData;
    }

    const handleDelete = (id) => {
        setState((prev) => delet_Widget(prev, id));
        setOpen(false);
    }

    return (
        <>
            {state.map((data) => (
                <>
                    <h2 style={{
                        fontWeight: 800,
                        fontSize: 16,
                    }}>{data.category}</h2>
                    <div key={data.id} style={{ display: "flex", margin: "-20px", padding: "20px" }}>
                        <>
                            {data.category === "CSPM Executive Dashboard" &&
                                <>
                                    {
                                        data.children.map((data) => (
                                            <div key={data.id}>
                                                <Card hoverable style={{ display: "flex", width: 400, height: 200, border: "15px solid #DEDEDE" }}>
                                                    <span style={{ display: "flex", justifyContent: "space-between", width: "70%", margin: "-18px", fontSize: '12px' }}>
                                                        <h3 style={{ margin: "-4px", fontSize: '12px' }}>{data.widget_name}</h3>
                                                        <span onClick={() => handleDelete(data.id)}><CloseOutlined /></span>
                                                    </span>
                                                    {data.children.length > 0 ?
                                                        <>
                                                            <div style={{ margin: "26px 0px 0px -16px" }}>
                                                                <Pie_Chart data={data} />
                                                            </div>
                                                        </>
                                                        :
                                                        <>
                                                            <div style={{ margin: "18px 92px" }}>
                                                                <Empty image="https://tse2.mm.bing.net/th?id=OIP.-KmpxNMaRHNOY5KNBw8YkAHaHa&pid=Api&P=0&h=180" />
                                                            </div>
                                                        </>
                                                    }
                                                </Card>
                                            </div>
                                        ))
                                    }</>
                            }
                        </>
                        <>
                            {data.category === "CWPP Dashboard:" &&
                                <>{data.children.map((data) => (
                                    <>
                                        <div key={data.id}>
                                            <Card hoverable style={{ display: "flex", width: 400, height: 200, border: "15px solid #DEDEDE" }}>
                                                <span style={{ display: "flex", justifyContent: "space-between", margin: "-18px", fontSize: '12px' }}>
                                                    <h3 style={{ margin: "-4px", fontSize: '12px' }}>{data.widget_name}</h3>
                                                    <span onClick={() => handleDelete(data.id)}><CloseOutlined /></span>
                                                </span>
                                                {data.children.length > 0 ?
                                                    <>
                                                        <div style={{ margin: "-26px", marginTop: "20px" }}>
                                                            <Progress_Bar data={data} />
                                                        </div>
                                                    </>
                                                    :
                                                    <div style={{ margin: "18px 92px" }}>
                                                        <Empty image="https://tse2.mm.bing.net/th?id=OIP.-KmpxNMaRHNOY5KNBw8YkAHaHa&pid=Api&P=0&h=180" />
                                                    </div>
                                                }

                                            </Card>
                                        </div>
                                    </>
                                ))}
                                </>
                            }
                        </>
                        <>
                            {data.category === "Registry Scan" &&
                                <>
                                    {
                                        data.children.map((data) => (
                                            <div key={data.id}>
                                                <Card hoverable style={{ display: "flex", width: 400, height: 200, border: "15px solid #DEDEDE" }}>
                                                    <span style={{ display: "flex", justifyContent: "space-between", margin: "-18px", fontSize: '12px' }}>
                                                        <h3 style={{ margin: "-10px", fontSize: '12px' }}>{data.widget_name}</h3>
                                                        <span onClick={() => handleDelete(data.id)}><CloseOutlined /></span>
                                                    </span>
                                                    {data.children.length > 0 ?
                                                        <>
                                                            <div style={{ margin: "-26px", marginTop: "20px" }}>
                                                                <Progress_Bar data={data} />
                                                            </div>
                                                        </> :
                                                        <>
                                                            <div style={{ margin: "18px 92px" }}>
                                                                <Empty image="https://tse2.mm.bing.net/th?id=OIP.-KmpxNMaRHNOY5KNBw8YkAHaHa&pid=Api&P=0&h=180" />
                                                            </div>
                                                        </>
                                                    }

                                                </Card>
                                            </div>
                                        ))
                                    }</>
                            }
                        </>
                        <>
                            <Card hoverable style={{ display: "flex", width: 400, height: 200, border: "15px solid #DEDEDE" }}>
                                <Button onClick={() => openAddWidget(data.id)} style={{ margin: "48px 92px" }} icon={<PlusOutlined />} iconPosition={"start"}>
                                    AddWidget
                                </Button>
                            </Card>
                        </>
                    </div>
                </>
            ))}
        </>
    )
}

Dashboard.propTypes = {
    state: PropTypes.array,
    setState: PropTypes.func,
    open: PropTypes.bool,
    setOpen: PropTypes.func,
}

export default Dashboard;
