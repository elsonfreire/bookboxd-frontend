import type { JSX } from "react";
import type { IconProps } from "../components/icons/Icon";
import { HomeIcon } from "../components/icons/HomeIcon";
import { StarIcon } from "../components/icons/StarIcon";
import { BookIcon } from "../components/icons/BookIcon";

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
