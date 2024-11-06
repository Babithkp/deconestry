import { useState } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";

function App() {
  const [isLoading, setisLoading] = useState(true);

  setTimeout(() => {
    setisLoading(false);
  }, 3000);
  return (
    <main className="overflow-hidden max-w-[1515px] flex items-center flex-col">
      <Navbar/>
      {isLoading ? (
        <Intro />
      ) : (
        <>
          <Hero />
          <About />
          <Services />
          <ContactUs />
        </>
      )}
    </main>
  );
}

export default App;
