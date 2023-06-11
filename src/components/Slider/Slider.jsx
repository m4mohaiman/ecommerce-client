import React from 'react';
import { styled } from 'styled-components';
import { ArrowLeftOutlined , ArrowRightOutlined  } from '@material-ui/icons';

const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    margin: auto;
`

const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    align-items: center;

`

const ImgContainer = styled.div`
    flex: 1;
`

const InfoContainer = styled.div`
    padding: 50px;
    flex: 1;
`

const Image = styled.img`
    
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined></ArrowLeftOutlined>
        </Arrow>
        <Wrapper>
            <Slide>
            <ImgContainer>
                <Image src='https://media.gucci.com/content/LightGray_CategoryDoubleVertical_Standard_463x926/1684923303/CategoryDoubleVertical_739402ZAMTM4066-wrtw-look-01_001_Light.jpg'></Image>
            </ImgContainer>
            <InfoContainer></InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined></ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}

export default Slider