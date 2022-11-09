class StarRater extends HTMLElement {
  constructor() {
    super();
    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.styles());

    const rater = this.createRater();
    this.stars = this.createStars();
    this.stars.forEach(star => rater.appendChild(star));

    this.resetRating();

    shadow.appendChild(rater);
  }

  createRater() {
    const rater = document.createElement("div");
    rater.classList.add("star-rater");
    rater.addEventListener('mouseout', this.resetRating.bind(this));

    return rater;
  }

  createStars() {
    const createStar = (_, id) => {
      const star = document.createElement("span");
      star.classList.add("star");
      star.setAttribute("data-value", Number(id) + 1);
      star.innerHTML = "&#9733;";

      star.addEventListener("click", this.setRating.bind(this));
      star.addEventListener("mouseover", this.ratingHover.bind(this));

      return star;
    };

    return Array.from({ length: 5 }, createStar);
  }

  resetRating() {
    this.currentRatingValue = this.currentRating = this.getAttribute('data-rating') || 0;
    this.highlightRating();
  }

  setRating(e) {
    this.setAttribute("data-rating", e.currentTarget.getAttribute("data-value"));
  }

  ratingHover(e) {
    this.currentRatingValue = e.currentTarget.getAttribute("data-value");
    this.highlightRating();
  }

  highlightRating(e) {
    this.stars.forEach(star => {
      star.style.color = this.currentRatingValue >= star.getAttribute("data-value") ? "yellow" : "#FFFF"
    })
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .star {
      font-size: 50px;
      color: #FFFF;
      cursor: pointer;
    }`;

    return style;
  }
}

customElements.define("star-rater", StarRater);
