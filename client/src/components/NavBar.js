import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink,} from 'react-bootstrap';
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

export const NavBar = observer( () => {
  const {user} = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Магазин электроники</NavLink>
        {user.isAuth
          ? <Nav className="ml-auto" style={{color: 'white'}}>
         <Button variant={'outline-light'} >Админ панель</Button>
         <Button  variant={'outline-light'} style={{marginLeft: 15}} >Войти</Button>
            </Nav>
          : <Nav className="ml-auto" style={{color: 'white'}}>
            <Button
              onClick={()=> user.setIsAuth(true)}
              variant={'outline-light'}>Авторизация</Button>
            </Nav>
        }
      </Container>
    </Navbar>
  );
}
)
