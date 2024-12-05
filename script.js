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

        // Buat tombol navigasi soal otomatis
        createNavigationButtons();
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
    } else if (packageNumber === "6") {
        questions = questionsPackage6;
    } else if (packageNumber === "7") {
        questions = questionsPackage7;
    } else if (packageNumber === "8") {
        questions = questionsPackage8;
    } else if (packageNumber === "9") {
        questions = questionsPackage9;
    } else if (packageNumber === "10") {
        questions = questionsPackage10;
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
// Generate tampilan soal dengan penomoran otomatis
   quizContainer.innerHTML = `
       <h2>${currentQuestion + 1}. ${question.question}</h2>
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

    // Tambahkan event listener ke radio input
    const answerInputs = document.querySelectorAll('input[name="answer"]');
    answerInputs.forEach(input => {
        input.addEventListener('change', saveAnswer); // Simpan jawaban otomatis saat berubah
    });

    // Perbarui status tombol navigasi
    updateNavigationButtons();
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
    updateNavigationButtons(); // Tambahkan ini
}

// Fungsi untuk navigasi ke soal sebelumnya
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        updateNavigationButtons(); // Tambahkan ini
    }
}

function submitQuiz() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Pilih jawaban terlebih dahulu sebelum mengirim!");
        return;
    }

    // Simpan jawaban terakhir ke array userAnswers
    userAnswers[currentQuestion] = parseInt(selectedAnswer.value);

    // Hitung skor akhir dan kumpulkan data soal
    score = 0;
    const questionResults = [];
    const answerLabels = ['A', 'B', 'C', 'D', 'E']; // Label untuk jawaban

    questions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.correct;
        if (isCorrect) score += 5;

        questionResults.push({
            number: index + 1,
            question: q.question,
            answers: q.answers,
            correctAnswer: q.correct,
            userAnswer: userAnswers[index],
            isCorrect: isCorrect,
        });
    });

    // Sembunyikan halaman kuis dan tampilkan hasil
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    // Tampilkan skor
    document.getElementById("final-score").innerText = `Skor Anda: ${score} dari ${questions.length * 5}`;

    // Tampilkan tombol nomor soal
    const questionSummary = document.getElementById("question-summary");
    questionSummary.innerHTML = ""; // Reset konten sebelumnya
    questionResults.forEach(result => {
        const button = document.createElement("button");
        button.textContent = result.number;
        button.className = `question-btn ${result.isCorrect ? "correct" : "wrong"}`;
        button.onclick = () => showQuestionDetails(result);
        questionSummary.appendChild(button);
    });
}


function showQuestionDetails(result) {
    const detailsContainer = document.getElementById("question-details");
    const answerLabels = ['A', 'B', 'C', 'D', 'E']; // Huruf untuk opsi jawaban

    detailsContainer.innerHTML = `
        <h4>${result.number}. ${result.question}</h4>
        <ul>
            ${result.answers
                .map((answer, index) => `
                <li class="${index === result.correctAnswer ? 'correct' : index === result.userAnswer ? 'wrong' : ''}">
                    <strong>${answerLabels[index]}.</strong> 
                    ${index === result.userAnswer ? '<strong>(Jawaban Anda)</strong> ' : ''}
                    ${answer}
                </li>
            `).join("")}
        </ul>
    `;
}


// Fungsi untuk membuat tombol navigasi berdasarkan jumlah soal
function createNavigationButtons() {
    const questionNavigation = document.getElementById('question-navigation');
    questionNavigation.innerHTML = ''; // Hapus tombol navigasi sebelumnya

    // Pastikan tombol navigasi dibuat berdasarkan panjang array questions
    for (let i = 0; i < questions.length; i++) {
        const button = document.createElement('button');
        button.className = 'question-btn';
        button.textContent = i + 1; // Angka soal
        button.onclick = () => goToQuestion(i); // Navigasi ke soal yang dipilih
        questionNavigation.appendChild(button);
    }
}


// Fungsi untuk memperbarui status tombol navigasi
function updateNavigationButtons() {
    const buttons = document.querySelectorAll('.question-btn');
    buttons.forEach((button, index) => {
        button.classList.remove('active');
        button.classList.remove('answered');

        if (userAnswers[index] !== undefined) {
            button.classList.add('answered'); // Tandai soal yang sudah dijawab
        }

        if (index === currentQuestion) {
            button.classList.add('active'); // Tandai soal yang sedang ditampilkan
        }
    });
}

function goToQuestion(questionIndex) {
    currentQuestion = questionIndex;
    showQuestion();
    updateNavigationButtons(); // Tambahkan ini
}

// Timer Script
let totalTime = 90 * 60; // 90 menit dalam detik
const timerElement = document.getElementById('timer');

// Fungsi untuk memulai timer
function startTimer() {
    // Deteksi perangkat berdasarkan ukuran layar
    const isMobile = window.innerWidth <= 768; // HP jika lebar layar <= 768px
    const interval = isMobile ? 1000 : 1000; // 2 detik di HP, 1 detik di Laptop

    const timerInterval = setInterval(function () {
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
    }, interval); // Gunakan interval sesuai perangkat
}


// Fungsi untuk memulai ulang kuis
function restartQuiz() {
    // Reset semua data dan tampilkan form login lagi
    currentQuestion = 0;
    score = 0;
    totalTime = 90 * 60; // Reset timer
    userAnswers = []; // Reset jawaban pengguna

    // Reset form login menggunakan reset()
    document.getElementById("login-form").reset(); // Reset semua field form

    // Menyembunyikan halaman hasil dan menampilkan halaman login
    document.getElementById("result-container").style.display = "none"; // Sembunyikan halaman hasil
    document.getElementById("quiz-container").style.display = "none"; // Sembunyikan halaman kuis
    document.getElementById("login-container").style.display = "flex"; // Tampilkan halaman login dengan posisi benar
}

function saveAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestion] = parseInt(selectedAnswer.value); // Simpan jawaban
        updateNavigationButtons(); // Perbarui tampilan tombol navigasi
    }
}

let startX = 0;

function enableSwipeNavigation() {
    const questionContainer = document.querySelector('.question-container'); // Container soal

    questionContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; // Catat posisi awal sentuhan
    });

    questionContainer.addEventListener('touchmove', (e) => {
        const deltaX = e.touches[0].clientX - startX;

        if (deltaX > 50) {
            // Geser ke kanan (soal sebelumnya)
            goToPreviousQuestion();
        } else if (deltaX < -50) {
            // Geser ke kiri (soal berikutnya)
            goToNextQuestion();
        }
    });
}

// Aktifkan swipe untuk layar kecil
if (window.innerWidth <= 768) {
    enableSwipeNavigation();
}
