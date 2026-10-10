// CINEVERSE
// Movie Recommendations and SceneIt Quiz

// --------------------------------------------------
// VARIABLES
// --------------------------------------------------

var selectedMood = "comfort";
var quizQuestions = [];
var currentQuestion = 0;
var quizScore = 0;
var answerChosen = false;


// --------------------------------------------------
// HELPER FUNCTION
// Checks whether a value exists in an array
// --------------------------------------------------

function containsValue(list, value) {
    var i;

    for (i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return true;
        }
    }

    return false;
}


// --------------------------------------------------
// 53 MOVIES
// --------------------------------------------------

var movies = [
    {
        title: "Hamilton",
        year: 2020,
        genres: ["Musical", "Drama"],
        moods: ["thoughtful", "comfort"],
        rating: 10,
        runtime: "160 min",
        description: "A filmed stage musical about Alexander Hamilton, ambition, revolution and the people who shaped a nation.",
        poster: "images/Hamilton.jpg"
    },
    {
        title: "The Fast and the Furious",
        year: 2001,
        genres: ["Action", "Crime", "Thriller"],
        moods: ["thriller", "adventure"],
        rating: 8.5,
        runtime: "106 min",
        description: "An undercover police officer enters the dangerous world of illegal street racing.",
        poster: "images/The Fast and the Furious.jpg"
    },
    {
        title: "The Book of Life",
        year: 2014,
        genres: ["Romance", "Animation", "Musical", "Adventure"],
        moods: ["romance", "adventure", "comfort"],
        rating: 9,
        runtime: "95 min",
        description: "A colourful journey through love, family traditions and the Land of the Remembered.",
        poster: "images/The book of life movie poster.jpg"
    },
    {
        title: "Jupiter Ascending",
        year: 2015,
        genres: ["Sci-Fi", "Action", "Romance", "Adventure"],
        moods: ["adventure", "romance"],
        rating: 9,
        runtime: "127 min",
        description: "An ordinary young woman discovers that her destiny reaches far beyond Earth.",
        poster: "images/Jupiter Ascending.jpg"
    },
    {
        title: "Rio",
        year: 2011,
        genres: ["Animation", "Comedy", "Adventure", "Romance", "Musical"],
        moods: ["comedy", "adventure", "romance", "comfort"],
        rating: 9.5,
        runtime: "96 min",
        description: "A rare blue macaw leaves his familiar home and discovers friendship, music and adventure in Rio.",
        poster: "images/Rio.jpg"
    },
    {
        title: "The Epic Bahubali",
        year: 2015,
        genres: ["Action", "Adventure", "Romance", "Fantasy"],
        moods: ["adventure", "romance", "thriller"],
        rating: 9,
        runtime: "159 min",
        description: "An epic tale of royal secrets, courage, family and a battle for a kingdom.",
        poster: "images/The Epic Bahubali.jpg"
    },
    {
        title: "Paddington 2",
        year: 2017,
        genres: ["Comedy", "Adventure", "Family"],
        moods: ["comfort", "comedy", "adventure"],
        rating: 9.5,
        runtime: "104 min",
        description: "Paddington tries to find the perfect present for his aunt but ends up in an unexpected adventure.",
        poster: "images/paddington2.jpg"
    },
    {
        title: "Inside Out",
        year: 2015,
        genres: ["Animation", "Comedy", "Adventure"],
        moods: ["comfort", "thoughtful", "comedy"],
        rating: 9,
        runtime: "95 min",
        description: "A young girl's emotions work together as she adjusts to a major change in her life.",
        poster: "images/inside-out.jpg"
    },
    {
        title: "The Intern",
        year: 2015,
        genres: ["Comedy", "Drama"],
        moods: ["comfort", "comedy", "thoughtful"],
        rating: 8.5,
        runtime: "121 min",
        description: "A retired man becomes an intern at a modern company and builds an unlikely friendship with its founder.",
        poster: "images/the-intern.jpg"
    },
    {
        title: "The Notebook",
        year: 2004,
        genres: ["Romance", "Drama"],
        moods: ["romance", "thoughtful"],
        rating: 9,
        runtime: "123 min",
        description: "A lasting love story follows two people whose connection survives distance, time and hardship.",
        poster: "images/the-notebook.jpg"
    },
    {
        title: "Interstellar",
        year: 2014,
        genres: ["Sci-Fi", "Adventure", "Drama"],
        moods: ["thoughtful", "adventure"],
        rating: 9.5,
        runtime: "169 min",
        description: "Explorers travel beyond Earth in search of a future for humanity.",
        poster: "images/interstellar.jpg"
    },
    {
        title: "Jumanji",
        year: 1995,
        genres: ["Adventure", "Comedy", "Fantasy"],
        moods: ["adventure", "comedy"],
        rating: 8.5,
        runtime: "104 min",
        description: "A mysterious board game brings its dangerous jungle world into real life.",
        poster: "images/jumanji.jpg"
    },
    {
        title: "Coco",
        year: 2017,
        genres: ["Animation", "Adventure", "Musical", "Fantasy"],
        moods: ["comfort", "adventure", "thoughtful"],
        rating: 9.5,
        runtime: "105 min",
        description: "A young musician journeys into the Land of the Dead to uncover his family's history.",
        poster: "images/coco.jpg"
    },
    {
        title: "The Conjuring",
        year: 2013,
        genres: ["Horror", "Mystery", "Thriller"],
        moods: ["horror", "thriller"],
        rating: 8.5,
        runtime: "112 min",
        description: "Paranormal investigators help a family experiencing frightening events in their farmhouse.",
        poster: "images/The Conjuring.jpg"
    },
    {
        title: "Insidious",
        year: 2010,
        genres: ["Horror", "Mystery", "Thriller"],
        moods: ["horror", "thriller"],
        rating: 8,
        runtime: "103 min",
        description: "A family searches for answers when their son falls into a mysterious coma.",
        poster: "images/Insidious.jpg"
    },
    {
        title: "Annabelle",
        year: 2014,
        genres: ["Horror", "Mystery"],
        moods: ["horror", "thriller"],
        rating: 7.5,
        runtime: "99 min",
        description: "A seemingly ordinary doll becomes the centre of terrifying supernatural events.",
        poster: "images/Annabelle.jpg"
    },
    {
        title: "A Quiet Place",
        year: 2018,
        genres: ["Horror", "Thriller", "Drama"],
        moods: ["horror", "thriller"],
        rating: 9,
        runtime: "90 min",
        description: "A family must remain almost completely silent to survive creatures that hunt by sound.",
        poster: "images/A Quiet Place.jpg"
    },
    {
        title: "The Nun",
        year: 2018,
        genres: ["Horror", "Mystery"],
        moods: ["horror", "thriller"],
        rating: 7.5,
        runtime: "96 min",
        description: "A priest and a young nun investigate a disturbing secret inside a remote abbey.",
        poster: "images/The Nun.jpg"
    },
    {
        title: "IT",
        year: 2017,
        genres: ["Horror", "Thriller"],
        moods: ["horror", "thriller"],
        rating: 8,
        runtime: "135 min",
        description: "A group of friends confronts a terrifying presence haunting their town.",
        poster: "images/IT.jpg"
    },
    {
        title: "The Ring",
        year: 2002,
        genres: ["Horror", "Mystery", "Thriller"],
        moods: ["horror", "mystery", "thriller"],
        rating: 8,
        runtime: "115 min",
        description: "A journalist investigates a mysterious recording connected to a frightening rumour.",
        poster: "images/The Ring.jpg"
    },
    {
        title: "Sinister",
        year: 2012,
        genres: ["Horror", "Mystery", "Thriller"],
        moods: ["horror", "mystery", "thriller"],
        rating: 8,
        runtime: "110 min",
        description: "A writer discovers disturbing footage while researching a series of unexplained deaths.",
        poster: "images/Sinister.jpg"
    },
    {
        title: "The Sixth Sense",
        year: 1999,
        genres: ["Mystery", "Drama", "Thriller"],
        moods: ["mystery", "thoughtful", "thriller"],
        rating: 9,
        runtime: "107 min",
        description: "A child psychologist tries to help a young boy who claims to see people others cannot.",
        poster: "images/The Sixth Sense.jpg"
    },
    {
        title: "Shutter Island",
        year: 2010,
        genres: ["Mystery", "Thriller", "Drama"],
        moods: ["mystery", "thoughtful", "thriller"],
        rating: 9,
        runtime: "138 min",
        description: "Two investigators visit an isolated hospital where nothing seems quite as it appears.",
        poster: "images/Shutter Island.jpg"
    },
    {
        title: "Gone Girl",
        year: 2014,
        genres: ["Mystery", "Thriller", "Crime"],
        moods: ["mystery", "thriller", "thoughtful"],
        rating: 8.5,
        runtime: "149 min",
        description: "A disappearance turns a marriage into a media spectacle full of suspicion and secrets.",
        poster: "images/Gone Girl.jpg"
    },
    {
        title: "Murder on the Orient Express",
        year: 2017,
        genres: ["Mystery", "Crime", "Drama"],
        moods: ["mystery", "thoughtful"],
        rating: 8,
        runtime: "114 min",
        description: "Detective Hercule Poirot investigates a murder aboard a luxury train.",
        poster: "images/Murder on the Orient Express.jpg"
    },
    {
        title: "Scream",
        year: 1996,
        genres: ["Horror", "Mystery", "Thriller"],
        moods: ["horror", "mystery", "thriller"],
        rating: 8.5,
        runtime: "111 min",
        description: "A masked killer terrorises a town while a group of teenagers tries to uncover the truth.",
        poster: "images/Scream.jpg"
    },
    {
        title: "Final Destination",
        year: 2000,
        genres: ["Horror", "Thriller"],
        moods: ["horror", "thriller"],
        rating: 8,
        runtime: "98 min",
        description: "After escaping a disaster, a group of young people begins to experience a disturbing chain of events.",
        poster: "images/Final Destination.jpg"
    },
    {
        title: "The Others",
        year: 2001,
        genres: ["Horror", "Mystery", "Thriller"],
        moods: ["horror", "mystery"],
        rating: 8.5,
        runtime: "104 min",
        description: "A mother living in a dark, isolated house becomes convinced that something is wrong.",
        poster: "images/The Others.jpg"
    },
    {
        title: "Coraline",
        year: 2009,
        genres: ["Animation", "Fantasy", "Horror", "Adventure"],
        moods: ["adventure", "horror", "mystery"],
        rating: 9,
        runtime: "100 min",
        description: "A curious girl discovers a strange alternate world that hides a sinister secret.",
        poster: "images/Coraline.jpg"
    },
    {
        title: "The Maze Runner",
        year: 2014,
        genres: ["Sci-Fi", "Action", "Mystery", "Adventure"],
        moods: ["adventure", "mystery", "thriller"],
        rating: 8.5,
        runtime: "113 min",
        description: "A teenager wakes up in a maze with other young people and tries to discover why they are there.",
        poster: "images/The Maze Runner.jpg"
    },
    {
        title: "Now You See Me",
        year: 2013,
        genres: ["Mystery", "Crime", "Thriller"],
        moods: ["mystery", "thoughtful", "thriller"],
        rating: 8.5,
        runtime: "115 min",
        description: "A group of illusionists performs daring tricks while investigators try to work out their methods.",
        poster: "images/Now You See Me.jpg"
    },
    {
        title: "Escape Room",
        year: 2019,
        genres: ["Horror", "Thriller", "Mystery"],
        moods: ["thriller", "mystery", "horror"],
        rating: 7.5,
        runtime: "99 min",
        description: "Strangers must solve dangerous puzzles inside a series of elaborate escape rooms.",
        poster: "images/Escape Room.jpg"
    },
    {
        title: "Knives Out",
        year: 2019,
        genres: ["Mystery", "Crime", "Comedy"],
        moods: ["mystery", "thoughtful", "comedy"],
        rating: 9,
        runtime: "130 min",
        description: "A detective investigates a wealthy family's secrets after a celebrated novelist dies.",
        poster: "images/Knives Out.jpg"
    },
    {
        title: "The Avengers",
        year: 2012,
        genres: ["Action", "Adventure", "Sci-Fi"],
        moods: ["adventure", "thriller"],
        rating: 9,
        runtime: "143 min",
        description: "A team of extraordinary heroes joins forces to protect Earth from a powerful threat.",
        poster: "images/The Avengers.jpg"
    },
    {
        title: "Black Panther",
        year: 2018,
        genres: ["Action", "Adventure", "Sci-Fi"],
        moods: ["adventure", "thoughtful"],
        rating: 9,
        runtime: "134 min",
        description: "A young king must defend his homeland while deciding what kind of leader he will become.",
        poster: "images/Black Panther.jpg"
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        genres: ["Animation", "Action", "Adventure", "Sci-Fi"],
        moods: ["adventure", "comedy", "comfort"],
        rating: 9.5,
        runtime: "117 min",
        description: "Miles Morales discovers his powers and meets Spider-heroes from different dimensions.",
        poster: "images/Spider-Man Into the Spider-Verse.jpg"
    },
    {
        title: "The Lion King",
        year: 1994,
        genres: ["Animation", "Adventure", "Drama", "Musical"],
        moods: ["comfort", "adventure", "thoughtful"],
        rating: 9.5,
        runtime: "88 min",
        description: "A young lion learns about responsibility, family and finding the courage to return home.",
        poster: "images/The Lion King.jpg"
    },
    {
        title: "Finding Nemo",
        year: 2003,
        genres: ["Animation", "Adventure", "Comedy"],
        moods: ["comfort", "adventure", "comedy"],
        rating: 9,
        runtime: "100 min",
        description: "A cautious clownfish crosses the ocean to find his missing son.",
        poster: "images/Finding Nemo.jpg"
    },
    {
        title: "Shrek",
        year: 2001,
        genres: ["Animation", "Comedy", "Fantasy", "Adventure"],
        moods: ["comedy", "comfort", "adventure"],
        rating: 9,
        runtime: "90 min",
        description: "An unlikely hero sets out to rescue a princess and discovers that appearances can be misleading.",
        poster: "images/Shrek.jpg"
    },
    {
        title: "The Super Mario Bros. Movie",
        year: 2023,
        genres: ["Animation", "Adventure", "Comedy", "Fantasy"],
        moods: ["comedy", "adventure", "comfort"],
        rating: 8,
        runtime: "92 min",
        description: "Two plumber brothers enter a colourful world full of unexpected challenges.",
        poster: "images/The Super Mario Bros Movie.jpg"
    },
    {
        title: "Titanic",
        year: 1997,
        genres: ["Romance", "Drama"],
        moods: ["romance", "thoughtful"],
        rating: 9,
        runtime: "195 min",
        description: "Two people from different worlds fall in love aboard a ship on its historic voyage.",
        poster: "images/Titanic.jpg"
    },
    {
        title: "La La Land",
        year: 2016,
        genres: ["Romance", "Musical", "Drama", "Comedy"],
        moods: ["romance", "thoughtful", "comfort"],
        rating: 9,
        runtime: "128 min",
        description: "An aspiring actress and a jazz musician pursue their dreams while navigating their relationship.",
        poster: "images/La La Land.jpg"
    },
    {
        title: "Crazy Rich Asians",
        year: 2018,
        genres: ["Romance", "Comedy", "Drama"],
        moods: ["romance", "comedy"],
        rating: 8.5,
        runtime: "120 min",
        description: "A woman discovers the surprising world her boyfriend comes from when she meets his family.",
        poster: "images/Crazy Rich Asians.jpg"
    },
    {
        title: "The Devil Wears Prada",
        year: 2006,
        genres: ["Comedy", "Drama"],
        moods: ["comedy", "thoughtful"],
        rating: 8.5,
        runtime: "109 min",
        description: "A young assistant navigates the demanding world of a powerful fashion editor.",
        poster: "images/The Devil Wears Prada.jpg"
    },
    {
        title: "Home Alone",
        year: 1990,
        genres: ["Comedy", "Family"],
        moods: ["comedy", "comfort"],
        rating: 9,
        runtime: "103 min",
        description: "A boy accidentally left home alone comes up with clever ways to protect his house.",
        poster: "images/Home Alone.jpg"
    },
    {
        title: "The Hangover",
        year: 2009,
        genres: ["Comedy"],
        moods: ["comedy"],
        rating: 8,
        runtime: "100 min",
        description: "Friends try to piece together a chaotic night after waking up with no memory of it.",
        poster: "images/The Hangover.jpg"
    },
    {
        title: "Jurassic Park",
        year: 1993,
        genres: ["Adventure", "Sci-Fi", "Thriller"],
        moods: ["adventure", "thriller"],
        rating: 9,
        runtime: "127 min",
        description: "A dinosaur theme park becomes dangerous when its carefully planned systems fail.",
        poster: "images/Jurassic Park.jpg"
    },
    {
        title: "Avatar",
        year: 2009,
        genres: ["Sci-Fi", "Action", "Adventure", "Fantasy"],
        moods: ["adventure", "thoughtful"],
        rating: 9,
        runtime: "162 min",
        description: "A former soldier enters an extraordinary alien world and faces a choice about where he belongs.",
        poster: "images/Avatar.jpg"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Crime", "Drama", "Thriller"],
        moods: ["thriller", "thoughtful"],
        rating: 9.5,
        runtime: "152 min",
        description: "Batman faces a dangerous adversary who pushes Gotham into chaos.",
        poster: "images/The Dark Knight.jpg"
    },
    {
        title: "Get Out",
        year: 2017,
        genres: ["Horror", "Mystery", "Thriller"],
        moods: ["horror", "mystery", "thoughtful", "thriller"],
        rating: 9,
        runtime: "104 min",
        description: "A weekend visit to meet a girlfriend's family develops into a deeply unsettling experience.",
        poster: "images/Get Out.jpg"
    },
    {
        title: "The Truman Show",
        year: 1998,
        genres: ["Drama", "Comedy", "Sci-Fi"],
        moods: ["thoughtful", "comedy"],
        rating: 9,
        runtime: "103 min",
        description: "A man begins to question the reality of the world and people around him.",
        poster: "images/The Truman Show.jpg"
    },
    {
        title: "The Pursuit of Happyness",
        year: 2006,
        genres: ["Drama"],
        moods: ["thoughtful", "comfort"],
        rating: 9,
        runtime: "117 min",
        description: "A father faces serious hardships while working towards a better future for himself and his son.",
        poster: "images/The Pursuit of Happyness.jpg"
    },
    {
        title: "Dune",
        year: 2021,
        genres: ["Sci-Fi", "Adventure", "Drama", "Action"],
        moods: ["adventure", "thoughtful", "thriller"],
        rating: 9,
        runtime: "155 min",
        description: "A young nobleman travels to a dangerous desert planet tied to his family's future.",
        poster: "images/Dune.jpg"
    }
];


// --------------------------------------------------
// MOOD AND GENRE RECOMMENDATIONS
// --------------------------------------------------

function chooseMood(mood, button) {
    selectedMood = mood;

    var buttons = document.getElementsByClassName("mood-btn");
    var i;

    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    button.classList.add("active");

    document.getElementById("feedback").textContent =
        "Mood selected! Now find a movie that fits.";
}


function findMovie() {
    var chosenGenre = document.getElementById("genre").value;
    var matches = [];
    var i;
    var movie;
    var moodMatches;
    var genreMatches;

    for (i = 0; i < movies.length; i++) {
        movie = movies[i];

        moodMatches = containsValue(movie.moods, selectedMood);
        genreMatches = chosenGenre === "all" ||
            containsValue(movie.genres, chosenGenre);

        if (moodMatches && genreMatches) {
            matches.push(movie);
        }
    }

    if (matches.length === 0) {
        document.getElementById("movie-result").innerHTML =
            '<div class="empty-state">' +
            '<span class="empty-icon">🎬</span>' +
            '<h3>No exact match found.</h3>' +
            '<p>Try another genre or choose a different mood.</p>' +
            '</div>';

        document.getElementById("feedback").textContent =
            "Your movie is out there. Try adjusting your choices!";
        return;
    }

    var randomIndex = Math.floor(Math.random() * matches.length);
    var chosenMovie = matches[randomIndex];

    displayMovie(chosenMovie);
}


function surpriseMe() {
    var chosenGenre = document.getElementById("genre").value;
    var matches = [];
    var i;

    for (i = 0; i < movies.length; i++) {
        if (chosenGenre === "all" ||
            containsValue(movies[i].genres, chosenGenre)) {
            matches.push(movies[i]);
        }
    }

    if (matches.length === 0) {
        document.getElementById("feedback").textContent =
            "No movies found for that genre. Try another one!";
        return;
    }

    var randomIndex = Math.floor(Math.random() * matches.length);
    var chosenMovie = matches[randomIndex];

    displayMovie(chosenMovie);

    document.getElementById("feedback").textContent =
        "Surprise! Your next watch is ready. 🍿";
}


function displayMovie(movie) {
    var genreText = "";
    var i;

    for (i = 0; i < movie.genres.length; i++) {
        if (i > 0) {
            genreText += " · ";
        }

        genreText += movie.genres[i];
    }

    var trailerURL =
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(movie.title + " official trailer");

    document.getElementById("movie-result").innerHTML =
        '<article class="movie-card">' +
        '<div class="poster-area">' +
        '<img class="movie-poster-image" src="' +
        movie.poster +
        '" alt="Poster for ' + movie.title +
        '" onerror="showPosterFallback(this)">' +
        '<div class="poster-fallback" style="display:none;">' +
        '<span class="poster-icon">🎬</span>' +
        '<strong>' + movie.title + '</strong>' +
        '<small>Add this poster to your images folder.</small>' +
        '</div>' +
        '</div>' +
        '<div class="movie-details">' +
        '<p class="movie-kicker">✦ YOUR CINEVERSE MATCH</p>' +
        '<h3>' + movie.title + '</h3>' +
        '<p class="movie-rating">★ Rating: ' + movie.rating + ' / 10</p>' +
        '<div class="movie-meta">' +
        '<span>' + movie.year + '</span>' +
        '<span>' + movie.runtime + '</span>' +
        '</div>' +
        '<p class="movie-description">' + movie.description + '</p>' +
        '<p><strong>Genres:</strong> ' + genreText + '</p>' +
        '<a class="trailer-link" href="' + trailerURL +
        '" target="_blank" rel="noopener noreferrer">' +
        '▶ Watch Trailer ↗' +
        '</a>' +
        '</div>' +
        '</article>';

    document.getElementById("feedback").textContent =
        "Your match is ready. Enjoy the movie! 🍿";

    var recommendationSection =
        document.getElementById("recommendation");

    if (recommendationSection) {
        recommendationSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// Show a fallback when the poster image is missing.

function showPosterFallback(image) {
    image.style.display = "none";

    var fallback =
        image.parentNode.getElementsByClassName("poster-fallback")[0];

    if (fallback) {
        fallback.style.display = "flex";
    }
}


// --------------------------------------------------
// SCENEIT QUIZ: 10 QUESTIONS
// --------------------------------------------------

var allQuizQuestions = [
    {
        question: "In The Lion King, what is the name of Simba's father?",
        answers: ["Scar", "Mufasa", "Rafiki", "Zazu"],
        correct: 1
    },
    {
        question: "Which movie features a character named Jack Dawson?",
        answers: ["The Notebook", "La La Land", "Titanic", "Avatar"],
        correct: 2
    },
    {
        question: "In Finding Nemo, what type of fish is Nemo?",
        answers: ["Clownfish", "Goldfish", "Pufferfish", "Angelfish"],
        correct: 0
    },
    {
        question: "Which film features a dinosaur theme park?",
        answers: ["Jumanji", "Jurassic Park", "Dune", "The Maze Runner"],
        correct: 1
    },
    {
        question: "What is the name of the kingdom in Black Panther?",
        answers: ["Asgard", "Genovia", "Wakanda", "Zamunda"],
        correct: 2
    },
    {
        question: "Which movie centres on emotions inside a young girl's mind?",
        answers: ["Coco", "Shrek", "Inside Out", "Coraline"],
        correct: 2
    },
    {
        question: "Which movie follows a detective investigating a murder on a train?",
        answers: [
            "Knives Out",
            "The Ring",
            "Murder on the Orient Express",
            "Get Out"
        ],
        correct: 2
    },
    {
        question: "In The Devil Wears Prada, what industry does Andy work in?",
        answers: ["Music", "Fashion", "Medicine", "Architecture"],
        correct: 1
    },
    {
        question: "Which movie features a dangerous maze?",
        answers: [
            "The Maze Runner",
            "The Truman Show",
            "Hamilton",
            "The Intern"
        ],
        correct: 0
    },
    {
        question: "Which film follows a family that must stay silent to survive?",
        answers: [
            "Scream",
            "The Conjuring",
            "A Quiet Place",
            "Annabelle"
        ],
        correct: 2
    }
];


function startQuiz() {
    quizQuestions = allQuizQuestions;
    currentQuestion = 0;
    quizScore = 0;
    answerChosen = false;

    document.getElementById("quiz-score").textContent = "Score: 0";

    showQuestion();
}


function showQuestion() {
    answerChosen = false;

    var question = quizQuestions[currentQuestion];
    var content = '<div class="quiz-question">';

    content +=
        '<p class="eyebrow">QUESTION ' +
        (currentQuestion + 1) +
        ' OF ' +
        quizQuestions.length +
        '</p>';

    content += '<h3>' + question.question + '</h3>';

    var i;

    for (i = 0; i < question.answers.length; i++) {
        content +=
            '<button class="answer-btn" type="button" ' +
            'onclick="checkAnswer(' + i + ')">' +
            String.fromCharCode(65 + i) +
            '. ' +
            question.answers[i] +
            '</button>';
    }

    content += '<p id="quiz-feedback" class="quiz-feedback"></p>';
    content += '<div id="quiz-next"></div>';
    content += '</div>';

    document.getElementById("quiz-content").innerHTML = content;

    document.getElementById("quiz-progress").textContent =
        "QUESTION " +
        (currentQuestion + 1) +
        " / " +
        quizQuestions.length;
}


function checkAnswer(answerIndex) {
    if (answerChosen) {
        return;
    }

    answerChosen = true;

    var question = quizQuestions[currentQuestion];
    var buttons = document.getElementsByClassName("answer-btn");
    var i;

    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    if (answerIndex === question.correct) {
        quizScore++;

        document.getElementById("quiz-feedback").textContent =
            "Correct! Great movie knowledge. ✓";
    } else {
        document.getElementById("quiz-feedback").textContent =
            "Not quite! The correct answer is: " +
            question.answers[question.correct] +
            ".";
    }

    document.getElementById("quiz-score").textContent =
        "Score: " + quizScore;

    if (currentQuestion < quizQuestions.length - 1) {
        document.getElementById("quiz-next").innerHTML =
            '<button class="primary-button" type="button" ' +
            'onclick="nextQuestion()">Next question ↗</button>';
    } else {
        document.getElementById("quiz-next").innerHTML =
            '<button class="primary-button" type="button" ' +
            'onclick="showQuizResult()">See my results ↗</button>';
    }
}


function nextQuestion() {
    currentQuestion++;

    showQuestion();
}


function showQuizResult() {
    var message;

    if (quizScore >= 9) {
        message = "Incredible! You are a true movie expert.";
    } else if (quizScore >= 7) {
        message = "Amazing work! You really know your movies.";
    } else if (quizScore >= 5) {
        message = "Not bad! A few more movie nights will help.";
    } else {
        message = "Your movie journey is just beginning. Try again!";
    }

    document.getElementById("quiz-progress").textContent =
        "QUIZ COMPLETE";

    document.getElementById("quiz-content").innerHTML =
        '<div class="quiz-result">' +
        '<span class="quiz-icon">🏆</span>' +
        '<h3>That is a wrap!</h3>' +
        '<strong>' +
        quizScore + ' / ' + quizQuestions.length +
        '</strong>' +
        '<p>' + message + '</p>' +
        '<button class="primary-button" type="button" ' +
        'onclick="startQuiz()">Play again ↻</button>' +
        '</div>';
}
