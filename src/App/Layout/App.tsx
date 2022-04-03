import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../Models/Activity';
import { NavBar } from './NavBar';
import { ActivityDashboard } from '../../Features/activities/dashboard/ActivityDashboard';


function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/Activities').then(res => {
      console.log(res.data);
      setActivities(res.data);
    })
  },[]);

  return (
   
        <>
        <NavBar/>
          <Container style={{marginTop:'7em'}}>
            <ActivityDashboard activities={activities}/>
          </Container>
        </>
  );
}

export default App;
