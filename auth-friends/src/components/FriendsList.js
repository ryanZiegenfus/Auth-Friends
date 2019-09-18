import React, { useState } from 'react';
import '../App.css';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default function FriendsList () {
    const [stateFriends, setStateFriends] = useState([]);
    const [stateFriend, setStateFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: ''
    });


    const handleChange = (event) => {
        setStateFriend({...stateFriend, [event.target.name]: event.target.value});
        console.log(stateFriend)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('/friends', stateFriend)
            .then(res => {
                console.log(res)
                setStateFriends(res.data);
            })
            .catch(err => console.log(err));
    }

    return(
        <div className="addFriend">
            <div className="formDiv">
                <form onSubmit={event => handleSubmit(event)} className="loginForm">
                    <input type="text" placeholder="Name" name="name" value={stateFriend.name} onChange={ event => handleChange(event)}/>
                    <input type="text" placeholder="Age" name="age" value={stateFriend.age} onChange={ event => handleChange(event)}/>
                    <input type="text" placeholder="Email" name="email" value={stateFriend.email} onChange={ event => handleChange(event)}/>
                    <input type="text" placeholder="id" name="id" value={stateFriend.id} onChange={ event => handleChange(event)}/>
                    <button type="submit">Add a Friend!</button>
                </form>
            </div>
            <div className="cardDiv">
                {stateFriends.map( element => 
                    <Card
                    className="Card"
                    key={element.id}
                    header={`Name: ${element.name}`}
                    meta={`Age: ${element.age}`}
                    description={`Email: ${element.email}`}
                    />
                )}
            </div>
        </div>
    )
}

