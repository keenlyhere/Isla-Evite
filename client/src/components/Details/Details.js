import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "./Details.css";

export default function Details() {
    const [ response, setResponse ] = useState("rsvp-yes");
    const [ guestName, setGuestName ] = useState("");
    const [ guestCount, setGuestCount ] = useState(0);
    const defaultDate = new Date(2024, 3, 13);
    const [ preferredDates, setPreferredDates ] = useState([defaultDate]);
    const [ potluckDish, setPotluckDish ] = useState("");

    const handleResponseChange = (e) => {
        setResponse(e.target.value);

        console.log(response);
    }

    const handleGuestNameChange = (e) => {
        setGuestName(e.target.value);
    }

    const handleGuestCountChange = (e) => {
        const newCount = Math.max(Number(guestCount) + Number(e.target.value), 0);
        setGuestCount(newCount);
    }

    const handlePreferredDatesChange = (date) => {
        setPreferredDates((prevDates) => [ ...prevDates, date ]);
    }

    const handlePotluckDishChange = (e) => {
        setPotluckDish(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="rsvp-container">
                <div className="rsvp">
                    <h1>RSVP Now</h1>
                    <h3>Hang ten with us! RSVP with your name, guest count, and the tropical dish you'll be bringing to our potluck beach bash.</h3>

                    <form className="form-container" onSubmit={handleSubmit}>
                        <label htmlFor="guest-rsvp" style={{ textAlign: "center" }}>Can you make it?</label>
                        {/* to-do: fix styling -- tab sizing */}
                        <div className="radio-options">
                            <input
                                type="radio"
                                id="rsvp-yes"
                                name="tab"
                                checked={response === "rsvp-yes"}
                                value="rsvp-yes"
                                onChange={(e) => handleResponseChange(e)}
                            />
                            <label class="radio-option" htmlFor="rsvp-yes">Yes</label>

                            <input
                                type="radio"
                                id="rsvp-no"
                                name="tab"
                                checked={response === "rsvp-no"}
                                value="rsvp-no"
                                onChange={(e) => handleResponseChange(e)}
                            />
                            <label class="radio-option" htmlFor="rsvp-no">No</label>

                            <input
                                type="radio"
                                id="rsvp-maybe"
                                name="tab"
                                checked={response === "rsvp-maybe"}
                                value="rsvp-maybe"
                                onChange={(e) => handleResponseChange(e)}
                            />
                            <label class="radio-option" htmlFor="rsvp-maybe">Maybe</label>

                            <span class="slider"></span>
                        </div>

                        <label htmlFor="guest-name">What is your name?</label>
                        <input
                            placeholder="Enter your name"
                            value={guestName}
                            onChange={(e) => handleGuestNameChange(e)}
                        />

                        {
                            response === "rsvp-yes" && (
                                <>
                                    <div className="guest-attending">
                                        <div className="guest-label">
                                            <label htmlFor="guest-count">Total guests attending</label>
                                            <span className="including">(including you)</span>
                                        </div>
                                        <div className="guest-count-options">
                                            <button
                                                type="button"
                                                className="count-button"
                                                value={-1}
                                                onClick={(e) => handleGuestCountChange(e)}
                                            >
                                                -
                                            </button>
                                            <span className="guest-count">{ guestCount }</span>
                                            <button
                                                type="button"
                                                className="count-button"
                                                value={1}
                                                onClick={(e) => handleGuestCountChange(e)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <label htmlFor="guest-date">What date works best for you?</label>
                                    {/* to-do: add styling to datepicker */}
                                    <DatePicker
                                        multiple
                                        value={preferredDates}
                                        onChange={setPreferredDates}
                                        style={{
                                            width: "inherit"
                                        }}
                                    />

                                    <label htmlFor="guest-dish">What will you be bringing for the potluck?</label>
                                    <input
                                        placeholder="Enter what you will be bringing..."
                                        value={potluckDish}
                                        onChange={(e) => handlePotluckDishChange(e)}
                                    />
                                </>
                            )
                        }


                        <button className="form-button">RSVP Surf's Up!</button>
                    </form>

                    <h3 style={{ textAlign: 'center' }}>
                        See what other guests will be bringing ↓
                    </h3>
                </div>
            </div>
        </div>
    )
}
