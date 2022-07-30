import React, {useState} from 'react'
import './comply.css'

const Comply= ()=> {

    return (
        <form className="DetailsForm">
            <div className="FormTitle">Add Compliance Details</div>
            <div className="Details">

                <label for="manufactureName" className="form-label">Enter Manufacture Name:</label>
                <input type="text" className="form_input" id="mname" />
            
                <label for="manufactureAddress" className="form-label">Enter Manufacture Address:</label>
                <input type="text" className="form_input" id="maddress" name="maddress"/>

                <label for="sid" className="form-label">Enter SKUID:</label>
                <input type="text" className="form_input" id="sid" name="sid"/>

                <label className="form-label" for="customFile">Upload Product Image: </label>
                <input type="file" className="img" id="customFile" />
                
             </div>

            <div className="Button">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>

        </form>
    )

}
export default Comply;