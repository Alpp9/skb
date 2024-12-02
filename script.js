// Proses Login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit biasa

    // Ambil username yang diinputkan
    const username = document.getElementById("username").value;

    // Validasi input username
    if (username.trim() !== "") {
        // Menyembunyikan form login dan menampilkan halaman kuis
        document.getElementById("login-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "block"; // Pastikan ini benar-benar menampilkan kuis

        // Proses username lebih lanjut (misalnya menyimpan di sessionStorage atau localStorage)
        console.log("Username:", username);

        // Memulai timer setelah login dan halaman kuis tampil
        startTimer();

        // Memulai kuis (menampilkan soal pertama)
        showQuestion();
    } else {
        alert("Masukkan username untuk melanjutkan!");
    }
});

let currentQuestion = 0;
let score = 0;

// Pastikan Anda memanggil variabel `questions` dari `questions.js` (tidak mendeklarasikan lagi di sini)

// Fungsi untuk menampilkan pertanyaan
function showQuestion() {
    const quizContainer = document.getElementById('quiz');
    const question = questions[currentQuestion];
    quizContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.answers.map((answer, index) => `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${answer}
            </label><br>
        `).join('')}
    `;

    // Tampilkan tombol yang sesuai berdasarkan soal
    const submitButton = document.getElementById('submit');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    if (currentQuestion === questions.length - 1) {
        submitButton.style.display = "inline-block";
        nextButton.style.display = "none";
    } else {
        submitButton.style.display = "none";
        nextButton.style.display = "inline-block";
    }

    prevButton.style.display = currentQuestion > 0 ? "inline-block" : "none";
}

// Fungsi untuk navigasi ke soal berikutnya
function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Pilih jawaban terlebih dahulu!");
        return;
    }
    if (parseInt(selectedAnswer.value) === questions[currentQuestion].correct) {
        score += 5;
    }
    currentQuestion++;
    showQuestion();
}

// Fungsi untuk navigasi ke soal sebelumnya
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// Fungsi untuk submit kuis
function submitQuiz() {
    document.getElementById('results').innerText = `Skor Anda: ${score} dari ${questions.length * 5}`;
    document.getElementById('quiz').innerHTML = "";
    document.getElementById('submit').style.display = "none";
    document.getElementById('prev').style.display = "none";
}

// Timer Script
let totalTime = 100 * 60; // 100 menit dalam detik
const timerElement = document.getElementById('timer');

// Fungsi untuk memulai timer
function startTimer() {
    const timerInterval = setInterval(function() {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        // Menampilkan timer dengan format menit:detik
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        totalTime--;

        // Ketika waktu habis
        if (totalTime < 0) {
            clearInterval(timerInterval);
            finishQuiz(); // Ganti dengan tampilan hasil
        }
    }, 1000); // Interval 1000ms (1 detik)
}

// Fungsi untuk menyelesaikan kuis dan menampilkan hasil
function finishQuiz() {
    // Sembunyikan halaman kuis dan tampilkan halaman hasil
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block"; // Tampilkan hasil

    // Tampilkan hasil skor
    document.getElementById("final-score").innerText = `Skor Anda: ${score} dari ${questions.length * 5}`;
}

// Fungsi untuk memulai ulang kuis
function restartQuiz() {
    // Reset semua data dan tampilkan form login lagi
    currentQuestion = 0;
    score = 0;
    totalTime = 100 * 60; // Reset timer
    
    // Menyembunyikan halaman hasil dan menampilkan halaman login
    document.getElementById("result-container").style.display = "none"; // Sembunyikan halaman hasil
    document.getElementById("quiz-container").style.display = "none"; // Sembunyikan halaman kuis
    document.getElementById("login-container").style.display = "flex"; // Tampilkan halaman login dengan posisi benar
}
