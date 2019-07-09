import React from 'react';
import data from "./data.json";
import { Link } from "react-router-dom";

export default class StudentPage extends React.Component{
    render(){
        const mappedStudents = data.map(student => {
            return <div key={student.id}>
                        <h1>{student.name}</h1>
                        <Link to={`/student_page/${student.id}`}>View Profile</Link>
                   </div>
        })
        return(
            <div>
                <LayoutComp flexDirection="column">{mappedStudents}</LayoutComp>

                
            </div>
        )
    }
}

function LayoutComp ({children, flexDirection}){
    return <div style={{display: "flex", flexDirection: flexDirection || "row"}}>{children}</div>
}