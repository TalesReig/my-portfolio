import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ImagePerfil from "../../../../assets/images/imagePerfil.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import StyledButton from "../../../../components/StyledButtom/StyledButtom";
import FileDownloader from "../../../../utils/FileDownloader";

function Hero() {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: { // <= mobile
      padding: "1rem 0rem",
    },
    [theme.breakpoints.up('md')]: { // >=mobile
      padding: "7rem 0rem",
    }
  }));

  const StyledImage = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  const handleDownloadCV = () => {
    const downloader = new FileDownloader("/Portfólio_pdf.pdf", "Currículo_Tales_Reig.pdf");
    downloader.download();
  };

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="relative" textAlign="center">
                  <StyledImage src={ImagePerfil} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Tales Reig</Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign="center" >Analista e Desenvolvedor de Software</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={handleDownloadCV}>
                    <DownloadIcon />
                    <Typography>
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton
                    component="a"
                    href="https://www.linkedin.com/in/tales-reig-608948302/"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                    <Typography>
                      LinkedIn
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton
                    component="a"
                    href="https://github.com/TalesReig"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                    <Typography>
                      GitHub
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
