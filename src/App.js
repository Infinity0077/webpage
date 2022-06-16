import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import Blog from "./pages/Blog"
import SinglePost from "./pages/SinglePost"
import Error from "./pages/Error"

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Homepage/>} exact='true' />
          <Route path='/blog' element={<Blog/>} exact='true' />
            
          <Route path="/blog/:slug" element={<SinglePost/>} exact='true' />
          <Route path="*" element={<Error/>} exact='true' />
        </Routes>
        
      </BrowserRouter>

  );
}

export default App;
