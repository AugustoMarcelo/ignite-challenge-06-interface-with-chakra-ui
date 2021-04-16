import {
  Flex,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    baes: false,
    lg: true,
  });

  return (
    <Flex
      bgImage="url('/background.svg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      align="center"
      justify="space-between"
      px={['2', '8', '32']}
      py={['2', '8', '20']}
      position="relative"
      width="100%"
    >
      <VStack spacing="5" align="flex-start">
        <Text
          fontSize={{ base: 'xl', lg: '4xl' }}
          fontWeight="500"
          color="gray.50"
          lineHeight={{ base: '8', lg: '54px' }}
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Text>
        <Text fontSize={{ base: 'sm', lg: 'xl' }} color="gray.200">
          Chegou a hora de tirar do papel a viagem que você
          <br /> sempre sonhou.
        </Text>
      </VStack>
      {isWideVersion && (
        <Image
          src="/airplane.svg"
          position="absolute"
          width={417}
          right="32"
          bottom="-8"
        />
      )}
    </Flex>
  );
}
