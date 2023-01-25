import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import {
    submit, edited
} from "../../redux/actions/formActions";
import './Form.css'


const Form = () => {
    const location = useLocation();
    let { patientRecord } = location.state ? location.state : {};
    const nav = useNavigate();
    const dispatch = useDispatch();
    const patientsData = useSelector((state) => state.formReducer.enteredPatientsData);


    const [userInput, setUserInput] = useState({
        enterName: patientRecord && patientRecord.name ? patientRecord.name : '',
        enterAge: patientRecord && patientRecord.age ? patientRecord.age : '',
        enterDisease: patientRecord && patientRecord.disease ? patientRecord.disease : '',
        enterCountry: patientRecord && patientRecord.country ? patientRecord.country : '',
        enterPhone: patientRecord && patientRecord.phone ? patientRecord.phone : '',
        enterEmail: patientRecord && patientRecord.email ? patientRecord.email : '',
        addPatient: patientRecord ? true : false,
        editPatient: patientRecord ? false : true,
    })

    const enteredNameHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enterName: event.target.value }
        })
    }

    const enteredAgeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enterAge: event.target.value }
        })
    }

    const enteredDiseaseHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enterDisease: event.target.value }
        })
    }

    const enteredCountryHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enterCountry: event.target.value }
        })
    }

    const enteredPhoneHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enterPhone: event.target.value }
        })
    }

    const enteredEmailHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enterEmail: event.target.value }
        })
    }


    const submitHandler = () => {
        if (userInput.enterName === '' || userInput.enterAge === '' || userInput.enterDisease === '' || userInput.enterCountry === '' || userInput.enterPhone === '' || userInput.enterEmail === '') return alert('Fill the all fields');
        const intialData = {
            name: userInput.enterName,
            age: userInput.enterAge,
            disease: userInput.enterDisease,
            country: userInput.enterCountry,
            phone: userInput.enterPhone,
            email: userInput.enterEmail
        }
        const enteredPatientsData = {
            ...intialData,
            id: Math.random().toString()
        }
        dispatch(submit({ ...enteredPatientsData }));
        nav('/PatientList')
    };


    const editHandler = () => {
        if (userInput.enterName === '' || userInput.enterAge === '' || userInput.enterDisease === '' || userInput.enterCountry === '' || userInput.enterPhone === '' || userInput.enterEmail === '') return alert('Fill the all fields');
        const editedData = {
            name: userInput.enterName,
            age: userInput.enterAge,
            disease: userInput.enterDisease,
            country: userInput.enterCountry,
            phone: userInput.enterPhone,
            email: userInput.enterEmail
        }
        const editedPatientData = {
            ...editedData,
            id: Math.random().toString()
        }
        console.log('editedPatientData', editedPatientData);
        console.log('patientRecordForEdit', patientRecord);
        console.log('patientRecord[]', patientsData);
        let updatedList = patientsData.map((val) => {
            if (val.id === patientRecord.id) return { ...editedPatientData }
            return val
        })
        dispatch(edited(updatedList));
        nav('/PatientList')
        patientRecord = {};
        userInput.enterName = '';
        userInput.enterAge = '';
        userInput.enterCountry = '';
        userInput.enterDisease = '';
        userInput.enterPhone = '';
        userInput.enterEmail = '';
    };


    return (
        <div>
            <h1 className="h1">Patient Data</h1>
            <div className="flex-container">
                <div>
                    <label>Enter Name</label>
                    <input className="input" type="text" value={userInput.enterName} onChange={enteredNameHandler} />
                </div>
                <div>
                    <label>Enter Age</label>
                    <input className="input" type="number" value={userInput.enterAge} onChange={enteredAgeHandler} />
                </div>
                <div>
                    <label>Enter Disease</label>
                    <input className="input" type="text" value={userInput.enterDisease} onChange={enteredDiseaseHandler} />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input className="input" type="text" value={userInput.enterCountry} onChange={enteredCountryHandler} />
                </div>
                <div>
                    <label htmlFor="cellNumber">Cell Number</label>
                    <input className="input" type="tel" value={userInput.enterPhone} onChange={enteredPhoneHandler} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input className="input" type="email" value={userInput.enterEmail} onChange={enteredEmailHandler} />
                </div>
            </div>
            <div className="button-flex">
                {userInput.addPatient || < button className="button" onClick={() => { submitHandler() }}> Submit</button>}
                {userInput.editPatient || <button className="button" onClick={() => editHandler()}>Edit</button>}
            </div>
        </div >
    );
}

export default Form;