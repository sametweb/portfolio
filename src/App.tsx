import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import useWP from "use-wp";
import "./App.scss";

import Header from "./components/Header";
import Home from "./components/Home";
const Blog = React.lazy(() => import("./components/Blog"));
const Post = React.lazy(() => import("./components/Post"));

const { Footer, Content } = Layout;

function App() {
  const WordPressProvider = useWP("https://samet.web.tr");

  return (
    <Router>
      <WordPressProvider>
        <Layout>
          <Header />
          <Layout>
            <Content>
              <Route path="/" exact component={Home} />
              <Route path={["/blog", "/blog/page/:page_number"]} exact component={Blog} />
              <Route path={"/blog/:slug"} exact component={Post} />
            </Content>
          </Layout>
          <Footer>life is short, birds are flying</Footer>
        </Layout>
      </WordPressProvider>
    </Router>
  );
}

export default App;
