import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero/Hero";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll flex flex-col items-center bg-gray-800">
        <AnimatedCursor innerSize={13} outerSize={35} innerScale={1} outerScale={1.2} />
        <Navbar />
        <Hero />
        <Toaster position="top-center" />
      </div>
    </>
  );
};

export default App;
