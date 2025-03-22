import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Adiciona a navegação
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Importa os módulos necessários

import '../styles/Destaques.css';

//  imagens diretamente da pasta assets
import produto1 from "../assets/produtos/Foto2.jpg";
import produto2 from "../assets/produtos/Foto3.jpg";
import produto3 from "../assets/produtos/Foto4.jpg";
import produto4 from "../assets/produtos/Foto5.jpg";
import produto5 from "../assets/produtos/Foto6.jpg";

const produtos = [
  { id: 1, nome: "Produto 1", imagem: produto1 },
  { id: 2, nome: "Produto 2", imagem: produto2 },
  { id: 3, nome: "Produto 3", imagem: produto3 },
  { id: 3, nome: "Produto 4", imagem: produto4 },
  { id: 3, nome: "Produto 5", imagem: produto5 },
];

const Destaques = () => {
  return (
    <div className="destaques-container">
      <h2>Destaques</h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]} // Adiciona Navigation e Autoplay
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation // Ativa os botões de navegação
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Faz o carrossel rodar automaticamente
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {produtos.map(produto => (
          <SwiperSlide key={produto.id}>
            <div className="produto">
              <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
              <p>{produto.nome}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Destaques;