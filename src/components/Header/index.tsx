import { Flex, useBreakpointValue, Icon, IconButton } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "../Header/Logo";
import { NotificationNav } from "../Header/NotificationNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";

export function Header() {

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
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

      {!isWideVersion && (
        <IconButton 
          fontSize="24"
          variant="unstyled"
          icon={<Icon as={RiMenuLine} />}
          onClick={onOpen}
          aria-label="Open navigation"
          mr="2"
        />
      )}
      <Logo />

     {isWideVersion && (  <SearchBox /> )}

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>

    </Flex>
  )
}