import * as S from "./footer.styled";


const Footer = () => {
  
  return (
    <S.MainContainer>
      <S.FooterContent>
        <S.FooterLogo>
          {/* Inclure ici le logo ou le texte du footer */}
          
        </S.FooterLogo>
        <S.FooterLinks>
   <ul>
    <a href="/">Nous Contacter:</a>
  <li>
    <a href="/">
    <img src="Ringing Phone.png" alt="" /> Téléphone :
    </a>
  </li>
  <li>
    <a href="/">E-Mail :</a>
  </li>
  <li>
    <a href="/">Adresse :</a>
  </li>
  </ul>
        </S.FooterLinks>
        <S.FooterSocialMedia>
          {/* Ajoutez ici des icônes ou des liens vers les réseaux sociaux */}
          
          {/* Ajoutez d'autres icônes ou liens sociaux ici */}
        </S.FooterSocialMedia>
      </S.FooterContent>
      <S.FooterCopyright>
        {/* Ajoutez ici le texte de copyright */}
        © 2023 AssoFacTory. Tous Droits Réservés.
      </S.FooterCopyright>
    </S.MainContainer>
  );
};

export default Footer;

