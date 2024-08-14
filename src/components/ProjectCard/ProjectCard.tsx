import { Card, CardMedia, CardContent, Typography, styled } from "@mui/material";

// Definindo a interface para as props do ProjectCard
interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: theme.shadows[5],
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

// Aplicando a interface às props do componente
function ProjectCard({ name, image, description }: ProjectCardProps) {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

export default ProjectCard;
