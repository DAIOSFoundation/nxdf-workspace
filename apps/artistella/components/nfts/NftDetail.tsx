import Image from 'next/image';
import styled from 'styled-components';
import Img1 from '../../public/images/1.png';

const NftDetailLay = styled.div<{ setDetail?: boolean }>`
  width: 300px;
  height: 40%;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
  z-index: auto;
  position: absolute;
  opacity: 1;
  margin-left: 20px;
  right: 8%;
  top: 10%;
  display: ${(props) => (props.setDetail ? 'flex' : 'none')};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const ResultDes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

const DetailTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 20px;
`;

const DetailData = styled.div`
  background-color: yellow;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
`;

const DetailDes = styled.div`
  display: flex;
  flex-direction: column;
  span {
    display: block;
  }
`;

const DesTitle = styled.span`
  font-weight: bold;
  color: gray;
`;

const ItemActivity = styled.div`
  margin-top: 20px;
  width: 100%;
  background-color: yellow;
  padding: 10px;
`;

const NftDetail = ({ detail, setDetail, data }) => {
  const fadeOut = () => {
    return setDetail(!detail);
  };

  return (
    <NftDetailLay setDetail={detail}>
      <ResultDes>
        <DetailHeader>
          <span>Selected District</span> <div onClick={fadeOut}>X</div>
        </DetailHeader>
        <DetailTitle>
          <span>Disctirct No.001</span>
          <span>{data?.name}</span>
        </DetailTitle>
        <DetailData>
          <DetailDes>
            <DesTitle>Owner</DesTitle>
            <span>None</span>
          </DetailDes>
          <DetailDes>
            <DesTitle>Owner</DesTitle>
            <span>None</span>
          </DetailDes>
          <DetailDes>
            <DesTitle>Owner</DesTitle>
            <span>None</span>
          </DetailDes>
        </DetailData>
        <ItemActivity>
          <span>Item Activity</span>
        </ItemActivity>
      </ResultDes>
    </NftDetailLay>
  );
};

export default NftDetail;
