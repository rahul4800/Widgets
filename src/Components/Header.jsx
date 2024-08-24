
import "../styles/header.css";

import { FaGreaterThan } from "react-icons/fa6";
import { useSlider } from "../Context";
import DisplayWidget from "./DisplayWidget";
import { FaArrowsRotate } from "react-icons/fa6";


const Header = () => {
    const { toggleSlide, handleSearch, searchInput, toggleDisplayWidget, isWidgetOpen} = useSlider();
    //const [searchInput, setSearchInput] = useState("");

    const handleInputChange =() =>{
        //setSearchInput(e.target.value);
        handleSearch();
    }
    
    return (
        <>
            <header>
                <div className="head">
                    <div className="left">
                        <h4>Home <FaGreaterThan className="heading-icon"/>
                        <span>Dashboard V2</span></h4>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search..." 
                         value={searchInput}
                         onChange={handleSearch}
                        />
                        <button type="submit" >Search</button>
                    </div>
                </div>

                <div className="dashboard-header">
                    <div className="heading">
                        <h1>CNPP Dashboard</h1>
                    </div>
                    <div className="navigate">
                        <button onClick={toggleDisplayWidget} >Add Widget +</button>
                        <button><FaArrowsRotate />
                        </button>
                        <button>..</button>
                        <select>
                            <option value="">Last 2 days</option>
                            <option value="">current</option>
                        </select>
                    </div>
                    
                </div>

            </header>
             <div className={`displayWidget ${isWidgetOpen ? "open" : ""}`}>
                <DisplayWidget
                    
                />
                
            </div> 
        </>

    );
}

export default Header;