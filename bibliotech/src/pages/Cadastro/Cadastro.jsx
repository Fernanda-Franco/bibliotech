import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/icons/livros.png";
import googleIcon from "../../assets/icons/google-white.svg";
import { useForm } from "react-hook-form";

export function Cadastro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

function onSubmit(data) {
    console.log(data);
}

    return (
        <Container fluid className="my-5">
            <p className="text-center">
                <img src="" width="256" alt="Logo do app" />
            </p>
            <h4> Faça parte da nossa plataforma</h4>
            <p className="text-muted">
                Já tem conta?<Link to="/Login">Entre</Link>
            </p>
            <hr />
            <Button className="mb-3" variant="danger">
                Entrar com o Google
            </Button>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    className={errors.email && "is invalid"}
                    placeholder="Seu email" 
                    {...register("email", { required: "O email é obrigatorio"})}
                    />
                    <Form.Text className="invalid-feedback">
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Sua senha"
                    className={errors.email && "is invalid"}
                    {...register("senha", { required: "A senha é obrigatoria"})}
                    />
                </Form.Group>
                <Button type="submit" variant="success">
                    Cadastrar
                </Button>
            </Form>
        </Container>
    );
}
