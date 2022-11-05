const qiuzDB = [
    {
        question : 'Saat memakai aksesoris, warna apa yang paling cocok buat kamu?',
        a : 'Emas',
        b : 'Perak',
        ans : 'ans1'
    },
    {
        question : 'Saat berjemur di pantai, apa yang akan terjadi pada kulitmu?',
        a : 'Menggelap dengan sendirinya',
        b : 'Terbakar',
        ans : 'ans1'
    },
    {
        question : 'Warna baju apa yang membuat kamu terlihat lebih oke?',
        a : 'Putih/gading',
        b : 'Warna-warna gelap',
        ans : 'ans1'
    },
    {
        question : 'Apa warna urat nadi di pergelangan tangan kamu?',
        a : 'Biru kehijauan',
        b : 'Biru keunguan',
        ans : 'ans1'
    },
]

const question = document.querySelector('.question');
const Option1 = document.querySelector('#option1');
const Option2 = document.querySelector('#option2');
const Submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const result = document.querySelector('#showScore');
const recom = document.querySelector('#recom-title');
const reason = document.querySelector('#reason');
const foundi = document.querySelector('#foundi');
let score= 0;

let questionCount = 0;
const loadQuetions = () => {
   const questionList = qiuzDB[questionCount];
   question.innerText = questionList.question;
   Option1.innerText = questionList.a;
   Option2.innerText = questionList.b;
}
loadQuetions();

const getCheckAnswer = () => {
    let answer;
    answers.forEach(currenAns => {
        if(currenAns.checked){
            answer = currenAns.id;
        }
    });
    return answer;
};

const deSelectAll = () => {
    answers.forEach((currenAns)=>{
        currenAns.checked = false;
    })
}

Submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    
    if(checkAnswer === qiuzDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deSelectAll();
    if(questionCount < qiuzDB.length){
        loadQuetions();
    }
    else{
        
        result.classList.remove('scoreArea');
        if(score>=2)
        {
            result.innerHTML = 
                            `
                            <style>
                                .recommen{
                                    padding : 50px;
                                    margin : 50px 100px;
                                    border-radius: 10px;
                                    box-shadow: 10px 10px 5px #aaaaaa;
                                    background-color: #F1F1F1;
                                };
                            </style>
                            <h5 class = "m-4"style="text-decoration:underline; text-decoration-color: #ca1515;"><b>Result</b></h5>
                            <p style="padding : 10px;
                            margin : 15px;
                            border-radius: 10px;
                            box-shadow: 0px 5px 5px #aaaaaa;
                            background-color: #fff;">
                            Kamu memiliki skin undertone hangat. Kamu memiliki keuntungan untuk mendapatkan kulit gelap tanpa usaha yang sulit. Warna merah, kuning, oranye, atau cokelat akan cocok buatmu.</p>
                            <button class = 'btn m-4' onclick='location.reload()' 
                            style="background-color: #fff;
                            border-style: solid;
                            color: #ca1515;
                            border-color : #ca1515;
                            border-radius: 5px;"><b>Try again?</b></button>`;

            recom.innerHTML = `<h5 style="text-decoration:underline; text-decoration-color: #ca1515;"><b>Recommendation</b></h5>`;
            reason.innerHTML = `<p>Karena kamu punya skin undertone hangat, yuk cek foundation yang cocok buat kamu di bawah ini!</p>`;
            foundi.innerHTML = `
                            <div class="warm ">
                                <div class="row">
                                    <div class="col">
                                        <div class="card" style="width: 18rem;">
                                            <img class="card-img-top" src="../img/foundi/YellowBeige.png" alt="Card image cap">
                                            <div class="card-body">
                                            <h6 class="card-title"><b>Yellow Beige</b></h5>
                                            <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card" style="width: 18rem;">
                                            <img class="card-img-top" src="../img/foundi/YellowBronze.png" alt="Card image cap">
                                            <div class="card-body">
                                            <h6 class="card-title"><b>Yellow Bronze</b></h6>
                                            <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card" style="width: 18rem;">
                                            <img class="card-img-top" src="../img/foundi/YellowIvory.png" alt="Card image cap">
                                            <div class="card-body">
                                            <h6 class="card-title"><b>Yellow Ivory</b></h6>
                                            <a href="#" class="btn btn-primary">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                
        }
        else{
            result.innerHTML = 
                            `<style>
                                .recommen{
                                    padding : 50px;
                                    margin : 50px 100px;
                                    border-radius: 10px;
                                    box-shadow: 10px 10px 5px #aaaaaa;
                                    background-color: #F1F1F1;
                                };
                            </style>
                            <h5 class = "m-4"style="text-decoration:underline; text-decoration-color: #ca1515;"><b>Result</b></h5>
                            <p style="padding : 10px;
                            margin : 15px;
                            border-radius: 10px;
                            box-shadow: 0px 5px 5px #aaaaaa;
                            background-color: #fff;">
                            Kamu memiliki skin undertone dingin. Saat berada di bawah matahari, kulit kamu akan terbakar, tapi cepat hilang juga. Warna pink, ungu, biru, dan kehijauan paling pas jadi pilihanmu.</p>
                            <button class = 'btn m-4' onclick='location.reload()' 
                            style="background-color: #fff;
                            border-style: solid;
                            color: #ca1515;
                            border-color : #ca1515;
                            border-radius: 5px;"><b>Try again?</b></button>`;

            recom.innerHTML = `<h5 style="text-decoration:underline; text-decoration-color: #ca1515;"><b>Recommendation</b></h5>`;
            reason.innerHTML = `<p>Karena kamu punya skin undertone dingin, yuk cek foundation yang cocok buat kamu di bawah ini!</p>`;
            foundi.innerHTML = `
                    <div class="cool">
                        <div class="row">
                            <div class="col">
                                <div class="card" style="width: 18rem;">
                                    <img class="card-img-top" src="../img/foundi/PinkBeige.png" alt="Card image cap">
                                    <div class="card-body">
                                    <h6 class="card-title"><b>Pink Beige</b></h5>
                                    <a href="#" class="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" style="width: 18rem;">
                                    <img class="card-img-top" src="../img/foundi/PinkBronze.png" alt="Card image cap">
                                    <div class="card-body">
                                    <h6 class="card-title"><b>Pink Bronze</b></h6>
                                    <a href="#" class="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" style="width: 18rem;">
                                    <img class="card-img-top" src="../img/foundi/PinkIvory.png" alt="Card image cap">
                                    <div class="card-body">
                                    <h6 class="card-title"><b>Pink Ivory</b></h6>
                                    <a href="#" class="btn btn-primary">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }
    }
});
