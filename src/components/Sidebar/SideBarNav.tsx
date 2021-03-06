import { Stack } from "@chakra-ui/layout";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
  return (
    <Stack spacing="12"  align="flex-start">
        
        <NavSection title="Geral">
          <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
          <NavLink  href="/users" icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>

        <NavSection title="Automação">
          <NavLink  href="/forms" icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink href="/automation" icon={RiGitMergeLine}>Automação</NavLink>

        </NavSection>
      </Stack>
  )
}