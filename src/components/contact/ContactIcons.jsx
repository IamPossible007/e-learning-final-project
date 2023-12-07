import {
  createStyles,
  ThemeIcon,
  Text,
  SimpleGrid,
  Box,
  Stack,
} from "@mantine/core";
import {
  IconSun,
  IconPhone,
  IconMapPin,
  IconAt,
} from "@tabler/icons-react";

const useStyles = createStyles((theme, { variant }) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${
            theme.colors[theme.primaryColor][4]
          } 0%, ${theme.colors[theme.primaryColor][6]} 100%)`
        : "none",
    backgroundColor: "transparent",
  },

  title: {
    color:
      variant === "gradient"
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === "gradient" ? theme.black : theme.white,
  },
}));

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  ...others
}) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius='md' className={classes.icon}>
          <Icon size='1.5rem' />
        </ThemeIcon>
      ) : (
        <Box mr='md'>
          <Icon size='1.5rem' />
        </Box>
      )}

      <div>
        <Text size='xs' className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "sampleMiniProject@we.com", icon: IconAt },
  { title: "Phone", description: "+91 363936293", icon: IconPhone },
  {
    title: "Address",
    description: "D.J.Sanghvi",
    icon: IconMapPin,
  },
  {
    title: "Working hours",
    description: "10 a.m. - 9 p.m.",
    icon: IconSun,
  },
];

export function ContactIconsList({ data = MOCKDATA, variant }) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

export function ContactIcons() {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white,
        })}
      >
        <ContactIconsList />
      </Box>

      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${
            theme.colors[theme.primaryColor][6]
          } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
        })}
      >
        <ContactIconsList variant='white' />
      </Box>
    </SimpleGrid>
  );
}
