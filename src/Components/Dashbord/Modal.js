import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Tabs, Form } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import TabData from "../Modal_Form/TabData"
import Forms from '../Modal_Form/Forms';


const PopUp = ({ state, setState, setOpen, id, setId }) => {
    const [next, setNext] = useState(false);
    const [widgetName, setWidgetName] = useState("");
    const [widgetText, setWidgetText] = useState("");
    const [ids, setIds] = useState(null)

    const [newState, setNewState] = useState({
        checked: false,
        widget_name: widgetName,
        widget_text: widgetText,
        children: [],
        id: new Date().getMilliseconds(),
        type: "checkbox",
    });

    const { TabPane } = Tabs;
    const onChange = (key) => {
        console.log(key);
    };
    const checked_F = (id, value, data) => {
        return data?.map((val) => {
            if (val.id === id) {
                return val.checked = value;
            }
            checked_F(id, val, data.children);
            return val;
        })
    }

    const onChecked = (e, id) => {
        setIds(id)
        const value = e.target.value;
        setState(checked_F(id, value, state));
    }

    const addNewWidget = (id, data) => {
        const update_N_W = data?.map((el) => {
            if (el.id === id) {
                el.children = [...el.children, { ...newState, id: new Date().getMilliseconds(), widget_name: widgetName, widget_text: widgetText }];
                return el
            }
            addNewWidget(id, el.children)
            return el;
        })
        return update_N_W;
    }

    const onConform = (id) => {
        setNext(true);
        if (widgetName !== "" || widgetText !== "") {
            setOpen(false);
            setState(addNewWidget(id, state));
        }
    }


    console.log(state)

    return (
        <div style={{ position: 'auto', width: "100%", height: "100%", top: "0px", left: "0px", right: "0px", bottom: "0px", margin: "auto" }}>
            <div style={{ position: "absolute", left: "50%", top: "0px", right: "0px", bottom: "0px", margin: "auto", background: "white" }}>
                <Card style={{ transformOrigin: "right", height: "100%" }} title="Add Widget" extra={<span href='' onClick={() => setOpen(false)}><CloseOutlined /></span>} bordered={false} >
                    <p>Personalise your dashboard by adding the following widget</p>
                    {next ?
                        <>{state?.map((items) => items?.children.map((item) => item.id === ids &&
                                <Forms
                                    id={items.id}
                                    setId={setId}
                                    child_id={newState?.id}
                                    state={state}
                                    setState={setState}
                                    newState={newState}
                                    widgetName={widgetName}
                                    widgetText={widgetText}
                                    setWidgetText={setWidgetText}
                                    setWidgetName={setWidgetName}
                                    setNewState={setNewState}
                                />
                        ))}</>
                        :
                        <Tabs
                            tabBarStyle={{ backgroundColor: "white" }}
                            defaultActiveKey='1'
                            onChange={onChange}
                        >

                            {state?.map((item) => {
                                return (
                                    <TabPane
                                        tab={item.label}
                                        key={item.id}
                                        style={{ width: "100%" }}
                                    >
                                        {item?.children?.map((item) => {
                                            return (
                                                <TabData item={item} onChecked={onChecked} />
                                            )
                                        })}
                                    </TabPane>
                                )
                            })
                            }
                        </Tabs>
                    }
                    <div style={{ display: "flex", justifyContent: "end", position: 'fixed', top: "90%", left: "0px", right: "22px", bottom: "0px" }}>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button onClick={() => onConform(id)}>Conform</Button>
                    </div>

                </Card>
            </div>
        </div>
    )
};

export default PopUp;

PopUp.propTypes = {
    state: PropTypes.array,
    setOpen: PropTypes.func
}



