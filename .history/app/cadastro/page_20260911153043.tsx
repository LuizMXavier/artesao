// app/cadastro/page.tsx
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
} from "@chakra-ui/react";

// -------------------------------------------------------------
// Schema de validação (baseado na entidade Usuario)
// -------------------------------------------------------------
const cadastroSchema = z
  .object({
    nome: z
      .string()
      .min(1, "Informe seu nome")
      .min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z
      .string()
      .min(1, "Informe seu e-mail")
      .email("E-mail inválido"),
    telefone: z
      .string()
      .min(1, "Informe seu telefone")
      .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Telefone inválido. Ex: (81) 91234-5678"),
    senha: z
      .string()
      .min(1, "Informe sua senha")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmarSenha: z.string().min(1, "Confirme sua senha"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

type CadastroFormData = z.infer<typeof cadastroSchema>;

export default function CadastroUsuario() {
  const toast = useToast();
  const router = useRouter();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
  });

  const onSubmit = async (data: CadastroFormData) => {
    setEnviando(true);
    try {
      // TODO: trocar pela chamada real à API (contrato REST de Usuário)
      // await fetch("/api/usuarios", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     nome: data.nome,
      //     email: data.email,
      //     senha: data.senha,
      //     telefone: data.telefone,
      //   }),
      // });

      await new Promise((resolve) => setTimeout(resolve, 800)); // simula chamada

      toast({
        title: "Usuário cadastrado com sucesso!",
        description: `Bem-vindo(a), ${data.nome}.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      reset();
      
    } catch (error) {
      toast({
        title: "Erro ao cadastrar usuário",
        description: "Tente novamente em instantes.",
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
              Criar conta
            </Heading>
            <Text fontSize="sm" color="gray.500" textAlign="center">
              Preencha seus dados para se cadastrar
            </Text>
          </VStack>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <VStack spacing={4} align="stretch">
              <FormControl isInvalid={!!errors.nome}>
                <FormLabel>Nome</FormLabel>
                <Input
                  placeholder="Seu nome completo"
                  {...register("nome")}
                />
                <FormErrorMessage>{errors.nome?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email}>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  placeholder="voce@email.com"
                  {...register("email")}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.telefone}>
                <FormLabel>Telefone</FormLabel>
                <Input
                  placeholder="(81) 91234-5678"
                  {...register("telefone")}
                />
                <FormErrorMessage>{errors.telefone?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.senha}>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    type={mostrarSenha ? "text" : "password"}
                    placeholder="Mínimo 6 caracteres"
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

              <FormControl isInvalid={!!errors.confirmarSenha}>
                <FormLabel>Confirmar senha</FormLabel>
                <Input
                  type={mostrarSenha ? "text" : "password"}
                  placeholder="Repita a senha"
                  {...register("confirmarSenha")}
                />
                <FormErrorMessage>
                  {errors.confirmarSenha?.message}
                </FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                width="100%"
                mt={2}
                isLoading={enviando}
                loadingText="Cadastrando..."
              >
                Cadastrar
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
}