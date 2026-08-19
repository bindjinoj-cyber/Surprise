/* =====================================================
   🌸 SURPRISE V2 — SCRIPT COMPLET
===================================================== */


/* =====================================================
   🔎 ÉLÉMENTS
===================================================== */

const game =
    document.getElementById("game");

const cinematicIntro =
    document.getElementById("cinematicIntro");

const introStart =
    document.getElementById("introStart");

const introStars =
    document.getElementById("introStars");

const startScreen =
    document.getElementById("startScreen");

const startBtn =
    document.getElementById("startBtn");

const step1 =
    document.getElementById("step1");

const step2 =
    document.getElementById("step2");

const step3 =
    document.getElementById("step3");

const next1 =
    document.getElementById("next1");

const next2 =
    document.getElementById("next2");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const noMessage =
    document.getElementById("noMessage");

const giftScene =
    document.getElementById("giftScene");

const gift =
    document.getElementById("gift");

const openGift =
    document.getElementById("openGift");

const giftMessage =
    document.getElementById("giftMessage");

const giftProgress =
    document.getElementById("giftProgress");

const galleryScene =
    document.getElementById("galleryScene");

const galleryNext =
    document.getElementById("galleryNext");

const poemScene =
    document.getElementById("poemScene");

const poem =
    document.getElementById("poem");

const revealBtn =
    document.getElementById("revealBtn");

const transitionScene =
    document.getElementById("transitionScene");

const transitionText =
    document.getElementById("transitionText");

const questionFinale =
    document.getElementById("questionFinale");

const finalYes =
    document.getElementById("finalYes");

const finalNo =
    document.getElementById("finalNo");

const finalNoMessage =
    document.getElementById("finalNoMessage");

const envelopeScene =
    document.getElementById("envelopeScene");

const envelope =
    document.getElementById("envelope");

const letterText =
    document.getElementById("letterText");

const revealScene =
    document.getElementById("revealScene");

const instagramBtn =
    document.getElementById("instagramBtn");

const restart =
    document.getElementById("restart");

const fallingHearts =
    document.getElementById("fallingHearts");

const flowers =
    document.getElementById("flowers");

const stars =
    document.getElementById("stars");

const particles =
    document.getElementById("particles");

const interactiveHearts =
    document.getElementById("interactiveHearts");

const fireworks =
    document.getElementById("fireworks");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

const nightOverlay =
    document.getElementById("nightOverlay");


/* =====================================================
   📩 GOOGLE FORMS
===================================================== */

const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSc4OfKWZ4hFxpm3ktsZEHlU5xkqP62OEFWLzXPlUtM-zDQRDA/formResponse";

const GOOGLE_FORM_ENTRY =
    "entry.1144722576";

let answerSent = false;


function sendAnswer(answer) {

    if (answerSent) {
        return;
    }

    answerSent = true;

    const formData =
        new URLSearchParams();

    formData.append(
        GOOGLE_FORM_ENTRY,
        answer
    );

    fetch(
        GOOGLE_FORM_URL,
        {
            method: "POST",

            mode: "no-cors",

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },

            body:
                formData.toString()
        }
    )
    .then(() => {

        console.log(
            "Réponse envoyée :",
            answer
        );

    })
    .catch(error => {

        console.error(
            "Erreur :",
            error
        );

        answerSent = false;

    });

}


/* =====================================================
   🔊 EFFETS SONORES
===================================================== */

let audioContext = null;


function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    return audioContext;

}


function playSound(
    frequency = 600,
    duration = 0.08,
    type = "sine"
) {

    try {

        const context =
            getAudioContext();

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();

        oscillator.type =
            type;

        oscillator.frequency.value =
            frequency;

        gain.gain.setValueAtTime(
            0.08,
            context.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            context.currentTime +
            duration
        );

        oscillator.connect(gain);

        gain.connect(
            context.destination
        );

        oscillator.start();

        oscillator.stop(
            context.currentTime +
            duration
        );

    } catch (error) {

        console.log(
            "Audio non disponible."
        );

    }

}


function playClickSound() {
    playSound(
        650,
        .07,
        "sine"
    );
}


function playSuccessSound() {

    playSound(
        523,
        .12,
        "sine"
    );

    setTimeout(() => {

        playSound(
            659,
            .12,
            "sine"
        );

    }, 120);

    setTimeout(() => {

        playSound(
            784,
            .18,
            "sine"
        );

    }, 240);

}


function playGiftSound() {

    playSound(
        250,
        .12,
        "triangle"
    );

    setTimeout(() => {

        playSound(
            450,
            .15,
            "triangle"
        );

    }, 120);

    setTimeout(() => {

        playSound(
            750,
            .2,
            "triangle"
        );

    }, 250);

}


function playNoSound() {

    playSound(
        250,
        .1,
        "sine"
    );

}


/* =====================================================
   🎬 INTRO
===================================================== */

function createIntroStars() {

    if (!introStars) {
        return;
    }

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const star =
            document.createElement(
                "div"
            );

        star.className =
            "intro-star";

        star.style.left =
            Math.random() *
            100 +
            "%";

        star.style.top =
            Math.random() *
            100 +
            "%";

        star.style.animationDelay =
            Math.random() *
            3 +
            "s";

        introStars.appendChild(
            star
        );

    }

}

createIntroStars();


if (introStart) {

    introStart.addEventListener(
        "click",
        () => {

            playSuccessSound();

            cinematicIntro.classList.add(
                "hidden"
            );

            setTimeout(() => {

                cinematicIntro.style.display =
                    "none";

            }, 1300);

        }
    );

}


/* =====================================================
   🎵 MUSIQUE
===================================================== */

let musicPlaying = false;


function startMusic() {

    if (!backgroundMusic) {
        return;
    }

    backgroundMusic.volume =
        0.25;

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

            playClickSound();

            if (!musicPlaying) {

                startMusic();

            } else {

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

            playSuccessSound();

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

                createSparkles(20);

                createInteractiveHearts();

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

            playClickSound();

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

            playClickSound();

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
   🐱 CHAT
===================================================== */

const catContainer =
    document.getElementById(
        "catContainer"
    );

const characterMessage =
    document.getElementById(
        "characterMessage"
    );

const catEyeLeft =
    document.getElementById(
        "catEyeLeft"
    );

const catEyeRight =
    document.getElementById(
        "catEyeRight"
    );

const catMouth =
    document.getElementById(
        "catMouth"
    );


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


function setCatExpression(
    expression
) {

    const face =
        catExpressions[
            expression
        ];

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

    if (!catContainer) {
        return;
    }

    catContainer.classList.add(
        "show"
    );

    characterMessage.textContent =
        message;

    setCatExpression(
        expression
    );

}


/* =====================================================
   👁️ CLIGNEMENT DU CHAT
===================================================== */

function catBlink() {

    if (!catContainer) {
        return;
    }

    catContainer.classList.add(
        "cat-blink"
    );

    setTimeout(() => {

        catContainer.classList.remove(
            "cat-blink"
        );

    }, 180);

}


setInterval(
    catBlink,
    3500
);


/* =====================================================
   😴 ATTENTE
===================================================== */

let waitingTimer = null;


function startWaitingTimer() {

    clearTimeout(
        waitingTimer
    );

    waitingTimer =
        setTimeout(() => {

            showCat(
                "Tu réfléchis encore ? 😴💗",
                "fatigue"
            );

        }, 15000);

}


function resetWaitingTimer() {

    clearTimeout(
        waitingTimer
    );

    startWaitingTimer();

}


/* =====================================================
   ❌ PREMIER NON
===================================================== */

let noClicks = 0;


const noMessages = [

    "Oh... 🥺🌸",

    "Le petit chat est surpris... 🥺",

    "Je comprends 😊",

    "La suite reste une surprise 🌷",

    "Tu peux continuer si tu veux 💗"

];


if (noBtn) {

    noBtn.addEventListener(
        "click",
        () => {

            playNoSound();

            resetWaitingTimer();

            noClicks++;

            const noScale =
                Math.max(
                    .65,
                    1 -
                    noClicks *
                    .05
                );

            const yesScale =
                Math.min(
                    1.35,
                    1 +
                    noClicks *
                    .05
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

            playSuccessSound();

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
   💗 CŒURS INTERACTIFS
===================================================== */

const heartMessages = [

    "Un petit cœur rien que pour toi 💗",

    "Tu as trouvé une surprise 🌸",

    "Le petit chat t'envoie un câlin de loin 🐱💗",

    "Encore un petit secret ✨",

    "Tu es arrivée jusqu'ici 🌷",

    "La surprise continue... 💕"

];


function createInteractiveHearts() {

    if (!interactiveHearts) {
        return;
    }

    interactiveHearts.innerHTML =
        "";

    for (
        let i = 0;
        i < 7;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );

        heart.className =
            "interactive-heart";

        heart.textContent =
            [
                "💗",
                "💕",
                "💖",
                "🌸"
            ][
                Math.floor(
                    Math.random() * 4
                )
            ];

        heart.style.left =
            (
                10 +
                Math.random() *
                80
            ) +
            "%";

        heart.style.top =
            (
                15 +
                Math.random() *
                65
            ) +
            "%";

        heart.style.animationDelay =
            Math.random() *
            2 +
            "s";

        heart.addEventListener(
            "click",
            () => {

                playClickSound();

                showHeartMessage();

                heart.remove();

            }
        );

        interactiveHearts.appendChild(
            heart
        );

    }

}


function showHeartMessage() {

    const message =
        document.createElement(
            "div"
        );

    message.className =
        "heart-message";

    message.textContent =
        heartMessages[
            Math.floor(
                Math.random() *
                heartMessages.length
            )
        ];

    document.body.appendChild(
        message
    );

    createSparkles(10);

    setTimeout(() => {

        message.remove();

    }, 1600);

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

            playGiftSound();

            resetWaitingTimer();

            openGift.disabled =
                true;

            gift.classList.add(
                "shake"
            );

            giftMessage.textContent =
                "Attends... 👀";

            showCat(
                "Ça bouge ! 😳",
                "surpris"
            );

            createSparkles(25);


            setTimeout(() => {

                updateGiftProgress(2);

                giftMessage.textContent =
                    "Quelque chose arrive... ✨";

                giftHeartExplosion();

            }, 700);


            setTimeout(() => {

                gift.classList.remove(
                    "shake"
                );

                gift.classList.add(
                    "open"
                );

                updateGiftProgress(3);

                giftMessage.textContent =
                    "Une petite surprise pour toi 💗";

                showCat(
                    "Ohhh !!! 😸💗",
                    "heureux"
                );

                playSuccessSound();

            }, 1500);


            setTimeout(() => {

                giftScene.classList.remove(
                    "active"
                );

                galleryScene.classList.add(
                    "active"
                );

                showCat(
                    "Regarde ça... 🌸",
                    "heureux"
                );

            }, 3200);

        }
    );

}


function updateGiftProgress(
    number
) {

    const dots =
        document.querySelectorAll(
            ".gift-dot"
        );

    dots.forEach(
        (dot, index) => {

            if (
                index <
                number
            ) {

                dot.classList.add(
                    "active"
                );

            }

        }
    );

}


function giftHeartExplosion() {

    if (!gift) {
        return;
    }

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
            document.createElement(
                "div"
            );

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
            ) +
            "px";

        item.style.top =
            (
                rect.top +
                rect.height / 2
            ) +
            "px";

        document.body.appendChild(
            item
        );

        const x =
            (
                Math.random() -
                .5
            ) * 420;

        const y =
            -80 -
            Math.random() *
            320;

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
                    Math.random() *
                    900,

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
   📸 GALERIE
===================================================== */

if (galleryNext) {

    galleryNext.addEventListener(
        "click",
        () => {

            playClickSound();

            galleryScene.classList.remove(
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

        }
    );

}


/* =====================================================
   📖 POÈME
===================================================== */

function startTypingPoem() {

    if (!poem) {
        return;
    }

    const paragraphs =
        poem.querySelectorAll(
            "p"
        );

    paragraphs.forEach(
        paragraph => {

            paragraph.style.display =
                "none";

        }
    );

    let paragraphIndex =
        0;


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

        let charIndex =
            0;

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

                    clearInterval(
                        interval
                    );

                    paragraphIndex++;

                    setTimeout(
                        typeParagraph,
                        700
                    );

                }

            }, 25);

    }

    revealBtn.style.display =
        "none";

    typeParagraph();

}


/* =====================================================
   🌙 PASSAGE MODE NUIT
===================================================== */

if (revealBtn) {

    revealBtn.addEventListener(
        "click",
        () => {

            playClickSound();

            poemScene.classList.remove(
                "active"
            );

            game.classList.add(
                "calm"
            );

            game.classList.add(
                "night"
            );

            transitionScene.classList.add(
                "active"
            );

            transitionText.textContent =
                "La surprise continue sous les étoiles... 🌙✨";

            showCat(
                "Bon... une dernière petite question 😳💗",
                "gene"
            );

            createNightStars();

            setTimeout(() => {

                transitionScene.classList.remove(
                    "active"
                );

                questionFinale.classList.add(
                    "active"
                );

                showCat(
                    "Voilà... 😳💗",
                    "gene"
                );

                createSparkles(30);

            }, 4000);

        }
    );

}


/* =====================================================
   🌌 ÉTOILES NUIT
===================================================== */

function createNightStars() {

    const nightStars =
        document.getElementById(
            "nightStars"
        );

    if (!nightStars) {
        return;
    }

    nightStars.innerHTML =
        "";

    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const star =
            document.createElement(
                "div"
            );

        star.className =
            "night-star";

        star.style.left =
            Math.random() *
            100 +
            "%";

        star.style.top =
            Math.random() *
            80 +
            "%";

        star.style.animationDelay =
            Math.random() *
            3 +
            "s";

        nightStars.appendChild(
            star
        );

    }

}


/* =====================================================
   ❌ NON FINAL
===================================================== */

let finalNoClicks = 0;


const finalNoMessages = [

    "Oh... 🥺",

    "Je comprends 💗",

    "Pas de pression 🌸",

    "Le plus important est d'être sincère 💕",

    "Merci quand même d'avoir regardé ma surprise 🌷"

];


if (finalNo) {

    finalNo.addEventListener(
        "click",
        () => {

            playNoSound();

            if (!answerSent) {

                sendAnswer(
                    "Non 🌷"
                );

            }

            finalNoClicks++;

            resetWaitingTimer();

            const noScale =
                Math.max(
                    .65,
                    1 -
                    finalNoClicks *
                    .05
                );

            const yesScale =
                Math.min(
                    1.35,
                    1 +
                    finalNoClicks *
                    .05
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

            playSuccessSound();

            if (!answerSent) {

                sendAnswer(
                    "Oui 💗"
                );

            }

            resetWaitingTimer();

            questionFinale.classList.remove(
                "active"
            );

            envelopeScene.classList.add(
                "active"
            );

            showCat(
                "J'ai encore une petite chose pour toi 💗",
                "heureux"
            );

            createFireworks();

            createCelebration();

        }
    );

}


/* =====================================================
   💌 ENVELOPPE
===================================================== */

if (envelope) {

    envelope.addEventListener(
        "click",
        () => {

            if (
                envelope.classList.contains(
                    "open"
                )
            ) {

                return;
            }

            playGiftSound();

            envelope.classList.add(
                "open"
            );

            showCat(
                "Une dernière petite surprise... 💗",
                "heureux"
            );

            setTimeout(
                typeLetter,
                900
            );

        }
    );

}


/* =====================================================
   💌 LETTRE PERSONNALISÉE
===================================================== */

function typeLetter() {

    const message =
        "Coucou 💗\n\n" +

        "Merci d'avoir pris le temps " +
        "de regarder toute cette petite surprise. 🌸\n\n" +

        "J'ai voulu créer quelque chose " +
        "de différent, simplement pour " +
        "te faire sourire. 💕\n\n" +

        "Peu importe ta réponse, " +
        "le plus important est qu'elle " +
        "soit sincère. 😊\n\n" +

        "Merci d'être arrivée jusqu'ici. 🌷";


    letterText.textContent =
        "";

    let index =
        0;


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

                setTimeout(() => {

                    envelopeScene.classList.remove(
                        "active"
                    );

                    revealScene.classList.add(
                        "active"
                    );

                    createFireworks();

                    createCelebration();

                    showCat(
                        "Merci beaucoup ! 😸💗",
                        "heureux"
                    );

                }, 2500);

            }

        }, 25);

}


/* =====================================================
   🎆 FEUX D'ARTIFICE
===================================================== */

function createFireworks() {

    if (!fireworks) {
        return;
    }

    for (
        let burst = 0;
        burst < 7;
        burst++
    ) {

        setTimeout(() => {

            const x =
                15 +
                Math.random() *
                70;

            const y =
                15 +
                Math.random() *
                55;

            const symbols = [
                "💗",
                "✨",
                "💕",
                "⭐"
            ];

            for (
                let i = 0;
                i < 25;
                i++
            ) {

                const particle =
                    document.createElement(
                        "div"
                    );

                particle.className =
                    "firework-particle";

                particle.textContent =
                    symbols[
                        Math.floor(
                            Math.random() *
                            symbols.length
                        )
                    ];

                particle.style.left =
                    x + "%";

                particle.style.top =
                    y + "%";

                fireworks.appendChild(
                    particle
                );

                const angle =
                    (
                        Math.PI * 2 * i
                    ) / 25;

                const distance =
                    80 +
                    Math.random() *
                    180;

                const dx =
                    Math.cos(angle) *
                    distance;

                const dy =
                    Math.sin(angle) *
                    distance;

                particle.animate(
                    [
                        {
                            transform:
                                "translate(-50%,-50%) scale(.2)",

                            opacity: 0
                        },

                        {
                            transform:
                                "translate(-50%,-50%) scale(1)",

                            opacity: 1
                        },

                        {
                            transform:
                                `translate(
                                    calc(-50% + ${dx}px),
                                    calc(-50% + ${dy}px)
                                )
                                scale(.2)`,

                            opacity: 0
                        }

                    ],
                    {
                        duration:
                            1300,

                        easing:
                            "ease-out"
                    }
                );

                setTimeout(() => {

                    particle.remove();

                }, 1400);

            }

            playSuccessSound();

        }, burst * 500);

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
        i < 45;
        i++
    ) {

        const item =
            document.createElement(
                "div"
            );

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
            (
                Math.random() -
                .5
            ) * 800;

        const y =
            (
                Math.random() -
                .5
            ) * 650;

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
                    Math.random() *
                    1000,

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


/* =====================================================
   📱 INSTAGRAM
===================================================== */

if (instagramBtn) {

    instagramBtn.addEventListener(
        "click",
        () => {

            playClickSound();

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

            playClickSound();

            location.reload();

        }
    );

}


/* =====================================================
   ⭐ ÉTOILES
===================================================== */

function createStars() {

    if (!stars) {
        return;
    }

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const star =
            document.createElement(
                "div"
            );

        star.className =
            "star";

        star.style.left =
            Math.random() *
            100 +
            "%";

        star.style.top =
            Math.random() *
            80 +
            "%";

        star.style.animationDelay =
            Math.random() *
            3 +
            "s";

        stars.appendChild(
            star
        );

    }

}

createStars();


/* =====================================================
   🌷 FLEURS
===================================================== */

function createFlowers() {

    if (!flowers) {
        return;
    }

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
            document.createElement(
                "div"
            );

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
            Math.random() *
            100 +
            "%";

        flower.style.animationDelay =
            Math.random() *
            2 +
            "s";

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

    if (!fallingHearts) {
        return;
    }

    const heart =
        document.createElement(
            "div"
        );

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
        Math.random() *
        100 +
        "%";

    heart.style.fontSize =
        15 +
        Math.random() *
        18 +
        "px";

    heart.style.animationDuration =
        4 +
        Math.random() *
        5 +
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

    if (!particles) {
        return;
    }

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
                document.createElement(
                    "div"
                );

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
                Math.random() *
                100 +
                "vw";

            sparkle.style.top =
                Math.random() *
                100 +
                "vh";

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

    if (!particles) {
        return;
    }

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
            document.createElement(
                "div"
            );

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
            Math.random() *
            100 +
            "vw";

        petal.style.top =
            70 +
            Math.random() *
            20 +
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
   🌸 FIN
===================================================== */
