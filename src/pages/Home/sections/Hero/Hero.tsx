import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { Link } from 'react-router-dom';
import ImagePerfil from "../../../../assets/images/imagePerfil.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import StyledButton from "../../../../components/StyledButtom/StyledButtom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PrintContent from "../Resume/PrintContent";
import ReactDOM from 'react-dom';

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

  const handlePrint = () => {
    const printContent = document.createElement('div');
    document.body.appendChild(printContent);

    ReactDOM.render(<PrintContent />, printContent);

    html2canvas(printContent).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Curriculo_Tales_Reig.pdf");

      // Cleanup
      ReactDOM.unmountComponentAtNode(printContent);
      document.body.removeChild(printContent);
    });
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
                  <StyledButton onClick={handlePrint}>
                    <DownloadIcon />
                    <Typography>
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={4} md={2} display="flex" justifyContent="center">
                  <StyledButton
                    component="a"
                    href="https://www.linkedin.com/in/tales-reig-608948302/"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </StyledButton>
                </Grid>                
                <Grid item xs={4} md={2} display="flex" justifyContent="center">
                  <StyledButton
                    component="a"
                    href="https://github.com/TalesReig"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </StyledButton>
                </Grid>                
                <Grid item xs={4} md={2} display="flex" justifyContent="center">
                  <StyledButton
                    component={Link}
                    to="/contact"
                    rel="noopener noreferrer"
                  >
                    <MailOutlineIcon />
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
