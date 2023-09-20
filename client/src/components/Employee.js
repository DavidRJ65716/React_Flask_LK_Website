import React, { Component,useState } from 'react';
import "./Employee.css";

export class Employee extends Component{
    
    static displayname = Employee.name;
    state = {
        input: {
            FirstName: "",
            LastName: "",
            Depart: "",
            Email: "",
            Phone: 0,
        },
        error: {
            FirstName: false,
            LastName: false,
            Depart: false,
            Email: false,
            Phone: false,
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
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="FirstInput">
                                First Name:
                            </label> 
                            <input 
                                id='FirstInput'
                                name="FirstName"
                                type="text" 
                                value={this.state.FirstName}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className='col'>
                        <label htmlFor="LastName" >
                            Last Name:
                        <input 
                            id="LastName"
                            name="LastName"
                            type="text" 
                            value={this.state.LastName}
                            onChange={this.handleInputChange}
                        />
                        </label>
                        </div>
                    </div>
                    <div>
                        <label>
                            Department:
                        </label>
                        <input 
                            name="Deprt"
                            type="text" 
                            value={this.state.Deprt}
                            onChange={this.handleInputChange}    
                        />
                        <label>
                            Employee ID:
                        </label>
                        <input 
                            name="ID"
                            type="number"
                            value={this.state.Deprt}
                            onChange={this.handleInputChange}    
                        />
                    </div>
                    <div>
                        <label>
                            Phone:
                        </label>
                        <input
                            name="Phone"
                            type="tel" 
                            pattern='([0-9]{3})-[0-9]{3}-[0-9]{4})'
                            value={this.state.Phone}
                            onChange={this.handleInputChange}
                        />
                    <label>
                        Email:
                        <input
                            name="Email"
                            type="text"
                            value={this.state.Email}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    </div>
                </form>
                <div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>);
    }
}

