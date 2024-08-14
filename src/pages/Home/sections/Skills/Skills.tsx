import { Grid, styled } from "@mui/material";
import { SiCsharp, SiDotnet, SiAngular, SiTypescript } from "react-icons/si"; // Importando os ícones das tecnologias
import { useTheme } from "@mui/material/styles"; // Importando useTheme para acessar o tema

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  padding: "20px 0",
  color: theme.palette.primary.contrastText,
}));

function Skills() {
  const theme = useTheme(); // Acessando o tema

  return (
    <StyledSkills>
      {/* <Typography variant="h4" color="black" gutterBottom textAlign="center">
        Minhas Skills
      </Typography> */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <SiCsharp size={60} title="C#" color={theme.palette.primary.main} />
        </Grid>
        <Grid item>
          <SiDotnet size={60} title=".NET" color={theme.palette.primary.main} />
        </Grid>
        <Grid item>
          <SiAngular size={60} title="Angular" color={theme.palette.primary.main} />
        </Grid>
        <Grid item>
          <SiTypescript size={60} title="TypeScript" color={theme.palette.primary.main} />
        </Grid>
      </Grid>
    </StyledSkills>
  );
}

export default Skills;
