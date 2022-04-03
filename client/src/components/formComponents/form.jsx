import React from 'react'
import { useState } from 'react';
import axios from 'axios'


export const Form = () => {


    const [summary, setSummary] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    




    const handleSubmit = e => {
        e.preventDefault();
        
        axios.post('http://localhost:4000/api/create-event', {
          summary,
          description,
          location,
          startDateTime,
          endDateTime
        })
        .then(response => {
          console.log(response);
        
    
        })
        .catch(err => { console.log(err.message) });

        axios.post("http://localhost:8080/events",{
          summary,
          description,
          location,
          startDateTime,
          endDateTime
        })

      }



  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="summary">
            Summary
          </label>
          <br />
          <input
           type="text"
           id='summary'
           value={summary}
           onChange={e => setSummary(e.target.value)}
           />
           <br />
          <label htmlFor="description">
          Description
          </label>
          <br />
          <textarea
           type="text"
           id='description'
           value={description}
           onChange={e => setDescription(e.target.value)}
           />
           <br />
          <label htmlFor="location">
          Location
          </label>
          <br />
          <input
           type="text"
           id='location'
           value={location}
           onChange={e => setLocation(e.target.value)}
           />
           <br />
          <label htmlFor="startDateTime">
          Start Date Time
          </label>
          <br />
          <input
           type="datetime-local"
           id='startDateTime'
           value={startDateTime}
           onChange={e => setStartDateTime(e.target.value)}  
           />
           <br />
          <label htmlFor="endDateTime">
          End Date Time
          </label>
          <br />
          <input
           type="datetime-local"
           id='endDateTime'
           value={endDateTime}
           onChange={e => setEndDateTime(e.target.value)}
           />
           <br />
          <input type="submit" value="submit"/>
        </form>
      </div>

  )
}
