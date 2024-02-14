import { MainLayout } from "./layout/main-layout";
import { Home } from "./page/home";
import { Routes, Route } from "react-router-dom";
import { BlogPage } from "./page/Blog-page";
import { About } from "./page/about";
import { NotFound } from "./page/notFound/notFound";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<BlogPage/>}/>
        <Route path="product/:id" element={<About />} />
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
