// import React from "react";
// import {
//   DownOutlined,
//   SearchOutlined,
//   RightOutlined,
//   UserOutlined,
//   BellOutlined,
//   AppstoreOutlined,
// } from "@ant-design/icons";
// import "../../Styles/Product.css";
// import { Button, Menu } from "antd";
// import { Layout, Input, Checkbox } from "antd";

// // const { Search } = Input;
// const { Header, Footer, Sider, Content } = Layout;

// const contentStyle = {
//   textAlign: "center",
//   minHeight: 120,
//   lineHeight: "120px",
//   color: "#fff",
//   backgroundColor: "#0958d9",
// };
// const siderStyle = {
//   //   textAlign: "center",
//   lineHeight: "120px",
//   color: "black",
//   backgroundColor: "transparent",
// };

// const layoutStyle = {
//   borderRadius: 8,
//   overflow: "hidden",
//   width: "calc(50% - 8px)",
//   maxWidth: "calc(50% - 8px)",
// };
// function getItem1(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items1 = [
//   getItem1("Orange Electric (224)", "sub2", null, [
//     getItem1("Cables (200)", "9"),
//   ]),
// ];
// function getItem2(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items2 = [
//   getItem1("Not Applicable", "sub2", null, [getItem2("Details", "9")]),
//   getItem1("Agent Warranty", "sub3", null, [getItem2("Details", "9")]),
// ];

// const Product = () => {
//   return (
//     <div className="main-container">
//       <Layout>
//         <Layout>
//           <Sider width="25%" className="sider-container" style={siderStyle}>
//             <div className="sider-section">
//               <div className="section-title">Categories</div>
//               <Menu
//                 mode="inline"
//                 theme="none"
//                 items={items1}
//                 className="sider-menu"
//               />
//             </div>
//             <div className="sider-section-1">
//               <div className="section-title">Price Range:</div>
//               <div className="price-range-inputs">
//                 <div className="input-container">
//                   <Input placeholder="Min" />
//                 </div>
//               </div>
//               <div className="input-container">
//                 <div className="input-container">
//                   <Input placeholder="Max" />
//                 </div>
//               </div>
//             </div>
//             <div className="sider-section-2">
//               <div className="section-title">Brand</div>
//               <div className="brand-checkbox">
//                 <Checkbox>Checkbox</Checkbox>
//               </div>
//             </div>
//             <div className="sider-section">
//               <div className="section-title">Classification</div>
//               <div className="classification-section"></div>
//             </div>
//             <div className="sider-section">
//               <div className="section-title">Warranty</div>
//               <Menu
//                 mode="inline"
//                 theme="none"
//                 // inlineCollapsed={collapsed}
//                 items={items2}
//                 className="warranty-menu"
//               />
//             </div>
//           </Sider>
//           <Content style={contentStyle} className="main-content">
//             Content
//           </Content>
//         </Layout>
//       </Layout>
//     </div>
//   );
// };

// export default Product;

import React, { useState } from "react";
import "../../Styles/Product.css";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DownOutlined
} from "@ant-design/icons";
import { Checkbox, Input,Dropdown, Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}

const items = [
  getItem("Categories", "1", null),

  getItem("Orange Electric (224)", "sub1", null, [getItem("Cable (123)", "3")]),
  getItem("Price Range", "2", null),
  getItem(
    <Input className="get-item-input-holder" placeholder="Min - Max" />,
    "2",
    null
  ),
  getItem("Brand", "2", null),
  getItem(<Checkbox>Orange Electrics</Checkbox>, "3"),
  getItem("Classification", "4", null),
  getItem("Warranty", "4", null),
  getItem("Not Applicable", "sub2", null, [getItem("Details", "6")]),
  getItem("Agent Warranty", "sub2", null, [getItem("Details", "6")]),
];

const Product = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
         <Header className="product-header-main">
         <div className="product-header header-list" >
          <div>Product List</div>

          <div className="product-dropdown">
            <div className="product-dropdown-text"> Sort By</div>
            <div >
              {" "}
              <Dropdown.Button
                icon={<DownOutlined />}
               
                menu={{
                  items,
                }}
                
              >-select sort
            
              </Dropdown.Button>
            </div>
          </div>
        </div>
    </Header>
      <Layout>
        <Sider>
          <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
        </Sider>

            
              <Content
          style={{
            // padding: 24,
            margin: "0px 1px 10px 10px ",
            width:'20px',
           
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
               
      </Layout>
    </Layout>
  );
};

export default Product;
