import express from "express";
import cors from "cors";

const app = express();

const user = {
  username: "bobesponja",
  avatar:
    "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
};

const whitelist = ["http://127.0.0.1:5501", "*"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tweets = [
  {
    username: "bobesponja",
    tweet: "Olá mundo ",
    avatar:
      "https://s2.glbimg.com/1zleL_SY-4k9yhi9iFGuH1FsSmM=/e.glbimg.com/og/ed/f/original/2020/06/17/bobesponja_EqE9Kg7.jpg",
  },
  {
    username: "Patrick",
    tweet: "comendo sanduiches ",
    avatar:
      "https://i.discogs.com/jEAi_u7MIVkQHLUmzs4DHBgpNASoiS1VlM_olXk-y-U/rs:fit/g:sm/q:90/h:667/w:512/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTU5NDQ2/MzgtMTUwMjk4MDEz/OC02MTIwLmpwZWc.jpeg",
  },
  {
    username: "LulaMolusco",
    tweet: "Olá pesssoal ",
    avatar:
      "https://upload.wikimedia.org/wikipedia/pt/0/0c/Squidward_Tentacles.png",
  },
  {
    username: "Sr.Sirigueijo",
    tweet: "Contando dinheiro... ",
    avatar:
      "https://epipoca.com.br/wp-content/uploads/2021/04/Seu-Sirigueijo-e-Gary-em-Bob-Esponja-Calca-Quadrada-Reproducao-1200x900.jpg",
  },
  {
    username: "bobesponja",
    tweet: "#CaçarAguaViva ",
    avatar:
      "https://s2.glbimg.com/1zleL_SY-4k9yhi9iFGuH1FsSmM=/e.glbimg.com/og/ed/f/original/2020/06/17/bobesponja_EqE9Kg7.jpg",
  },
  {
    username: "Patrick",
    tweet: "#SomosTodosEstrelas",
    avatar:
      "https://i.discogs.com/jEAi_u7MIVkQHLUmzs4DHBgpNASoiS1VlM_olXk-y-U/rs:fit/g:sm/q:90/h:667/w:512/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTU5NDQ2/MzgtMTUwMjk4MDEz/OC02MTIwLmpwZWc.jpeg",
  },
  {
    username: "Sr.Sirigueijo",
    tweet: "Moremoney  ",
    avatar:
      "https://epipoca.com.br/wp-content/uploads/2021/04/Seu-Sirigueijo-e-Gary-em-Bob-Esponja-Calca-Quadrada-Reproducao-1200x900.jpg",
  },
  {
    username: "bobesponja",
    tweet: "hahahahahahah ",
    avatar:
      "https://s2.glbimg.com/1zleL_SY-4k9yhi9iFGuH1FsSmM=/e.glbimg.com/og/ed/f/original/2020/06/17/bobesponja_EqE9Kg7.jpg",
  },
  {
    username: "Sr.Sirigueijo",
    tweet: "amo muito tudo isso ",
    avatar:
      "https://epipoca.com.br/wp-content/uploads/2021/04/Seu-Sirigueijo-e-Gary-em-Bob-Esponja-Calca-Quadrada-Reproducao-1200x900.jpg",
  },
  {
    username: "LulaMolusco",
    tweet: "#PrecisandoDeFérias ",
    avatar:
      "https://upload.wikimedia.org/wikipedia/pt/0/0c/Squidward_Tentacles.png",
  },
];

let picture = "";

app.get("/", (req, res) => {
  res.json({ Home: "Hello World!" });
});
                    //requisicao ao servidor
app.get("/tweets", (req, res) => {
                         // resposta do servidor   
  res.json(tweets);
});

app.post("/sign-up", (req, res) => {
  picture = req.body.avatar;
  res.status(200).json({ success: "sucesso" });
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  if (!username)
    return res.status(400).json({ error: "Usuario nao identificado" });

  if (!tweet) return res.status(400).json({ error: "Tweet vazio" });
  tweets.push({ username, tweet, avatar: picture });

  return res.status(200).json({
    OK: "OK",
  });
});

app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});

