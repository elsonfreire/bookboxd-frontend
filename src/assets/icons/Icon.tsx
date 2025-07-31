import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

export const Icon = ({
  children,
  size = 24,
  color = "#FFFFFF",
  ...props
}: IconProps & { children: React.ReactNode }) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      {...props}
    >
      {children}
    </svg>
  );
};
