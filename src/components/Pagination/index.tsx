import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

type Props = {
  prev: string;
  next: string;
  handlePageChange: (url: string) => void;
};
const PaginationComp = ({ prev, next, handlePageChange }: Props) => {
  if (!prev && !next) return null;

  const handleClick = (url: string) => {
    handlePageChange(url);
  };

  return (
    <Pagination className="d-flex justify-content-between">
      <PaginationItem disabled={!prev}>
        <PaginationLink onClick={() => handleClick(prev)} previous />
      </PaginationItem>
      <PaginationItem disabled={!next}>
        <PaginationLink onClick={() => handleClick(next)} next />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComp;
