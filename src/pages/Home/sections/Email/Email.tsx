import { useState } from 'react';
import { Container, Typography, TextField, Button, styled } from "@mui/material";
import emailjs from "@emailjs/browser";

const StyledContactForm = styled("div")({
  backgroundColor: "#dedede",
  padding: "50px 0",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Form = styled("form")({
  maxWidth: "600px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const StyledButton = styled(Button)({
  alignSelf: "center",
  padding: "10px 20px",
});

const Email: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    const key = { publicKey: "R2ipv4W4W-_ABjEtJ" }
    
    emailjs.send("service_aa6kqwk","template_7zn9el8", templateParams, key)
      .then((response) => {
        console.log("Email enviado: ", response.status, response.text);

        alert("Email enviado com sucesso!");

        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.log("Erro: ", err);

        alert("Erro ao enviar email. Tente novamente mais tarde.");
      }

    );
    
  };

  return (
    <StyledContactForm>
      <Container maxWidth="sm">
        <Typography variant="h3" color="primary" gutterBottom textAlign="center">
          Entre em contato
        </Typography>

        <Form onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Mensagem"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <StyledButton variant="contained" color="primary" type="submit">
            Enviar
          </StyledButton>
        </Form>
      </Container>
    </StyledContactForm>
  );
};

export default Email;
