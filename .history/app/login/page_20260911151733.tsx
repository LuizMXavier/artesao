// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Box,
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NextLink from "next/link";

// -------------------------------------------------------------
// Schema de validação
// -------------------------------------------------------------
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Informe seu e-mail")
    .email("E-mail inválido"),
  senha: z.string().min(1, "Informe sua senha"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const toast = useToast();
  const router = useRouter();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setEnviando(true);
    try {
      // TODO: trocar pela chamada real à API de login
      // const response = await fetch("/api/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // if (!response.ok) throw new Error("Credenciais inválidas");

      await new Promise((resolve) => setTimeout(resolve, 800)); // simula chamada

      toast({
        title: "Login realizado com sucesso!",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });

      // router.push("/dashboard"); // redirecione para onde fizer sentido
    } catch (error) {
      toast({
        title: "Não foi possível entrar",
        description: "Verifique seu e-mail e senha e tente novamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" bg="gray.50" px={4}>
      <Container maxW={{ base: "100%", sm: "420px" }} py={{ base: 8, md: 12 }}>
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          p={{ base: 6, md: 8 }}
        >
          <VStack spacing={1} mb={6} align="stretch">
            <Heading size="lg" textAlign="center">
              Entrar
            </Heading>
            <Text fontSize="sm" color="gray.500" textAlign="center">
              Acesse sua conta para continuar
            </Text>
          </VStack>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <VStack spacing={4} align="stretch">
              <FormControl isInvalid={!!errors.email}>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  placeholder="voce@email.com"
                  {...register("email")}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.senha}>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    type={mostrarSenha ? "text" : "password"}
                    placeholder="Sua senha"
                    {...register("senha")}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      variant="ghost"
                      onClick={() => setMostrarSenha((v) => !v)}
                    >
                      {mostrarSenha ? "Ocultar" : "Ver"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.senha?.message}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                width="100%"
                mt={2}
                isLoading={enviando}
                loadingText="Entrando..."
              >
                Entrar
              </Button>

              <Text fontSize="sm" textAlign="center" color="gray.600">
                Ainda não tem conta?{" "}
                <ChakraLink as={NextLink} href="/cadastro" color="blue.500">
                  Cadastre-se
                </ChakraLink>
              </Text>
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
}