//https://www.codesmartly.codes/react/javascript/how-to-implement-table-pagination-react-table-v7/
import React from "react";
import styled from 'styled-components';
import {LeftArrow, RightArrow} from './style';
import leftarrow from "images/itemDetail/icon-pagination-left.svg";
import rightarrow from "images/itemDetail/icon-pagination-right.svg";

const Styles = styled.div`
  .navigationButtonsContainer{
    display:flex;
    align-items:center;
  }

  li{
    width:24px;
    height:24px;
    text-align:center;
    padding-top:5px;
    color:black;
    font-size:1rem;
    &:hover{
      cursor: pointer;
    }
  }

  li:nth-child(${(props:Current)=>props.Current}){
    background-color:#c6b2a4;
    color:white;
    border-radius:8px;
  }
`
interface Current{
  Current:number
}


const TablePagination = (props) => {
    function onCurrent({index}){ 
      props.gotoPage(index)
    }

    return (
        <Styles Current={props.pageIndex+1}>
            <div className="navigationButtonsContainer">
          <LeftArrow
                    onClick={props.previousPage}
                    //disabled={!props.canPreviousPage}
          >
                </LeftArrow>
                <ul style={{ display: "flex", listStyle:'none' }}>
                    {
                        props.pageOptions.map((index, page) => {
                            return <li onClick={()=>{onCurrent({index})}} key={index}>{page + 1}</li>
                        })}
                </ul>
                <RightArrow
                    onClick={
                        props.nextPage
                    }
            //disabled={!props.canNextPage}
              >
            
                </RightArrow>
            </div>
        </Styles>
    );
}

export default TablePagination;