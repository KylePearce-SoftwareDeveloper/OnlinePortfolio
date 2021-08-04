import React, { Component } from 'react';

export default class Home extends Component {

    state = { }

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
            <div className="pageContents">
                <h2 className="subText">Hello there, my name is</h2>
                <h1 className="mainText">Kyle Pearce.</h1>
                <h1 className="mainText">I build computer apps.</h1>
                <h2 className="subText">I am a Software Engineer, I have been coding for six years.</h2>
                <h2 className="subText">Currently I am focused on Full-Stack web app development.</h2>
                <h2 className="subText">I am open to work, so contact me if you want my services.</h2>
            </div>
        );
    }

}