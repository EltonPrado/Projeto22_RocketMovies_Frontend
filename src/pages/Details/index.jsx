import { FiArrowLeft, FiClock } from 'react-icons/fi';
import avatarPlaceholder from "../../assets/avatar_placeholder.png";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';
import { ButtonText } from '../../components/ButtonText';
import { Button} from '../../components/Button';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';
import { Container, Top, Info, Tags } from './styles';


export function Details(){
  const [data, setData] = useState({});
  const [dateFormatted, setDateFormatted] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();
  const avatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  async function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o filme?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    if (data.updated_at) {
      const initialFormat = data.updated_at;

      const [date, hour] = initialFormat.split(" ");
      const [year, month, day] = date.split("-");
      const [hours, minutes] = hour.split(":");

      setDateFormatted({
        date: `${day}/${month}/${year}`,
        hour: `${hours - 3}:${minutes}`,
      });
    }
  }, [data]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchData();
  }, []);

  return(
    <Container>
      <Header/>

    { data &&
      <main>
        <Wrapper>
          <ButtonText 
            onClick={handleBack}
            title="Voltar" 
            icon={FiArrowLeft} 
          />
          
          <Top>
            <div className="highlight">
              <h1>{data.title}</h1>
              <Rating grade={data.rating} isBigSize />
            </div>

            <Info>
              <div className='infos'>
                <div className="user-infos">
                  <img 
                    src={avatar}
                    alt={`Foto de perfil do usuário ${user.name}`}
                  />
                  <p>Por {user.name}</p>
                </div>

                <div className="note-infos">
                  <FiClock />
                  {dateFormatted && (
                    <p>
                      {dateFormatted.date} ás {dateFormatted.hour}
                    </p>
                  )}
                </div>
              </div>

              <Button 
                title="Excluir filme" 
                onClick={handleRemove} 
              />
            </Info>
          </Top>
          
          { data.tags &&
            <Tags>
              { data.tags.map(tag => (
                <Tag 
                  key={String(tag.id)}
                  title={tag.name} 
                /> ))
              }
            </Tags>
          }

          { data.description && (
            <p className="description">{data.description}</p>
          )}
        </Wrapper>
      </main>
    }
    </Container>
  )
}