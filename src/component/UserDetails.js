import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function UserDetails() {
    const userID = useRef(null);
    const users = axios.create({ baseURL: " http://localhost:3001/details" });
    const [user, setUser] = useState([]);
    const [render, setRender] = useState([]);
    useEffect(() => {
        users.get().then(res => { setRender(res.data); setUser(res.data) });
    }, [])
    function renderUser() {
        let id = userID.current.value;
        users.get(`/${id}`).then(res => { console.log(res.data); setRender([res.data]) });
    }

    console.log(user);
    return (
        <div>
            <h1>In user Details</h1>
            <label for="user">Select an Agent:</label>

            <select name="user" ref={userID} id="user" user onChange={() => renderUser()}>

                {user.map(ele => <option value={ele.id} >  {ele.name}</option>
                )}
            </select>
            {
                render.map(ele => <div>
                    <ul>
                        <li>{ele.id}</li>
                        <li>{ele.name}</li>
                        <li>{ele.age}</li>
                        <li>{ele.email}</li>
                        <li>{ele.city}</li>
                    </ul>
                    <hr />
                </div>)
            }
        </div >
    )
}
