import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  ZoomIn,
} from "react-scroll-motion";
import "./App.css";

const App = () => {
  return (
    <ScrollContainer>
      <ScrollPage class="scroll-container">
        <Animator animation={batch(Fade(), ZoomIn())}>
          <Header />
        </Animator>
      </ScrollPage>
      <ScrollPage class="scroll-container">
        <Animator animation={batch(FadeIn(), ZoomIn(2, 1))}>
          <Skills />
        </Animator>
      </ScrollPage>
      <ScrollPage class="scroll-container">
        <Animator animation={batch(FadeIn(), ZoomIn(2, 1))}>
          <Projects />
        </Animator>
      </ScrollPage>
      <ScrollPage class="scroll-container">
        <Animator animation={batch(FadeIn(), ZoomIn(2, 1))}>
          <Contact />
        </Animator>
      </ScrollPage>
      <Footer />
    </ScrollContainer>
  );
};

export default App;
