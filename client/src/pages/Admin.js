import React from 'react';
import {Button, Container} from "react-bootstrap";

export const Admin = () => {
  return (
    <Container className="d-flex flex-column ">
      <Button>Добавить тип</Button>
      <Button>Добавить бренд</Button>
      <Button>Добавить устройство</Button>
    </Container>
  );
};
