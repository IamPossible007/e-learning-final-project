import {
  Container,
  Title,
  Accordion,
  createStyles,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 300,
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    color: theme.colorScheme === "dark" && theme.colors.gray[3],
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3]
    }`,
  },
}));

export function FAQ() {
  const { classes } = useStyles();
  return (
    <Container size='md' className={classes.wrapper}>
      <Title align='center' className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant='separated'>
        <Accordion.Item className={classes.item} value='reset-password'>
          <Accordion.Control>How do I enroll in a course?</Accordion.Control>
          <Accordion.Panel>
          You can enroll in courses online or visit one of our learning centers to complete your registration. Our enrollment process is simple and easy to follow.

          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value='another-account'>
        <Accordion.Control>
  How quickly can I start my course after enrolling?
</Accordion.Control>
<Accordion.Panel>
  Our efficient enrollment process means that you can start your course in as little as 24 hours. We understand that our learners are eager to begin their educational journey, and we work hard to make that happen.
</Accordion.Panel>

        </Accordion.Item>

        <Accordion.Item className={classes.item} value='newsletter'>
        <Accordion.Control>
  What if I face challenges in keeping up with my course payments?
</Accordion.Control>
<Accordion.Panel>
  We understand that unexpected situations can happen, and we're here to support you. If you're facing challenges in making your course payments, please reach out to our support team as soon as possible. We may be able to explore alternative solutions or work out a plan to help you continue your learning journey.
</Accordion.Panel>

        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
