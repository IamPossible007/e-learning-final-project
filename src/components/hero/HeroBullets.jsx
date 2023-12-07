import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import BannerImage from "../../assets/images/banner.png";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl})`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column-reverse",
    },
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      margin: "0 auto",
      maxWidth: "28rem",
      marginBottom: `${theme.spacing.xl}`,
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function HeroBullets() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Drive Your<span className={classes.highlight}>Dreams</span>{" "}
              <br />
              with Our courses
            </Title>
            <Text color='dimmed' mt='md'>
              Rev up your life with our trusted online programming services. We
              make it easy to get the mknowledge about various programming languages along with some other professional courses too.
            </Text>

            <List
              mt={30}
              spacing='sm'
              size='sm'
              icon={
                <ThemeIcon size={20} radius='xl'>
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Apply online </b>
              </List.Item>
              <List.Item>
                <b>Get your course evaluated</b>
              </List.Item>
              <List.Item>
                <b>Get your course and keep learning</b>
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius='xl'
                size='md'
                className={classes.control}
                onClick={() => navigate("/loans")}
              >
                Instant E-Learning
              </Button>
              <Button
                variant='default'
                radius='xl'
                size='md'
                className={classes.control}
                onClick={() => navigate("/about")}
              >
                Enroll now
              </Button>
            </Group>
          </div>
          <Image src={BannerImage} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
