import "./PotluckList.css";

export default function PotluckList() {
    return (
        <div className="container">
            <div className="potluck-container">
                <div className="potluck-header">
                    {/* to-do: render potluck data here */}
                    <p>Guest name</p>
                    <p>Bringing</p>
                </div>
                <div className="potluck-data">
                    <p>Keenly Chung (+1)</p>
                    <p>Boba</p>
                </div>
            </div>
        </div>
    )
}
