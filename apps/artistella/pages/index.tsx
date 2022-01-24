import styled from 'styled-components';
import Main from "./main";
import MainGrid from "./main/mainGrid";
import MainPagination from "./main/mainPagination";

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Main />
      <MainGrid />
      <MainPagination />
    </StyledPage>
  );
}

export default Index;
