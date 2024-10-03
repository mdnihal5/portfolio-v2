import toast from "react-hot-toast";

const HandleCopy = () => {
    navigator.clipboard.writeText("npx nihal");
    toast.success("Copied! Make sure to run in your terminal <3");
};

export default HandleCopy;

