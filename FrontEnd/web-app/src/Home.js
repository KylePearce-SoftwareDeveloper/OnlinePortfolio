import React, { Component } from 'react';

export default class Home extends Component {

    state = { myInfo: [] }

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const response = await fetch(`${process.env.REACT_APP_API_URL}myInfo`, {
            method: 'GET',
            credentials: 'include'
        })
        const myInfo = await response.json()
        this.setState({ myInfo })
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        const { myInfo } = this.state;
        console.log(myInfo);
        if (!myInfo) {
            return (
                <h1>Loading...</h1>
            );
        } else {
            return (
                <div className='item-list'>
                    {myInfo.map(({ id, name, cv_img, description, email, github_link, linkedin_link }) =>
                        <h1 key={id}>name: {name}, cv_img: {cv_img}, description: {description}, email={email}, github_link: {github_link}, linkedin_link: {linkedin_link}</h1>
                    )}
                </div>
            );
        }
    }

}