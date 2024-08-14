import { Container, Typography, styled } from "@mui/material";

const StyledAbout = styled("div")(({ }) => ({
  backgroundColor: "#f5f5f5",
  padding: "50px 0",
  minHeight: "50vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function About() {
  return (
    <StyledAbout>
      <Container maxWidth="md">
        <Typography variant="h3" color="primary" gutterBottom textAlign="center">
          Olá, meu nome é Tales Reig
        </Typography>
        <Typography variant="h4" color="textPrimary" textAlign="center" gutterBottom>
          Desenvolvedor Full Stack
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center">
          Sou um desenvolvedor full stack com experiência em C# e Angular. Gosto de resolver problemas e criar soluções eficientes para desafios complexos no desenvolvimento de software. Com um foco em entregar código de qualidade, estou sempre buscando a melhor abordagem para cada projeto.
        </Typography>
      </Container>

      
    </StyledAbout>
  );
}

export default About;
