import { Container } from "./styles";

export function Button({ 
  icon: Icon, 
  title, 
  loading = false, 
  ...rest
}) {
    return(
      <Container 
        type="Button"
        disabled={loading}
        {...rest}
      >
        {Icon && <Icon />}
        {loading ? 'Carregando...' : title}
      </Container>
    );
  }