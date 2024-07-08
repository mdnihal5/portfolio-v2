import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero/Hero";
import { HeroHighlight } from "./components/ui/HeroHighlight";
import { motion } from "framer-motion";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll flex flex-col items-center bg-gray-800">
        <AnimatedCursor innerSize={13} outerSize={35} innerScale={1} outerScale={1.2} className="bg-orange-300" />
        <Navbar />
        <Hero />
        <Toaster position="top-center" />
      </div>
    </>
  );
};

export default App;
