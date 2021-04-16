import { Flex, Icon, IconButton, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      h={{ base: '50px', lg: '100px' }}
      align="center"
      justify="flex-start"
      px={{ base: '4', lg: '36' }}
    >
      {showBackButton && (
        <Link href="/" passHref>
          <IconButton
            as="a"
            aria-label="Back to home page"
            size="sm"
            fontSize="sm"
            bg="transparent"
            icon={
              <Icon
                as={FiChevronLeft}
                color="gray.600"
                fontSize={{ base: '16', lg: '24' }}
              />
            }
          />
        </Link>
      )}
      <Image
        src="/logo.svg"
        alt="Logo"
        mx="auto"
        h={{ base: '20px', lg: '50px' }}
      />
    </Flex>
  );
}
