import {
  createStyles,
  Anchor,
  Group,
  ActionIcon,
  Container,
  rem,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Logo from "../../assets/images/logo.png";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  logo: {
    height: "36px",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

const links = [
  {
    link: "#",
    label: "Contact",
  },
  {
    link: "#",
    label: "Privacy",
  },
  {
    link: "#",
    label: "Blog",
  },
  {
    link: "#",
    label: "Store",
  },
  {
    link: "#",
    label: "Careers",
  },
];

export function FooterSocial() {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor
      color='dimmed'
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size='sm'
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container size='lg' className={classes.inner}>
        <img className={classes.logo} src={Logo} alt='logo' />

        <Group className={classes.links}>{items}</Group>

        <Group spacing='xs' position='right' noWrap>
          <ActionIcon size='lg' variant='default' radius='xl'>
            <IconBrandTwitter size='1.05rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' variant='default' radius='xl'>
            <IconBrandYoutube size='1.05rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' variant='default' radius='xl'>
            <IconBrandInstagram size='1.05rem' stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
