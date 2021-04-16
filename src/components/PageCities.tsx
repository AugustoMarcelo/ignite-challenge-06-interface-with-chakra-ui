import { Flex, Image, Text, SimpleGrid } from '@chakra-ui/react';

export function PageCities() {
  return (
    <Flex direction="column" mx={{ base: '4', lg: '36' }}>
      <Text
        fontSize={{ base: '2xl', lg: '4xl' }}
        fontWeight="medium"
        mb={{ base: '5', lg: '9' }}
      >
        Cidades +100
      </Text>

      <SimpleGrid
        columns={{ base: 1, lg: 4 }}
        spacing={{ base: '5', lg: '12' }}
        mb="10"
        mx={{ base: '16' }}
      >
        <Flex direction="column" bg="white" borderRadius="base">
          <Image
            src="/continents/europe/slider.png"
            h="173px"
            borderTopRadius="base"
          />
          <Flex
            align="center"
            justify="space-between"
            px="6"
            py="5"
            borderBottomRadius="base"
            borderLeftWidth="thin"
            borderRightWidth="thin"
            borderBottomWidth="thin"
            borderColor="yellow.900"
          >
            <Flex direction="column">
              <Text fontWeight="semibold" fontSize="lg" mb="3">
                Londres
              </Text>
              <Text fontWeight="medium" fontSize="md" color="gray.400">
                Reino Unido
              </Text>
            </Flex>
            <Image src="/flags/uk.png" h="30" w="30" />
          </Flex>
        </Flex>
        <Flex direction="column" bg="white" borderRadius="base">
          <Image
            src="/continents/europe/slider.png"
            h="173px"
            borderTopRadius="base"
          />
          <Flex
            align="center"
            justify="space-between"
            px="6"
            py="5"
            borderBottomRadius="base"
            borderLeftWidth="thin"
            borderRightWidth="thin"
            borderBottomWidth="thin"
            borderColor="yellow.900"
          >
            <Flex direction="column">
              <Text fontWeight="semibold" fontSize="lg" mb="3">
                Londres
              </Text>
              <Text fontWeight="medium" fontSize="md" color="gray.400">
                Reino Unido
              </Text>
            </Flex>
            <Image src="/flags/uk.png" h="30" w="30" />
          </Flex>
        </Flex>
        <Flex direction="column" bg="white" borderRadius="base">
          <Image
            src="/continents/europe/slider.png"
            h="173px"
            borderTopRadius="base"
          />
          <Flex
            align="center"
            justify="space-between"
            px="6"
            py="5"
            borderBottomRadius="base"
            borderLeftWidth="thin"
            borderRightWidth="thin"
            borderBottomWidth="thin"
            borderColor="yellow.900"
          >
            <Flex direction="column">
              <Text fontWeight="semibold" fontSize="lg" mb="3">
                Londres
              </Text>
              <Text fontWeight="medium" fontSize="md" color="gray.400">
                Reino Unido
              </Text>
            </Flex>
            <Image src="/flags/uk.png" h="30" w="30" />
          </Flex>
        </Flex>
        <Flex direction="column" bg="white" borderRadius="base">
          <Image
            src="/continents/europe/slider.png"
            h="173px"
            borderTopRadius="base"
          />
          <Flex
            align="center"
            justify="space-between"
            px="6"
            py="5"
            borderBottomRadius="base"
            borderLeftWidth="thin"
            borderRightWidth="thin"
            borderBottomWidth="thin"
            borderColor="yellow.900"
          >
            <Flex direction="column">
              <Text fontWeight="semibold" fontSize="lg" mb="3">
                Londres
              </Text>
              <Text fontWeight="medium" fontSize="md" color="gray.400">
                Reino Unido
              </Text>
            </Flex>
            <Image src="/flags/uk.png" h="30" w="30" />
          </Flex>
        </Flex>
        <Flex direction="column" bg="white" borderRadius="base">
          <Image
            src="/continents/europe/slider.png"
            h="173px"
            borderTopRadius="base"
          />
          <Flex
            align="center"
            justify="space-between"
            px="6"
            py="5"
            borderBottomRadius="base"
            borderLeftWidth="thin"
            borderRightWidth="thin"
            borderBottomWidth="thin"
            borderColor="yellow.900"
          >
            <Flex direction="column">
              <Text fontWeight="semibold" fontSize="lg" mb="3">
                Londres
              </Text>
              <Text fontWeight="medium" fontSize="md" color="gray.400">
                Reino Unido
              </Text>
            </Flex>
            <Image src="/flags/uk.png" h="30" w="30" />
          </Flex>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
