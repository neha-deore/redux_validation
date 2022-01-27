import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Form, Container } from 'react-bootstrap';

export default function CountryDetails() {
    const countryID = useRef(null);
    const stateID = useRef(null);
    const cityID = useRef(null);
    const countryURL = axios.create({ baseURL: "http://localhost:3002/country" });
    const stateURL = axios.create({ baseURL: "http://localhost:3002/state" });
    const cityURL = axios.create({ baseURL: "http://localhost:3002/city" });
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    useEffect(() => {
        countryURL.get().then(res => { setCountry(res.data) });
    }, []);
    function getState() {
        const id = countryID.current.value;
        if (id != 0) {
            stateURL.get(`?country_id=${id}`).then(res => { setState(res.data) });
            setCity([]);
        }
        else {
            setCity([]);
            setState([]);
        }
    }
    function getCity() {
        const id = stateID.current.value;
        cityURL.get(`?state_id=${id}`).then(res => { setCity(res.data) });
    }
    return (
        <div>
            <h2>In Country details</h2>
            <Container>
                <Form.Select name="country" ref={countryID} id="country" onClick={() => getState()}>
                    <option value="0">Select a Country...</option>
                    {country.map(ele => <option value={ele.id} >  {ele.name}</option>
                    )}
                </Form.Select>
                <br />
                <Form.Select name="state" ref={stateID} id="state" onClick={() => getCity()}>
                    <option value="0">Select a State...</option>
                    {state.map(ele => <option value={ele.id} >  {ele.name}</option>
                    )}
                </Form.Select>
                <br />
                <Form.Select name="city" ref={cityID} id="city">
                    <option value="0">Select a City...</option>
                    {city.map(ele => <option value={ele.id} >  {ele.name}</option>
                    )}
                </Form.Select>
            </Container>

        </div>

    )
}
