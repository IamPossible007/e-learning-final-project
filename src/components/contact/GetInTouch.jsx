import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem,
  Container,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ContactIconsList } from "./ContactIcons";
import { IconCheck } from "@tabler/icons-react";
import bg from "../../assets/images/wave.svg";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: rem(4),
      border: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: rem(-12),
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg,
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: `${rem(1)} solid transparent`,
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(280)}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      color: theme.colorScheme === "dark" && theme.colors.gray[3],
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export function GetInTouch() {
  const { classes } = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    notifications.show({
      color: "teal",
      icon: <IconCheck />,
      title: "Mail notification",
      message: "Hey, please check your mail",
    });
  };

  return (
    <Container size='md' py='xl' shadow='md' radius='lg'>
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text fz='lg' fw={700} className={classes.title} c='#fff'>
            Contact information
          </Text>

          <ContactIconsList variant='white' />
        </div>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Text fz='lg' fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid
              cols={2}
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
              <TextInput label='Your name' placeholder='Your name' />
              <TextInput
                label='Your email'
                placeholder='hello@finance.auto'
                required
              />
            </SimpleGrid>

            <TextInput
              mt='md'
              label='Subject'
              placeholder='Subject'
              required
            />

            <Textarea
              mt='md'
              label='Your message'
              placeholder='Please include all relevant information'
              minRows={3}
            />

            <Group position='right' mt='md'>
              <Button type='submit' className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Container>
  );
}
