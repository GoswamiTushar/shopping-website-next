import { Container } from "@mui/material"
import LoginForm from "./LoginForm"

const styles = {
    root: {
        minHeight: '800px',
        height: '100svh',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const page = () => {
    // console.log(process.env.SERVER_URL)
    return (
        <Container disableGutters maxWidth={false} sx={styles.root}>
            <LoginForm />
        </Container>
    )
}
export default page