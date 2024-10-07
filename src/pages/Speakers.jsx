import { useEffect, useState } from 'react';
import { CiLinkedin } from "react-icons/ci";

export const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/speakers");
        const data = await response.json();
        setSpeakers(data.data); // Verifique se data.data contém o array de palestrantes
      } catch (error) {
        console.error("Erro ao buscar palestrantes:", error);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <section className="info-palestrantes">
      <h1>Sobre os Palestrantes</h1>
      <p>
        Conheça os palestrantes que estarão presentes na Imersão React 2025. Cada um deles é um especialista em sua área, trazendo experiências únicas e conhecimentos valiosos para compartilhar com a comunidade.
      </p>
      <div className="descricao">
        <ul>
          {speakers.map((speaker) => (
            <li key={speaker.id}>
              <img src='https://kinsta.com/pt/wp-content/uploads/sites/3/2023/04/react-must-be-in-scope-when-using-jsx.jpg' alt={speaker.name} />
              <h2>{speaker.name}</h2>
              <p><strong>Profissão:</strong> {speaker.profession || "Não especificada"}</p>
              <a href="#">
                <CiLinkedin />
              </a>
              <p>{speaker.story || "Sem descrição disponível."}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
