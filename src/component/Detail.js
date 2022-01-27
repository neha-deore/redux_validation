import React, { useRef, useState } from 'react'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import { sData } from '../reducers/action'
import { useDispatch, useSelector } from 'react-redux'
import { updateState } from '../reducers/reducers'


export default function Detail() {

    const dispatch = useDispatch();
    const myData = useSelector(state => state.updateState)
    let data = [];
    const [select, nonSelect] = useState();
    const nameInput = useRef(null);
    const ageInput = useRef(null);
    const emailInput = useRef(null);
    const cityInput = useRef(null);
    const genInput = useRef(null);
    
    function sendData() {
        console.log(genInput);

        data = { name: nameInput.current.value, age: ageInput.current.value, email: emailInput.current.value, city: cityInput.current.value, gen: select };

        dispatch(sData(data));

        nameInput.current.value = '';
        ageInput.current.value = '';
        emailInput.current.value = '';
        cityInput.current.value = '';
    }
    const handle = (e) => {
        nonSelect(e.target.value)
    }
    return (
        <div>
            <Container fluid style={{ width: "600px", margin: "70px auto" }}>
                <h1>Hello User!! Join Us By Registering</h1>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" placeholder="Enter first name" id="fName" ref={nameInput} />
                        <div className='text-danger'>{myData.error.nameError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Enter Age" id="age" ref={ageInput} />
                        <div className='text-danger'>{myData.error.ageError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3">

                        <Form.Control type="text" placeholder="Enter Email" id="email" ref={emailInput} />
                        <div className='text-danger'>{myData.error.emailError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3">

                        <Form.Control type="text" placeholder="Enter City" id="city" ref={cityInput} />
                        <div className='text-danger'>{myData.error.cityError}</div>
                    </Form.Group>
                    {/* <Form.Group className="mb-3">

                        <Form.Select aria-label="Select a gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </Form.Select>
                    </Form.Group> */}
                    <Form.Group as={Row} className="mb-3" ref={genInput}>
                        <Form.Label as="legend" column sm={2} >
                            Gender
                        </Form.Label>
                        <Col sm={10}>

                            <Form.Check
                                type="radio"
                                label="Male"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                value="Male"
                                onChange={handle}

                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                value="Female"
                                onChange={handle}

                            />
                            <Form.Check
                                type="radio"
                                label="Others"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                value="Others"
                                onChange={handle}

                            />

                        </Col>
                        <div className='text-danger'>{myData.error.genError}</div>
                    </Form.Group>
                    <Button className="mx-1 btn btn-primary" variant="contained" onClick={() => sendData()}  >Register</Button>
                    <div className='text-danger'>{myData.error.fieldError} </div>
                    <br />
                    {/* <a style={{ color: 'blue' }} to="/">Login Over Here</a> */}
                    {/* {pflag == 1 && <Redirect to='/' />} */}

                </Form>
            </Container>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>age</th>
                        <th>email</th>
                        <th>city</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody>
                    {myData.data.length < 1 ? <tr><td colSpan='5'>No data Available</td></tr> :
                        myData.data.map(ele =>
                            <>
                                <tr>
                                    <td>{ele.name}</td>
                                    <td>{ele.age}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.city}</td>
                                    <td>{ele.gen}</td>
                                </tr>

                            </>)
                    }
                </tbody>
            </table>
        </div >
    )
}
