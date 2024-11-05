import { useState } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";

function App() {
  const [isLoading, setisLoading] = useState(true);

  setTimeout(() => {
    setisLoading(false);
  }, 3000);
  return (
    <main className="px-20 max-md:px-5 max-sm:px-2" >
      {isLoading ? (
        <Intro />
      ) : (
        <>
          <Hero />
          <About/>
          <Services/>
          <ContactUs/>
        </>
      )}
    </main>
  );
}

export default App;
