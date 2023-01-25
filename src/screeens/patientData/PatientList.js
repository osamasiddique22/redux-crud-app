import React from "react";
import { deletePatient } from "../../redux/actions/formActions";
import './PatientList.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const PatientList = () => {
    const patientData = useSelector((state) => state.formReducer.enteredPatientsData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const deleteHandler = (id) => {
        let filterOnStoredData = patientData.filter(element => element.id !== id);
        dispatch(deletePatient([...filterOnStoredData]))
    }
    const editHandler = (patient) => {
        navigate('/', { state: { patientRecord: patient } });
    }
    const enterPatientHandler = (event) => {
        event.preventDefault()
        navigate('/')
    }

    return (
        <div>
            <h1 className="h1">Table List</h1>
            <div className="header">
                <button onClick={enterPatientHandler} className="button add-patient-button">Add Patient</button>
            </div>
            <div className="flex-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Disease
                            </th>
                            <th>
                                Country
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patientData.map((x, i) => {
                                return (
                                    <tr key={x.id}>
                                        <td>{x.id}</td>
                                        <td>{x.name}</td>
                                        <td>{x.age}</td>
                                        <td>{x.disease}</td>
                                        <td>{x.country}</td>
                                        <td>{x.phone}</td>
                                        <td>{x.email}</td>
                                        <td><button className="button" onClick={() => editHandler(x, x.id)}>Edit</button> / <button className="button" onClick={() => deleteHandler(x.id)}>Delete</button></td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default PatientList;