import { Flex, Image, Text, VStack } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      bgImage="url('/background.svg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      align="center"
      justify="space-between"
      px="32"
      py="20"
      position="relative"
      width="100%"
    >
      <VStack spacing="5" align="flex-start">
        <Text fontSize="4xl" fontWeight="500" color="gray.50" lineHeight="54px">
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Text>
        <Text fontSize="xl" color="gray.200">
          Chegou a hora de tirar do papel a viagem que você
          <br /> sempre sonhou.
        </Text>
      </VStack>
      <Image src="/airplane.svg" position="absolute" width={417} right="32" bottom="-8" />
    </Flex>
  );
}
