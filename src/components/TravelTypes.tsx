import { VStack, HStack, Image, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <HStack justify="space-between" px="32" mt="28">
      <VStack align="center" spacing="6">
        <Image src="/cocktail.svg" />
        <Text fontWeight="600" fontSize="2xl">vida noturna</Text>
      </VStack>
      <VStack align="center" spacing="6">
        <Image src="/surf.svg" />
        <Text fontWeight="600" fontSize="2xl">praia</Text>
      </VStack>
      <VStack align="center" spacing="6">
        <Image src="/building.svg" />
        <Text fontWeight="600" fontSize="2xl">moderno</Text>
      </VStack>
      <VStack align="center" spacing="6">
        <Image src="/museum.svg" />
        <Text fontWeight="600" fontSize="2xl">clássico</Text>
      </VStack>
      <VStack align="center" spacing="6">
        <Image src="/earth.svg" />
        <Text fontWeight="600" fontSize="2xl">e mais...</Text>
      </VStack>
    </HStack>
  )
}