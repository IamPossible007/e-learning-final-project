import { Container } from "@mantine/core";
import { Comments } from "../components/comments/Comments";
import { CardsCarousel } from "../components/carousel/CardsCarousel";
import { HeroText } from "../components/hero/HeroText";

function Loans() {
  return (
    <div>
      <HeroText />
      <Container my='md'>
        <CardsCarousel />
      </Container>
      <Comments />
    </div>
  );
}

export default Loans;
