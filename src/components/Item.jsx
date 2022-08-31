import React, { Component } from "react";
import './Item.css'
import DeleteBtnIcon from '../img/icons/delete-icon.png'

export default class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    toggle = () => {
        this.setState({
            checked: !this.state.checked
        })
    }

    delete = () => {
        // this function will delete this item from the parent
        this.props.deleteNote(this.props.note.id);
    }

    render() {
        return (
            <div className="container-box" key={this.props.note.id}>
                <div className="checkbox-container">
                    <input type="checkbox" onClick={this.toggle}/>
                </div>
                <div className="text-container">
                    <div className={this.state.checked ? 'btn-pressed' : ''}>
                        {this.props.note.value}
                    </div>
                </div>
                <div onClick={this.delete} className="dlt-btn"><img className="delete-img" src={DeleteBtnIcon} alt="image"/></div>
            </div>
        )
    }
}