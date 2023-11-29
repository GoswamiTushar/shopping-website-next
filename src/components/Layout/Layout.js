import { Box, CssBaseline, ThemeProvider } from "@mui/material";
// import ThemeProvider from '@mui/material/styles'
import theme from "../../../theme/ThemeRegistry";

export default function Layout({ children }) {
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                hello
                {children}
            </ThemeProvider>
        </Box>
    );
}