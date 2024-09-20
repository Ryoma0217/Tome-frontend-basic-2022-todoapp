import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";
import React from "react";


export const EditButton = ({onClick}) => {
  return <ButtonContainer  onClick={onClick}><img src={pencil}  /></ButtonContainer>;
}

const ButtonContainer = styled.button`
  border:none;
  cursor:pointer;
  width:20px;
  height:20px;
  background-color:${COLOR.LIGHT_GRAY_TRANSPARENT};
  padding:0px;
  border-radius:50%;
  transition:0.2s;
  position:relative;
  >img{
    width:100%;
    height:100%;
  }
  &:hover{
    background-color:${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;



export default EditButton;
