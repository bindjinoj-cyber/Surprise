/* =====================================================
   🌸 SURPRISE INTERACTIVE
   VERSION AVEC ENVELOPPE AVANT QUESTION FINALE
===================================================== */


/* =====================================================
   🔎 ÉLÉMENTS
===================================================== */

const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noMessage = document.getElementById("noMessage");

const giftScene = document.getElementById("giftScene");
const gift = document.getElementById("gift");
const openGift = document.getElementById("openGift");
const giftMessage = document.getElementById("giftMessage");

const poemScene = document.getElementById("poemScene");
const poem = document.getElementById("poem");
const revealBtn = document.getElementById("revealBtn");

const transitionScene =
    document.getElementById("transitionScene");

const transitionText =
    document.getElementById("transitionText");

const envelopeScene =
    document.getElementById("envelopeScene");

const envelope =
    document.getElementById("envelope");

const letterText =
    document.getElementById("letterText");

const questionFinale =
    document.getElementById("questionFinale");

const finalYes =
    document.getElementById("finalYes");

const finalNo =
    document.getElementById("finalNo");

const finalNoMessage =
    document.getElementById("finalNoMessage");

const revealScene =
    document.getElementById("revealScene");

const instagramBtn =
    document.getElementById("instagramBtn");

const restart =
    document.getElementById("restart");

const game =
    document.getElementById("game");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

const stars =
    document.getElementById("stars");

const flowers =
    document.getElementById("flowers");

const fallingHearts =
    document.getElementById("fallingHearts");

const particles =
    document.getElementById("particles");


/* =====================================================
   📩 GOOGLE FORM / GOOGLE APPS SCRIPT
===================================================== */

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyTwZZp6sdDkxkKdNKUb3ZJRwGjYhv4sPMK66hhtXpfbutTqB6ih9RwcYm8eGW429NN8Q/exec";

let answerSent = false;


function sendAnswer(answer) {

    if (answerSent) {
        return;
    }

    answerSent = true;

    fetch(
        GOOGLE_SCRIPT_URL,
        {
            method: "POST",
            mode: "no-cors",

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },

            body:
                "answer=" +
                encodeURIComponent(answer)
        }
    )
    .then(() => {

        console.log(
            "Réponse envoyée :",
            answer
        );

    })
    .catch((error) => {

        console.error(
            "Erreur :",
            error
        );

        answerSent = false;

    });

}


/* =====================================================
   🐱 CHAT
===================================================== */

const catContainer =
    document.getElementById("catContainer");

const characterMessage =
    document.getElementById("characterMessage");

const catEyeLeft =
    document.getElementById("catEyeLeft");

const catEyeRight =
    document.getElementById("catEyeRight");

const catMouth =
    document.getElementById("catMouth");


const catExpressions = {

    content: {
        left: "^",
        right: "^",
        mouth: "◡"
    },

    gene: {
        left: "•",
        right: "•",
        mouth: "⌣"
    },

    surpris: {
        left: "O",
        right: "O",
        mouth: "o"
    },

    heureux: {
        left: "♥",
        right: "♥",
        mouth: "◡"
    },

    fatigue: {
        left: "—",
        right: "—",
        mouth: "︵"
    },

    triste: {
        left: "•",
        right: "•",
        mouth: "︵"
    }

};


function setCatExpression(expression) {

    const face =
        catExpressions[expression];

    if (!face) {
        return;
    }

    catEyeLeft.textContent =
        face.left;

    catEyeRight.textContent =
        face.right;

    catMouth.textContent =
        face.mouth;

}


function showCat(
    message,
    expression = "content"
) {

    catContainer.classList.add("show");

    characterMessage.textContent =
        message;

    setCatExpression(expression);

}


let waitingTimer = null;


function startWaitingTimer() {

    clearTimeout(waitingTimer);

    waitingTimer =
        setTimeout(() => {

            showCat(
                "Tu réfléchis encore ? 😴💗",
                "fatigue"
            );

        }, 15000);

}


function resetWaitingTimer() {

    clearTimeout(waitingTimer);

    startWaitingTimer();

}


/* =====================================================
   🎵 MUSIQUE
===================================================== */

let musicPlaying = false;


function startMusic() {

    if (!backgroundMusic) {
        return;
    }

    backgroundMusic.volume = 0.25;

    backgroundMusic.play()
        .then(() => {

            musicPlaying = true;

            musicButton.textContent =
                "🔊";

        })
        .catch(() => {

            musicPlaying = false;

            musicButton.textContent =
                "🔇";

        });

}


if (musicButton) {

    musicButton.addEventListener(
        "click",
        () => {

            if (!musicPlaying) {

                startMusic();

            }
            else {

                backgroundMusic.pause();

                musicPlaying = false;

                musicButton.textContent =
                    "🔇";

            }

        }
    );

}


/* =====================================================
   🚪 COMMENCER
===================================================== */

if (startBtn) {

    startBtn.addEventListener(
        "click",
        () => {

            startMusic();

            startScreen.classList.add(
                "hidden"
            );

            setTimeout(() => {

                step1.classList.add(
                    "active"
                );

                showCat(
                    "Coucou ! 🐱💗",
                    "content"
                );

                createSparkles(15);

                startWaitingTimer();

            }, 600);

        }
    );

}


/* =====================================================
   🌸 ÉTAPE 1
===================================================== */

if (next1) {

    next1.addEventListener(
        "click",
        () => {

            resetWaitingTimer();

            step1.classList.remove(
                "active"
            );

            step2.classList.add(
                "active"
            );

            showCat(
                "On continue ? 🌸",
                "content"
            );

            createSparkles(20);

        }
    );

}


/* =====================================================
   🌷 ÉTAPE 2
===================================================== */

if (next2) {

    next2.addEventListener(
        "click",
        () => {

            resetWaitingTimer();

            step2.classList.remove(
                "active"
            );

            step3.classList.add(
                "active"
            );

            showCat(
                "J'ai une petite question... 😳",
                "gene"
            );

            createPetals(15);

        }
    );

}


/* =====================================================
   ❌ PREMIER NON
===================================================== */

let noClicks = 0;


const noMessages = [

    "Oh... 🥺🌸",

    "Le petit chat est surpris... 🥺",

    "Je comprends 😊",

    "Encore une petite chance de continuer ? 🌷",

    "Promis, la suite reste une surprise 💗"

];


if (noBtn) {

    noBtn.addEventListener(
        "click",
        () => {

            resetWaitingTimer();

            noClicks++;

            const noScale =
                Math.max(
                    0.65,
                    1 - noClicks * 0.05
                );

            const yesScale =
                Math.min(
                    1.35,
                    1 + noClicks * 0.05
                );

            noBtn.style.transform =
                `scale(${noScale})`;

            yesBtn.style.transform =
                `scale(${yesScale})`;

            noMessage.textContent =
                noMessages[
                    Math.min(
                        noClicks - 1,
                        noMessages.length - 1
                    )
                ];

            noMessage.classList.add(
                "show"
            );

            showCat(
                noMessage.textContent,
                "surpris"
            );

            createPetals(8);

        }
    );

}


/* =====================================================
   💗 PREMIER OUI
===================================================== */

if (yesBtn) {

    yesBtn.addEventListener(
        "click",
        () => {

            resetWaitingTimer();

            step3.classList.remove(
                "active"
            );

            giftScene.classList.add(
                "active"
            );

            showCat(
                "Ohhh ! Regarde ! 😸💗",
                "heureux"
            );

            createSparkles(30);
            createPetals(20);

        }
    );

}


/* =====================================================
   🎁 CADEAU
===================================================== */

let giftOpened = false;


if (openGift) {

    openGift.addEventListener(
        "click",
        () => {

            if (giftOpened) {
                return;
            }

            giftOpened = true;

            resetWaitingTimer();

            openGift.disabled = true;

            gift.classList.add(
                "shake"
            );

            giftMessage.textContent =
                "Attends... qu'est-ce qu'il y a dedans ? 👀";

            showCat(
                "Ça bouge ! 😳",
                "surpris"
            );

            createSparkles(25);


            setTimeout(() => {

                giftHeartExplosion();

                showCat(
                    "Ohhh !!! 😸💗",
                    "heureux"
                );

            }, 700);


            setTimeout(() => {

                gift.classList.remove(
                    "shake"
                );

                gift.classList.add(
                    "open"
                );

                giftMessage.textContent =
                    "Une petite surprise pour toi 💗";

            }, 1200);


            setTimeout(() => {

                giftScene.classList.remove(
                    "active"
                );

                poemScene.classList.add(
                    "active"
                );

                showCat(
                    "Lis tranquillement... 🌸",
                    "content"
                );

                startTypingPoem();

            }, 3000);

        }
    );

}


/* =====================================================
   💗 EXPLOSION DE COEURS
===================================================== */

function giftHeartExplosion() {

    const rect =
        gift.getBoundingClientRect();

    const items = [
        "💗",
        "💕",
        "💖",
        "💓",
        "🌸",
        "✨",
        "🌷"
    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const item =
            document.createElement("div");

        item.className =
            "gift-heart";

        item.textContent =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];

        item.style.left =
            (
                rect.left +
                rect.width / 2
            ) + "px";

        item.style.top =
            (
                rect.top +
                rect.height / 2
            ) + "px";


        document.body.appendChild(item);


        const x =
            (Math.random() - 0.5) * 420;

        const y =
            -80 -
            Math.random() * 320;


        item.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(.2)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(-50%,-50%) scale(1.2)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        rotate(360deg)
                        scale(.6)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1300 +
                    Math.random() * 900,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }
        );


        setTimeout(() => {

            item.remove();

        }, 2300);

    }

}


/* =====================================================
   📖 POÈME
===================================================== */

function startTypingPoem() {

    const paragraphs =
        poem.querySelectorAll("p");

    paragraphs.forEach(
        paragraph => {

            paragraph.style.display =
                "none";

        }
    );


    let paragraphIndex = 0;


    function typeParagraph() {

        if (
            paragraphIndex >=
            paragraphs.length
        ) {

            revealBtn.style.display =
                "inline-block";

            return;

        }


        const paragraph =
            paragraphs[
                paragraphIndex
            ];

        const originalText =
            paragraph.textContent.trim();

        paragraph.textContent =
            "";

        paragraph.style.display =
            "block";

        paragraph.style.opacity =
            "1";


        let charIndex = 0;


        const interval =
            setInterval(() => {

                paragraph.textContent +=
                    originalText[
                        charIndex
                    ];

                charIndex++;


                if (
                    charIndex >=
                    originalText.length
                ) {

                    clearInterval(interval);

                    paragraphIndex++;

                    setTimeout(
                        typeParagraph,
                        900
                    );

                }

            }, 32);

    }


    revealBtn.style.display =
        "none";

    typeParagraph();

}


/* =====================================================
   🌙 TRANSITION
===================================================== */

if (revealBtn) {

    revealBtn.addEventListener(
        "click",
        () => {

            resetWaitingTimer();

            poemScene.classList.remove(
                "active"
            );

            game.classList.add(
                "calm"
            );

            transitionScene.classList.add(
                "active"
            );

            transitionText.textContent =
                "La surprise n'est pas encore terminée... 🌙💗";


            showCat(
                "Il reste encore une dernière chose... 💌",
                "gene"
            );


            setTimeout(() => {

                transitionScene.classList.remove(
                    "active"
                );

                /*
                 * ⭐ NOUVEAU :
                 * L'ENVELOPPE ARRIVE AVANT
                 * LA QUESTION FINALE.
                 */

                envelopeScene.classList.add(
                    "active"
                );

                showCat(
                    "Clique sur l'enveloppe... 💌",
                    "heureux"
                );

                createSparkles(25);

            }, 4000);

        }
    );

}


/* =====================================================
   💌 OUVRIR L'ENVELOPPE
===================================================== */

let envelopeOpened = false;


if (envelope) {

    envelope.addEventListener(
        "click",
        () => {

            if (envelopeOpened) {
                return;
            }

            envelopeOpened = true;

            resetWaitingTimer();

            envelope.classList.add(
                "open"
            );

            showCat(
                "Lis bien cette petite lettre... 💗",
                "heureux"
            );

            createSparkles(25);


            const message =
                "Avant de te poser ma dernière question... 💗\n\n" +
                "Je voulais simplement te dire merci " +
                "d'avoir pris le temps de regarder cette petite surprise. 🌸\n\n" +
                "Et maintenant... il reste une dernière chose à te demander. 💌";


            letterText.textContent =
                "";

            let index = 0;


            const interval =
                setInterval(() => {

                    letterText.textContent +=
                        message[index];

                    index++;


                    if (
                        index >=
                        message.length
                    ) {

                        clearInterval(
                            interval
                        );

                    }

                }, 25);


            /*
             * Après quelques secondes,
             * on affiche la question finale.
             */

            setTimeout(() => {

                envelopeScene.classList.remove(
                    "active"
                );

                questionFinale.classList.add(
                    "active"
                );

                showCat(
                    "Voilà... ma dernière question 💗",
                    "gene"
                );

                createSparkles(30);

            }, 6500);

        }
    );

}


/* =====================================================
   ❌ NON FINAL
===================================================== */

let finalNoClicks = 0;


const finalNoMessages = [

    "Je comprends 💗",

    "Merci d'être sincère 🌸",

    "Aucun problème 😊",

    "Le plus important est ta réponse 💕",

    "Merci quand même d'avoir regardé ma surprise 🌷"

];


if (finalNo) {

    finalNo.addEventListener(
        "click",
        () => {

            if (!answerSent) {

                sendAnswer(
                    "Non 🌷"
                );

            }


            finalNoClicks++;

            resetWaitingTimer();


            const noScale =
                Math.max(
                    0.65,
                    1 - finalNoClicks * 0.05
                );


            const yesScale =
                Math.min(
                    1.35,
                    1 + finalNoClicks * 0.05
                );


            finalNo.style.transform =
                `scale(${noScale})`;

            finalYes.style.transform =
                `scale(${yesScale})`;


            const message =
                finalNoMessages[
                    Math.min(
                        finalNoClicks - 1,
                        finalNoMessages.length - 1
                    )
                ];


            finalNoMessage.textContent =
                message;

            finalNoMessage.classList.add(
                "show"
            );


            showCat(
                message,
                "triste"
            );


            createPetals(8);

        }
    );

}


/* =====================================================
   💗 OUI FINAL
===================================================== */

if (finalYes) {

    finalYes.addEventListener(
        "click",
        () => {

            /*
             * Enregistre OUI
             */

            if (!answerSent) {

                sendAnswer(
                    "Oui 💗"
                );

            }


            resetWaitingTimer();

            questionFinale.classList.remove(
                "active"
            );

            game.classList.remove(
                "calm"
            );

            revealScene.classList.add(
                "active"
            );


            showCat(
                "Merci pour ta réponse 💗",
                "heureux"
            );


            createCelebration();

        }
    );

}


/* =====================================================
   📱 INSTAGRAM
===================================================== */

if (instagramBtn) {

    instagramBtn.addEventListener(
        "click",
        () => {

            window.open(
                "https://www.instagram.com/bindjinoj/",
                "_blank"
            );

        }
    );

}


/* =====================================================
   🔄 RECOMMENCER
===================================================== */

if (restart) {

    restart.addEventListener(
        "click",
        () => {

            location.reload();

        }
    );

}


/* =====================================================
   ⭐ ÉTOILES
===================================================== */

function createStars() {

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const star =
            document.createElement("div");

        star.className =
            "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 80 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        stars.appendChild(star);

    }

}


createStars();


/* =====================================================
   🌷 FLEURS
===================================================== */

function createFlowers() {

    const types = [
        "🌸",
        "🌷",
        "🌼",
        "🌺"
    ];


    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const flower =
            document.createElement("div");

        flower.className =
            "flower";

        flower.textContent =
            types[
                Math.floor(
                    Math.random() *
                    types.length
                )
            ];

        flower.style.left =
            Math.random() * 100 + "%";

        flower.style.animationDelay =
            Math.random() * 2 + "s";

        flowers.appendChild(
            flower
        );

    }

}


createFlowers();


/* =====================================================
   💕 COEURS QUI TOMBENT
===================================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "heart";


    const types = [
        "💗",
        "💕",
        "💖",
        "💓",
        "🌸"
    ];


    heart.textContent =
        types[
            Math.floor(
                Math.random() *
                types.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        15 +
        Math.random() * 18 +
        "px";


    heart.style.animationDuration =
        4 +
        Math.random() * 5 +
        "s";


    fallingHearts.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 9000);

}


setInterval(
    createHeart,
    800
);


/* =====================================================
   ✨ PARTICULES
===================================================== */

function createSparkles(
    amount = 15
) {

    const symbols = [
        "✨",
        "⭐",
        "💫",
        "🌟"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(() => {

            const sparkle =
                document.createElement("div");

            sparkle.className =
                "sparkle";

            sparkle.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            sparkle.style.left =
                Math.random() * 100 + "vw";

            sparkle.style.top =
                Math.random() * 100 + "vh";


            particles.appendChild(
                sparkle
            );


            setTimeout(() => {

                sparkle.remove();

            }, 1600);

        }, i * 60);

    }

}


/* =====================================================
   🌸 PÉTALES
===================================================== */

function createPetals(
    amount = 15
) {

    const petals = [
        "🌸",
        "🌷",
        "🌺",
        "💕"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const petal =
            document.createElement("div");

        petal.className =
            "sparkle";

        petal.textContent =
            petals[
                Math.floor(
                    Math.random() *
                    petals.length
                )
            ];


        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.top =
            70 +
            Math.random() * 20 +
            "vh";


        particles.appendChild(
            petal
        );


        setTimeout(() => {

            petal.remove();

        }, 1600);

    }

}


/* =====================================================
   🎉 CÉLÉBRATION
===================================================== */

function createCelebration() {

    const items = [
        "💗",
        "💕",
        "💖",
        "✨",
        "🌸",
        "🌷"
    ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const item =
            document.createElement("div");


        item.textContent =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];


        item.style.position =
            "fixed";

        item.style.left =
            "50%";

        item.style.top =
            "50%";

        item.style.fontSize =
            "25px";

        item.style.zIndex =
            "999999";

        item.style.pointerEvents =
            "none";


        const x =
            (Math.random() - 0.5) *
            900;

        const y =
            (Math.random() - 0.5) *
            700;


        item.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(.2)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(-50%,-50%) scale(1.2)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        rotate(360deg)
                        scale(.5)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1500 +
                    Math.random() * 1000,

                easing:
                    "ease-out"
            }
        );


        document.body.appendChild(
            item
        );


        setTimeout(() => {

            item.remove();

        }, 2600);

    }

}
