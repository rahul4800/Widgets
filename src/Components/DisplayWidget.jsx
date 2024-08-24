import "../styles/displayWidget.css"
import { MdCancel } from "react-icons/md";
import { useSlider } from "../Context";

const DisplayWidget = () => {
    const { isOpen,
        data,
        toggleDisplayWidget,
        isWidgetOpen,
        handleWidgetSelection,
        selectedCategory,
        selectedWidgets = [],
        setSelectedCategory,
        handleSubmitWidgets,
    } = useSlider();

    const selectedCategoryData = data[selectedCategory] || [];
    return (


        <div className={`displayWidgets ${isWidgetOpen ? "open" : ""}`}>
            <div className="add-widget-heading">
                <h2>Add Widget</h2>
                <button
                    onClick={toggleDisplayWidget}
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
            
            <div className="widget-checkboxes">
                {selectedCategoryData.map((category) => (
                    category.widgets.map((widget) => (
                        <div key={widget.id} className="checkbox-wrapper">
                            <input
                                type="checkbox"
                                id={`widget-${widget.id}`}
                                checked={selectedWidgets.includes(widget.id)}
                                onChange={() => handleWidgetSelection(widget.id)}
                            />
                            <label htmlFor={`widget-${widget.id}`}>{widget.name}</label>
                        </div>
                    ))
                ))}
            </div>
            <div className="btn-display">
                
                <button onClick={toggleDisplayWidget} className="btn-1">Cancel</button>
                <button type="submit" onClick={handleSubmitWidgets} className="btn-2" >Submit</button>
            </div>
        </div>



    );
}

export default DisplayWidget;