import {
  Image,
  Text,
  useBreakpointValue,
  Box,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';

const travelTypes = [
  {
    imageUrl: '/cocktail.svg',
    text: 'vida noturna',
  },
  {
    imageUrl: '/surf.svg',
    text: 'praia',
  },
  {
    imageUrl: '/building.svg',
    text: 'moderno',
  },
  {
    imageUrl: '/museum.svg',
    text: 'clássico',
  },
  {
    imageUrl: '/earth.svg',
    text: 'e mais...',
  },
];

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <SimpleGrid
      columns={{ base: 2, lg: 5 }}
      mt={{ base: '9', lg: '28' }}
      px={{ base: '12', lg: '32' }}
      spacing="4"
    >
      {travelTypes.map((travelType) => (
        <Flex
          align="center"
          justify="center"
          spacing="6"
          direction={{ base: 'row', lg: 'column' }}
        >
          {isWideVersion ? (
            <Image src={travelType.imageUrl} />
          ) : (
            <Box
              width="8px"
              height="8px"
              bgColor="yellow.900"
              borderRadius="full"
              mr="2"
            />
          )}
          <Text fontWeight="600" fontSize={{ base: 'lg', lg: '2xl' }}>
            {travelType.text}
          </Text>
        </Flex>
      ))}
    </SimpleGrid>
  );
}
