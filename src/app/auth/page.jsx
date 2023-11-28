import { Container } from "@mui/material"
import LoginForm from "./LoginForm"

const styles = {
    root: {

    }
}

const page = () => {
    // console.log(process.env.SERVER_URL)
    return (
        <Container disableGutters maxWidth={false} >
            <LoginForm />
        </Container>
    )
}
export default page