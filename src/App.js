import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Layout from "./components/claseDosComponentes/Layout";

function App() {
  return (
    <>
      <Main>
        {/* <Sidebar />
        <Content /> */}
        <Layout/>
      </Main>
    </>
  );
}

export default App;
