// REELSENSE: MOVIE RECOMMENDATIONS

// 1. Movie collection: an array of objects

const movies = [

    // YOUR LESSON MOVIES
    {
        title: "Hamilton",
        year: 2020,
        genres: ["Musical", "Drama"],
        rating: "10/10",
        duration: 160,
        image: "images/Hamilton.jpg",
        description: "The life of Alexander Hamilton told through energetic songs and powerful performances.",
        moods: ["comfort", "thoughtful"],
        trailer: "https://youtu.be/DSCKfXpAGHc"
    },
    {
        title: "The Fast and the Furious",
        year: 2001,
        genres: ["Action", "Adventure"],
        rating: "8.5/10",
        duration: 106,
        image: "images/The Fast and the Furious.jpg",
        description: "An action-packed movie filled with fast cars, racing and unforgettable characters.",
        moods: ["thriller", "adventure"],
        trailer: "https://youtu.be/ZsJz2TJAPjw"
    },
    {
        title: "The Book of Life",
        year: 2014,
        genres: ["Romance", "Animation", "Musical", "Adventure"],
        rating: "9/10",
        duration: 95,
        image: "images/The book of life movie poster.jpg",
        description: "A colourful animated love story filled with adventure, music and a journey through the Land of the Remembered.",
        moods: ["romance", "adventure", "comfort"],
        trailer: "https://youtu.be/_i69CJc1BgE"
    },
    {
        title: "Jupiter Ascending",
        year: 2015,
        genres: ["Romance", "Adventure", "Sci-Fi", "Action"],
        rating: "9/10",
        duration: 127,
        image: "images/Jupiter Ascending.jpg",
        description: "An ordinary woman discovers an extraordinary destiny in a battle for control of the universe.",
        moods: ["romance", "adventure", "thriller"],
        trailer: "https://youtu.be/gQHKolIqBGs"
    },
    {
        title: "Rio",
        year: 2011,
        genres: ["Musical", "Comedy", "Adventure", "Romance", "Animation"],
        rating: "9.5/10",
        duration: 96,
        image: "images/Rio.jpg",
        description: "A domesticated blue macaw travels to Rio and discovers adventure, friendship, love and music.",
        moods: ["comfort", "comedy", "romance", "adventure"],
        trailer: "https://youtu.be/Bf6zeRwk5LE"
    },
    {
        title: "The Epic Bahubali",
        year: 2015,
        genres: ["Romance", "Action", "Adventure"],
        rating: "9/10",
        duration: 159,
        image: "images/The Epic Bahubali.jpg",
        description: "An epic story of love, betrayal and war as a warrior discovers his past and fights for his family's kingdom.",
        moods: ["adventure", "romance", "thriller"],
        trailer: "https://youtu.be/q8nbZbHRcEg"
    },

    {
        title: "Paddington 2",
        year: 2017,
        genres: ["Comedy", "Adventure"],
        rating: "9/10",
        duration: 104,
        image: "images/paddington2.jpg",
        description: "A kind-hearted bear brings warmth, laughter and unexpected adventure to London.",
        moods: ["comfort", "comedy", "adventure"],
        trailer: ""
    },
    {
        title: "Inside Out",
        year: 2015,
        genres: ["Animation", "Comedy", "Adventure"],
        rating: "8.5/10",
        duration: 95,
        image: "images/inside-out.jpg",
        description: "Explore the emotions inside a young girl's mind as she adjusts to a new chapter in her life.",
        moods: ["comfort", "comedy", "thoughtful"],
        trailer: ""
    },
    {
        title: "The Intern",
        year: 2015,
        genres: ["Comedy", "Drama"],
        rating: "8/10",
        duration: 121,
        image: "images/the-intern.jpg",
        description: "An older intern brings friendship, wisdom and a fresh perspective to a busy workplace.",
        moods: ["comfort", "comedy", "thoughtful"],
        trailer: ""
    },
    {
        title: "The Notebook",
        year: 2004,
        genres: ["Romance", "Drama"],
        rating: "8.5/10",
        duration: 123,
        image: "images/the-notebook.jpg",
        description: "A moving love story about two people whose connection survives life's challenges.",
        moods: ["romance", "comfort"],
        trailer: ""
    },
    {
        title: "Interstellar",
        year: 2014,
        genres: ["Sci-Fi", "Adventure", "Drama"],
        rating: "9/10",
        duration: 169,
        image: "images/interstellar.jpg",
        description: "A team travels beyond Earth in a desperate mission to help secure humanity's future.",
        moods: ["adventure", "thoughtful"],
        trailer: ""
    },
    {
        title: "Jumanji: Welcome to the Jungle",
        year: 2017,
        genres: ["Adventure", "Comedy", "Action"],
        rating: "8/10",
        duration: 119,
        image: "images/jumanji.jpg",
        description: "Four teenagers enter a dangerous video game where teamwork is their only way out.",
        moods: ["adventure", "comedy", "thriller"],
        trailer: ""
    },
    {
        title: "Coco",
        year: 2017,
        genres: ["Animation", "Musical", "Adventure"],
        rating: "9/10",
        duration: 105,
        image: "images/coco.jpg",
        description: "A young musician discovers family secrets on a colourful journey through the Land of the Dead.",
        moods: ["comfort", "adventure", "thoughtful"],
        trailer: ""
    },

    {
        title: "The Conjuring",
        year: 2013,
        genres: ["Horror", "Mystery", "Thriller"],
        rating: "7.5/10",
        duration: 112,
        image: "images/the-conjuring.jpg",
        description: "Paranormal investigators help a family experiencing terrifying events in their farmhouse.",
        moods: ["horror", "thriller", "mystery"],
        trailer: ""
    },
    {
        title: "Insidious",
        year: 2010,
        genres: ["Horror", "Mystery", "Thriller"],
        rating: "7/10",
        duration: 103,
        image: "images/insidious.jpg",
        description: "A family fights to save their son after he falls into a mysterious supernatural world.",
        moods: ["horror", "thriller", "mystery"],
        trailer: ""
    },
    {
        title: "Annabelle",
        year: 2014,
        genres: ["Horror", "Mystery", "Thriller"],
        rating: "6.5/10",
        duration: 99,
        image: "images/annabelle.jpg",
        description: "A seemingly ordinary doll becomes the centre of terrifying supernatural events.",
        moods: ["horror", "thriller", "mystery"],
        trailer: ""
    },
    {
        title: "A Quiet Place",
        year: 2018,
        genres: ["Horror", "Thriller", "Sci-Fi"],
        rating: "8/10",
        duration: 90,
        image: "images/a-quiet-place.jpg",
        description: "A family must remain silent to survive creatures that hunt by sound.",
        moods: ["horror", "thriller", "adventure"],
        trailer: ""
    },
    {
        title: "The Nun",
        year: 2018,
        genres: ["Horror", "Mystery", "Thriller"],
        rating: "6/10",
        duration: 96,
        image: "images/the-nun.jpg",
        description: "A priest and a novice investigate the mysterious death of a nun at a secluded abbey.",
        moods: ["horror", "thriller", "mystery"],
        trailer: ""
    },
    {
        title: "IT",
        year: 2017,
        genres: ["Horror", "Mystery", "Thriller"],
        rating: "7.5/10",
        duration: 135,
        image: "images/it.jpg",
        description: "A group of children confronts a terrifying entity that takes the form of a clown.",
        moods: ["horror", "thriller", "mystery"],
        trailer: ""
    },
    {
        title: "The Ring",
        year: 2002,
        genres: ["Horror", "Mystery", "Thriller"],
        rating: "7/10",
        duration: 115,
        image: "images/the-ring.jpg",
        description: "A journalist investigates a mysterious videotape linked to a deadly rumour.",
        moods: ["horror", "thriller", "mystery"],
        trailer: ""
    },
    {
        title: "Sinister",
        year: 2012,
        genres: ["Horror", "Mystery", "Thriller"],
        rating: "7/10",
        duration: 110,
        image: "images/sinister.jpg",
        description: "A crime writer discovers disturbing home movies while researching a family's tragic death.",
        moods: ["horror", "thriller", "mystery"],
        trailer: ""
    },
    {
        title: "The Sixth Sense",
        year: 1999,
        genres: ["Mystery", "Horror", "Drama"],
        rating: "8.5/10",
        duration: 107,
        image: "images/the-sixth-sense.jpg",
        description: "A child psychologist tries to help a boy who claims to see people others cannot.",
        moods: ["mystery", "thoughtful", "horror"],
        trailer: ""
    },
    {
        title: "Shutter Island",
        year: 2010,
        genres: ["Mystery", "Thriller", "Drama"],
        rating: "8/10",
        duration: 138,
        image: "images/shutter-island.jpg",
        description: "Two detectives investigate a disappearance at an isolated psychiatric facility.",
        moods: ["mystery", "thriller", "thoughtful"],
        trailer: ""
    },
    {
        title: "Gone Girl",
        year: 2014,
        genres: ["Mystery", "Thriller", "Drama"],
        rating: "8/10",
        duration: 149,
        image: "images/gone-girl.jpg",
        description: "A husband's life changes dramatically when his wife disappears under suspicious circumstances.",
        moods: ["mystery", "thriller", "thoughtful"],
        trailer: ""
    },
    {
        title: "Murder on the Orient Express",
        year: 2017,
        genres: ["Mystery", "Crime", "Drama"],
        rating: "7/10",
        duration: 114,
        image: "images/orient-express.jpg",
        description: "Detective Hercule Poirot investigates a murder aboard a train where every passenger is a suspect.",
        moods: ["mystery", "thoughtful"],
        trailer: ""
    },
    {
        title: "Scream",
        year: 1996,
        genres: ["Horror", "Mystery", "Thriller"],
        rating: "7.5/10",
        duration: 111,
        image: "images/scream.jpg",
        description: "A masked killer terrorises a town while teenagers try to uncover the identity behind the attacks.",
        moods: ["horror", "mystery", "thriller"],
        trailer: ""
    },
    {
        title: "Final Destination",
        year: 2000,
        genres: ["Horror", "Thriller", "Mystery"],
        rating: "7/10",
        duration: 98,
        image: "images/final-destination.jpg",
        description: "After escaping a disaster, a group of young people discovers that fate may not be finished with them.",
        moods: ["horror", "thriller", "mystery"],
        trailer: ""
    },
    {
        title: "The Others",
        year: 2001,
        genres: ["Horror", "Mystery", "Thriller"],
        rating: "8/10",
        duration: 104,
        image: "images/the-others.jpg",
        description: "A mother living in a secluded house begins to suspect that something unexplained is happening around her children.",
        moods: ["horror", "mystery", "thoughtful"],
        trailer: ""
    },
    {
        title: "Coraline",
        year: 2009,
        genres: ["Animation", "Fantasy", "Horror", "Mystery"],
        rating: "8/10",
        duration: 100,
        image: "images/coraline.jpg",
        description: "A curious girl discovers an alternate world that seems perfect until its sinister secrets emerge.",
        moods: ["horror", "mystery", "adventure"],
        trailer: ""
    },
    {
        title: "The Maze Runner",
        year: 2014,
        genres: ["Mystery", "Sci-Fi", "Action", "Adventure"],
        rating: "7/10",
        duration: 113,
        image: "images/maze-runner.jpg",
        description: "A teenager wakes up in a mysterious maze with no memory and must work with others to find a way out.",
        moods: ["mystery", "thriller", "adventure"],
        trailer: ""
    },
    {
        title: "Now You See Me",
        year: 2013,
        genres: ["Mystery", "Crime", "Thriller"],
        rating: "7.5/10",
        duration: 115,
        image: "images/now-you-see-me.jpg",
        description: "A team of illusionists performs spectacular heists while detectives try to uncover their secrets.",
        moods: ["mystery", "thriller", "adventure"],
        trailer: ""
    },
    {
        title: "Escape Room",
        year: 2019,
        genres: ["Horror", "Mystery", "Thriller"],
        rating: "6.5/10",
        duration: 99,
        image: "images/escape-room.jpg",
        description: "Strangers must solve deadly puzzles inside a series of elaborate rooms to survive.",
        moods: ["horror", "mystery", "thriller"],
        trailer: ""
    }
];

// 2. Select HTML elements using the DOM

const moodButtons = document.querySelectorAll(".mood-btn");
const genreSelect = document.getElementById("genre");
const findButton = document.getElementById("find-btn");
const surpriseButton = document.getElementById("surprise-btn");
const movieResult = document.getElementById("movie-result");
const feedback = document.getElementById("feedback");


// 3. Remember the selected mood
// null means the user has not selected a mood.

let selectedMood = null;


// 4. Make mood names easier to understand

const moodDescriptions = {
    comfort: {
        name: "Comfort",
        explanation: "feel-good stories that help you relax and smile"
    },
    comedy: {
        name: "Comedy",
        explanation: "funny and entertaining stories that make you laugh"
    },
    thoughtful: {
        name: "Thought-provoking",
        explanation: "stories that make you think and see things differently"
    },
    thriller: {
        name: "Thriller",
        explanation: "suspenseful stories full of tension and surprises"
    },
    romance: {
        name: "Romance",
        explanation: "stories about love, relationships and connection"
    },
    adventure: {
        name: "Adventure",
        explanation: "exciting journeys, discoveries and challenges"
    },
    mystery: {
        name: "Mystery",
        explanation: "puzzles, secrets and stories you will want to figure out"
    },
    horror: {
        name: "Horror",
        explanation: "scary, creepy and supernatural experiences"
    }
};


// 5. Handle mood button clicks

moodButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedMood = button.dataset.mood;

        moodButtons.forEach(function (moodButton) {
            moodButton.classList.remove("active");
        });

        button.classList.add("active");

        feedback.textContent =
            "Mood selected! Now choose a genre or find your movie. ❤️";
    });
});


// 6. Show a fallback if a poster image is missing

function showPosterFallback(image) {
    const fallback = document.createElement("div");
    fallback.className = "poster-fallback";

    const icon = document.createElement("span");
    icon.className = "poster-icon";
    icon.textContent = "🎬";

    const title = document.createElement("span");
    title.textContent = image.alt.replace("Poster for ", "");

    const note = document.createElement("small");
    note.textContent = "Add this poster to your images folder";

    fallback.append(icon, title, note);
    image.replaceWith(fallback);
}


// 7. Explain why a movie was recommended

function getRecommendationReason(movie, surpriseMode) {
    const selectedGenre = genreSelect.value;

    if (surpriseMode) {
        return "You chose Surprise Me! This movie was picked to give you something new to discover. 🍿";
    }

    const reasons = [];

    if (selectedMood && moodDescriptions[selectedMood]) {
        reasons.push(
            "You wanted " +
            moodDescriptions[selectedMood].explanation
        );
    }

    if (selectedGenre !== "all") {
        reasons.push(
            "you chose the " + selectedGenre + " genre"
        );
    }

    if (reasons.length === 0) {
        return "You left your options open, so we picked this movie for you to discover. ❤️";
    }

    return reasons.join(", and ") +
        ". " + movie.title + " matches your choices!";
}


// 8. Display the selected movie

function displayMovie(selectedMovie, surpriseMode = false) {
    const reason = getRecommendationReason(
        selectedMovie,
        surpriseMode
    );

    movieResult.innerHTML = `
        <article class="movie-card">
            <img
                class="movie-poster-image"
                src="${selectedMovie.image}"
                alt="Poster for ${selectedMovie.title}"
            >

            <div class="movie-details">
                <p class="movie-kicker">
                    YOUR REELSENSE MATCH ❤️
                </p>

                <h3>${selectedMovie.title}</h3>

                <p class="movie-description">
                    ${selectedMovie.description}
                </p>

                <div class="recommendation-reason">
                    <h4>💡 Why we picked this movie</h4>
                    <p>${reason}</p>
                </div>

                <p class="movie-rating">
                    ★ Rating: ${selectedMovie.rating}
                </p>

                <div class="movie-meta">
                    <span>${selectedMovie.year}</span>
                    <span>${selectedMovie.genres.join(" / ")}</span>
                    <span>${selectedMovie.duration} min</span>
                </div>

                <div class="trailer-container"></div>
            </div>
        </article>
    `;

    // Handle a missing poster image
    const posterImage = movieResult.querySelector(
        ".movie-poster-image"
    );

    posterImage.addEventListener("error", function () {
        showPosterFallback(posterImage);
    });

    // Add a trailer link if one is available
    if (selectedMovie.trailer !== "") {
        const trailerLink = document.createElement("a");

        trailerLink.className = "trailer-link";
        trailerLink.href = selectedMovie.trailer;
        trailerLink.target = "_blank";
        trailerLink.rel = "noopener noreferrer";
        trailerLink.textContent = "Watch trailer ↗";

        movieResult.querySelector(".trailer-container")
            .appendChild(trailerLink);
    }

    feedback.textContent =
        "Your next movie is ready! Enjoy your movie night! 🍿";
}


// 9. Find a movie using the selected mood and/or genre

function recommendMovie() {
    const selectedGenre = genreSelect.value;

    const matchingMovies = movies.filter(function (movie) {
        // If no mood is selected, allow any mood.
        const matchesMood =
            selectedMood === null ||
            movie.moods.includes(selectedMood);

        // If "All genres" is selected, allow any genre.
        const matchesGenre =
            selectedGenre === "all" ||
            movie.genres.includes(selectedGenre);

        return matchesMood && matchesGenre;
    });

    // Show a friendly message if no movies match.
    if (matchingMovies.length === 0) {
        movieResult.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🥹</span>
                <h3>No movie match just yet!</h3>
                <p>
                    Try another mood or genre, or use
                    Surprise Me! to discover something different.
                </p>
            </div>
        `;

        feedback.textContent =
            "Let's try another combination to find your movie.";

        return;
    }

    // Choose a random movie from the matching movies.
    const randomIndex = Math.floor(
        Math.random() * matchingMovies.length
    );

    const selectedMovie = matchingMovies[randomIndex];

    displayMovie(selectedMovie);
}


// 10. Surprise the user with a random movie

function surpriseMe() {
    // If a genre is selected, keep the surprise within that genre.
    const selectedGenre = genreSelect.value;

    const matchingMovies = movies.filter(function (movie) {
        return selectedGenre === "all" ||
            movie.genres.includes(selectedGenre);
    });

    if (matchingMovies.length === 0) {
        feedback.textContent =
            "No movies found for that genre. Try another one!";

        return;
    }

    const randomIndex = Math.floor(
        Math.random() * matchingMovies.length
    );

    const selectedMovie = matchingMovies[randomIndex];

    displayMovie(selectedMovie, true);
}


// 11. Connect the buttons

findButton.addEventListener("click", recommendMovie);

if (surpriseButton) {
    surpriseButton.addEventListener("click", surpriseMe);
}
