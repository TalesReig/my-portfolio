import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

function Projects() {
  // Dados fictícios para demonstração
  const projects = [
    {
      name: "Project A",
      image: "https://via.placeholder.com/150",
      description: "Descrição do Project A.",
    },
    {
      name: "Project B",
      image: "https://via.placeholder.com/150",
      description: "Descrição do Project B.",
    },
    {
      name: "Project C",
      image: "https://via.placeholder.com/150",
      description: "Descrição do Project C.",
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
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
