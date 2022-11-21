export interface IProjetos{
    imagem: string;
    title: string;
    subTitle: string;
    repository: string;
    demo: string;
}

export const projetos: IProjetos[] = [
  { imagem: '../../../assets/images/img_challenge_decodificador.png', title: 'Decodificador de texto', subTitle: 'Challenge para criptografar palavras', repository: 'https://github.com/renanrcs/Challenge-ONE-crypthografy', demo: 'https://renanrcs.github.io/Challenge-ONE-crypthografy/'},
  { imagem: '../../../assets/images/img_challenge_jogoForca.png', title: 'Jogo da forca', subTitle: 'Challenge para criar um jogo da forca', repository: 'https://github.com/renanrcs/Challenge-ONE-Hangman', demo: 'https://renanrcs.github.io/Challenge-ONE-Hangman/' },
  { imagem: '../../../assets/images/img_projeto_Angular_Capgemini.png', title: 'Loja Virtual de vendas', subTitle: 'Curoso pela Capgemini com desenvolvimento em Angular', repository: 'https://github.com/renanrcs/Course_Angular_Capgemini', demo: 'https://renanrcs.github.io/Course_Angular_Capgemini/produtos' }
];

