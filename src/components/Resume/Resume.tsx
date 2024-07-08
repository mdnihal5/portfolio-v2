import { Link } from "react-router-dom";

const Resume = () => {
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1qJaI1y_F-1_-xzsqhs0lJDuiNlDmPepY";
    const viewUrl = "https://drive.google.com/file/d/1qJaI1y_F-1_-xzsqhs0lJDuiNlDmPepY/view";
    return (
        <div className="flex gap-3">
            <Link to={viewUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                View Resume
            </Link>
            <Link to={downloadUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Download Resume
            </Link>
        </div>
    );
};

export default Resume;
