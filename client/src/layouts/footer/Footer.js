import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.css';

export default function Footer(){
    
    return (
        <MDBFooter bgColor="light" className="text-center p-3 text-lg-start border-top box-shadow" >
            <div className="footer text-muted text-center p-0" style={{ backgroundColor: 'rgba(0,0,0,0.05)'}}>
                Little King @ 2023 No Copyright
            </div>
        </MDBFooter>
    );
    
}