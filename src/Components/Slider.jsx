import { MdCancel } from "react-icons/md";
import { useSlider } from "../Context";
import "../styles/slider.css";

const Slider = () => {
    const { isOpen, newWidgetName, newWidgetText,
        setNewWidgetName, setNewWidgetText, data,
        handleAddWidget, toggleInput, toggleSlide,
        setSelectedCategory, selectedCategory,
        handleWidgetSelection,
        selectedWidgets,
    } = useSlider();

    if (!isOpen) return null;

    const selectedCategoryData = data[selectedCategory] || [];

    return (
        <div>

            <div className="slider-content">
                <div className="add-widget-heading">
                    <h2>Add Widget</h2>
                    <button
                        onClick={toggleSlide}
                    ><MdCancel className="delete-icon" /></button>
                </div>

                <div className="select-category">

                    <button value="Dash1"
                        onClick={() => setSelectedCategory("Dash1")}
                        className={selectedCategory === "Dash1" ? "selected" : ""}
                    >CSPM </button>
                    <button value="Dash2"
                        onClick={() => setSelectedCategory("Dash2")}
                        className={selectedCategory === "Dash2" ? "selected" : ""}
                    >CWPP</button>
                    <button value="Dash3"
                        onClick={() => setSelectedCategory("Dash3")}
                        className={selectedCategory === "Dash3" ? "selected" : ""}
                    >Image</button>
                    <button>Ticket</button>
                </div>

               
                <input type="text" placeholder="Widget Name"
                    value={newWidgetName}
                    onChange={(e) => setNewWidgetName(e.target.value)}
                />
                <input type="text" placeholder="Widget text"
                    value={newWidgetText}
                    onChange={(e) => setNewWidgetText(e.target.value)}
                />
            </div>
            <div className="btn-add">
                
                <button onClick={toggleSlide} className="btn-1">Close</button>
                <button type="submit" onClick={handleAddWidget} className="btn-2">Submit</button>
            </div>


        </div>
    );
}

export default Slider;