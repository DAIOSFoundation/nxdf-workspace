import Image from 'next/image';
import styled from 'styled-components';
import Img1 from "../../public/images/1.png";



const ResultLay = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 20px 10px;
    border-radius: 10px ;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
`;


const ResultImg = styled.div`
    width: 100%;
    height: 50%;
    background-color: red;
    border-radius:10px 10px 0px 0px;
`;


const ResultDes = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ResultData = styled.div`
    align-self: flex-start;
    margin-left : 5%;
    display: flex;
    flex-direction: column;
`;


const BuyBtn = styled.div`
    padding: 10px;
    margin: 10px ;
    height: 15%;
    width: 90%;
    background-color: #F78F1E ;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NftResult = () => {
  return (
    <ResultLay>
        <ResultImg></ResultImg>
        <ResultDes>
            <ResultData>
                <span>land</span>
                <span>#123123</span>
                <div>
                    <span>value</span>
                    <span>grade</span>
                </div>
            </ResultData>
        </ResultDes>
        <BuyBtn>
            <div>
                {/* <Image alt={"coin"} src={Img1} width={25} height={25}/> */}
                <span>123123</span>    
            </div>       
            <div><span>Buy</span></div>       
        </BuyBtn>
    </ResultLay>
  );
}


export default NftResult;
