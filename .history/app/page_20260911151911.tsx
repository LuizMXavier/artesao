// app/page.tsx
"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Box minH="100vh" display="flex" alignItems="center" bg="gray.50" px={4}>
      <Container maxW={{ base: "100%", sm: "420px" }} textAlign="center">
        <VStack spacing={6}>
          <Heading size="lg">Bem-vindo</Heading>
          <Text color="gray.600">
            Conecte-se com artesãos e seus produtos.
          </Text>
          <VStack spacing={3} width="100%">
            <Button
              as={NextLink}
              href="/login"
              colorScheme="blue"
              width="100%"
            >
              Entrar
            </Button>
            <Button
              as={NextLink}
              href="/cadastro"
              variant="outline"
              colorScheme="blue"
              width="100%"
            >
              Criar conta
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}