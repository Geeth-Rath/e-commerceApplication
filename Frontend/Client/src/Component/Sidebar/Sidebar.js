import React, { Fragment } from "react";
import {
  HourglassOutlined,
  PullRequestOutlined,
  MobileOutlined,
  PoweroffOutlined,
  RocketOutlined,
  HddOutlined,
  CarOutlined,
  HomeOutlined,
  BoxPlotOutlined,
  SkinOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Menu, theme, Layout, Breadcrumb } from "antd";
import "../../Styles/Sidebar.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const { Content, Sider } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const submenuNames = [
  "Orange Electric",
  "Electronics",
  "Mobiles & Tablets",
  "Sport Fitness & Outdoor",
  "Fashion",
  "Home & Living",
  "Automotive",
  "Beauty & Personal Care",
  "Toys Kids & Babies",
  "Stationary",
];

const items2 = [
  PoweroffOutlined,
  PullRequestOutlined,
  MobileOutlined,
  BoxPlotOutlined,
  SkinOutlined,
  HomeOutlined,
  CarOutlined,
  RocketOutlined,
  HourglassOutlined,
  HddOutlined,
].map((icon, index) => {
  const key = `sub${index + 1}`;

  return {
    key,
    icon: React.createElement(icon),
    label: ` ${submenuNames[index]}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const Sidebar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Fragment>
      <Layout>
        <Layout className="sidebar-main-layout">
          <Sider width={200}>
            <Menu mode="inline" items={items2} />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default Sidebar;
