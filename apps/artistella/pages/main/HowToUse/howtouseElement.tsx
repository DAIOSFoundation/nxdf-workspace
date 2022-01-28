import styled from "styled-components"
import {Div,UseNumber,UseGridTitle,UseSummary} from './style';

function UseEle({number,title,summary}){
    return(
      <Div>
            <UseNumber>{number}</UseNumber>
            <UseGridTitle>{title}</UseGridTitle>
            <UseSummary>{summary}</UseSummary>
      </Div>
    )
  }


export default UseEle;