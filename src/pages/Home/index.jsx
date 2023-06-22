import { FiPlus, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { api } from "../../services/api";

import { Header } from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Container, Top, Notes, ButtonAdd } from './styles';

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return(
    <Container>
      <Header>
        <Input 
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </Header>

      <main>
        <Wrapper>
          <Top>
            <h1>Meus filmes</h1>
            
            <ButtonAdd to="/new">
              <FiPlus /> 
              Adicionar filme
            </ButtonAdd>
          </Top>

          <Notes>
            {notes.length == 0 ? (
              <h2>Nenhum filme encontrado</h2>
            ) : (
              notes.map(note => (
                <Note
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))
            )}
          </Notes>
        </Wrapper>
      </main>
    </Container>
  )
}