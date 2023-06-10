import React from "react";
import { styled } from "styled-components";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from '@material-ui/core';


const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: 0;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{color:"grey", fontSize:16}}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-Commerce.</Logo>
        </Center>
        <Right>
          <MenuItem>Registration</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart></ShoppingCart>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
