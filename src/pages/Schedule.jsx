import { useState } from 'react';

export const Schedule = () => {

  const palestrantes = [
    {
      name: "Alice Sousa",
      topic: "React 18 e as Novas Funcionalidades: O que Esperar?",
      description: "Exploração das novas APIs e melhorias de desempenho no React 18.",
      time: "10 de Outubro, 10h - 11h"
    },
    {
      name: "Bruno Almeida",
      topic: "Gerenciamento de Estado com Redux Toolkit: Melhores Práticas",
      description: "Dicas e estratégias para usar Redux Toolkit de forma eficaz em aplicações React.",
      time: "10 de Outubro, 11h - 12h"
    },
    {
      name: "Carla Mendes",
      topic: "React Native: Desenvolvendo Aplicativos Mobile de Alto Desempenho",
      description: "Técnicas para otimizar aplicações móveis com React Native.",
      time: "10 de Outubro, 14h - 15h"
    },
    {
      name: "Diego Martins",
      topic: "Testes em React: Garantindo Qualidade com Jest e Testing Library",
      description: "Como implementar testes eficazes em aplicações React usando Jest e React Testing Library.",
      time: "10 de Outubro, 15h - 16h"
    },
    {
      name: "Eduarda Lima",
      topic: "Design de Componentes Reutilizáveis com Styled Components",
      description: "Como criar e gerenciar uma biblioteca de componentes reutilizáveis com Styled Components.",
      time: "11 de Outubro, 10h - 11h"
    },
    {
      name: "Felipe Ribeiro",
      topic: "Acessibilidade em Aplicações React: Práticas Recomendadas",
      description: "Como tornar suas aplicações React mais acessíveis para todos os usuários.",
      time: "11 de Outubro, 11h - 12h"
    },
    {
      name: "Gabriela Costa",
      topic: "SSR com Next.js: Melhorando a Performance de SEO",
      description: "Explorando o Server-Side Rendering com Next.js para aplicações React.",
      time: "11 de Outubro, 14h - 15h"
    },
    {
      name: "Henrique Pereira",
      topic: "Micro Frontends: Escalando Aplicações React em Equipes Grandes",
      description: "Como implementar a arquitetura de micro frontends em aplicações React.",
      time: "11 de Outubro, 15h - 16h"
    },
    {
      name: "Isabela Santos",
      topic: "Usando GraphQL com React: O Futuro das APIs",
      description: "Como integrar GraphQL em suas aplicações React para uma melhor gestão de dados.",
      time: "12 de Outubro, 10h - 11h"
    },
    {
      name: "João Pedro Lima",
      topic: "Performance em React: Ferramentas e Técnicas de Otimização",
      description: "Analisando ferramentas e técnicas para otimizar o desempenho de aplicações React.",
      time: "12 de Outubro, 11h - 12h"
    }
  ];

  const [showDescription, setShowDescription] = useState(null);

  const toggleDescription = (index) => {
    setShowDescription(prevIndex => prevIndex === index ? null : index);
  };


  return (
    <section className='painel'>
      <h1>Confira a programação completa do Evento</h1>
      <div className="palestrantes">
        <ul>
          {palestrantes.map((palestrante, index) => (
            <li key={palestrante.name}>
              <h3>{palestrante.name}</h3>
              <p><strong>Tópico:</strong> {palestrante.topic}</p>
              <p style={{ display: showDescription === index ? 'block' : 'none' }}>
                <strong>Descrição:</strong> {palestrante.description}
              </p>
              <button onClick={() => toggleDescription(index)}>
                {showDescription === index ? "Ocultar" : "Mostrar"} Descrição
              </button>
              <p><strong>Horário:</strong> {palestrante.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

