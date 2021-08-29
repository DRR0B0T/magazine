import React from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import ListGroup from 'react-bootstrap/ListGroup'

const {useContext} = require("react");

export const TypeBar = observer(() => {
  const {device} = useContext(Context)
  return (
    <ListGroup className='mt-3'>
      {
        device.types.map((item)=>
          <ListGroup.Item key={item.id}>
            {
              item.name
            }
          </ListGroup.Item>)
      }
    </ListGroup>
  );
})
