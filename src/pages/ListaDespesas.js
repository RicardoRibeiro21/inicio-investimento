import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router';
import * as S from './listaDespesa-styled';

const getListLocalStorage = () => {
    return JSON.parse(localStorage.getItem('listaDespesas'))
}

const setListLocalStorage = (list) => {
    console.log(list)
    localStorage.setItem('listaDespesas', JSON.stringify(list))
    window.location.reload();
}

export default function ListaDespesas() {
    const [listDespesas, setListDespesas] = useState(null);
    const history = useHistory();

    useEffect(() => {
        console.log('1', getListLocalStorage())
        setListDespesas(getListLocalStorage())
        console.log('2', listDespesas)
        console.log('Está carregando', getListLocalStorage())
    }, [])

    // useEffect(() => {
    //     setListDespesas(getListLocalStorage())
    //     console.log('Está carregando', getListLocalStorage())
    // }, [listDespesas])

    function handleDelete(index, month) {
        console.log('State Antes de excluir', listDespesas)
        console.log('LocalStorage antes de excluir', getListLocalStorage())
        setListDespesas(listDespesas.map(item => {
            if (item.month == month) {
                // Removendo item do array
                item.items.splice(index, 1);
            }
        }))
        setListLocalStorage(listDespesas)
        console.log('Salvou localStorage', getListLocalStorage())
        console.log('Salvou state', listDespesas)
    }

    function handleToPage() {
        setListDespesas(getListLocalStorage())
        history.push('/');
    }

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
