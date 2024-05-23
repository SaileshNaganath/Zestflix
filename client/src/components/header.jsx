import { Button } from "./button";
import { Container } from "./container";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  
  const navigate = useNavigate();

  return (
    <>
      <header className="relative z-20 text-white">

        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-4xl font-semibold">Zestflix</p>
          <Button size="medium" onClick={()=>navigate('/home')}>Login</Button>
        </Container>

      </header>
      
    </>
  );
};
