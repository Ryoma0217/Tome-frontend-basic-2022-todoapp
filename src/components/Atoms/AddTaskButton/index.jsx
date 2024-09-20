import styled from "styled-components";
import COLOR from "../../../variables/color";
import plus from "../../../assets/svg/plus.svg";
import TEXT from "../../../variables/texts";
import React from "react";

export const AddTaskButton = ({onClick}) => {
    return <ButtonContainer2  onClick={onClick}><img src={plus} /><ButtonText>タスクを追加</ButtonText></ButtonContainer2>;
  }

  const ButtonContainer2 = styled.button`
  border:none;
  cursor:pointer;
  background-color:${COLOR.GREEN_TRANSPARENT};
  padding:2px 6px;
  border-radius:12px;
  transition:0.2s;
  display:flex;
  align-items:center;
  >img{
    width:20px;
    height:20px;
  }
  &:hover{
    background-color:${COLOR.GREEN_TRANSLUCENT};
  }
`;

const ButtonText = styled.div`
  color:${COLOR.GREEN};
  ${TEXT.S};
  margin-left:10px;
`


export default AddTaskButton;