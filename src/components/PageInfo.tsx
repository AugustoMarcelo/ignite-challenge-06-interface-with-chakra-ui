import { SimpleGrid, Text, HStack, VStack } from '@chakra-ui/react';

export function PageInfo() {
  return (
    <SimpleGrid mx="36" columns={2} spacing="16" my="20">
      <Text
        maxW="600px"
        textAlign="justify"
        color="gray.600"
        fontSize="2xl"
        lineHeight="9"
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
      </Text>
      <HStack justify="center" spacing="10">
        <VStack>
          <Text color="yellow.900" fontWeight="semibold" fontSize="5xl">
            50
          </Text>
          <Text color="gray.600" fontWeight="semibold" fontSize="2xl">
            países
          </Text>
        </VStack>
        <VStack>
          <Text color="yellow.900" fontWeight="semibold" fontSize="5xl">
            60
          </Text>
          <Text color="gray.600" fontWeight="semibold" fontSize="2xl">
            línguas
          </Text>
        </VStack>
        <VStack>
          <Text color="yellow.900" fontWeight="semibold" fontSize="5xl">
            27
          </Text>
          <Text color="gray.600" fontWeight="semibold" fontSize="2xl">
            cidades +100
          </Text>
        </VStack>
      </HStack>
    </SimpleGrid>
  );
}
