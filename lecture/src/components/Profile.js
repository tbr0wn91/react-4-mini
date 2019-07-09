import React from "react";
import data from "./data.json";

export default class Profile extends React.Component{
    render(){
        const foundStudent = data.filter(student => student.id == this.props.match.params.id)
        const { name, id, grade } = foundStudent[0]
        return (
            <div>
                <div>{name}</div>
                <div>{grade}</div>
            </div>
        )
    }
}