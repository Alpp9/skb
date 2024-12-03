// Proses Login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit biasa

    const username = document.getElementById("username").value.trim(); // Ambil username
    const selectedPackage = document.getElementById("package").value; // Ambil paket soal

    // Validasi username
    if (username !== "albar") {
        alert("Username tidak valid!");
        return;
    }

    if (selectedPackage) {
        // Simpan informasi username dan paket soal
        console.log("Username:", username);
        console.log("Paket Soal:", selectedPackage);

        // Load soal berdasarkan paket
        loadQuestions(selectedPackage);

        // Tampilkan halaman kuis
        document.getElementById("login-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";

        // Memulai timer
        startTimer();

        // Tampilkan soal pertama
        showQuestion();
    } else {
        alert("Pilih paket soal untuk melanjutkan!");
    }
});


// Fungsi untuk memuat soal berdasarkan paket
function loadQuestions(packageNumber) {
    // Pilihan soal berdasarkan paket
    if (packageNumber === "1") {
        questions = questionsPackage1;
    } else if (packageNumber === "2") {
        questions = questionsPackage2;
    } else if (packageNumber === "3") {
        questions = questionsPackage3;
    } else if (packageNumber === "4") {
        questions = questionsPackage4;
    } else if (packageNumber === "5") {
        questions = questionsPackage5;
    } else if (packageNumber === "hot1") {
        questions = questionsPackageHOT1;
    }
}

let currentQuestion = 0; // Soal saat ini
let score = 0; // Skor pengguna
let userAnswers = []; // Array untuk menyimpan jawaban pengguna

// Fungsi untuk menampilkan pertanyaan
function showQuestion() {
    const quizContainer = document.getElementById('quiz');
    const question = questions[currentQuestion];

    // Huruf untuk opsi jawaban (A, B, C, D, E)
    const answerLabels = ['A', 'B', 'C', 'D', 'E'];

    // Generate tampilan soal dengan penomoran otomatis
    quizContainer.innerHTML = `
        <h2>Soal ${currentQuestion + 1}: ${question.question}</h2>
        ${question.answers.map((answer, index) => `
            <label>
                <input type="radio" name="answer" value="${index}" 
                ${userAnswers[currentQuestion] === index ? "checked" : ""}>
                <strong>${answerLabels[index]}.</strong> ${answer}
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

    // Simpan jawaban pengguna
    userAnswers[currentQuestion] = parseInt(selectedAnswer.value);

    // Pindah ke soal berikutnya
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
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Pilih jawaban terlebih dahulu sebelum mengirim!");
        return;
    }

    // Simpan jawaban terakhir ke array userAnswers
    userAnswers[currentQuestion] = parseInt(selectedAnswer.value);

    // Hitung skor akhir
    score = 0;
    questions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            score += 5;
        }
    });

    // Sembunyikan halaman kuis dan tampilkan halaman hasil
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block"; // Tampilkan hasil

    // Tampilkan hasil skor
    document.getElementById("final-score").innerText = `Skor Anda: ${score} dari ${questions.length * 5}`;
}


// Timer Script
let totalTime = 90 * 60; // 90 menit dalam detik
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

    // Hitung skor akhir
    score = 0;
    questions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            score += 5;
        }
    });

    // Tampilkan hasil skor
    document.getElementById("final-score").innerText = `Skor Anda: ${score} dari ${questions.length * 5}`;
}

// Fungsi untuk memulai ulang kuis
function restartQuiz() {
    // Reset semua data dan tampilkan form login lagi
    currentQuestion = 0;
    score = 0;
    totalTime = 90 * 60; // Reset timer
    userAnswers = []; // Reset jawaban pengguna

    // Menyembunyikan halaman hasil dan menampilkan halaman login
    document.getElementById("result-container").style.display = "none"; // Sembunyikan halaman hasil
    document.getElementById("quiz-container").style.display = "none"; // Sembunyikan halaman kuis
    document.getElementById("login-container").style.display = "flex"; // Tampilkan halaman login dengan posisi benar
}
