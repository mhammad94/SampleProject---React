import React from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { Activity } from "../../../App/Models/Activity";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityList } from "./ActivityList";

interface Props{
    activities:Activity[]
}

export const ActivityDashboard = ({activities}:Props) => {

    return(
        <Grid>
            <Grid.Column width={'10'}>
            <ActivityList activities={activities}/>
            </Grid.Column>
            <Grid.Column width={'6'}>
                <ActivityDetails activity={activities[0]}/>
            </Grid.Column>
        </Grid>
    )
}