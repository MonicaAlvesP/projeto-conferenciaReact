import { CiLinkedin } from "react-icons/ci";

export const Speakers = () => {
  const aboutSpeakers = [
    {
      name: "Alice Sousa",
      profession: "Desenvolvedora Frontend",
      story: "Alice começou sua carreira como designer gráfico, mas ao se deparar com a programação, rapidamente se apaixonou por criar interfaces de usuário. Hoje, ela é uma desenvolvedora frontend com mais de 5 anos de experiência, sempre em busca de se manter atualizada nas últimas tendências de tecnologia."
    },
    {
      name: "Bruno Almeida",
      profession: "Engenheiro de Software",
      story: "Bruno começou sua jornada na tecnologia criando pequenos jogos em JavaScript. Ele encontrou sua verdadeira paixão ao trabalhar com aplicações web, onde se especializou em gerenciamento de estado. Como defensor do Redux Toolkit, ele acredita que a simplicidade é a chave para a escalabilidade em projetos grandes."
    },
    {
      name: "Carla Mendes",
      profession: "Desenvolvedora Mobile",
      story: "Carla sempre teve um interesse especial por tecnologia móvel. Após desenvolver um aplicativo para ajudar sua comunidade local, ela decidiu se especializar em React Native. Hoje, Carla ajuda empresas a criar aplicativos móveis intuitivos e de alto desempenho, sempre com foco na experiência do usuário."
    },
    {
      name: "Diego Martins",
      profession: "QA Engineer",
      story: "Diego começou sua carreira como desenvolvedor, mas logo percebeu que sua verdadeira paixão era garantir a qualidade do software. Com um enfoque especial em testes automatizados, ele se tornou um especialista em assegurar que aplicações React funcionem sem problemas, compartilhando suas descobertas e melhores práticas com a comunidade."
    },
    {
      name: "Eduarda Lima",
      profession: "Designer e Desenvolvedora Frontend",
      story: "Eduarda sempre teve uma paixão por design e tecnologia. Ao combinar suas habilidades, ela se tornou uma especialista em criar interfaces elegantes e funcionais. Ela acredita que um bom design não deve ser apenas estético, mas também funcional e reutilizável, e compartilha suas experiências no desenvolvimento de bibliotecas de componentes."
    },
    {
      name: "Felipe Ribeiro",
      profession: "Desenvolvedor Acessibilidade",
      story: "Felipe sempre foi apaixonado por tornar a tecnologia acessível para todos. Após um projeto universitário que envolveu usuários com deficiências, ele decidiu se especializar em acessibilidade digital. Hoje, ele trabalha para garantir que todos tenham a mesma experiência em aplicações web, independente de suas limitações."
    },
    {
      name: "Gabriela Costa",
      profession: "Desenvolvedora Fullstack",
      story: "Gabriela começou sua carreira em desenvolvimento web com PHP, mas logo se interessou pelo React. Com o tempo, ela se aprofundou em Next.js e se tornou uma especialista em SEO. Gabriela acredita que cada página deve ser otimizada para os motores de busca, e adora compartilhar suas dicas com outros desenvolvedores."
    },
    {
      name: "Henrique Pereira",
      profession: "Arquiteto de Software",
      story: "Henrique sempre foi um entusiasta de arquitetura de software. Ele viu o potencial dos micro frontends enquanto trabalhava em um projeto de grande escala e ficou fascinado pela flexibilidade que essa abordagem oferece. Hoje, ele ajuda equipes a escalar suas aplicações React usando micro frontends, garantindo colaboração e agilidade."
    },
    {
      name: "Isabela Santos",
      profession: "Desenvolvedora Backend",
      story: "Isabela começou sua carreira em desenvolvimento web como backend, mas logo se encantou pela versatilidade do GraphQL. Com a crença de que a gestão de dados deve ser intuitiva, ela trabalha em projetos que utilizam GraphQL para facilitar a comunicação entre frontend e backend, sempre buscando melhorar a eficiência das aplicações."
    },
    {
      name: "João Pedro Lima",
      profession: "Desenvolvedor de Software",
      story: "João Pedro sempre foi apaixonado por velocidade, e isso se refletiu em sua carreira de desenvolvedor. Ele se especializou em otimização de desempenho, usando sua experiência para garantir que as aplicações React carreguem rapidamente e proporcionem uma experiência de usuário excepcional. Ele adora compartilhar suas descobertas e insights com a comunidade."
    }
  ];

  return (
    <section className="info-palestrantes">
      <h1>Sobre os Palestrantes</h1>
      <p>
        Conheça os palestrantes que estarão presentes na Imersão React 2025. Cada um deles é um especialista em sua área, trazendo experiências únicas e conhecimentos valiosos para compartilhar com a comunidade.
      </p>
      <div className="descricao">
        <ul>
          {aboutSpeakers.map((speakerAbout, index) => (
            <li key={index}>
              <img src='https://kinsta.com/pt/wp-content/uploads/sites/3/2023/04/react-must-be-in-scope-when-using-jsx.jpg' alt={speakerAbout.name} />
              <h2>{speakerAbout.name}</h2>
              <p><strong>Profissão:</strong> {speakerAbout.profession}</p>
              <a href="#">
                <CiLinkedin />
              </a>
              <p>{speakerAbout.story}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
