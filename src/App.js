import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { PageProvider } from "./PageProvider";
import Header from "./components/Header";

export default function App() {

  return (
    <PageProvider>
      <Header />
      <Home />
      <About />
      <Contact />
    </PageProvider>
  );
}

