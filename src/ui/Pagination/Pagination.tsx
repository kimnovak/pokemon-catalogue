type PaginationProps = {
  handleNext: () => void;
  handlePrevious: () => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  handleNext,
  handlePrevious,
}) => {
  return (
    <div className="flex justify-between flex-wrap items-center space-x-4 py-4">
      <button
        onClick={handlePrevious}
        className="px-4 py-2 border rounded bg-primary text-white hover:opacity-90 w-[150px]"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="px-4 py-2 border rounded bg-primary text-white hover:opacity-90 w-[150px]"
      >
        Next
      </button>
    </div>
  );
};
