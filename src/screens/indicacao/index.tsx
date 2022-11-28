import React from "react";
import { Container, Enviar, EnviarTitle, Input } from "./styles";

import { useForm, Controller } from "react-hook-form";
import { FormDataProps } from "../../types";
import { userInformation } from "../../assets/userInformation";
import { API } from "../../services/api";
import { Alert } from "react-native";

const IndicacaoScreen = () => {
  const { control, handleSubmit, reset } = useForm<FormDataProps>();

  function onSubmit(data: FormDataProps) {
    const formData = {
      Indicacao: {
        CodigoAssociacao: userInformation.CodigoAssociacao,
        DataCriacao: userInformation.DataCriacao,
        CpfAssociado: userInformation.CpfAssociado,
        EmailAssociado: userInformation.EmailAssociado,
        NomeAssociado: userInformation.NomeAssociado,
        TelefoneAssociado: userInformation.TelefoneAssociado,
        PlacaVeiculoAssociado: userInformation.PlacaVeiculoAssociado,
        NomeAmigo: data.nome,
        TelefoneAmigo: data.telefone,
        EmailAmigo: data.email,
      },
      Remetente: userInformation.EmailAssociado,
      Copias: [],
    };

    API.post("/Api/Indicacao", formData)
      .then((response) => {
        if (response.data.Sucesso !== null) {
          Alert.alert("Sucesso", response.data.Sucesso);
          reset();
        }

        if (response.data.RetornoErro.retornoErro !== null) {
          Alert.alert(
            "Problema ao enviar",
            response.data.RetornoErro.retornoErro
          );
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  return (
    <Container>
      <Controller
        name="nome"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            placeholder="Nome"
            placeholderTextColor="#444444"
          />
        )}
      />
      <Controller
        name="telefone"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            placeholder="Telefone"
            placeholderTextColor="#444444"
            keyboardType="number-pad"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            placeholder="Email"
            placeholderTextColor="#444444"
          />
        )}
      />
      <Enviar onPress={handleSubmit(onSubmit)}>
        <EnviarTitle>Enviar</EnviarTitle>
      </Enviar>
    </Container>
  );
};

export default IndicacaoScreen;
