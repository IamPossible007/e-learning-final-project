import {
  createStyles,
  Text,
  Title,
  Container,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    marginBottom: theme.spacing.md,
    width: theme.spacing.full,
  },

  title: {
    color:
      theme.colorScheme === "dark" ? theme.colors.gray[3] : theme.black,
    fontSize: rem(34),
    fontWeight: 700,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.lg,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  body: {
    paddingLeft: rem(54),
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    "& > p:last-child": {
      marginBottom: 0,
    },
  },
}));

const comments = [
  {
    postedAt: "2 days ago",
    body: "<p>I had a fantastic experience exploring the courses on this e-learning platform. The team was professional, efficient, and helped me discover the best learning options tailored to my needs. </p>",
    author: {
      name: "Harsh Kanani",
      image:
        "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    },
  },
  {
    postedAt: "10 days ago",
    body: "<p>Embarking on my learning journey with this e-learning platform was nothing short of amazing. The team's professionalism, efficiency, and dedication helped me discover courses perfectly tailored to my curiosity and ambitions.</p>",

    author: {
      name: "Gunjan Moradiya",
      image:
        "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    },
  },
  {
    postedAt: "3 days ago",
    body: "Exploring the courses on this e-learning platform has been a game-changer for me. The process was seamless, and they guided me through every step of my learning journey. I would highly recommend them to anyone seeking quality education.",
    author: {
      name: "Heet lathiya",
      image:
        "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    },
  },
];

export function Comments() {
  const { classes } = useStyles();

  return (
    <Container size='md' py='xl' shadow='md' radius='lg'>
      <Title align='center' className={classes.title}>
        What Our Learners Say
      </Title>
      {comments.map(({ author, body, postedAt }) => (
        <Paper withBorder radius='md' className={classes.comment}>
          <Group>
            <Avatar src={author.image} alt={author.name} radius='xl' />
            <div>
              <Text fz='sm'>{author.name}</Text>
              <Text fz='xs' c='dimmed'>
                {postedAt}
              </Text>
            </div>
          </Group>
          <TypographyStylesProvider className={classes.body}>
            <div
              className={classes.content}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </TypographyStylesProvider>
        </Paper>
      ))}
    </Container>
  );
}
