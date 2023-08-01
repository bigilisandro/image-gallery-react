import { Button } from "react-bootstrap";

interface PaginationProps {
  currentPage: number;
  endIndex: number;
  setCurrentPage: (currentPage: number) => void;
  res: any;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  endIndex,
  setCurrentPage,
  res,
}) => {
  return (
    <div
      className="d-flex justify-content-evenly my-4"
      data-test-id="pagination-component"
    >
      <Button
        variant="primary"
        size="lg"
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </Button>
      <Button
        variant="primary"
        size="lg"
        disabled={endIndex >= res.length}
        className="ml-3"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
