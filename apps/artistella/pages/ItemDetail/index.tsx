import styled from 'styled-components';
import ItemHistory from './detailContent/itemHistoty'
import Activities from './activities/activities'
import MoreCollection from './moreCollection/moreCollection';
import InfoList from './detailContent/infoList'

const DetailLayout=styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top:130px;
  margin-bottom: 50px;
`

const DetailContent = styled.div`
  width: 100%;
  display: flex;
`


function ItemDetail() {
  return (
        <DetailLayout>
          <DetailContent>
            <ItemHistory img='images/gird.png'/>
            <InfoList
              title='lorem ipsum'
              artisitName='lorem ipsum'
              price='1.4'
              about='Ut exercitation cupidatat tempor elit occaecat ad anim id commodo in dolor consequat.'
              mintAdress='asdfghjgfdsa234567543'
              owner='asdfghjgfdsa234567543'
              tokenAdress='asdfghjgfdsa234567543'
            />
          </DetailContent>
            <Activities/>
            <MoreCollection/>
        </DetailLayout>
  )
}

export default ItemDetail;