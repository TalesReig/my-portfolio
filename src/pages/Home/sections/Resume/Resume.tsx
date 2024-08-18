import { Container, Typography, Button, styled } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import FileDownloader from "../../../../utils/FileDownloader";

const StyledResume = styled("div")(({ }) => ({
  backgroundColor: "#f5f5f5",
  padding: "50px 0",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Section = styled("section")(({ }) => ({
  marginBottom: "40px",
  maxWidth: "800px",
  width: "100%",
}));

function Resume() {
  const handleDownload = () => {
    const downloader = new FileDownloader("/my-portfolio/Curriculo.pdf", "Currículo_Tales_Reig.pdf");
    downloader.download();
  };

  return (
    <StyledResume>
      <Container maxWidth="md">
        <Typography variant="h3" color="primary" gutterBottom textAlign="center">
          Currículo
        </Typography>

        <br />
        <br />

        <Section>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          Experiência Profissional
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          <strong>Analista e Desenvolvedor</strong> - NDD
          <br />
          <em>Outubro de 2022 - Presente</em>
          <br />
          Responsabilidades:
          <ul>
            <li>Desenvolvimento de aplicações web utilizando C# e Angular.</li>
            <li>Design e implementação de APIs RESTful.</li>
            <li>Colaboração com equipes multidisciplinares para entrega de soluções eficientes.</li>
          </ul>
          Conquistas:
          <ul>
            <li>Contribuí para a melhoria do processo de Code Review no time, implementando o uso do SonarQube nos projetos.</li>
          </ul>
        </Typography>
        </Section>

        <Section>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Formação Acadêmica
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            <strong>Graduação em Ciência da Computação</strong> - IFSC
            <br />
            <em>2020 - 2024</em>
            <br />
          </Typography>
        </Section>

        <Section>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Cursos Relevantes
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            <strong>Academia do Programador</strong>
            <br />
            <em>2021 - 2022</em>
            <br />
          </Typography>
        </Section>

        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          onClick={handleDownload}
        >
          Baixar Currículo
        </Button>
      </Container>
    </StyledResume>
  );
}

export default Resume;
