"use client";

import { Box, Typography, Link as MuiLink } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link"

export default function Footer() {
  return (
    <Box
  component="footer"
  sx={{
    py: 3,
    px: 2,
    mt: "auto",
    background: " linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);",
    textAlign: "center",
    position: "fixed", // Position fixe
    bottom: 0, // Aligné en bas
    left: 0, // Prend toute la largeur
    right: 0, // Prend toute la largeur
    width: "100%", // Assure que le footer est large
    display: "flex", // Utilisation de flexbox pour l'agencement
    justifyContent: "space-between", // Distribue les éléments à gauche, centre et droite
    alignItems: "center", // Centre verticalement
    minHeight: "50px",
   
  
  }}
>
  {/* Aligné à gauche */}
  <Typography variant="body1" sx={{ textAlign: "left", flex: 1,ml:10 }}>
    © 2023 ToutDoux. Tous droits réservés.
  </Typography>
  <Typography variant="body2" sx={{ textAlign: "center", flex: 1 }}>
  <Link
    href="/contact"
    style={{
      textDecoration: 'none', // Pour ne pas avoir de soulignement par défaut
    }}
  >
    <Typography
      component="span" // Utiliser un span pour appliquer les styles
      sx={{
        fontSize: 'large',
        color: 'black',
        display: 'inline-block',
        transition: 'color 0.3s ease', // Pour une transition douce
        '&:hover': {
          color: 'white', // Change la couleur au survol
        },
      }}
    >
      Me contacter
    </Typography>
  </Link>
</Typography>
  {/* Centré */}
  <Typography variant="body2" sx={{ textAlign: "center", flex: 1 }}>
    <MuiLink
      href="https://cedriclevyportfolio.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        fontSize: 'large',
        color: 'black',
        textDecoration: 'none',
        display: 'inline-block',
        '&:hover': {
          color: 'white'
        },
      }}
    >
      Portfolio CL
    </MuiLink>
  </Typography>

  {/* Aligné à droite */}
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <MuiLink
      href="https://www.linkedin.com/in/c%C3%A9dric-levy-08a4183a/"
      target="_blank"
      rel="noopener noreferrer"
      
      sx={{ display: 'flex', alignItems: 'center', mr: 2, lineHeight: 0 }}
    >
      <LinkedInIcon sx={{width: '48px', height: '48px', color: 'white' }} />
    </MuiLink>

    <MuiLink
      href="https://github.com/L1nk249"
     
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: 'flex', alignItems: 'center', lineHeight: 0, }}
    >
      <GitHubIcon  sx={{ width: '48px', height: '48px', color: '#000000' }} />
    </MuiLink>
  </Box>
</Box>
  );
}
