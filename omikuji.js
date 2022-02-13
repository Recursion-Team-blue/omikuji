class Omikuji {
    constructor(fortune, description, imageURL, lucky_language, lucky_database, lucky_editor) {
        this.fortune = fortune;
        this.description = description;
        this.imageURL = imageURL;
        this.lucky_language = lucky_language;
        this.lucky_database = lucky_database;
        this.lucky_editor = lucky_editor;
    }
}

const omikujis = [
    new Omikuji("大吉",
                "リリースしたソフトウェアにバグが見つかりますが、再現性が低いためユーザーも上司も誰ひとり気付かないでしょう。見なかったことにするのが吉。",
                "images/daikichi.png",
                "TypeScript",
                "DB2",
                "Emacs"),
    new Omikuji("中吉",
                "リリースしたソフトウェアに深刻なバグが見つかりますが、口八丁な営業のお陰で事無きを得るでしょう。ただし、後日それを理由に無茶振りされるおそれがあるので油断は禁物です。",
                "images/chuukichi.png",
                "C++",
                "SQL Server",
                "Emacs"),
    new Omikuji("吉",
                "リリースしたソフトウェアにバグが見つかりますが、幸いユーザー企業のお偉方は極度のITオンチです。仕様で押し通すのが吉。",
                "images/kichi.png",
                "C♯",
                "DB2",
                "Visual Studio Code"),
    new Omikuji("小吉",
                "リリース前のソフトウェアにバグが見つかります。貴方のお勤め先が上流の企業ならばそれほど大きな問題にはなりませんが、三次請けよりも下流の場合はご愁傷様でございます。",
                "images/shoukichi.png",
                "C++",
                "DB2",
                "Emacs"),
    new Omikuji("末吉",
                "リリース直前に致命的なバグが見つかるでしょう。お泊まりの準備をして出社するのが吉。",
                "images/mikichi.png",
                "Ruby",
                "PostgreSQL",
                "Atom"),
    new Omikuji("凶",
                "リリースしたソフトウェアに致命的な欠陥が見つかり、それが原因で顧客の機密情報が派手に流出します。仕様で押し通すにはいささか無理がありますので、潔く腹をくくりましょう。",
                "images/kyou.png",
                "PHP",
                "Oracle Database",
                "Atom"),
];


const drawOmikuji = () => {
    let omikujiContainer = document.querySelector("#omikuji-container");
    let currOmikuji = omikujis[Math.floor(Math.random() * omikujis.length)];
    omikujiContainer.innerHTML = `
        <div class="text-danger omikuji my-4">
            <!-- header -->
            <h2 class="p-4">ソフトウェア開発みくじ</h2>
            <hr class="line-red mb-4">
            <img class="col-8" src="${currOmikuji.imageURL}" alt="${currOmikuji.fortune}-png" />
            <h1>${currOmikuji.fortune}</h1>
            <hr class="line-red my-4">
            
            <!-- middle -->
            <p class="p-3">${currOmikuji.description}</p>
            <hr class="line-red my-4">

            <!-- footer -->
            <p>✿ラッキー言語✿</p>
            <h5>${currOmikuji.lucky_language}</h5>
            <hr class="line-red my-4">
            <p>✿ラッキーデータベース✿</p>
            <h5>${currOmikuji.lucky_database}</h5>
            <hr class="line-red my-4">
            <p>✿ラッキーエディタ✿</p>
            <h5>${currOmikuji.lucky_editor}</h5>
            <button class="btn btn-danger rounded-pill my-2" onclick="drawOmikuji()">もう一度おみくじを引く</button>
        </div>
    `;
};

drawOmikuji();