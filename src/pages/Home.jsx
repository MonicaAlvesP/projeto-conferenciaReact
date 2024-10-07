import { useForm } from "react-hook-form"

export const Home = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="pag-inicial">
      <section className="info-evento">
        <h2>
          Seja bem-vindo ao maior encontro de React do Brasil! Um evento onde desenvolvedores de todo o país se conectam para explorar as últimas inovações, compartilhar experiências e ampliar suas redes de contato.
        </h2>
        <ul>
          <li><strong>Local:</strong> Centro de Convenções de São Paulo.</li>
          <li><strong>Data:</strong> 10 a 12 de Outubro.</li>
          <li><strong>Horário:</strong> 9h às 18h.</li>
          <li><strong>Cardápio do Evento:</strong> Opções vegetarianas, veganas e sem glúten disponíveis.</li>
          <li><strong>Desconto em Hoteis:</strong> Hoteis parceiros oferecem tarifas especiais para os participantes.</li>
        </ul>
        <p>
          Todos os participantes, palestrantes, patrocinadores e voluntários devem seguir nosso código de conduta. Nossa equipe estará atenta para garantir que essas diretrizes sejam respeitadas, promovendo um ambiente seguro e inclusivo para todos.
        </p>
      </section>
      <section className="formCadastro">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" {...register("name", { required: true })} />
          {errors.name && <span>Por favor, preencha este campo</span>}
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" {...register("email", { required: true })} />
          {errors.email && <span>Por favor, preencha este campo</span>}
          <button type="submit">Enviar</button>
        </form>
      </section>
    </section >
  )
}
