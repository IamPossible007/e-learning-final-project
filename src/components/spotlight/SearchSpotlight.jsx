import { SpotlightProvider } from "@mantine/spotlight";
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function SearchSpotlight({ children }) {
  const navigate = useNavigate();
  const actions = [
    {
      title: "Home",
      description: "Get to home page",
      onTrigger: () => navigate("/"),
      icon: <IconHome size='1.2rem' />,
      key:"home",
    },
    {
      title: "Get to learn",
      description: "Know full information about programming",
      onTrigger: () => navigate("/loans"),
      icon: <IconDashboard size='1.2rem' />,
      key: 'learn',
    },
    {
      title: "About us",
      description: "Get to know about our journey",
      onTrigger: () => navigate("/about"),
      icon: <IconFileText size='1.2rem' />,
      key:"aboutus",
    },
  ];

  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size='1.2rem' />}
      searchPlaceholder='Search...'
      nothingFoundMessage='Nothing found...'
    >
      {children}
    </SpotlightProvider>
  );
}

export default SearchSpotlight;
