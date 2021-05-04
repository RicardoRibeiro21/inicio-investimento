import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import ListaDespesas from './ListaDespesas';
import * as S from './cadastro-styled';

// Lista dos meses com os items vazios 
let meses = [{ month: 'Abril', items: [] },
{ month: 'Maio', items: [] },
{ month: 'Junho', items: [] },
{ month: 'Julho', items: [] },
{ month: 'Agosto', items: [] },
{ month: 'Setembro', items: [] }]

export default function Home() {
    // State das propriedades do objeto Despesa
    const [descricaoDespesa, setDescricaoDespesa] = useState(String);
    const [valorDespesa, setValorDescricao] = useState();
    const [mesDespesa, setMesDespesa] = useState();
    const history = useHistory();


    // Função que captura os dados e insere na lista
    function handleInputChange() {
        // Gerando Id_random
        let idObjeto = Math.random().toString().replace('0.', '').valueOf()
        // Resgatando as informações do objeto
        const objeto = {
            id: idObjeto,
            description: descricaoDespesa,
            price: valorDespesa
        }

        // Encontrando o mês selecionado e inserindo a despesa
        meses.map(item => {
            if (item.month == mesDespesa)
                item.items.push(objeto)
        })
        console.log(meses)

    }

    // Salva no localStorage e redireciona para a lista de despesas
    function handleToPage() {
        localStorage.setItem('listaDespesas', JSON.stringify(meses));
        history.push('/lista-despesas');
    }


    return (
        <S.Container>
            <S.H1> Cadastro de despesas </S.H1>
            <S.Label htmlFor="descricao">Descrição</S.Label>
            <S.Input id="descricao" value={descricaoDespesa} onChange={e => setDescricaoDespesa(e.target.value)} ></S.Input>
            <S.Label htmlFor="valor" >Valor</S.Label>
            <S.Input id="valor" type="number" value={valorDespesa} onChange={e => setValorDescricao(e.target.value)} ></S.Input>
            <S.Label htmlFor="mes">Mês da despesa</S.Label>
            <S.Select id="mes" value={mesDespesa} onChange={e => setMesDespesa(e.target.value)} >
                {
                    meses.map(item => {
                        return <option>{item.month}</option>
                    })
                }
            </S.Select>
            <S.Button onClick={handleInputChange}>Cadastrar</S.Button>
            <S.Button onClick={handleToPage}>Lista de Despesas</S.Button>
            {/* <Link to="/lista-despesas" component={ListaDespesas} params={{ propriedade: meses}}></Link> */}
        </S.Container>
    )
}
