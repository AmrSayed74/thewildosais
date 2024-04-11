import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  color: ${(props) => (props.disabled ? "var(--color-grey-400)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;
// Displaying how many results in every page

const Pagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  //1) Get Current Page
  /* calculating the next page or the previous page 
  will, of course, always depend on the current page.
  next lines of code means if there is no current page this means i'm already in first page 
  but if there is current page I should guarantee it's a number */

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  //2) Knowing Page Count
  /* it's depending on how many results you have 
  if u have 50 results and every page fit to 10 results only 
  this means u need 5 pages to display these results*/

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    /* if current page 5 and i have only 5 pages (on other word we already in the last page)
     => so make us in this page without moving, In contrast if we on the first page or any page but not the last move us to next page */
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    /* if current page 1  (on other word we already in the first page)
     => so make us in this page without moving previous, In contrast move us to previous page if we already not in the first page */
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;
  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </P>
      <Buttons>
        <PaginationButton disabled={currentPage === 1} onClick={prevPage}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>
        <PaginationButton
          disabled={currentPage === pageCount}
          onClick={nextPage}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
};

export default Pagination;
