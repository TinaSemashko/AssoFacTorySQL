import * as S from "./footer.styled";
import Tele from "../logo/iconeTel.png";

const Footer = () => {
  
  return (
    <S.MainContainer>
      <S.FooterContent>
        <S.FooterLogo>
          {/* Inclure ici le logo ou le texte du footer */}
          
        </S.FooterLogo>
        <S.FooterLinks>
   <ul class="contact-list">
   <li><a href="/">Nous Contacter:</a></li>
  
   <a href="/">
  <img
    src={Tele}
    alt="Téléphone"
    style={{ width: "32px", height: "25px", flexShrink: 0, marginRight: "10px" }}
  />
  Téléphone
</a>

  
  <li><a href="/">E-Mail :</a></li>
  
 
  <li> <a href="/">Adresse :</a></li>
  
  </ul>
        </S.FooterLinks>
       
      </S.FooterContent>
      <S.FooterCopyright>
        {/* Ajoutez ici le texte de copyright */}
        © 2023 AssoFacTory. Tous Droits Réservés.
      </S.FooterCopyright>
    </S.MainContainer>
  );
};

export default Footer;

