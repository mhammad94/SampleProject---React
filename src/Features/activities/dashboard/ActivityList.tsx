import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/Models/Activity";

interface Props{
 activities:Activity[],
}

export const ActivityList = ({activities}:Props) => {
    return(
        <Segment>
            <Item.Group divided>
                {activities.map((el) => (
                    <Item key={el.id}>
                        <Item.Content>
                            <Item.Header as={'a'}>{el.title}</Item.Header>
                            <Item.Meta>{el.date}</Item.Meta>
                            <Item.Description>
                                <div>{el.description}</div>
                                <div>{el.city},{el.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated="right" content="View" color="blue"/>
                                <Label basic content={el.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}