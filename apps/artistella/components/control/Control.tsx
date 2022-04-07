import react ,{ useState } from "react";
import styled from "styled-components";

interface viewportProps{
    viewport : {
        latitude: number;
        longitude: number;
        zoom: number;
    }
    setViewport: React.Dispatch<React.SetStateAction<{
        latitude: number;
        longitude: number;
        zoom: number;
    }>>

}

const ControlLayout = styled.div`
  width: 100px;
  height: 200px;
  z-index: auto;
  position: absolute;
  right: 2%;
  top: 5%;
  font-size: 40px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

   @media(max-width: 768px){  
    display: none;
    }
`;

const ControlBtn = styled.div`
  width : 50px;
  height: 50px;
  background-color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 10px auto;
  cursor: pointer;
`;

const ControlInput = styled.input`
  width: 80px;
  z-index: -1;
`;

const ControlInputDiv = styled.div`
  transform: rotate(-90deg);
  margin: auto 20px;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;




const Control = ({viewport, setViewport}:viewportProps) => {
    const Plus = () => {
        if (viewport.zoom < 22) {
        setViewport({
            ...viewport,
            zoom: viewport.zoom + 1
        })
        }
    }
    const Minus = () => {
    if (viewport.zoom > 1) {
        setViewport({
        ...viewport,
        zoom: viewport.zoom - 1
        })
    }
    }
    
    const change = (e) => {
        console.log(e.target.value);
        setViewport({
            ...viewport,
            zoom: e.target.value
        })
    }

  
    return (
    <ControlLayout>
        <ControlBtn onClick={Plus} >+</ControlBtn>
        <ControlInputDiv>
            <ControlInput  onInput={change} type="range" min="1.0" value={viewport.zoom} max="22.0" />
        </ControlInputDiv>
            <ControlBtn onClick={Minus} >-</ControlBtn>
    </ControlLayout>
    )
}


export default Control;