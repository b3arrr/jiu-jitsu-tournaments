import axios from "axios";
import { useEffect, useState } from "react";

export default function Fetch() {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        // Fetch the data from the backend
        axios
            .get("http://localhost:5000/api/tournaments")
            .then((response) => {
                setTournaments(response.data);
            })
            .catch((error) => {
                console.error("Error fetching tournaments:", error);
            });
        console.log("The useEffect has run");
    }, []);

    return (
        <div className="tournamentWrapper">
            <h1>Upcoming Jiu-Jitsu Tournaments</h1>
            <ul>
                {tournaments.map((tournament, index) => (
                    <li
                        key={index}
                        onClick={() => (window.location.href = tournament.url)}
                        className="tournamentBox"
                    >
                        <p id="tournament-title">{tournament.title}</p>
                        <p id="tournament-organization">Organization: {tournament.organization}</p>
                        <p id="tournament-location">Location: {tournament.location}</p>
                        <p id="tournament-date">Date: {tournament.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
