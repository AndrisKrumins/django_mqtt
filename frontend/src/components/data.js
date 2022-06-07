import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
const Data = props => {
<<<<<<< HEAD



        const [items, setItems] = useState([])
      
      
        const fetchData = () => {
      
          fetch("http://127.0.0.1:8000/data/")
      
            .then(response => {
              return response.json()
      
            })
      
            .then(data => {
      
                setItems(data)
      
            })
      
        }
      
      
        useEffect(() => {
      
          fetchData()
      
        }, [])


    
  
       
             

        return (

            <div>
        
              {items.length > 0 && (
        
                <ul>
        
                  {items.map(item => (
        
                    <li key={item.val}> 

                        <p><strong> Data point ID</strong> {item.dp} <strong> Value</strong> {item.val}  <strong>Date</strong> {item.ts}</p>
                    </li>
        
                  ))}
        
                </ul>
        
              )}
        
            </div>
        
          )
}

=======
  const [dpdata, setDpdata] = useState([])

  const fetchDpData = () => {
    fetch("http://127.0.0.1:8000/data/")
      .then(response => {
        return response.json()
      })
      .then(data => {
          setDpdata(data)
      })
  }
  
  useEffect(() => {
    fetchDpData()
  }, [])

  return (
      <div>
        {dpdata.length > 0 && (
          <ul>
            {dpdata.map(item =>(
              <li key={item.val}> 
                  <p><strong>Data point ID</strong> {item.dp} <strong>Value</strong> {item.val}  <strong>Date</strong> {item.ts}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}
>>>>>>> c57fd9b56892cfba9b56b1d0e4cc11b4a123e090
export default Data;
