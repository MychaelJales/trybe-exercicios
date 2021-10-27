import React from "react";

const Text = ({ conteudo, bloco, status }) => {
    return (
        <>
      <p>O conteúdo é: {conteudo} <br></br>
      Status: {status} <br></br>
      Bloco: {bloco}</p>
      <hr/>
      </>
    );
  }

  const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

class Content extends React.Component {
    render () {
        return <main>{conteudos.map((conteudo) => Text(conteudo))}</main>
    }
}

export default Content;