import { Divider, Flex, Text } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex direction="column" h="100%" w="100%">
      <Header />

      <Banner />

      <TravelTypes />

      <Divider
        alignSelf="center"
        w="24"
        h="2px"
        bg="gray.600"
        mt="20"
        mb="12"
      />

      <Text alignSelf="center" fontSize="4xl" fontWeight="medium">
        Vamos nessa?
      </Text>
      <Text alignSelf="center" fontSize="4xl" fontWeight="medium">
        Então escolha seu continente
      </Text>

      <Carousel />
    </Flex>
  );
}
