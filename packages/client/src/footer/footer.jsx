import * as S from "./footer.styled";
import Tele from "../logo/iconeTel.png";
import Mail from "../logo/Email.png";
import Localisation from "../logo/Location.png";

const Footer = () => {
  
  return (
    <S.MainContainer>
      <S.FooterContent>
        <S.FooterLogo>
          {/* Inclure ici le logo ou le texte du footer */}
          
        </S.FooterLogo>
        <S.FooterLinks>
   <ul class="contact-list">
   <span style={{ color: "white" }}>Nous Contacter:</span>

  
   <a href="/">
  <img
    src={Tele}
    alt="Téléphone"
    style={{ width: "32px", height: "25px", flexShrink: 0, marginRight: "10px", }}
  />
   <span style={{ color: "white" }}>Téléphone:</span>
</a>


<a href="/">
  <img
    src={Mail}
    alt="E-Mail"
    style={{ width: "32px", height: "25px", flexShrink: 0, marginRight: "10px" }}
  />
  <span style={{ color: "white" }}>E-Mail:</span>
</a>


<a href="/" style={{ display: "flex", alignItems: "center" }}>
  <img
    src={Localisation}
    alt="Adresse"
    style={{ width: "32px", height: "25px", flexShrink: 0, marginRight: "10px"  }}
  />
   <span style={{ color: "white" }}>Adresse:</span>
</a>
  
  
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

