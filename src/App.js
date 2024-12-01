import React, { useState } from 'react';
import { Breadcrumb, Layout, Input, theme } from 'antd';
import { CNAPP_DASHBOARD_TREE } from './data';
import Dashboard from './Components/Dashbord/Dashbord';
import Navbar from './Components/Navbar';
import Modal from './Components/Dashbord/Modal';
import { AgGauge, AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import Card from 'antd/es/card/Card';
import { Label } from 'recharts';


const { Content, Footer } = Layout;



const App = () => {
  const [state, setState] = useState(CNAPP_DASHBOARD_TREE);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0)

  const openAddWidget = (id) => {
    setId(id)
    setOpen(!open)
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Navbar data={state} setState={setState} style={{ background: colorBgContainer }} />
      <Content style={{ padding: '48px' }}>
        <div className="dashboardWrapper">
          <Dashboard open={open} state={state} setState={setState} setOpen={setOpen} openAddWidget={openAddWidget} />
        </div>

        <div className="popUpdWrapper">
          {open && <Modal setOpen={setOpen} state={state} setState={setState} id={id} setId={setId} />}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED Ant
      </Footer>
    </Layout>
  );
};

export default App;