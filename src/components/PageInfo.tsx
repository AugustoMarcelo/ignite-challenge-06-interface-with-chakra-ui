import { SimpleGrid, Text, HStack, VStack } from '@chakra-ui/react';

export function PageInfo() {
  return (
    <SimpleGrid
      mx={{ base: '4', lg: '36' }}
      columns={1}
      spacing={{ base: '4', lg: '16' }}
      my={{ base: '6', lg: '20' }}
    >
      <Text
        maxW="600px"
        textAlign="justify"
        color="gray.600"
        fontSize={{ base: 'md', lg: '2xl' }}
        lineHeight={{ base: '8', lg: '9' }}
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
      </Text>
      <HStack justify={{base: 'space-between', lg: "center"}} spacing="10">
        <VStack align={{ base: 'flex-start' }}>
          <Text
            color="yellow.900"
            fontWeight="semibold"
            fontSize={{ base: '2xl', lg: '5xl' }}
          >
            50
          </Text>
          <Text
            color="gray.600"
            fontWeight="semibold"
            fontSize={{ base: 'lg', lg: '2xl' }}
          >
            países
          </Text>
        </VStack>
        <VStack align={{ base: 'flex-start' }}>
          <Text
            color="yellow.900"
            fontWeight="semibold"
            fontSize={{ base: '2xl', lg: '5xl' }}
          >
            60
          </Text>
          <Text
            color="gray.600"
            fontWeight="semibold"
            fontSize={{ base: 'lg', lg: '2xl' }}
          >
            línguas
          </Text>
        </VStack>
        <VStack align={{ base: 'flex-start' }}>
          <Text
            color="yellow.900"
            fontWeight="semibold"
            fontSize={{ base: '2xl', lg: '5xl' }}
          >
            27
          </Text>
          <Text
            color="gray.600"
            fontWeight="semibold"
            fontSize={{ base: 'lg', lg: '2xl' }}
          >
            cidades +100
          </Text>
        </VStack>
      </HStack>
    </SimpleGrid>
  );
}
