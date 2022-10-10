import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ButtonSinve,
  InputSearch, Navbar, TableComponent,
} from '../../components';
import api from '../../services/api';
import {
  TopContainer, Container, ElementsContainer, MiddleContainer, Text, BottomContainer, ButtonCustom,
} from './style';

export const Inventory: React.FC = () => {
  const history = useHistory();
  const [estoque, setEstoque] = useState([]);

  const didUserTapAddProduct = () => {
    history.push('/registrar-produto');
  };

  const loadSales = async () => {
    try {
      const res = await api.get('/estoque-ideal');
      console.log(res.data);
      const array = res.data.map((value: any) => ({
        id: value.id,
        key: value.id,
        item: 1,
        product: value.nome,
        inventory: value.estoqueIdeal,
        idealInventory: value.quantidade,

      }));
      if (res && res.data) {
        setEstoque(array);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadSales();
  }, []);

  return (
    <Container>
      <Navbar />
      <ElementsContainer>
        <TopContainer>
          <InputSearch width="573px" title="oq" />
          <ButtonSinve title="Cadastrar produto" margin="0px 0px 0px 0px" onClick={didUserTapAddProduct} />
        </TopContainer>
        <MiddleContainer>
          <Text>Selecione o Filtro:</Text>
          <ButtonCustom style={{ marginLeft: '10px !important' }}>Na média</ButtonCustom>
        </MiddleContainer>
        <BottomContainer>
          <Text>Ordenar por:</Text>
          <ButtonCustom style={{ marginLeft: '10px !important' }}>Estoque escasso</ButtonCustom>
          <ButtonCustom style={{ marginLeft: '10px !important' }}>Estoque sobrando</ButtonCustom>
          <ButtonCustom style={{ marginLeft: '10px !important' }}>Na média</ButtonCustom>
        </BottomContainer>
        <TableComponent data={estoque} />
      </ElementsContainer>
    </Container>
  );
};
