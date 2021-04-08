import { Flex, Text } from "@chakra-ui/react";

export function PageBannerHeader() {
  return (
    <Flex
      direction="column"
      bgImage="url('/continents/europe/slider.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      h="500px"
      align="flex-start"
      justify="flex-end"
      pl="36"
      pb="16"
    >
      <Text fontSize="5xl" color="gray.50" fontWeight="semibold">Europa</Text>
    </Flex>
  )
}