
import '../style/Tournament.css';

const handleClick = () => window.location.href = "#";
export default function TournamentBox({tournamentDate, organization, location, name}) {
    return (
        <div className="tournamentBox" onClick={handleClick}>
            <h2>{tournamentDate}</h2>
            <h2>{}</h2>
            <h2>{location}</h2>
            <h2>{organization}</h2>

        </div>
    );
}
