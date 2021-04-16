import { Flex, Text } from '@chakra-ui/react';

export function PageBannerHeader() {
  return (
    <Flex
      direction="column"
      bgImage="url('/continents/europe/slider.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      h={{ base: '150px', lg: '500px' }}
      align={{ base: 'center', lg: 'flex-start' }}
      justify={{ base: 'center', lg: 'flex-end' }}
      pl={{ base: '0', lg: '36' }}
      pb={{ base: '0', lg: '16' }}
    >
      <Text
        fontSize={{ base: '3xl', lg: '5xl' }}
        color="gray.50"
        fontWeight="semibold"
      >
        Europa
      </Text>
    </Flex>
  );
}
