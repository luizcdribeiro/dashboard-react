import { Flex } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { NotificationNav } from "../Header/NotificationNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";

export function Header() {
  return(
    <Flex
      as="header"
      h="20"
      width="100%"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile />
      </Flex>

    </Flex>
  )
}