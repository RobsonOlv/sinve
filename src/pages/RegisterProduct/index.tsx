import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api/configs/axiosConfig';

import {
  ButtonSinve, InputSinve, Navbar, HiddenInformation, ShowProductHistory,
} from '../../components';
import { ShowProvider } from '../../components/ShowProvider';
import {
  RegisterContainer, Title, ProductContainer, TopProductContainer, Container, ButtonContainer,
} from './style';

export const RegisterProduct: React.FC = () => {
  const history = useHistory();
  const [showHistory, setShowHistory] = useState(false);
  const [showProvider, setShowProvider] = useState(false);

  const [code, setCode] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [inProduct, setInProduct] = useState('');
  const [validity, setValidity] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');

  const [cnpj, setCnpj] = useState('');
  const [providerName, setProviderName] = useState('');
  const [timeToDelivery, setTimeToDelivery] = useState('');
  const [providerPhone, setProviderPhone] = useState('');

  const didUserTapShowProductHistory = () => {
    setShowHistory(!showHistory);
  };

  const didUserTapGoBackInventory = () => {
    history.goBack();
  };

  const didUserTapShowProvider = () => {
    setShowProvider(!showProvider);
  };

  const didUserTapRegisterProduct = () => {
    try {
      const product = {
        codigo: code,
        nome: productName,
        categoria: category,
        quantidade: Number(quantity),
        precoDeVenda: Number(salePrice),
        precoDeCompra: Number(purchasePrice),
        dataValidade: validity,
        dataEntrada: inProduct,
      };

      const fornecedor = {
        CNPJ: cnpj,
        nomeFantasia: providerName,
        prazoEntrega: Number(timeToDelivery),
        telefone: providerPhone,
      };

      api.post('/cadastro-de-produto', {
        product, fornecedor,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Navbar />
      <RegisterContainer>
        <Title>Cadastro de Produto</Title>
        <ProductContainer>

          <TopProductContainer>
            <InputSinve
              width="18%"
              title="Código do item"
              withMargin
              placeholder="0000-0"
              setData={setCode}
            />
            <InputSinve
              width="45%"
              title="Produto"
              withMargin
              placeholder="Lápis"
              setData={setProductName}
            />
            <InputSinve
              width="20%"
              title="Categoria"
              withMargin
              setData={setCategory}
            />
            <InputSinve
              width="20%"
              title="Quantidade"
              withMargin
              placeholder="0"
              setData={setQuantity}
            />
          </TopProductContainer>

          <TopProductContainer>
            <InputSinve
              width="25%"
              title="Data de Entrada"
              isSelectDate
              withMargin
              setData={setInProduct}
            />
            <InputSinve
              width="25%"
              title="Data de Validade"
              isSelectDate
              withMargin
              setData={setValidity}
            />
            <InputSinve
              width="25%"
              title="Preço de Venda"
              withMargin
              setData={setSalePrice}
              placeholder="0.0"
            />
            <InputSinve
              width="25%"
              title="Preço de Compra"
              withMargin
              setData={setPurchasePrice}
              placeholder="0.0"
            />
          </TopProductContainer>

        </ProductContainer>
      </RegisterContainer>

      {
        showProvider ? (
          <ShowProvider
            width="75%"
            onClick={didUserTapShowProvider}
            states={{
              setCNPJ: setCnpj,
              setDelivery: setTimeToDelivery,
              setName: setProviderName,
              setPhone: setProviderPhone,
            }}
          />
        ) : (
          <HiddenInformation
            width="75%"
            onClick={didUserTapShowProvider}
            title="Informações do fornecedor"
          />
        )
      }

      {
        showHistory ? <ShowProductHistory width="75%" onClick={didUserTapShowProductHistory} />
          : <HiddenInformation width="75%" onClick={didUserTapShowProductHistory} title="Histórico de produto" />
      }
      <ButtonContainer>
        <ButtonSinve title="Voltar" onClick={didUserTapGoBackInventory} />
        <ButtonSinve title="Cadastrar produto" onClick={didUserTapRegisterProduct} />
      </ButtonContainer>
    </Container>
  );
};
