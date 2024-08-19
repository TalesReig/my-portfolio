import { Container, Grid, Typography } from "@mui/material";
import imagemIA from "../../../../assets/images/ProjetoIA.png";
import imagemReq from "../../../../assets/images/SistRequisicoes.png";
import imagemApp from "../../../../assets/images/appMoedas.png";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

function Projects() {
  // Dados fictícios para demonstração
  const projects = [
    {
      name: "Algoritimos de Busca",
      image: imagemIA,
      description: "Projeto explicando e exemplificando os algoritimos de Busca em Largura, Busca em Profundidade e Busca Gulosa.",
      url: "https://camilecoelho.github.io/ProjetoDeIA/",
    },
    {
      name: "Sistema de Requisições",
      image: imagemReq,
      description: "O sistema possui um CRUD voltado ao gerenciamento de departamentos.",
      url: "https://github.com/TalesReig/SistemaDeRequisicoesComBancoDeDadosNaNuvem?tab=readme-ov-file",
    },
    {
      name: "Aplicativo Conversor de Moedas",
      image: imagemApp,
      description: "Um aplicativo para comparar o valor de qualquer moeda em relação a outra escolhida.",
      url: "https://github.com/TalesReig/AppConversorDeMoedas-React",
    },
  ];

  return (
    <Container maxWidth="lg" style={{ padding: "50px 16px" }}>
      <Typography variant="h3" color="primary" gutterBottom textAlign="center">
        Projetos
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ProjectCard 
              name={project.name} 
              image={project.image} 
              description={project.description}
              url={project.url} 
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
