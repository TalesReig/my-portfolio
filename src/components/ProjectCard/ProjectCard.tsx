import { Card, CardMedia, CardContent, Typography, IconButton, styled } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

// Definindo a interface para as props do ProjectCard
interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  url: string;  // Novo parâmetro para a URL do projeto
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: theme.shadows[5],
  transition: "transform 0.3s",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const StyledCardContent = styled(CardContent)({
  height: "150px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const StyledDescription = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3, // Exibir no máximo 3 linhas
  WebkitBoxOrient: "vertical",
});

function ProjectCard({ name, image, description, url }: ProjectCardProps) {
  const handleCardClick = () => {
    window.open(url, "_blank");
  };

  return (
    <StyledCard onClick={handleCardClick}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      {/* Ícone de visualização no canto superior direito */}
      <IconButton
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          zIndex: 1,
        }}
      >
        <VisibilityIcon />
      </IconButton>
      <StyledCardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {name}
        </Typography>
        <StyledDescription variant="body2" color="textSecondary">
          {description}
        </StyledDescription>
      </StyledCardContent>
    </StyledCard>
  );
}

export default ProjectCard;
