import { useSelector } from 'react-redux';
import {
  Container,
  StyledBox,
  Overlay,
  Background,
  TextContainer,
} from './HadisStyle';

// Объект переводов для двух языков
const translations = {
  ky: {
    servicesTitle: 'Үйдүн жылытуу кызматы',
    servicesDescription:
      'Профессияналдуу жылытуу системаларын орнотуу жана тейлөө, кепилденген сапат жана ишенимдүүлүк',
  },
  ru: {
    servicesTitle: 'Услуги по отоплению',
    servicesDescription:
      'Профессиональная установка и обслуживание отопления для вашего дома, гарантированное качество и надежность',
  },
};

const Hadis = () => {
  // Получаем состояние языка из Redux store
  const { languageStore } = useSelector((state) => state.umra);

  // Определяем текущий язык (если languageStore = true, то кыргызский, если false — русский)
  const lang = languageStore ? translations.ky : translations.ru;

  return (
    <Container>
      <StyledBox>
        <Background />
        <Overlay />
        <TextContainer>
          {/* Используем переводы в зависимости от языка */}
          <p className="tirmizi">{lang.servicesTitle}</p>
          <h1>{lang.servicesDescription}</h1>
        </TextContainer>
      </StyledBox>
    </Container>
  );
};

export default Hadis;
