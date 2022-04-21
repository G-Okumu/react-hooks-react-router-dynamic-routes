import React from "react";
import { useParams } from "react-router-dom";


function Movieshow({movies}) {
    return (
        <div>
            <h3>{movies[useParams().movieId].title}</h3>
        </div>
    );
}

export default Movieshow;