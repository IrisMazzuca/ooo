import React from "react";
import Post from "./components/Post/Post";
import "./styles.css";
import PostAuthor from "./components/PostAuthor/PostAuthor";
import PostContent from "./components/PostContent/PostContent";
import Comments from "./components/Comments/Comments";

const postInfo = {
  date: new Date(2020, 1, 1),
  user: {
    username: "Ada Lovelace",
    avatar:
      "https://www.stylist.co.uk/images/app/uploads/2018/10/09155947/ada-lovelace-day-2018-quotes-facts-biography-crop-1539097197-1366x1366.jpg?w=256&h=256&fit=max&auto=format%2Ccompress"
  },
  img: {
    src:
      "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/067/square_256/reactstorybooklogo.png",
    altText: "Logo de React con imagen de paisaje de fondo"
  },
  title: "Cómo hacer un componente en React",
  content:
    "Un componente en React es un elemento independiente y reeutilizable. Existen dos tipos de componentes en React. Componentes funcionales: Solo tienen propiedades.    Componentes de clase: Tienen propiedades, ciclos de vida y propiedades.Componentes funcionales    Son componentes que generan elementos React. Por convenio se pone el nombre de la función en mayúsculas. Para renderizarlo simplemente se pone una etiqueta con el nombre de la función.",
  comments: [
    {
      user: {
        username: "Grace Hopper",
        avatar:
          "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1479476409/iujuzczbplblfzqjwiq5.png"
      },
      date: new Date(2020, 1, 2),
      content: "Muy buen artículo!"
    },
    {
      user: {
        username: "Margaret Hamilton",
        avatar:
          "https://wehackthemoon.com/sites/default/files/styles/tile/public/2019-03/73326.jpg?h=5e39e9b9&itok=z6BmzeDc"
      },
      date: new Date(2020, 1, 2),
      content: "Excelente!"
    },
    {
      user: {
        username: "Katie Bouman",
        avatar:
          "https://d3i6fh83elv35t.cloudfront.net/static/2019/04/57096998_10213321822497968_5057670792469282816_o.jpg"
      },
      date: new Date(2020, 1, 3),
      content: "Muy útil! Gracias por subirlo"
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <Post>
        <PostAuthor
          avatar={postInfo.user.avatar}
          name={postInfo.user.username}
          date={postInfo.date}
        />
        <PostContent
          srclogo={postInfo.img.src}
          title={postInfo.title}
          content={postInfo.content}
        />
        <Comments comments={postInfo.comments} />
      </Post>
    </div>
  );
}
