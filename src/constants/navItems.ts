import type { JSX } from "react";
import type { IconProps } from "../components/icons/Icon";
import { HomeIcon, BookIcon, StarIcon } from "../components/icons/index";

type NavItem = {
  path: string;
  icon: (props: IconProps) => JSX.Element;
};

export const navItems: Record<string, NavItem> = {
  Home: {
    path: "/",
    icon: HomeIcon,
  },
  Books: {
    path: "/books",
    icon: BookIcon,
  },
  Reviews: {
    path: "/reviews",
    icon: StarIcon,
  },
};
