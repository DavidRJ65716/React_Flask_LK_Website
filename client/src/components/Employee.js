import React, { Component,useState } from 'react';
import "./Employee.css";
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

export class Employee extends Component{
    
    static displayname = Employee.name;
    state = {
        input: {
            FirstName: "",
            LastName: "",
            Depart: "",
            Email: "",
            Phone: 0,
            EmplId: 0
        },
        error: {
            FirstName: false,
            LastName: false,
            Depart: false,
            Email: false,
            Phone: false,
            EmplId: false
        }
    };

    constructor(props){
        super(props);
        this.state = {
            
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleInputChange = (event) =>{
        
        const { input } = this.state;
        this.setState({
            input: {
                ...this.state.input,
                [event.target.name]: event.target.value
            }
        });
    }

    handleSubmit(event){

        alert('Submited Employee: ' + this.state);
        console.log(this.state);
        //event.pre
    }

    render (){    

        return (
            <div className='Employee'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, 
                    aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat 
                    et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.
                </p>
                <form className='employInput'>
                    <MDBRow className='mb-3'>
                        <MDBCol>
                            <MDBInput 
                                name="FirstName"
                                type="text"
                                label='First Name'
                                className='form-control' 
                                value={this.state.FirstName}
                                onChange={this.handleInputChange}
                            />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput 
                                name="LastName"
                                className='form-control'
                                type="text"
                                label="Last Name"
                                value={this.state.LastName}
                                onChange={this.handleInputChange}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow  className='mb-3'>
                        <MDBCol>
                            <MDBInput 
                                name="Deprt"
                                className='form-control' 
                                type="text"
                                label="Department"
                                value={this.state.Deprt}
                                onChange={this.handleInputChange}    
                            />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput 
                                name="ID"
                                className='form-control' 
                                type="number"
                                label="Employee ID"
                                value={this.state.Deprt}
                                onChange={this.handleInputChange}    
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow  className='mb-3'>
                        <MDBCol>
                            <MDBInput
                                name="Phone"
                                className='form-control'
                                type="tel"
                                label="Phone"
                                pattern='([0-9]{3})-[0-9]{3}-[0-9]{4})'
                                value={this.state.Phone}
                                onChange={this.handleInputChange}
                            />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput
                                name="Email"
                                className='form-control'
                                type="email"
                                label="Email"
                                value={this.state.Email}
                                onChange={this.handleInputChange}
                            />  
                        </MDBCol>
                    </MDBRow>
                </form>
                <div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>);
    }
}

