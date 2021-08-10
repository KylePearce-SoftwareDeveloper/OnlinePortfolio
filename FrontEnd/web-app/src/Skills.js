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
                <h1 className="subText"><span className="navNumber">02.</span><span className="largerText">What I Know</span></h1>
                <p className="subText indentationOuter"><span className="highlightedText">Programming Languages:</span></p>
                <p className="subText indentationInner">C++ (Modern C++20), C, C#, PHP, Python, Java, JavaScript</p>
                <p className="subText indentationOuter"><span className="highlightedText">Structural Languages:</span></p>
                <p className="subText indentationInner">HTML, CSS, SQL, JSON, XML</p>
                <p className="subText indentationOuter"><span className="highlightedText">Graphics Languages:</span></p>
                <p className="subText indentationInner">HLSL, GLSL</p>
                <p className="subText indentationOuter"><span className="highlightedText">Front-End Frameworks:</span></p>
                <p className="subText indentationInner">React, Vue.js, Angular</p>
                <p className="subText indentationOuter"><span className="highlightedText">Back-End Frameworks:</span></p>
                <p className="subText indentationInner">Deno, Node.js, Apache Struts</p>
                <p className="subText indentationOuter"><span className="highlightedText">Database Frameworks:</span></p>
                <p className="subText indentationInner">PostgreSQL, SQLite, MySQL</p>
                <p className="subText indentationOuter"><span className="highlightedText">Graphics API's:</span></p>
                <p className="subText indentationInner">OpenGL, Vulkan, DirectX</p>
                <p className="subText indentationOuter"><span className="highlightedText">Web Libraries:</span></p>
                <p className="subText indentationInner">Axios, Ajax, JQuery</p>
                <p className="subText indentationOuter"><span className="highlightedText">Version Controll:</span></p>
                <p className="subText indentationInner">GitHub, Git</p>
                <p className="subText indentationOuter"><span className="highlightedText">Other Systems/Software/Frameworks:</span></p>
                <p className="subText indentationInner">.NET stack, Apache Ant, XAMPP, DBVisualizer, phpMyAdmin, WinSCP, PuTTY</p>
                <p className="subText indentationOuter"><span className="highlightedText">Package Managers:</span></p>
                <p className="subText indentationInner">npm, Yarn</p>
                <p className="subText indentationOuter"><span className="highlightedText">Online/Cloud Hosting:</span></p>
                <p className="subText indentationInner">Netlify, Heroku, ElephantSQL</p>
                <p className="subText indentationOuter"><span className="highlightedText">Extra:</span></p>
                <p className="subText indentationInner">Design patterns, Assembly Language, Mathematics</p>
            </div>
        );
    }

}