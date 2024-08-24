import { useSlider } from "../Context";

const SelectedWidgets = () => {
    const { dashboardWidgets } = useSlider();

    return (
        <div className="dashboard-widgets">
            {dashboardWidgets.length > 0 ? (
                dashboardWidgets.map((widget) => (
                    <div key={widget.id} className="dashboard-widget">
                        <h3>{widget.name}</h3>
                        <p>{widget.text}</p>
                    </div>
                ))
            ) : (
                <p>No widgets added to the dashboard yet.</p>
            )}
        </div>
    );
};

export default SelectedWidgets;
