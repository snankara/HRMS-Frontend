import React from 'react'
import { Button } from "reactstrap";

export default function CandidateLogin() {
    return (
        <div className="ds-ib mr5">
            <Button 
            className="btn-info btn-round" color="info" type="button"
             target="_blank"
             id="candidateLogin"
             size="lg"
            >
                Giriş Yap
            </Button> 
        </div>
    )
}
