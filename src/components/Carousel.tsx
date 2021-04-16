import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  return (
    <Box
      w={{ base: '100%', lg: 1240 }}
      alignSelf="center"
      mt={{ base: '5', lg: '12' }}
      mb="10"
    >
      <Swiper navigation pagination>
        <SwiperSlide>
          <Link href="/continent/europe" passHref>
            <Flex
              as="a"
              bgImage="url('/continents/europe/slider.png')"
              bgSize="cover"
              bgRepeat="no-repeat"
              h="450px"
              direction="column"
              align="center"
              justify="center"
            >
              <Text
                fontWeight="bold"
                fontSize={{ base: '2xl', lg: '5xl' }}
                color="gray.50"
              >
                Europa
              </Text>
              <Text fontSize={{ base: 'sm', lg: '2xl' }} color="gray.200">
                O continente mais antigo.
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/continents/north-america/slider.jpg')"
            bgSize="cover"
            bgRepeat="no-repeat"
            h="450px"
            direction="column"
            align="center"
            justify="center"
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: '2xl', lg: '5xl' }}
              color="gray.50"
            >
              América do Norte
            </Text>
            <Text fontSize={{ base: 'sm', lg: '2xl' }} color="gray.200">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/continents/south-america/slider.jpg')"
            bgSize="cover"
            bgRepeat="no-repeat"
            h="450px"
            direction="column"
            align="center"
            justify="center"
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: '2xl', lg: '5xl' }}
              color="gray.50"
            >
              América do Sul
            </Text>
            <Text fontSize={{ base: 'sm', lg: '2xl' }} color="gray.200">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/continents/asia/slider.jpg')"
            bgSize="cover"
            bgRepeat="no-repeat"
            h="450px"
            direction="column"
            align="center"
            justify="center"
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: '2xl', lg: '5xl' }}
              color="gray.50"
            >
              Ásia
            </Text>
            <Text fontSize={{ base: 'sm', lg: '2xl' }} color="gray.200">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/continents/africa/slider.jpg')"
            bgSize="cover"
            bgRepeat="no-repeat"
            h="450px"
            direction="column"
            align="center"
            justify="center"
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: '2xl', lg: '5xl' }}
              color="gray.50"
            >
              África
            </Text>
            <Text fontSize={{ base: 'sm', lg: '2xl' }} color="gray.200">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/continents/oceania/slider.jpg')"
            bgSize="cover"
            bgRepeat="no-repeat"
            h="450px"
            direction="column"
            align="center"
            justify="center"
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: '2xl', lg: '5xl' }}
              color="gray.50"
            >
              Oceania
            </Text>
            <Text fontSize={{ base: 'sm', lg: '2xl' }} color="gray.200">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
