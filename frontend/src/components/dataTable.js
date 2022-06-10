import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import moment from 'moment';

const DataTable = props => {
    const [dpdata, setDpdata] = useState([])
    const fetchDpData = () => {
        fetch("http://127.0.0.1:8000/data/")
            .then(response => {
        return response.json()
      })
        .then(data => {
            setDpdata(data)
            console.log(dpdata.length)
        })
    }
    useEffect(() => {
        fetchDpData()
        
    }, [])

    

    const names = [ "blank", "Udens", "Fabr. Nr. Udens", "Udens tilpums", "Spriegums - 1", "Spriegums - 2", "Spriegums - 3", "Strāva - 1", "Strāva - 2", "Strāva - 3", "Patēriņš kW", "Patēriņš kWh" ]

  return (
    <Container>
      {props.token == null || props.token === "" ? (
        <Alert variant='warning'>
          You are not logged in. Please <Link to={"/login"}>login</Link> to see your todos.
        </Alert>
      ) : (
        <div style={{ width: '100%' }}>
          {dpdata.slice(0, 11 ).map(item =>{
              
                return (

                    <Card key={item.val} className="mb-3">
                      <Card.Body>
                        <div >
                          <Card.Title style={{fontSize: 20, textAlign: "center"}}><b>{names[item.dp]}</b></Card.Title>
                          <Card.Text style={{fontSize: 15, textAlign: "center"}}> {item.val}</Card.Text>
                          <Card.Text style={{fontSize: 10, textAlign: "center"}}>
                            {moment(item.ts).format('lll')}
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  )
              
          })}
        </div>
      )}
    </Container>
  );
}

export default DataTable;