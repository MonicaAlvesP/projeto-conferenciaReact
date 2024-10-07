import { useState, useEffect } from 'react';

export const Schedule = () => {
  const [palestrantes, setPalestrantes] = useState([]);

  useEffect(() => {
    const fetchPalestrantes = async () => {
      const response = await fetch('http://localhost:1337/api/speakers');
      const data = await response.json();

      console.log(data);
      if (data.data) {
        setPalestrantes(data.data);
      } else {
        console.error('Dados de palestrantes não encontrados');
      }
    };

    fetchPalestrantes();
  }, []);

  const [showDescription, setShowDescription] = useState(null);

  const toggleDescription = (id) => {
    setShowDescription(prevId => prevId === id ? null : id);
  };

  return (
    <section className='painel'>
      <h1>Confira a programação completa do Evento</h1>
      <div className="palestrantes">
        <ul>
          {palestrantes.length > 0 ? (
            palestrantes.map((palestrante) => (
              <li key={palestrante.id}>
                <h3>{palestrante.name || "Nome não disponível"}</h3>
                <p><strong>Tópico:</strong> {palestrante.topic || "Tópico não disponível"}</p>
                <p style={{ display: showDescription === palestrante.id ? 'block' : 'none' }}>
                  <strong>Descrição:</strong> {palestrante.description || "Descrição não disponível"}
                </p>
                <button onClick={() => toggleDescription(palestrante.id)}>
                  {showDescription === palestrante.id ? "Ocultar" : "Mostrar"} Descrição
                </button>
                <p><strong>Horário:</strong> {palestrante.time || "Horário não disponível"}</p>
              </li>
            ))
          ) : (
            <p>Nenhum palestrante disponível no momento.</p>
          )}
        </ul>
      </div>
    </section>
  );
};
