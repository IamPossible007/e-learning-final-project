import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  rem,
} from "@mantine/core";
import {
  IconPuzzle,
  IconBook,
  IconHeadset,
  IconAdjustmentsAlt,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: IconPuzzle,
    title: "Engaging Content",
    description:
    "Explore a diverse range of courses with engaging content, covering various subjects and skill levels.",},

  {
    icon: IconHeadset,
    title: "Expert Support",
    description:
      "Benefit from our commitment to providing expert support, ensuring an enriching learning experience with guidance whenever needed.",
  },
  {
    icon: IconAdjustmentsAlt,
    title: "Tailored Learning Experiences",
    description:
      "Recognizing the uniqueness of every learner, we offer tailored learning experiences designed to meet individual needs.",
  },

  {
    icon: IconBook,
    title: "Transparent Learning Environment",

    description:
      "We are committed to transparency, providing clear and honest information to create a straightforward learning environment for all students.",
  },
];

export function FeaturesIcons() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius='md'
        variant='gradient'
        gradient={{ deg: 133, from: "blue", to: "#1864ab" }}
      >
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz='lg' mt='sm' fw={500}>
        {feature.title}
      </Text>
      <Text c='dimmed' fz='sm'>
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
        <Title className={classes.title} order={2}>
  Unlock Your Learning Potential
</Title>
<Text c='dimmed'>
  Our mission is to empower learners with diverse, engaging courses and personalized learning experiences, backed by exceptional support.
</Text>


          <Button
            variant='gradient'
            gradient={{ deg: 133, from: "blue", to: "#1864ab" }}
            onClick={() => navigate("/loans")}
            size='lg'
            radius='md'
            mt='xl'
          >
            Buy courses
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
