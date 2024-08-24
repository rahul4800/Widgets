// import { useState } from "react";
// import { initialData } from "../widgetData";
import "../styles/widget.css";
import Slider from "./Slider";
import { useSlider } from "../Context";
import { MdCancel } from "react-icons/md";


const Widget = () => {
    const { isOpen, data, toggleSlide, setIsOpen,
         newWidgetName, setNewWidgetName, newWidgetText, 
         setNewWidgetText, handleDeleteWidget } = useSlider();
    

    return (
        <div className="container">

            <div className="widgets-content">
                <div className="cspm-widget">
                    {
                        data.Dash1.map((category) => (
                            <div className="widget-items" key={category.id}>
                                <div >
                                    <h2>{category.name}</h2>
                                    <div className="dash1-widget">
                                        {category.widgets.map((widget) => (
                                            <div key={widget.id} className="dash1-item">
                                                <div className="delete-widget">
                                                    <button className="delete-btn"
                                                    onClick={() => handleDeleteWidget(widget.id)}
                                                    ><MdCancel className="delete-icon"/>
                                                    </button>
                                                </div>

                                                <h3>{widget.name}</h3>
                                                <p>{widget.text}</p>

                                            </div>
                                        ))}
                                        <div className="new-item">
                                            <div className="add-item">
                                                <button onClick={() => toggleSlide("Dash1")}>Add Widget + </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        ))
                    }

                </div>

                <div className="cwpp-widget">
                    {
                        data.Dash2.map((category) => (
                            <div className="widget-items" key={category.id}>
                                <div >
                                    <h2>{category.name}</h2>
                                    <div className="dash1-widget">
                                        {category.widgets.map((widget) => (
                                            <div key={widget.id} className="dash1-item">
                                                <div className="delete-widget">
                                                    <button className="delete-btn"
                                                    onClick={() => handleDeleteWidget(widget.id)}
                                                    ><MdCancel className="delete-icon"/>
                                                    </button>
                                                </div>
                                                <h3>{widget.name}</h3>
                                                <p>{widget.text}</p>
                                            </div>
                                        ))}
                                        <div className="new-item">
                                            <div className="add-item">
                                                <button onClick={() => toggleSlide("Dash2")}>Add Widget + </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>

                <div className="registry-widget">
                    {
                        data.Dash3.map((category) => (
                            <div className="widget-items" key={category.id}>
                                <div >
                                    <h2>{category.name}</h2>
                                    <div className="dash1-widget">
                                        {category.widgets.map((widget) => (
                                            <div key={widget.id} className="dash1-item">
                                                <div className="delete-widget">
                                                    <button className="delete-btn"
                                                    onClick={() => handleDeleteWidget(widget.id)}
                                                    ><MdCancel className="delete-icon"/>
                                                    </button>
                                                </div>
                                                <h3>{widget.name}</h3>
                                                <p>{widget.text}</p>
                                            </div>
                                        ))}
                                        <div className="new-item">
                                            <div className="add-item">
                                                <button onClick={() => toggleSlide("Dash3")}>Add Widget + </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>

            </div>

            <div className={`slider ${isOpen ? "open" : ""}`}>
                <Slider        
                />
                
            </div>

        </div>
    )


}
export default Widget;