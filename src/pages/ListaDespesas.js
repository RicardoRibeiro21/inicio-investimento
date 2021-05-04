import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router';
import * as S from './listaDespesa-styled';

// Resgata as informações do localstorage
const getListLocalStorage = () => {
    return JSON.parse(localStorage.getItem('listaDespesas'))
}

// Atualiza as informações do localstorage
const setListLocalStorage = (list) => {
    localStorage.setItem('listaDespesas', JSON.stringify(list))
    window.location.reload();
}

export default function ListaDespesas() {
    const [listDespesas, setListDespesas] = useState(null);
    const history = useHistory();

    // ComponentDidMount - Para inserir no state os dados do localStorage
    useEffect(() => {
        setListDespesas(getListLocalStorage())
    }, [])

    // Função que deleta a despesa
    function handleDelete(index, month) {
        setListDespesas(listDespesas.map(item => {
            if (item.month == month) {
                // Removendo item do array
                item.items.splice(index, 1);
            }
        }))
        // Atualizando o state
        setListLocalStorage(listDespesas)
    }

    // Salva a lista e volta para a página inicial
    function handleToPage() {
        setListDespesas(getListLocalStorage())
        history.push('/');
    }

    // Retorna o conteúdo do state
    function retornarConteudo() {
        if (listDespesas) {
            return (
                listDespesas.map(item => {
                    let totMes = 0
                    return (
                        <S.Month>
                            <S.MonthName>{item.month} </S.MonthName>
                            {
                                item.items.map((desp, index) => {
                                    totMes += parseInt(desp.price);
                                    return (
                                        <S.Item>
                                            <S.Props>{desp.description}</S.Props>
                                            <S.Props>{desp.price}</S.Props>
                                            <S.BtnRemover onClick={() => handleDelete(index, item.month)}>Remover</S.BtnRemover>
                                        </S.Item>)
                                })
                            }
                            {totMes > 0 ? <S.TotValue>Valor total: {totMes}</S.TotValue> : ''}
                        </S.Month>
                    )
                })
            )
        }
        return <h1>Cade sua lista seu otareo</h1>
    }

    return (
        <S.Container>
            <S.H1> Lista de Despesas </S.H1>
            <S.List>
                {retornarConteudo()}
            </S.List>
            <S.BtnBack onClick={handleToPage}>Voltar para Cadastro</S.BtnBack>
        </S.Container>
    )
}
