import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import BlogPage from "./components/BlogPage";
import TechPage from "./components/TechPage";
import JavaScriptPage from "./components/JavaScriptPage";
import ReactPage from "./components/ReactPage";
import ReactDocPage from "./components/ReactDocPage";
import UserStore from "./store/user";

function App() {

  return (
    <UserStore>
      <BrowserRouter> 
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"tech"} element={<TechPage />}>
            <Route path={"javascript"} element={<JavaScriptPage />} />
            <Route path={"react"} element={<ReactPage />} />
            <Route path={"react/:docId"} element={<ReactDocPage />} />
          </Route>
          <Route path={"blog"} element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </UserStore>
  );
}

export default App;
