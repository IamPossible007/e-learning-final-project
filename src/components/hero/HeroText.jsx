import { createStyles, Title, Text, Container, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingBottom: rem(20),

    [theme.fn.smallerThan("md")]: {
      paddingTop: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][
        theme.colorScheme === "dark" ? 4 : 6
      ],
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },
}));

export function HeroText() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          Explore Our Range of{" "}
          <Text component='span' className={classes.highlight} inherit>
           E-Learning Courses
          </Text>{" "}
    
        </Title>

        <Container p={0} size={600}>
          <Text size='lg' color='dimmed' className={classes.description}>
            E-learning offers unparalleled flexibility, empowering learners to tailor their educational experience to their unique needs and schedules. With the ability to access course materials anytime, anywhere, students can strike a balance between work, personal commitments, and education, fostering a dynamic and adaptable approach to learning.
          </Text>
        </Container>
      </div>
    </Container>
  );
}
