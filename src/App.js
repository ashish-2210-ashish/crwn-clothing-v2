import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home";
import Navigate from "./routes/navigate/navigate";

const Shop = () => {
  return(
    <p>this is home page</p>
  )

}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate/>}>
      <Route index  element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      </Route>
    </Routes>
  )
};

export default App;
 