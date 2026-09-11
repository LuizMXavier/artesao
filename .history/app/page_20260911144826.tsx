export default function Home() {
  return (
export default function CadastroUsuario() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 2000);
    });
  };

  return (
    <Container maxW="md" mt={10}>
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={6} size="lg" textAlign="center">
          Cadastro de Usuário
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align="stretch">
            
            {/* Nome */}
            <FormControl isInvalid={errors.nome}>
              <FormLabel htmlFor="nome">Nome</FormLabel>
              <Input
                id="nome"
                placeholder="Seu nome completo"
                {...register('nome', { required: 'O nome é obrigatório' })}
              />
              <FormErrorMessage>
                {errors.nome && errors.nome.message}
              </FormErrorMessage>
            </FormControl>

            {/* E-mail */}
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                {...register('email', { required: 'O e-mail é obrigatório' })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            {/* Senha */}
            <FormControl isInvalid={errors.senha}>
              <FormLabel htmlFor="senha">Senha</FormLabel>
              <Input
                id="senha"
                type="password"
                placeholder="Sua senha segura"
                {...register('senha', {
                  required: 'A senha é obrigatória',
                  minLength: { value: 6, message: 'Mínimo de 6 caracteres' },
                })}
              />
              <FormErrorMessage>
                {errors.senha && errors.senha.message}
              </FormErrorMessage>
            </FormControl>

            {/* Botão de Envio */}
            <Button
              colorScheme="blue"
              isLoading={isSubmitting}
              type="submit"
              width="full"
              mt={4}
            >
              Cadastrar
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
}

  );
}
