const head = document.querySelector("h1");
const original = head.textContent;
const updated = "Build an AR App";
const hero = document.querySelector(".hero__module");
const link = document.getElementById('ga-99cff7');
const cards = document.querySelectorAll('.card--nanodegree__title');
const list = document.querySelector(".list-nanodegrees");

function reomveElement() {
    hero.lastElementChild.remove();
    document.removeEventListener("click", reomveElement);
}

function toggle(event) {
    const target = event.target;

    if (target.nodeName === "BUTTON") {
        event.preventDefault();

        if (target.textContent.startsWith("Add")) {
            const fav = document.createElement("p");
            event.target.textContent = "Remove from favourites";

            fav.textContent = "⭐ ⭐ ⭐";
            target.parentElement.appendChild(fav);
        } else {
            event.target.textContent = "Add to Favourites";
            target.nextSibling.remove();
        }
    }
}

cards.forEach(function (card) {
    const button = document.createElement("button");
    button.textContent = "Add to Favourites";
    button.classList = "button button--primary";
    card.appendChild(button);
});

list.addEventListener("click", toggle);

head.addEventListener("mouseover", function () {
    head.textContent = updated;
});

head.addEventListener("mouseout", function () {
    head.textContent = original;
});

hero.addEventListener("click", reomveElement);

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Wow! We didn't navigate to a new page!");
});
