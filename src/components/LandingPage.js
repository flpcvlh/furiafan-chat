// src/components/LandingPage.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <LandingContainer>
      <Header>
        <LogoImg src="/logo-furia.png" alt="FURIA Logo" />
        <NavLinks>
          <NavLink href="https://furia.gg" target="_blank">Site Oficial</NavLink>
          <NavLink href="https://www.furia.gg/produtos" target="_blank">Loja</NavLink>
          <NavLink href="https://www.youtube.com/furiagg" target="_blank">YouTube</NavLink>
        </NavLinks>
      </Header>
      
      <HeroSection>
        <HeroContent>
          <HeroTitle>FuriaFan</HeroTitle>
          <HeroSubtitle>Seu companheiro de CS2 para conhecer tudo sobre a FURIA</HeroSubtitle>
          <HeroDescription>
            Tenha acesso a conteúdo exclusivo, estatísticas, configurações dos jogadores, 
            histórias e muito mais em um único lugar. Se você é fã da FURIA, 
            esse chatbot foi feito especialmente para você!
          </HeroDescription>
          <CTAButton to="/chat">
            Iniciar Chat
            <ArrowIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </ArrowIcon>
          </CTAButton>
        </HeroContent>
        <HeroImageContainer>
          <HeroImage src="/chat-preview.png" alt="Preview do FuriaFan Chat" />
        </HeroImageContainer>
      </HeroSection>
      
      <FeaturesSection>
        <SectionTitle>O que você vai encontrar</SectionTitle>
        
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>🎯</FeatureIcon>
            <FeatureTitle>Configurações Profissionais</FeatureTitle>
            <FeatureText>
              Conheça as configurações de mira e resolução usadas pelos jogadores da FURIA.
            </FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🧠</FeatureIcon>
            <FeatureTitle>Curiosidades dos Jogadores</FeatureTitle>
            <FeatureText>
              Descubra histórias e fatos interessantes sobre cada membro do time.
            </FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📱</FeatureIcon>
            <FeatureTitle>Redes Sociais</FeatureTitle>
            <FeatureText>
              Acesse facilmente todas as redes sociais dos jogadores para ficar por dentro das novidades.
            </FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🎥</FeatureIcon>
            <FeatureTitle>Conteúdo Exclusivo</FeatureTitle>
            <FeatureText>
              Vlogs, bastidores e entrevistas exclusivas com os jogadores e staff da FURIA.
            </FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>💣</FeatureIcon>
            <FeatureTitle>Dicas do Professor</FeatureTitle>
            <FeatureText>
              Aprenda táticas, posicionamentos e jogadas de granadas com o lendário FalleN.
            </FeatureText>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📲</FeatureIcon>
            <FeatureTitle>App Mobile</FeatureTitle>
            <FeatureText>
              Saiba como baixar nosso aplicativo para acompanhar tudo da FURIA no seu celular.
            </FeatureText>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      
      <CTASection>
        <CTAText>Pronto para mergulhar no universo da FURIA?</CTAText>
        <CTAButton to="/chat" $large>
          Começar Agora
          <ArrowIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </ArrowIcon>
        </CTAButton>
      </CTASection>
      
      <Footer>
        <FooterLeft>
          <FooterText>
            © {new Date().getFullYear()} FuriaFan - Um projeto não oficial dedicado aos fãs da FURIA Esports.
          </FooterText>
          <LegalLinks>
            <LegalLink href="https://www.furia.gg/politica-privacidade">Política de Privacidade</LegalLink>
            <LegalDivider>•</LegalDivider>
            <LegalLink href="https://www.furia.gg/termos-condicoes">Termos de Uso</LegalLink>
          </LegalLinks>
        </FooterLeft>
        <SocialLinks>
          <SocialLink href="https://twitter.com/furiagg" target="_blank">Twitter</SocialLink>
          <SocialLink href="https://instagram.com/furiagg" target="_blank">Instagram</SocialLink>
          <SocialLink href="https://twitch.tv/furiagg" target="_blank">Twitch</SocialLink>
        </SocialLinks>
      </Footer>
    </LandingContainer>
  );
};
// Estilos do componente
const LandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: rgba(10, 10, 10, 0.95);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 15px 20px;
    flex-direction: column;
    gap: 10px;
  }
`;

const LogoImg = styled.img`
  height: 40px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const NavLink = styled.a`
  color: #fff;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: #FF5722;
  }
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  padding: 80px 40px;
  background: linear-gradient(135deg, #0a0a0a 0%, #151515 100%);
  
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 60px 20px;
    gap: 40px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: 992px) {
    max-width: 100%;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: #FF5722;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ddd;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #aaa;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #FF5722;
  color: #000;
  font-weight: 600;
  padding: ${props => props.$large ? '16px 32px' : '14px 28px'};
  border-radius: 50px;
  font-size: ${props => props.$large ? '1.1rem' : '1rem'};
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: #E64A19;
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 87, 34, 0.4);
  }
`;

const ArrowIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 87, 34, 0.2) 0%, rgba(10, 10, 10, 0) 70%);
    z-index: -1;
  }
`;

const HeroImage = styled.img`
  max-width: 90%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const FeaturesSection = styled.section`
  padding: 80px 40px;
  background-color: #0d0d0d;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
  color: #FF5722;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background-color: #151515;
  border-radius: 15px;
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #222;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: #FF5722;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #FF5722;
`;

const FeatureText = styled.p`
  color: #bbb;
  font-size: 1rem;
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 80px 40px;
  background-color: #0a0a0a;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CTAText = styled.h2`
  font-size: 2rem;
  Color: #ffffff;
  font-weight: 700;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Footer = styled.footer`
  padding: 30px 40px;
  background-color: #070707;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid #222;
  margin-top: auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 30px 20px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterText = styled.p`
  color: #777;
  font-size: 0.9rem;
`;

const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LegalLink = styled.a`
  color: #aaa;
  font-size: 0.9rem;
  text-decoration: underline;
  
  &:hover {
    color: #FF5722;
  }
`;

const LegalDivider = styled.span`
  color: #555;
  font-size: 0.8rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #aaa;
  transition: color 0.2s ease;
  font-size: 0.9rem;
  
  &:hover {
    color: #FF5722;
  }
`;

export default LandingPage;