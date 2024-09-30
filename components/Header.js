"use client";
import { Box, Typography,Grid, } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from "next/link"
import Connexion from '../components/Connexion'
import { useState } from "react";


export default function Header() {
  const router = useRouter()
 
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleClick = () => {
    router.push("/");}

    return (
      <>
      <Box
      component="header"
      sx={{
        py: 1,
        px: 2,
        mt: "auto",
        background: "  linear-gradient(to right top, #d1c26b, #d6c370, #dac575, #dec67a, #e2c87f, #e5c67d, #e8c37b, #ebc179, #efba71, #f3b269, #f7aa64, #fba15f);",
        textAlign: "center",
        position: "fixed", // Position fixe
        top: 0, // Aligné en bas
        left: 0, // Prend toute la largeur
        right: 0, // Prend toute la largeur
        width: "100%", // Assure que le header est large
        display: "flex", // Utilisation de flexbox pour l'agencement
        justifyContent: "space-between", // Distribue les éléments à gauche, centre et droite
        alignItems: "center", // Centre verticalement
        minHeight: "50px",
        cursor: 'pointer',
        opacity:0.8
      }}
      
      >
      <Grid item xs={12} sm={6} container justifyContent="left"> 
              <Image
                src="/toutdoux.jpeg"   
                alt="logo" 
                width={90} 
                height={90}  
                style={{
                    borderRadius:"30%",
                  objectFit: 'contain' ,
                  marginBottom: "20px", // Ajuste l'espace sous l'image
                }}
                onClick={handleClick}
             ></Image>
            </Grid>

            <Typography variant="body1" sx={{ textAlign: "left", flex: 1,mr: 50  }}>
               <Link href="/" > 
    
               <Typography 
              component="span" 
              sx={{
                fontSize: '1.5rem',
                color: 'black',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'white',
                },
              }}
            >
              Accueil
            </Typography>
          </Link>
        </Typography>


  <Typography variant="body2" sx={{ textAlign: "center", flex: 1 }}>
   <Link href="/connexion" > 
    <Typography
      component="span" // Utiliser un span pour appliquer les styles
      sx={{
        fontSize: '1.5rem',
        color: 'black',
        display: 'inline-block',
        transition: 'color 0.3s ease', // Pour une transition douce
        '&:hover': {
          color: 'white', // Change la couleur au survol
        },
      }}
    onClick={handleOpen}>
      Se connecter
  
    </Typography>
    </Link>
</Typography>
  {/* Centré */}
  <Typography variant="body2" sx={{ textAlign: "center", flex: 1 }}>
  <Link href="/inscription" > 
    <Typography
      component="span"
      sx={{
        fontSize: '1.5rem',
        color: 'black',
        textDecoration: 'none',
        display: 'inline-block',
        '&:hover': {
          color: 'white'
        },
      }}
    >
     S'inscrire 
  </Typography>
    </Link>
    </Typography>
      </Box>
      <Connexion open={open} onClose={handleClose} />
      </>
    );
  }