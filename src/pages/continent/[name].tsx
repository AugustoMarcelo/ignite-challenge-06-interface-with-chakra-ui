import { Flex } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { PageBannerHeader } from '../../components/PageBannerHeader';
import { PageCities } from '../../components/PageCities';
import { PageInfo } from '../../components/PageInfo';

export default function Continent() {
  return (
    <Flex direction="column" h="100%" w="100%">
      <Header showBackButton />

      <PageBannerHeader />

      <PageInfo />

      <PageCities />
    </Flex>
  );
}
