import { useEffect, useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Button,
  rem,
} from "@mantine/core";
import { useMantineColorScheme, ActionIcon } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { useSpotlight } from "@mantine/spotlight";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 10,

    [theme.fn.smallerThan("md")]: {
      marginBottom: "8px !important",
    },
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  logo: {
    height: "36px",
  },

  name: {
    marginLeft: "12px",
    fontSize: rem(24),
  },

  title: {
    color:
      theme.colorScheme === "dark" ? theme.colors.gray[3] : theme.black,
    display: "flex",
    alignItems: "center",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).color,
    },
  },

  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.radius.lg,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[0],
    color:
      theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    border: `1px solid ${
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  toggleTheme: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

const links = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/loans",
    label: "Courses",
  },
  {
    link: "/login_component",
    label: "Login",
  },
  {
    link: "/about",
    label: "About Us",
  },
];

export function TopNavbar() {
  const navigate = useNavigate();
  const spotlight = useSpotlight();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const location = useLocation();
  const [opened, { toggle, close }] = useDisclosure(false);

  const [active, setActive] = useState(location.pathname);
  const { classes, cx } = useStyles();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container size='lg' className={classes.header}>
        <div className={classes.title}>
          <img className={classes.logo} src={Logo} alt='logo' />
          <h1 className={classes.name}>E LEARNING</h1>
        </div>
        <Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Button
            className={classes.search}
            leftIcon={<IconSearch size='1rem' stroke={1.5} />}
            onClick={() => spotlight.openSpotlight()}
            variant='white'
          >
            Search
          </Button>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            className={classes.toggleTheme}
            size='lg'
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.yellow[4]
                  : theme.colors.blue[6],
            })}
          >
            {colorScheme === "dark" ? (
              <IconSun size='1.2rem' />
            ) : (
              <IconMoonStars size='1.2rem' />
            )}
          </ActionIcon>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size='sm'
        />
        <Transition
          transition='pop-top-right'
          duration={200}
          mounted={opened}
        >
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
