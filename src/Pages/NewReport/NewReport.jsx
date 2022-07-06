import React, {useState} from 'react';
import "./NewReport.scss"
import Header from "../../Components/Header/Header"
import CreateNew from "../../Components/CreateNew/CreateNew"
import ChooseCandidate from '../../Components/ChooseCandidate/ChooseCandidate';
import {Link} from "react-router-dom"


const NewReport = (props) => {
    const [chosenCandidate, setChosenCandidate] = useState({name: "", id: 0})
    
  

    const populateChosenCandidateInfo = (obj) => {
        setChosenCandidate(obj)
    }

    return (
        <div id="newReport">
            <Header />
            <div className='buttons'>
            <Link className='admin-button' to='admin-page'>Admin Page</Link>
            <Link to="/new-report" className='newReport-button'>New Report</Link>
        </div>
            <main>
                
                <div className='chooseCandidate'>
                    <div className='ccHeader'>
                        <p className='number'>1</p>
                        <h2>Choose candidate:</h2>
                    </div>
                    {props.candidates.map(e => <ChooseCandidate function={populateChosenCandidateInfo} candidates={e}/>)}
                    
                </div>
                <div className='createNewReport'>
                    <div className='cnrHeader'>
                        <p className='number'>2</p>
                        <h2>Create new report:</h2>
                    </div>
                    <CreateNew chosenCandidate={chosenCandidate} ></CreateNew>
                </div>
            </main>
            

        </div>
    )
}

export default NewReport