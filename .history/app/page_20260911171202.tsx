"use client";
import { 
  Box, 
  Flex, 
  HStack, 
  Input, 
  InputGroup, 
  InputRightElement, 
  IconButton, 
  Text, 
  Link 
} from '@chakra-ui/react';
import { SearchIcon, StarIcon } from '@chakra-ui/icons'; // Usando ícones padrão do Chakra como exemplo
import Image from "next/image";
// 1. COMPONENTE DA LOGO
const Logo = () => (
  <Flex align="center" cursor="pointer">
    <Image
      src="/app"
      alt="Folcstore"
      width={40}
      height={40}
      style={{ marginRight: "8px" }}
    />
    <Text color="white" fontSize="3xl" fontWeight="bold" letterSpacing="tight">
      Folcstore
    </Text>
  </Flex>
);

// 2. COMPONENTE DA BARRA DE BUSCA
const SearchBar = () => (
  <Box flex={1} maxW="700px" mx={6}>
    <InputGroup size="lg">
      <Input
        placeholder="Buscar na Folcstore "
        bg="white"
        borderRadius="md"
        _placeholder={{ color: 'gray.400' }}
        _focus={{ border: 'none', boxShadow: 'none' }}
      />
      <InputRightElement width="4.5rem" h="100%" p={1}>
        <IconButton
          h="100%"
          w="full"
          colorScheme="brand"
          aria-label="Buscar"
          icon={<SearchIcon />}
          borderRadius="sm"
        />
      </InputRightElement>
    </InputGroup>
    
    {/* Tags sugeridas logo abaixo da barra */}
    <HStack spacing={4} mt={1} fontSize="xs" color="sand.100" overflow="hidden" whiteSpace="nowrap">
      <Link>Kit Produtos De Limpeza</Link>
      <Link>Garrafa Térmica De Água</Link>
      <Link>Roupas Para Adolescentes</Link>
      <Link>Bolsa Paty Pequena</Link>
    </HStack>
  </Box>
);

// 3. COMPONENTE DE LOGIN / CADASTRO
const AuthButtons = () => (
  <HStack spacing={3} color="white" fontWeight="medium" fontSize="sm">
    <Link href="/cadastro" _hover={{ opacity: 0.8 }}>Cadastrar</Link>
    <Box w="1px" h="12px" bg="sand.200" />
    <Link href="/login" _hover={{ opacity: 0.8 }}>Entre</Link>
  </HStack>
);

// 4. COMPONENTE DO CARRINHO
const CartIcon = () => (
  <Box position="relative" cursor="pointer" ml={4}>
    {/* Ícone ilustrativo de carrinho */}
    <Box color="white" fontSize="2xl">🛒</Box> 
  </Box>
);

// COMPONENTE PRINCIPAL (HEADER COMPLETO)
export default function ShopeeHeader() {
  return (
    <Box 
      as="header" 
      bgGradient="linear(to-b, brand.500, brand.700)" 
      w="100%" 
      pt={2} 
      pb={4} 
      px={8}
    >
      {/* Sub-header superior (Links menores) */}
      <Flex justify="between" fontSize="xs" color="sand.100" mb={3}>
        <HStack spacing={4}>
          <Link>Central do Vendedor</Link>
        </HStack>
        <HStack spacing={4}>
          <Link>🌐 Português (BR)</Link>
        </HStack>
      </Flex>

      {/* Linha principal do cabeçalho */}
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Logo />
        <SearchBar />
        <Flex align="center">
          <AuthButtons />
          <CartIcon />
        </Flex>
      </Flex>
    </Box>
  );
}