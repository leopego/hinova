import React from "react";
import { Container, Enviar, EnviarTitle, Input } from "./styles";

import { useForm, Controller } from "react-hook-form";

const IndicacaoScreen = () => {
  const { control, handleSubmit } = useForm();

  return (
    <Container>
      <Controller
        name="nome"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input value={value} onChangeText={onChange} placeholder="Nome" />
        )}
      />
      <Controller
        name="telefone"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input value={value} onChangeText={onChange} placeholder="Telefone" />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input value={value} onChangeText={onChange} placeholder="Email" />
        )}
      />
      <Enviar>
        <EnviarTitle>Enviar</EnviarTitle>
      </Enviar>
    </Container>
  );
};

export default IndicacaoScreen;
