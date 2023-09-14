import * as S from "./footer.styled";


const Footer = () => {
  
  return (
    <S.MainContainer>
      <S.FooterContent>
        <S.FooterLogo>
          {/* Inclure ici le logo ou le texte du footer */}
          
        </S.FooterLogo>
        <S.FooterLinks>
   <ul class="contact-list">
    <a href="/">Nous Contacter:</a>
  
    <a href="/">
    <img src="Ringing Phone.png" alt="" /> Téléphone :
    </a>
  
  
    <a href="/">E-Mail :</a>
  
 
    <a href="/">Adresse :</a>
  
  </ul>
        </S.FooterLinks>
        <S.FooterSocialMedia>
          {/* Ajoutez ici des icônes ou des liens vers les réseaux sociaux */}
          Adresse :
          {/* Ajoutez d'autres icônes ou liens sociaux ici */}
          E-Mail :
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

