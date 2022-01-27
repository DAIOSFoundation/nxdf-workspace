import styled from "styled-components"
import {InfoDiv,Info,Number} from '../style'


function InfoNumber({info, number}){
    return(
      <InfoDiv>
        <Info>{info}</Info><Number>{number}</Number>
      </InfoDiv>
    )
  }

export default InfoNumber;