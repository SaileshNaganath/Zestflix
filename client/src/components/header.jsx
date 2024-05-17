import { Button } from "./button";
import { Container } from "./container";

export const Header = () => {
  return (
    <>
      <header className="relative z-20 text-white">

        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-4xl font-semibold">Zestflix</p>
          <Button size="medium">Login</Button>
        </Container>

      </header>
      
    </>
  );
};
