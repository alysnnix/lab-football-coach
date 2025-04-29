import { LogoSVG } from "@/components/shared/svg/logo";

const MarkBar = () => {
  return (
    <div className="flex items-center bg-ui-foreground h-[87px] px-6">
      <div>
        <div className="flex items-center gap-2">
          <LogoSVG.Icon className="*:fill-white" />
          <LogoSVG.Text />
        </div>
        <p className="font-montserrat text-white text-xs pl-6">
          Treinador De Futebol
        </p>
      </div>
    </div>
  );
};

const DividerArrow = () => (
  <svg
    className="w-2 h-2"
    xmlns="http://www.w3.org/2000/svg"
    width="5"
    height="6"
    viewBox="0 0 5 6"
    fill="none">
    <path
      d="M4.25115 2.27942C4.65999 2.67282 4.65999 3.32718 4.25115 3.72058L2.19338 5.70068C1.55807 6.312 0.5 5.86176 0.5 4.9801L0.5 1.0199C0.5 0.138242 1.55807 -0.311997 2.19338 0.299324L4.25115 2.27942Z"
      fill="#E2E2E2"
    />
  </svg>
);

export const Header = () => {
  return (
    <header>
      <MarkBar />
      <div className="px-6 flex items-center py-4">
        <div className="flex items-center gap-3">
          <LogoSVG.Icon />
          <p className="uppercase font-bold text-ui-primary text-sm">
            Bem vindo
          </p>
          <DividerArrow />
          <p className="text-[#6A6A6A] font-medoim text-sm">Registro</p>
        </div>
      </div>
    </header>
  );
};
