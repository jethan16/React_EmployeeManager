import React from 'react';
import "./Title.css"

function Title() {
    return (
        <div className="box">
                <div className="container">
                    <button className="button is-large is-primary">Employee Name</button>
                    <button className="button is-large is-primary">Things</button>
                    <button className="button is-large is-primary">More Things</button>
                </div>
                    <form>
                        <input placeholder="search"></input>
                    </form>
        </div>
    );
}

export default Title;