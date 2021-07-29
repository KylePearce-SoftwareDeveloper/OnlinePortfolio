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
                <h1 className="subText"><span className="navNumber">05.</span><span className="largerText">Get In Touch!</span></h1>
                <p className="subText indentationOuter">Reach out to my <a className="highlightedText" href="https://www.linkedin.com/in/kyle-pearce-a7a904217/" target="_blank">@ LinkedIn</a></p>
                <p className="subText indentationOuter">Or send me an email <span className="highlightedText">@ kyle.pearce@sigmalabs.xyz</span></p>
                <p className="subText indentationInner">I <span className="highlightedText">love coding</span> and I want to do more of it!</p>
                <p className="subText indentationInner">I am very passionate about my work and <span className="highlightedText">love working in teams</span>.</p>
                <p className="subText indentationInner">So if you think I can add value to your team or you want my services please do <span className="highlightedText">get in touch!</span></p>
            </div>
        );
    }

}