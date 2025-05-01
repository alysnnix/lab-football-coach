import { PageSelector } from "./page-selector";

type GoToNextPageProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};
export const GoToNextPage = ({
  totalPages,
  currentPage,
  onPageChange,
}: GoToNextPageProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="grid grid-cols-[auto_min-content] gap-2 items-center">
      <span className="text-xs uppercase text-ui-gray-medium font-medium text-right">
        Ir para a página
      </span>
      <PageSelector
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};