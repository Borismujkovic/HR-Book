import React from "react";
import "./CandidateCard.scss";
import { Link } from "react-router-dom";

const CandidateCard = (props) => {
  return (
    <div id="candidateCard" onClick={() => {
       props.selectCandidate(props.candidate)
    }}>
      <Link to="./details" className="candidate-details" >
        <div className="wrap">
          <img src={props.candidate.images} alt=""></img>
          <h2>{props.candidate.name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default CandidateCard;
