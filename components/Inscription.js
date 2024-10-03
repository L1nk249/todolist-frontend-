"use client"; // Assurez-vous d'ajouter cette ligne si vous utilisez Next.js avec des composants côté client

import { Box, Button, TextField, Typography,IconButton,InputAdornment } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify"; 
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch } from "react-redux";
import apiUrl from "../config";

const Inscription = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const toggleShowPassword = () => {
    // Pour afficher où non le mot de passe
    setShowPassword((prev) => !prev);
  };

  const toggleShowConfirmPassword = () => {
    // Pour afficher ou non la confirmation de  mot de passe
    setShowConfirmPassword((prev) => !prev);
  };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // regex pour valider le mail 
      
  // Regex pour valider le mot de passe
  const passwordRegex = /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])(?=.*[0-9])[A-Za-z0-9!@#$%^&*()_+[\]{};':"\\|,.<>/?]{8,}$/

  const toastOptions = {
    style: { 
      fontSize: '2rem', 
      padding: '20px',
      transform: 'scale(1)',
      transformOrigin: 'center',
    },
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription ici
    // Exemple de redirection après inscription
  if (!emailRegex.test(email)) { // Si le mail ne correspond pas (test method) alors alert error 
    
      toast.warning("Ce mail n'est pas valide",toastOptions)
       
      return;
    }
  
  if (!passwordRegex.test(password)) {// Si le password ne correspond pas (test method) alors alert error 
      toast.warning("Mot de passe invalide ",toastOptions)
      return;
    }

  if (password !== confirmPassword) { // si password n'est pas égal à confirm password alors error.
      toast.warning("Les mots de passe ne correspondent pas ",toastOptions) 
     
    
      return;
    }

    fetch(`${apiUrl}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            signUp({
              username: name,
              email: email,
              token: data.token,
            })
          );
          setName("");
          setEmail("");
          setPassword("");
          setconfirmPassword("");
          toast.success("Inscription réussie !",toastOptions )
             
    setTimeout(() => {
          router.push("/Home") 
        }, 2000);
        } else {
          toast.error("Erreur lors de l'inscription",toastOptions)
        }})
        .catch((error) => {
          toast.error(`Une erreur s'est produite:${error.message}`, toastOptions);
  })
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 4,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{
        marginBottom:"50px"
      }}>
        S'inscrire
      </Typography>
      <TextField
        fullWidth
        label="Nom"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        sx={{ marginBottom: 2,height:"05vh", width:"15vW " }}
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{ marginBottom: 2,height:"05vh", width:"15vW " }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, width: '15vW' }}>
        <TextField
          fullWidth
          label="Mot de passe"
          type={showPassword ? "text" : "password"}  // Affichage conditionnel du mot de passe
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
      
          sx={{ marginBottom: 2, height: "05vh", width: "15vW" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowPassword}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, width: '15vW' }}>
        <TextField
          fullWidth
          label="Confirmation du mot de passe"
          type={showConfirmPassword ? "text" : "password"}  // Affichage conditionnel du mot de passe
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          required
          sx={{ height: "05vh" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowConfirmPassword}>
                  {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary" sx={{height:"05vh", width:"15vW ",marginTop:"20px"}}>
        Inscription
      </Button>
      <ToastContainer />
    </Box>
  );
};

export default Inscription;