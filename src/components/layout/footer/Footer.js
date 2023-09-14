import React,{ Component } from "react";
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.css';

export class Footer extends Component{
    render() {
        return (
            <MDBFooter bgColor="light" className="text-center p-5 text-lg-start  box-shadow" >
                <div className="footer text-muted text-center p-0" style={{ backgroundColor: 'rgba(0,0,0,0.05)'}}>
                    Little King @ 2023 No Copyright
                </div>
            </MDBFooter>
        );
    }
}