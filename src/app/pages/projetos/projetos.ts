export interface IProjetos{
    imagem: string;
    title: string;
    subTitle: string;
}

export const projetos: IProjetos[] = [
  { imagem: '../../../assets/images/img_challenge_decodificador.png', title: 'Decodificador de texto', subTitle: 'Challenge para criptografar palavras'},
  { imagem: '../../../assets/images/img_challenge_jogoForca.png', title: 'Jogo da forca', subTitle: 'Challenge para criar um jogo da forca' },
  { imagem: '../../../assets/images/img_projeto_Angular_Capgemini.png', title: 'Loja Virtual de vendas', subTitle: 'Curoso pela Capgemini com desenvolvimento em Angular' }
];

