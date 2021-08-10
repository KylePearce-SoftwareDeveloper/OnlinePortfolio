import React, { Component } from 'react';

export default class About extends Component {

    state = {}

    constructor(props) {
        super(props);
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div class="flex-container">
                <div class="flex-child">
                    <h1 className="subText"><span className="navNumber">01.</span><span className="largerText">About Me</span></h1>
                    <p className="subText">Hello! My name is <span className="highlightedText">Kyle Pearce.</span></p>
                    <p className="subText">I have been <span className="highlightedText">coding since September 2015</span> as this is when I went to university.</p>
                    <p className="subText">In university I was awarded the <span className="highlightedText">sandwich degree of BSc in Computer Games Technology with First Class Honours</span> from the University of the West of Scotland, Paisley, Glasgow.</p>
                    <p className="subText">During my time at university I obtained a <span className="highlightedText">one year placement in the industry as a Full Stack Software Engineer</span> at Versko Ltd in Glasgow.</p>
                    <p className="subText">At university I was coding many <span className="highlightedText">computer games and virtual worlds</span>, I absolutely loved it!</p>
                    <p className="subText">Now I mainly code <span className="highlightedText">Full-Stack web apps</span> and online experiences, like this website!</p>
                </div>
                <div class="flex-child">
                    <img className="myPic" src="KylePearce_Photo.JPG"></img>
                </div>
            </div>
        );
    }

}

/*
<div className="pageContents">
                <h1 className="subText"><span className="navNumber">01.</span><span className="largerText">About Me</span></h1>
                <p className="subText">Hello! my name is <span className="highlightedText">Kyle Pearce.</span></p>
                <p className="subText">I have been <span className="highlightedText">coding since September 2015</span> as this is when I went to university.</p>
                <p className="subText">In university I was awarded the <span className="highlightedText">sandwhich degree of BSc in Computer Games Technology with First Class Honours</span>.</p>
                <p className="subText">During my time at university I obtained a <span className="highlightedText">one year placement in the industry as a Software Developer</span> at Versko Ltd in Glasgow.</p>
                <p className="subText">At university I coding many <span className="highlightedText">computer games and virtual worlds</span>, I absolutely loved it!</p>
                <p className="subText">Now I mainly code <span className="highlightedText">Full-Stack web apps</span>, like this website!</p>
            </div>
*/