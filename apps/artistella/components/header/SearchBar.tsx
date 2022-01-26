import search from  '../../images/icon-search.png'
import search2x from  '../../images/icon-search@2x.png'
import search3x from  '../../images/icon-search@3x.png'
import {SearchDiv,SearchBardiv,SearchButton,Searchbar,Img} from './style'

function Searchs() {
  return(
    <SearchDiv>
      <SearchBardiv>
        <SearchButton as="button"> <Img src='images/icon-search.png' srcSet='images/icon-search@2x.png, images/icon-search@3x.png'/></SearchButton>
        <Searchbar type={'text'} placeholder='Search Collections' />
      </SearchBardiv>
    </SearchDiv>
  );
 }


 export default Searchs;