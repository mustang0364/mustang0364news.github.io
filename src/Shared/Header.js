import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css'


export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }


    render() {

        const TechC = {
            color: this.props.header
        }

        const BuzzF = {
            color: this.props.header1
        }

        const Axios = {
            color: this.props.header2
        }

        console.log(this.props)
        return (
            <div className='nav-header'>
                <div>
                    <ul>
                        <Link style={TechC}  to='/'><li>TechC</li></Link>
                        <Link style={BuzzF} to='/BuzzF'><li>BuzzF</li></Link>
                        <Link style={Axios} to='/Axios'><li>Axios</li></Link>
                    </ul>
                </div>
            </div>
        );
    }
}