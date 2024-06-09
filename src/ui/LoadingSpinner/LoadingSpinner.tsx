export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[200px] w-[200px]">
      <div className="animate-spin rounded-full h-full w-full border-t-4 border-b-4 border-primary"></div>
    </div>
  );
};
