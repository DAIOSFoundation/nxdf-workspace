import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import NftResult from './NftResult';

const Buy = styled.div<{setModal?:boolean}>`
  width: 712px;
  height: 80%;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
  z-index: auto;
  position: absolute;
  opacity: 1;
  margin-left: 20px;
  display: ${(props) => props.setModal ? "flex" : "none"};

  @media(max-width: 768px){  
        width: 95%;
        margin-right: 10px;
        }
`;


const BuyHeader = styled.div`
  width: 100%;
  height: 3%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Xbtn = styled.div`
  cursor: pointer;
`

const NftDiv = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
`;






const ResultDiv = styled.div`
        width: 100%;
        height: 80%;
        position: absolute;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(400px,400px);
        grid-auto-flow: row;
        gap : 20px;
        overflow: scroll;
        @media(max-width: 1200px){  
        grid-template-columns: repeat(2, 1fr);
        }
        @media(max-width: 768px){  
        grid-template-columns: repeat(1, 1fr);
        }
       

`

const SettingLay = styled.div`
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

`;

const SettingInnerLay = styled.div`
    width: 100%;
    height: 50% ;
    margin: 10px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`; 

const SettingInput = styled.div`
    width: 33%;
    height: 80%;
    margin: 20px 20px 20px 10px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px ;
`;

const CoinName = styled.span`
    width: 80%;
    text-align: right;
    margin-right: 10px;
`;


const SettingSmallInput = styled.div`
    width: 25%;
    height: 80%;
    margin: 10px;
    
`;

const PriceInput = styled.input`
    width: 100%;
    height: 100%;
    text-align: right ;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 10px ;
`;

const Select = styled.select`
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    border: 1px solid black;
    border-radius: 10px ;
    padding: 0px 10px;

`;

const PriceSpan = styled.span`
    font-size: 1.5rem;
    display: block;
    margin-right: 10px;
`;

const Result = styled.div`
    width: 100%;
    padding-left: 10px;
    font-size:1.2rem;
    margin-top: 10px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
`;

const ResultScroll = styled.div` 
    position: relative;
    width: 100%;
    height: 60%;
    overflow: auto;
    margin-right: 10px;
`; 

const Nft = ({ modal,setModal }) => {
    const fadeOut = (e) => {
        setModal(!modal) 
    }
    return (
      <Buy setModal={modal}>
        <NftDiv>
            <BuyHeader id="back" >
                <div><span>Market</span></div>
                <Xbtn onClick={fadeOut}>X</Xbtn>
            </BuyHeader>         
            <SettingLay>
                <SettingInnerLay>
                    <SettingInput>
                        {/* <Image src={Img1} width={25} height={25} /> */}
                        <CoinName>Solana</CoinName>
                        {/* <Image src={Img2} width={25} height={25} /> */}
                    </SettingInput>
                    <SettingInput>
                        <PriceInput type="text" name="min" placeholder="Min price" />
                    </SettingInput>
                    <PriceSpan>~</PriceSpan>
                    <SettingInput>
                        <PriceInput type="text" name="max"  placeholder="Max price" />
                    </SettingInput>
                </SettingInnerLay>
                <SettingInnerLay>
                    <SettingSmallInput>
                        <Select name="category" defaultValue={""} >
                            <option value="">Category</option>
                            <option value="land">Land</option>
                            <option value="site">Site</option>
                            <option value="building">Building</option>
                        </Select>
                    </SettingSmallInput>
                    <SettingSmallInput>
                        <Select name="value" defaultValue={""} >
                            <option value="">Value all</option>
                            <option value="SS">SS</option>
                            <option value="S">S</option>
                            <option value="A">A</option>
                        </Select>
                    </SettingSmallInput>
                    <SettingSmallInput>
                        <Select name="grade" defaultValue={""} >
                            <option value="">Grade All</option>
                            <option value="ss">SS</option>
                            <option value="s">S</option>
                            <option value="a">A</option>
                        </Select>
                    </SettingSmallInput>
                    <SettingSmallInput>
                        <Select name="price" defaultValue={"des"} >
                            <option value="des">Low to High</option>
                            <option value="cre">High to Low</option>
                        </Select>
                    </SettingSmallInput>
                </SettingInnerLay>
            </SettingLay>
            <Result>
                <h1>Result</h1>
                </Result>
            <ResultScroll>
                <ResultDiv>
                    {
                        [1,1,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,5].map((data,i) => < NftResult key={i}  />)   
                    }
                </ResultDiv>
            </ResultScroll>
        </NftDiv>
    </Buy>
  );
}


export default Nft;
