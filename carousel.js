const imgsCycle = [
  "./assets/images/profile_1.jpg",
  "./assets/images/profile_2.jpg",
  "./assets/images/profile_3.jpg",
  "./assets/images/profile_4.jpg",
  "./assets/images/profile_5.jpg",
];

const persons = [
  ["Phillip Massey", "Smile of the year"],
  ["Nannie Lawrence", "little smile"],
  ["Bruce Walters", "friend smile"],
  ["Henry Hughes", "24h smiles"],
  ["Lugal Ki En", "King Lord of Earthlings"],
];
const data = [
  {
    video: "./assets/images/thumbnail_4.jpg",
    title: "Diagonal smile",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, natus!",
    img: "./assets/images/profile_1.jpg",
    name: "Phillip Massey",
    stars: 4,
    time: "8 min",
  },
  {
    video: "./assets/images/thumbnail_3.jpg",
    title: "Diagonal smile",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, natus!",
    img: "./assets/images/profile_2.jpg",
    name: "Petina",
    stars: 5,
    time: "10 min",
  },
  {
    video: "./assets/images/thumbnail_2.jpg",
    title: "Diagonal smile",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, natus!",
    img: "./assets/images/profile_3.jpg",
    name: "Peti loca",
    stars: 1,
    time: "1h",
  },
  {
    video: "./assets/images/thumbnail_1.jpg",
    title: "Diagonal smile",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, natus!",
    img: "./assets/images/profile_4.jpg",
    name: "Ahya sonso",
    stars: 2,
    time: "18 min",
  }
  ,
  {
    video: "./assets/images/thumbnail_1.jpg",
    title: "Diagonal smile",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, natus!",
    img: "./assets/images/profile_4.jpg",
    name: "Ahya sonso",
    stars: 2,
    time: "18 min",
  }
];

const imgsCycleLength = imgsCycle.length;
function updateCarousel2b(numberOfCardsShowing) {
  const carousel2Container = document.getElementById("carousel2-b");
  const del = document.querySelectorAll(".carousel2-b > .c-el");
  document.getElementById("prev-2-b").classList.remove("disabled");
  document.getElementById("next-2-b").classList.remove("disabled");
  del.forEach((el) => el.remove());
  const show = document.createElement("div");
  show.id = "show-b";
  show.classList.add("show-b", "c-el");
  carousel2Container.append(show);
  let cc = 0;

  for (const i of data) {
    let card = document.createElement("div");
    card.classList.add("card-1-b", "c-el");

    let thumbnail = document.createElement("div");
    thumbnail.className = "thumbnail-b";

    let thumb_img = document.createElement("img");
    thumb_img.src = i.video;

    let play_img = document.createElement("img");
    play_img.src = "./assets/images/play.png";

    thumbnail.append(thumb_img, play_img);

    let v_text = document.createElement("div");
    v_text.className = "v-text-b";

    let v_title = document.createElement("h3");
    v_title.className = "v-title-b";
    v_title.innerText = i.title;

    let v_desc = document.createElement("p");
    v_desc.className = "v-desc-b";
    v_desc.innerText = i.desc;

    v_text.append(v_title, v_desc);

    let rating = document.createElement("div");
    rating.className = "rating-b";

    let r_user = document.createElement("div");
    r_user.className = "r-user-b";

    let user_img = document.createElement("img");
    user_img.src = i.img;

    let user_name = document.createElement("p");
    user_name.innerText = i.name;

    r_user.append(user_img, user_name);

    let rating_data = document.createElement("div");
    rating_data.className = "rating-data-b";

    let stars = document.createElement("div");
    stars.className = "stars-b";

    let c = 0;
    for (; c < i.stars && c < 5; c++) {
      let star = document.createElement("img");
      star.src = "./assets/images/star_on.png";
      stars.append(star);
    }
    for (; c < 5; c++) {
      let star = document.createElement("img");
      star.src = "./assets/images/star_off.png";
      stars.append(star);
    }

    let time = document.createElement("p");
    time.innerText = i.time;

    rating_data.append(stars, time);
    rating.append(r_user, rating_data);

    card.append(thumbnail, v_text, rating);
    if (cc < numberOfCardsShowing) {
      show.append(card);
    } else {
      carousel2Container.append(card);
    }
    cc++;
  }
}

function updateCarousel2(numberOfCardsShowing) {
  const carousel2Container = document.getElementById("carousel2");
  const del = document.querySelectorAll(".carousel2 > .c-el");
  document.getElementById("prev-2").classList.remove("disabled");
  document.getElementById("next-2").classList.remove("disabled");
  del.forEach((el) => el.remove());
  const show = document.createElement("div");
  show.id = "show";
  show.classList.add("show", "c-el");
  carousel2Container.append(show);
  let cc = 0;

  for (const i of data) {
    let card = document.createElement("div");
    card.classList.add("card-1", "c-el");

    let thumbnail = document.createElement("div");
    thumbnail.className = "thumbnail";

    let thumb_img = document.createElement("img");
    thumb_img.src = i.video;

    let play_img = document.createElement("img");
    play_img.src = "./assets/images/play.png";

    thumbnail.append(thumb_img, play_img);

    let v_text = document.createElement("div");
    v_text.className = "v-text";

    let v_title = document.createElement("h3");
    v_title.className = "v-title";
    v_title.innerText = i.title;

    let v_desc = document.createElement("p");
    v_desc.className = "v-desc";
    v_desc.innerText = i.desc;

    v_text.append(v_title, v_desc);

    let rating = document.createElement("div");
    rating.className = "rating";

    let r_user = document.createElement("div");
    r_user.className = "r-user";

    let user_img = document.createElement("img");
    user_img.src = i.img;

    let user_name = document.createElement("p");
    user_name.innerText = i.name;

    r_user.append(user_img, user_name);

    let rating_data = document.createElement("div");
    rating_data.className = "rating-data";

    let stars = document.createElement("div");
    stars.className = "stars";

    let c = 0;
    for (; c < i.stars && c < 5; c++) {
      let star = document.createElement("img");
      star.src = "./assets/images/star_on.png";
      stars.append(star);
    }
    for (; c < 5; c++) {
      let star = document.createElement("img");
      star.src = "./assets/images/star_off.png";
      stars.append(star);
    }

    let time = document.createElement("p");
    time.innerText = i.time;

    rating_data.append(stars, time);
    rating.append(r_user, rating_data);

    card.append(thumbnail, v_text, rating);
    if (cc < numberOfCardsShowing) {
      show.append(card);
    } else {
      carousel2Container.append(card);
    }
    cc++;
  }
}
function matching() {
	let match1 = window.matchMedia("(max-width: 576px)");
  let match2 = window.matchMedia("(max-width: 901px)");
  let match3 = window.matchMedia("(min-width: 902px)");

	if (match1.matches) {
		updateCarousel2(1);
    if (data.length <= 1) {
      document.getElementById("prev-2").classList.add("disabled");
      document.getElementById("next-2").classList.add("disabled");
    }
	} else if (match2.matches) {
		updateCarousel2(2);
    if (data.length <= 2) {
      document.getElementById("prev-2").classList.add("disabled");
      document.getElementById("next-2").classList.add("disabled");
    }
	} else if (match3.matches){
		updateCarousel2(4);
    if (data.length <= 4) {
      document.getElementById("prev-2").classList.add("disabled");
      document.getElementById("next-2").classList.add("disabled");
    }
	}
  prevNext();
}
function matchingb() {
	let match1 = window.matchMedia("(max-width: 576px)");
  let match2 = window.matchMedia("(max-width: 901px)");
  let match3 = window.matchMedia("(min-width: 902px)");

	if (match1.matches) {
		updateCarousel2b(1);
    if (data.length <= 1) {
      document.getElementById("prev-2-b").classList.add("disabled");
      document.getElementById("next-2-b").classList.add("disabled");
    }
	} else if (match2.matches) {
		updateCarousel2b(2);
    if (data.length <= 2) {
      document.getElementById("prev-2-b").classList.add("disabled");
      document.getElementById("next-2-b").classList.add("disabled");
    }
	} else if (match3.matches){
		updateCarousel2b(4);
    if (data.length <= 4) {
      document.getElementById("prev-2-b").classList.add("disabled");
      document.getElementById("next-2-b").classList.add("disabled");
    }
	}
  prevNextb();
}

function createCarousel2() {
  let match1 = window.matchMedia("(max-width: 576px)");
  let match2 = window.matchMedia("(max-width: 901px)");
  let match3 = window.matchMedia("(min-width: 902px)");

	match1.addEventListener("change", () => matching())
	match2.addEventListener("change", () => matching())
	match3.addEventListener("change", () => matching())

  if (match1.matches) {
    updateCarousel2(1);
    if (data.length <= 1) {
      document.getElementById("prev-2").classList.add("disabled");
      document.getElementById("next-2").classList.add("disabled");
    }
  } else if (match2.matches) {
    updateCarousel2(2);
    if (data.length <= 2) {
      document.getElementById("prev-2").classList.add("disabled");
      document.getElementById("next-2").classList.add("disabled");
    }
  } else if (match3.matches){
    updateCarousel2(4);
    if (data.length <= 4) {
      document.getElementById("prev-2").classList.add("disabled");
      document.getElementById("next-2").classList.add("disabled");
    }
  }
  prevNext();
}
function createCarousel2b() {
  let match1 = window.matchMedia("(max-width: 576px)");
  let match2 = window.matchMedia("(max-width: 901px)");
  let match3 = window.matchMedia("(min-width: 902px)");

	match1.addEventListener("change", () => matchingb())
	match2.addEventListener("change", () => matchingb())
	match3.addEventListener("change", () => matchingb())

  if (match1.matches) {
    updateCarousel2b(1);
    if (data.length <= 1) {
      document.getElementById("prev-2-b").classList.add("disabled");
      document.getElementById("next-2-b").classList.add("disabled");
    }
  } else if (match2.matches) {
    updateCarousel2b(2);
    if (data.length <= 2) {
      document.getElementById("prev-2-b").classList.add("disabled");
      document.getElementById("next-2-b").classList.add("disabled");
    }
  } else if (match3.matches){
    updateCarousel2b(4);
    if (data.length <= 4) {
      document.getElementById("prev-2-b").classList.add("disabled");
      document.getElementById("next-2-b").classList.add("disabled");
    }
  }
  prevNextb();
}
function prevNextb() {

	const next = document.getElementById("next-2-b");
	const carousel = document.getElementById("carousel2-b");
	const show = document.getElementById("show-b");

	next.addEventListener("click", () => {
		const current = document.querySelector(".show-b >.card-1-b");
		const newCurrent = document.querySelector(".carousel2-b > .card-1-b");

		current.classList.add("cd-next2");
		newCurrent.classList.add("r-margin");
		setTimeout(() => {
			current.classList.remove("cd-next2");
			newCurrent.classList.remove("r-margin");
			carousel.append(current);
			show.append(newCurrent);
		}, 500)
	}) 

	const prev = document.getElementById("prev-2-b");
	prev.addEventListener("click", () => {
		const lastCurrent = document.querySelector(".show-b >.card-1-b:last-child");
		const newLastCurrent = document.querySelector(".carousel2-b > .card-1-b:last-child");
		const current = document.querySelector(".show-b >.card-1-b");

		current.classList.add("cd-prev2");
		newLastCurrent.classList.add("cd-next2-2", "fade-in");
		lastCurrent.classList.add("fade-out");
		setTimeout(() => {
		
			show.prepend(newLastCurrent);
			carousel.insertBefore(lastCurrent, document.querySelector(".carousel2-b > .card-1-b"));
			lastCurrent.classList.remove("fade-out");
			current.classList.remove("cd-prev2");
			newLastCurrent.classList.remove("cd-next2-2", "fade-in");
		}, 300);

	})
}

function prevNext() {

	const next = document.getElementById("next-2");
	const carousel = document.getElementById("carousel2");
	const show = document.getElementById("show");

	next.addEventListener("click", () => {
		const current = document.querySelector(".show >.card-1");
		const newCurrent = document.querySelector(".carousel2 > .card-1");

		current.classList.add("cd-next2");
		newCurrent.classList.add("r-margin");
		setTimeout(() => {
			current.classList.remove("cd-next2");
			newCurrent.classList.remove("r-margin");
			carousel.append(current);
			show.append(newCurrent);
		}, 500)
	}) 

	const prev = document.getElementById("prev-2");
	prev.addEventListener("click", () => {
		const lastCurrent = document.querySelector(".show >.card-1:last-child");
		const newLastCurrent = document.querySelector(".carousel2 > .card-1:last-child");
		const current = document.querySelector(".show >.card-1");
    

		current.classList.add("cd-prev2");
		newLastCurrent.classList.add("cd-next2-2", "fade-in");
		lastCurrent.classList.add("fade-out");
		setTimeout(() => {
		
			show.prepend(newLastCurrent);
			carousel.insertBefore(lastCurrent, document.querySelector(".carousel2 > .card-1"));
			lastCurrent.classList.remove("fade-out");
			current.classList.remove("cd-prev2");
			newLastCurrent.classList.remove("cd-next2-2", "fade-in");
		}, 300);

	})
}

function createCarousel1() {
  const carouselContainer = document.getElementById("carousel");

  for (const [i, v] of imgsCycle.entries()) {
    let img = document.createElement("img");
    let cItem = document.createElement("div");
    let para = document.createElement("p");
    let para2 = document.createElement("p");
    let desc = document.createElement("i");
    let cont = document.createElement("div");
    let cont2 = document.createElement("div");

    para.innerText = `« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, veniam sunt ipsum iste blanditiis ad soluta nihil»`;
    para2.innerText = persons[i][0];
    desc.innerHTML = persons[i][1];
    cItem.className = "c-item";
    if (i === 0) {
      cItem.classList.add("first_element", "f-c");
    } else {
      cItem.classList.add("other_element", "f-c");
    }
    cont2.append(para2, desc);
    cont.append(para, cont2);
    cItem.append(img, cont);
    img.src = v;
    carouselContainer.append(cItem);
  }

  const button_next = document.getElementById("next");
  button_next.addEventListener("click", () => {
    const items = document.getElementsByClassName("c-item");
    const firstItem = items[0];

    firstItem.classList.add("move_first");
    firstItem.classList.remove("first_element");
    items[1].classList.add("first_element");
    items[1].classList.remove("other_element");
    setTimeout(() => {
      firstItem.classList.remove("move_first");
      carouselContainer.append(firstItem);

      firstItem.classList.add("other_element");
    }, 400);
  });

  const button_prev = document.getElementById("prev");
  button_prev.addEventListener("click", () => {
    const items = document.getElementsByClassName("c-item");
    const lastItem = items.item(imgsCycleLength - 1);

    lastItem.classList.remove("other_element");
    lastItem.classList.add("move_first_3");
    lastItem.classList.add("first_element");
    items[0].classList.add("move_first_2");
    setTimeout(() => {
      lastItem.classList.remove("move_first_3");
      items[0].classList.remove("move_first_2");
      items[0].classList.remove("first_element");
      items[0].classList.add("other_element");
      carouselContainer.prepend(lastItem);
    }, 400);
  });
}



window.onload = function () {
  createCarousel1();
  createCarousel2();
  createCarousel2b();


};
