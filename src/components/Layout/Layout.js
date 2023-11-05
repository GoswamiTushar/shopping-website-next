import { Box, ThemeProvider } from "@mui/material";
// import theme from ""

export default Layout({ children }){
    return (
        <Box>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Box>
    );
}