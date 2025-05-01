import { useRouter } from "next/navigation";
import { PageSelector } from "./page-selector";

type GoToNextPageProps = {
  totalPages: number;
  currentPage: number;
  generatePageUrl: (page: number) => string;
};
export const GoToNextPage = ({
  totalPages,
  currentPage,
  generatePageUrl,
}: GoToNextPageProps) => {

  const router = useRouter();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const url = generatePageUrl(page);
        router.push(url, {
          scroll: false,
        });
    }
  };

  if (totalPages <= 1) return null;

  return (
    <div className="grid grid-cols-[auto_min-content] gap-2 items-center">
      <span className="text-xs uppercase text-ui-gray-medium font-medium text-right">
        Ir para a página
      </span>
      <PageSelector
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
