import { Container } from "@mantine/core";
import { GetInTouch } from "../components/contact/GetInTouch";
import { FeaturesIcons } from "../components/features/FeaturesIcons";

function About() {
  return (
    <div>
      <Container my='md'>
        <FeaturesIcons />
      </Container>
      <GetInTouch />
    </div>
  );
}

export default About;
