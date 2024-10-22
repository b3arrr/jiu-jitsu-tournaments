
import Header from "./Header";
import { useState } from "react";
import Fetch from "./Fetch";


/* const location = new map();
location.set('England', 'London');  */

export default function Tournaments() {
    const [tournaments, setTournaments] = useState([]);

    const addTournament = () => {
        const newTournament = {
            date: "05.02.2024",
            organization: "adcc",
            location: 'England, London',
        };
        setTournaments([...tournaments, newTournament]);
    };

    return (
        <>
            <Header />
            <Fetch/>
           {/*  <main>
                <h1>Upcoming Jiu-Jitsu Tournaments</h1>
                <button onClick={addTournament}>Add Tournament button</button>
                <section className="tournamentWrapper">
                    {tournaments.map((tournament, index) => (
                        <TournamentBox key={index}
                        tournamentDate={tournament.date}
                        organization={tournament.organization}
                        location={tournament.location}
                        />
                    ))}
                </section>
            </main> */}
        </>
    );
}
