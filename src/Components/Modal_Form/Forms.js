import React, { useState, contextHolder } from "react";
import PropTypes from "prop-types";
import { Form, Input, Modal } from "antd";
import ArrayFormField from "./ArrayFormField"

const Forms = ({ state, id, setWidgetText, setWidgetName, setNewState, setId, child_id, widgetName, widgetText }) => {
    const [colorPicker, setColorPicker] = useState("");
    const [childWidgetTextValue, setChildWidgetTextValue] = useState("");
    const [widgetValue, setWidgetValue] = useState("");
    const [modal, contextHolder] = Modal.useModal();

    const [form] = Form.useForm();


    const handelChange = (e) => {
        const value = e.target.value;
        if (value !== "") {
            console.log(e.target.value);
        }
    }
    const addChildSucces = () => {
        form.setFieldsValue({ widget_value: '', widget_Text_value: '', });
        let secondsToGo = 5;

        const instance = modal.success({
            title: 'One widget child will be Added!',
            content: `This modal will be destroyed after ${secondsToGo} second.`,
        });

        const timer = setInterval(() => {
            secondsToGo -= 1;
            instance.update({
                content: `This modal will be destroyed after ${secondsToGo} second.`,
            });
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            instance.destroy();
        }, secondsToGo * 1000);
    }

    const newWidgetChild_Add = (id, newData) => {
        const update_W = newData?.map((el) => {
            if (el.id === id) {
                const newWidget_child = {
                    name: childWidgetTextValue,
                    value: parseInt(widgetValue),
                    fill: colorPicker
                }
                el.children = [...el?.children, newWidget_child]
                return el;
            } else {
                newWidgetChild_Add(id, el?.children)
            }
        })
        return update_W[0];
    }

    const addItem = (id, P__id) => {
        setId(P__id);
        setNewState(pre => newWidgetChild_Add(id, [pre]));
        addChildSucces();
    }

    return (
        <>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                name="control-hooks"
                initialValues={{
                    remember: true,
                }}
                style={{ maxWidth: 600, marginTop: "34px" }}
            >
                <Form.Item name="widget_name" rules={[{ required: true, message: 'Please enter widget_name!' }]}>
                    <Input defaultValue={widgetName} onChange={(e) => setWidgetName(e.target.value)} type="text" name="widget_name" placeholder="Widget_Name" required />
                </Form.Item>
                < Form.Item name="widget_text" rules={[{ required: true, message: 'Please enter widget_text!' }]} >
                    <Input defaultValue={widgetText} onChange={(e) => setWidgetText(e.target.value)} type="text" name="widget_text" placeholder="Widget_Text" required />
                </Form.Item>
                <ArrayFormField
                    id={id}
                    child_id={child_id}
                    handelChange={handelChange}
                    addItem={addItem}
                    contextHolder={contextHolder}
                    data={state}
                    widgetValue={widgetValue}
                    childWidgetTextValue={childWidgetTextValue}
                    setColorPicker={setColorPicker}
                    setChildWidgetTextValue={setChildWidgetTextValue}
                    setWidgetValue={setWidgetValue}
                />
            </Form>
        </>
    )
}

export default Forms;

Forms.propTypes = {
    data: PropTypes.array,
    state: PropTypes.array,
    setState: PropTypes.func,
}


