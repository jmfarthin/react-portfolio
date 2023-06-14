import About from "./pages/About";
import Contact from "./pages/Contact";
import { PageProvider } from "./PageProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

export default function App() {

  return (
    <PageProvider>
      <body className="d-flex flex-column">
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </body>
    </PageProvider>
  );
}

