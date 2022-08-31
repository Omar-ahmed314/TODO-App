import React, { Component } from 'react';
import './ItemsList.css'
import Item from './Item'
import AddNoteIcon from '../img/icons/icon.png'

export default class ItemsList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            inputText: ''
        };
        this.gen = this.idGenerator();
    }

    * idGenerator() {
        let id = 0;
        while(true)
        yield id++;
    }

    setNote = (e) => {
        this.setState({
            inputText: e.target.value
        });
    }

    addNote = () => {
        this.setState({
            notes: [...this.state.notes, {id: this.gen.next().value, value: this.state.inputText}]
        });
    }

    deleteNote = (id) => {
        const notes = this.state.notes.filter((element) => {
            return element.id !== id;
        });
        this.setState({
            notes
        });
    }

    renderNotes = () => {
        return this.state.notes.map((element) => {
            return <Item note={element} deleteNote={this.deleteNote} />
        })
    }
    render(){
        const items = this.renderNotes();
        return(
            <div className='itemList-container' key={this.props.id}>
                <div className='navbar-container'>
                    <div className='input'>
                        <input onChange={this.setNote} id="text-area" type="text" placeholder='Note!'/>
                        <div className='add-note-btn' onClick={this.addNote}><img src={AddNoteIcon} /></div>
                    </div>
                </div>
                <div className='notes'>
                    {items}
                </div>
                <footer>
                    {
                        new Date().toUTCString()
                    }
                </footer>
            </div>
        );  
    }
}