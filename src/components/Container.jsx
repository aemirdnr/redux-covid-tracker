import Content from "./Content";

import Footer from "./Footer";
import Header from "./Header";

function Container() {
  return (
    <div className="container text-center py-3 h-100">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Container;
