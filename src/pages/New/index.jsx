import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { ButtonText } from '../../components/ButtonText';
import { Wrapper } from "../../components/Wrapper";

import { Container, Inputs, Buttons } from "./styles";

export function New(){
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function inputValidator() {
    if (!title) {
      alert("É necessário dar um título para adicionar um filme.");
      return false;
    }

    const isRatingValid = rating >= 0 && rating <= 5 && rating !== "";

    if (!isRatingValid) {
      alert("É necessário dar uma nota entre 0 e 5 para adicionar um filme.");
      return false;
    }

    if (newTag) {
      alert(
        "Um marcador foi preenchido, mas não foi adicionado. Adicione-o, ou deixe o campo vazio."
      );
      return false;
    }

    return true;
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
		setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote(){
    const passedValidation = inputValidator();

    if (passedValidation) {
      try {
        api.post("/notes", {
          title,
          description,
          rating,
          tags
        });
        alert("Filme adicionado com sucesso!");
		    navigate("/");
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível adicionar o filme");
          console.log(error);
        }
      }
    }
  }

  function handleBack() {
    const userConfirmation = confirm(
      "Todas as mudanças serão perdidas...Tem certeza que deseja descartar as alterações?"
    );

    if (userConfirmation) {
      navigate(-1);
    }
  }

  return(
    <Container>
      <Header />
      
      <main>
        <Wrapper>
          <ButtonText 
            to="/" 
            title="Voltar" 
            icon={FiArrowLeft} 
          />

          <h1>Novo filme</h1>

          <Inputs>
            <Input 
              placeholder="Título"
              value={title}
              onChange={e => setTitle(e.target.value)} 
            />

            <Input 
              placeholder="Sua nota (de 0 - 5)"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </Inputs>
            
          <TextArea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />

          <h2>Marcadores</h2>
          <section className="tags">
            {
              tags.map((tag, index) => (
                <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }

            <NoteItem
              isNew
              placeholder="Nova tag"
              value={newTag}
              onClick={handleAddTag}
              onChange={e => setNewTag(e.target.value)}
            />
          </section>
            
          <Buttons>
            <Button title="Descartar filme" onClick={handleBack} />
            <Button title="Salvar filme" onClick={handleNewNote} />
          </Buttons>
        </Wrapper>
      </main>
    </Container>
  );
};