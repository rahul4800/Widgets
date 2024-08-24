import { createContext, useContext, useEffect, useState } from "react";
import { initialData } from "./widgetData";

const SliderContext = createContext();

const SliderProvider = ({ children }) => {
    const localStorageKey = "widgetData";

    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem(localStorageKey);
        return  JSON.parse(storedData) || initialData
    });
    const [newWidgetName, setNewWidgetName] = useState("");
    const [newWidgetText, setNewWidgetText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Dash1");
    const [isOpen, setIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [selectedWidgets, setSelectedWidgets] = useState([]);
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);
    
    const [dashboardWidgets, setDashboardWidgets] = useState([]);


    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(data))
    }, [data]);

    const toggleSlide = (category) => {
        setSelectedCategory(category)
        setIsOpen(!isOpen);

    }

    const toggleDisplayWidget = () => {
        console.log("display problem");
        setIsWidgetOpen(!isWidgetOpen);
    }

    

    const handleAddWidget = () => {
        if (!selectedCategory || !data[selectedCategory]) return;

        const newWidget = {
            id: Date.now(),
            name: newWidgetName,
            text: newWidgetText,
        };

        setData((prevData) => {
            return {
                ...prevData,
                [selectedCategory]: prevData[selectedCategory].map((category) => {
                    return {
                        ...category,
                        widgets: [...category.widgets, newWidget],
                    };
                })
            }
        })
        setIsOpen(false);
        setNewWidgetName("");
        setNewWidgetText("");

    };

    const handleDeleteWidget = (widgetId) => {
        setData((prevData) => ({
            ...prevData,
            [selectedCategory]: prevData[selectedCategory].map((category) => {
                const updatedWidgets = category.widgets.filter((widget) => widget.id !== widgetId);

                return{
                    ...category,
                    widgets: updatedWidgets,
                }
            }),
        }));
    };

    const handleSearch = (e) =>{
        setSearchInput(e.target.value);
    }

    const filteredData = searchInput ? {
        ...data,
        ...Object.keys(data).reduce((acc, categoryKey) => {
            acc[categoryKey] = data[categoryKey].map((category) => ({
                ...category,
                widgets: category.widgets.filter((widget) =>
                    widget.name.toLowerCase().includes(searchInput.toLowerCase())
                ),
            }));
            return acc;
        }, {})
    } : data;

    const handleWidgetSelection = (widgetId) =>{
        setSelectedWidgets((prevSelectedWidgets) => {
            if(prevSelectedWidgets.includes(widgetId)){
                return prevSelectedWidgets.filter((id) => id !== widgetId);
            } else {
                return [...prevSelectedWidgets, widgetId]
            }
        });
    };


    const handleSubmitWidgets = () => {
        const selectedWidgetsData = selectedWidgets.map((widgetId) =>
            data[selectedCategory].reduce((acc, category) => {
                const foundWidget = category.widgets.find(
                    (widget) => widget.id === widgetId
                );
                if (foundWidget) {
                    acc.push(foundWidget);
                }
                return acc;
            }, [])
        );
        setDashboardWidgets((prevWidgets) => [...prevWidgets, ...selectedWidgetsData]);
        setIsWidgetOpen(false);
        setSelectedWidgets([]);
    };

    return (
        <SliderContext.Provider
            value={{
                data : filteredData,
                newWidgetName,
                setNewWidgetName,
                newWidgetText,
                setNewWidgetText,
                isOpen,
                toggleSlide,
                handleAddWidget,
                selectedCategory,
                setSelectedCategory,
                handleDeleteWidget,
                handleSearch,
                searchInput,
                handleWidgetSelection,
                selectedWidgets,
                toggleDisplayWidget,
                isWidgetOpen,
                toggleDisplayWidget: () => setIsWidgetOpen(!isWidgetOpen),
                handleSubmitWidgets,
                dashboardWidgets,
            }}
        >
            {children}
        </SliderContext.Provider>
    );
}

const useSlider = () => {
    return useContext(SliderContext);
}

export { useSlider, SliderProvider };
