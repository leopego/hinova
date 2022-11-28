import React, { useEffect, useState } from "react";

import { ActivityIndicator, FlatList, ListRenderItemInfo } from "react-native";
import { colors } from "../../assets/colors";
import OficinaCard from "../../components/OficinaCard";

import { API } from "../../services/api";

import { OficinaCardProps } from "../../types";
import { Container } from "./styles";

const OficinasScreen = () => {
  const [OficinaList, setOficinaList] = useState();

  function fetchOficinaList() {
    API.get('/Api/Oficina?codigoAssociacao=601&cpfAssociado=""')
      .then((response) => setOficinaList(response.data.ListaOficinas))
      .catch((error) => {
        throw new Error(error);
      });
  }

  const RenderItem = ({ item }: ListRenderItemInfo<OficinaCardProps>) => {
    return (
      <OficinaCard
        Id={item.Id}
        Nome={item.Nome}
        Descricao={item.Descricao}
        DescricaoCurta={item.DescricaoCurta}
        Foto={item.Foto}
        Endereco={item.Endereco}
        Email={item.Email}
        Telefone1={item.Telefone1}
        Telefone2={item.Telefone2}
      />
    );
  };

  useEffect(() => {
    fetchOficinaList();
  }, []);

  return (
    <>
      <Container>
        {OficinaList ? (
          <FlatList
            data={OficinaList}
            renderItem={RenderItem}
            keyExtractor={(item) => item.Id}
          />
        ) : (
          <ActivityIndicator size="large" color={colors.blue} />
        )}
      </Container>
    </>
  );
};

export default OficinasScreen;
