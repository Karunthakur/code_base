import React from 'react'
import { Button, Form, Input, ColorPicker } from 'antd'

export default function ArrayFormField({ id, child_id,
    widgetValue,
    childWidgetTextValue, setColorPicker, addItem, contextHolder, setChildWidgetTextValue, setWidgetValue }) {
    return (
        <>
            <Form.Item >
                <h2>Add Child</h2>
            </Form.Item>
            <Form.Item name="widget_Text_value" rules={[{ required: true, message: 'Please enter widget_Text_value!' }]}>
                <Input
                    type='text'
                    defaultValue={childWidgetTextValue}
                    placeholder='Widget_Text_value'
                    value={childWidgetTextValue}
                    onChange={(e) => setChildWidgetTextValue(e.target.value)}
                />
            </Form.Item>
            <Form.Item name='widget_value' rules={[{ required: true, message: 'Please enter widget_Value!' }]}>
                <Input
                    value={widgetValue}
                    defaultValue={widgetValue}
                    type='number'
                    placeholder='widget_Value'
                    onChange={(e) => setWidgetValue(e.target.value)}
                />
            </Form.Item>
            <Form.Item name="color_Picker">
                <ColorPicker
                    defaultValue="#735622"
                    allowClear
                    showText
                    mode={['single', 'gradient']}
                    onChangeComplete={(val) => setColorPicker(val.toCssString())}
                />
            </Form.Item>
            <Form.Item>
                <Button onClick={() => addItem(child_id, id)} style={{ width: '100%' }} >
                    Add
                </Button>
                {contextHolder}
            </Form.Item>
        </>

    )
}