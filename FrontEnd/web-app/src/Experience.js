import React, { Component } from 'react';

export default class Skills extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="pageContents">
                <h1 className="subText"><span className="navNumber">02.</span><span className="largerText">Professional Industry Experience</span></h1>
                <p className="subText indentationOuter"><span>Full-Stack Software Engineer <a className="highlightedText" href="https://www.sigmalabs.xyz/" target="_blank">@ Sigma Labs XYZ</a></span></p>
                <p className="subText indentationOuter">April 2021 - Present</p>
                <p className="subText indentationInner list">Completed full time, intense 12 week Full-Stack Web Engineer training</p>
                <p className="subText indentationInner list">Completed Professional High Performance training</p>
                <p className="subText indentationOuter"><span>Full-Stack Software Engineer <a className="highlightedText" href="https://www.versko.com/" target="_blank">@ Versko</a></span></p>
                <p className="subText indentationOuter">July 2018 - April 2019</p>
                <p className="subText indentationInner list">Developed and designed cashflow forecasting accountancy software Simply Cashflow Limited</p>
                <p className="subText indentationInner list">Worked as part of the team to add functionality and provide 24/7 support, upkeep and debugging.</p>
            </div>
        );
    }

}