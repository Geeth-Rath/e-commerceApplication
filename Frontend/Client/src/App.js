import Sidebar from "./Component/Sidebar/Sidebar";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Product from "./Component/Product/Product";
import Login from "./Component/Login/Login";
import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Header /> */}
        {/* <Sidebar /> */}
        {/* <Product/> */}
        {/* <Footer /> */}
        <Login/>
      </Layout>
    </div>
  );
}

export default App;
