import React from "react";

const Card = () =>  {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src="https://media.istockphoto.com/id/523538287/fr/photo/times-square.jpg?s=612x612&w=0&k=20&c=iFETYKdlWAAcEiEwe_7cIexsRi0kEAiaQAu3A3fmdSs=" className="card-img-top" alt="NYC"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}
export default Card