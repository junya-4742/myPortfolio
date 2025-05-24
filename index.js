const express = require("express");
const engine = require("ejs-mate");
const app = express();

app.use(express.static('public'));


app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/",(req,res) => {
    res.render("portfolio/home",{
        title:"ホームページ-junya",
        description:"これはjunyaのポートフォリオサイトのホームページです。"
    });
});

app.get("/skills",(req,res) => {
    res.render("portfolio/skills",{
        title:"skills",
        description:"これはjunyaのスキルを表示するページです。主に技術スタックを掲載しています。"
    });
});

app.get("/works",(req,res) => {
    res.render("portfolio/works",{
        title:"実績一覧",
        description:"これはjunyaの実績を表示するページです。制作したHPやWEBアプリを掲載しています。"
    });
});

app.get("/yelpcamp",(req,res) => {
    res.render("portfolio/works/yelpcamp",{
        title:"yelpcamp",
        description:"これはjunyaが作成したWEBアプリ「yelpcamp」の詳細ページです。"
    });
});



app.listen(3000,() => {
    console.log("ポート3000でリクエスト待受中…");
});