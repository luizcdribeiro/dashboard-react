import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luiz Carlos Ribeiro</Text>
          <Text color="gray.300" fontSize="small">
            luizjunior.dantas@gmail.com
          </Text>

        </Box>
      )}

      <Avatar size="md" name="Luiz Carlos Ribeiro" />

    </Flex>
  ) 
}