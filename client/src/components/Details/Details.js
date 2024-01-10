import "./Details.css";

export default function Details() {
    return (
        <div className="container">
            <div className="rsvp">
                <h1>RSVP Now</h1>
                <h3>Hang ten with us! RSVP with your name, guest count, and the tropical dish you'll be bringing to our potluck beach bash.</h3>

                <form className="form-container">
                    <label htmlFor="guest-rsvp">Can you make it?</label>
                    {/* to-do: yes/no/maybe radio buttons */}

                    <label htmlFor="guest-name">What is your name?</label>
                    <input placeholder="Enter your name" />

                    <label htmlFor="guest-count">Total guests attending (including you)</label>
                    {/* to-do: add +/- adults and children */}

                    <label htmlFor="guest-date">What date works best for you?</label>
                    {/* to-do: add calendar selector */}

                    <label htmlFor="guest-dish">What will you be bringing for the potluck?</label>
                    <input placeholder="Enter what you will be bringing..." />

                    <button className="form-button">RSVP Surf's Up!</button>
                </form>

                <h3 style={{ textAlign: 'center' }}>
                    See what other guests will be bringing ↓
                </h3>
            </div>
        </div>
    )
}
