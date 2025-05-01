type TotalInfoProps = {
  total: number;
};
export const TotalInfo = ({ total }: TotalInfoProps) => {
  return (
    <span className="text-xs uppercase text-nowrap text-ui-gray-medium font-medium">
      Total: {total}
    </span>
  );
};
