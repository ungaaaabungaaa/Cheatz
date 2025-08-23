import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";
import NextLink from "next/link";
export const Navbar = () => {
  return (
    <HeroUINavbar className="my-2" position="sticky" maxWidth="xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-xl md:text-2xl lg:text-4xl text-inherit">Exam.Sucks</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </HeroUINavbar>
  );
};
