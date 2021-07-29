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
                <h1 className="subText"><span className="navNumber">04.</span><span className="largerText">My Work</span></h1>
                <p className="subText indentationOuter">Full-Stack Web App <a className="highlightedText" href="https://rent-a-thing.netlify.app" target="_blank">@ Rent-A-Thing</a></p>
                <p className="subText indentationOuter">Project details:</p>
                <p className="subText indentationInner list">Group project consisting of five Software Engineers, time bounded by two weeks.</p>
                <p className="subText indentationInner list">An app where a user can search for an item to rent, or create an account and post and item to be rented.</p>
                <p className="subText indentationInner list">React Front-End, hosted on Netlify.</p>
                <p className="subText indentationInner list">Deno Back-End, hosted on Heroku.</p>
                <p className="subText indentationInner list">PostgreSQL Database, hosted on ElephantSQL.</p>
                <p className="subText indentationInner list">Agile and Test Driven Development methodologies used throughout development life time.</p>
                <p className="subText indentationOuter">3D Game Engine <a className="highlightedText" href="https://youtu.be/eCnJp-0JMSY" target="_blank">@ My Honours Project</a></p>
                <p className="subText indentationOuter">Project details:</p>
                <p className="subText indentationInner list">3D Game Engine I coded from scratch using C++ and OpenGL.</p>
                <p className="subText indentationInner list">The Engine was used to create a game whereby the user learns about game engine design.</p>
                <p className="subText indentationInner list">Please note - The game was running on a 10 year old laptop at the time and this combined with OBS hurt the framerate.</p>
                <p className="subText indentationOuter">And of course <a className="highlightedText" href="http://localhost:3000/" target="_blank">@ This Web App!</a></p>
                <p className="subText indentationOuter">Project details:</p>
                <p className="subText indentationInner list">Full-Stack web online portfolio coded by myself.</p>
                <p className="subText indentationInner list">React Front-End, hosted on Netlify.</p>
                <p className="subText indentationInner list">Deno Back-End, hosted on Heroku.</p>
                <p className="subText indentationInner list">PostgreSQL Database, hosted on ElephantSQL.</p>
                <p className="subText indentationOuter">View all my projects in my <a className="highlightedText" href="https://github.com/KylePearce-SoftwareDeveloper" target="_blank">@ GitHub</a></p>
                <p className="subText indentationOuter">Projects include:</p>
                <p className="subText indentationInner list">Full-Stack Web apps.</p>
                <p className="subText indentationInner list">Computer game engines.</p>
                <p className="subText indentationInner list">Computer games and web games.</p>
                <p className="subText indentationInner list">Graphics projects.</p>
                <p className="subText indentationInner list">SYCL, CUDA, Multithreading and OpenCL projects expolring mordern and efficient C++20</p>
            </div>
        );
    }

}