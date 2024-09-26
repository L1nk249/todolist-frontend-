import Header from "./Header";
import Footer from "./Footer";
import { FormatQuoteRounded } from "@mui/icons-material";

export const metadata = {
  title: "TODOLIST",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
