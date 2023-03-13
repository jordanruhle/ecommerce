import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8000/api/authenticate', {
      withCredentials: true,
    })
      .then(res => {
        console.log(res.data)
        if (res.data.verified) {
          setAuthenticated(true)
        }
        setLoaded(true)
        console.log(loaded);
      })
      .catch(err => {
        setLoaded(true) 
        console.log("catch")
      })
  }, []);


  return loaded ? authenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/admin" />
  ) : <p>Loading...</p>
}

export default ProtectedRoute