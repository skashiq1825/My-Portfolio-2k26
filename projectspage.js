const projects = [
    {
      title: "portfolio 2k26",
      image: "assets/all works/Screenshot 2026-09-24 203758.png",
      category: "Portfolio,Project showcase",
      services: "Creative Developer, Frontend Developer"
    },
  
    {
      title: "Lifelink",
      image: "assets/all works/Screenshot 2026-07-08 224513.webp",
      category: "Healthcare",
      services: "Creative Direction,Hackathon-Project, Web Development"
    },
  
    {
        title: "Taste is Memory",
        image: "./assets/Screenshot 2026-08-11 131853.webp",
        category: "Restaurant, Cafe",
        services: "Creative Direction, Branding, Web Design"
    },
  
    {
        title: "FLVR",
        image: "./assets/Screenshot 2026-08-11 130150.webp",
        category: "Food, Branding",
        services: "Art Direction, Web Design"
    },
  
    {
        title: "Interior Designer Portfolio",
        image: "./assets/Screenshot 2026-08-11 125738.webp",
        category: "Interior Designer",
        services: "Portfolio, Web Design , Web Dev"
    },
  
    {
      title: "LVLRUN",
      image: "assets/all works/Screenshot 2026-09-30 224435.png",
      category: "Real life RPG (prototype)",
      services: "Creative Web Direction, Web Game"
    },
    {
      title: "Mythos",
      image: "./assets/Screenshot 2026-08-11 131853.webp",
      category: "Mystical",
      services: "Creative Development, Web Dev"
    },
    {
      title: "Dribble Clone",
      image: "./assets/Screenshot 2026-08-11 125738.webp",
      category: "Clone Website(dribble)",
      services: "Web Development, Frontend"
    },
    {
        title: "Spika Shoes Campaign Web Demo",
        image: "assets/all works/Screenshot 2026-09-30 224103.png",
        category: "Campaign Website Demo",
        services: "Web Development, Frontend"
      },
    {
      title: "Sportz",
      image: "./assets/Screenshot 2026-08-15 173557.png",
      category: "Sports-Wear Brand",
      services: "Creative Landingpage, Web Development"
    },
    {
      title: "LookBook",
      image: "assets/Screenshot 2025-12-20 114259.png",
      category: "Gifting Brand",
      services: "Landing Page, Frontend, Web Dev"
    },
    {
      title: "Nature Retreat",
      image: "assets/all works/Screenshot 2026-09-30 225000.png",
      category: "Creative Scrolling Page",
      services: "Web Development, Scrolling Animations"
    },
    {
      title: "Plant 4 Us",
      image: "assets/all works/Screenshot 2025-12-20 114500.webp",
      category: "PlantBrand Landing Page",
      services: "Creative Direction, Web Design, Landing Page"
    },
    {
        title: "Modern Architecture",
        image: "assets/all works/Screenshot 2025-12-27 185142.webp",
        category: "Architecture web Landing Page",
        services: "Creative Direction, Web Design, Landing Page"
      },
      {
        title: "Explorers",
        image: "assets/all works/Screenshot 2026-01-10 205402.webp",
        category: "Architecture web Landing Page",
        services: "Creative Direction, Web Design, Landing Page"
      },
      {
        title: "Perfume Page",
        image: "assets/all works/Screenshot 2026-02-14 192943.webp",
        category: "Perfume web Landing Page",
        services: "Creative Direction, Web Design, Landing Page"
      },
      {
        title: "TrekCave",
        image: "assets/all works/Screenshot 2026-05-20 234635.webp",
        category: "Trekcave Landing Page",
        services: "Creative Direction, Web Design, Landing Page"
      },
      {
        title: "JONES BAR-B-Q",
        image: "assets/all works/Screenshot 2026-05-24 030658.webp",
        category: "BAR-B-Q Landing Page",
        services: "Creative Website, Web Development"
      },
      {
        title: "DIOLO",
        image: "assets/all works/Screenshot 2026-07-16 200631.webp",
        category: "Landing Page",
        services: "Creative Dev, Landing page"
      },
      {
        title: "Two Leaves & Bud Clone",
        image: "assets/all works/Screenshot 2026-06-01 133329.webp",
        category: "Clone Website",
        services: "Creative Development,Frontend Development,Responsiveness"
      },
      {
        title: "Leather Jacket WebPage",
        image: "assets/all works/Screenshot 2026-02-14 192859.webp",
        category: "Landing Page",
        services: "Creative Design,Landing Page"
      },
      {
        title: "Cap Webpage",
        image: "assets/all works/Screenshot 2026-02-14 223924.webp",
        category: "Landing Page",
        services: "Creative Design,Landing Page"
      },
      {
        title: "Logilink",
        image: "assets/all works/Screenshot 2026-05-22 005643.webp",
        category: "Freight Website Landing Page",
        services: "Creative Design,Landing Page"
      },
      {
        title: "Eyewear Webpage",
        image: "assets/all works/Screenshot 2026-02-17 131605.webp",
        category: "Eyewear Website Landing Page",
        services: "Creative Design,Landing Page"
      },
      {
        title: "Loome",
        image: "assets/all works/Screenshot 2026-05-16 120707.webp",
        category: "Clothing Website Landing Page",
        services: "Creative Design,Landing Page"
      },

  ];
  const imageCache = projects.map(project => {
    const img = new Image();
    img.src = project.image;
    return img;
});
  
  
  var STEP = 240;
  
  const carousel = document.querySelector(".carousel");
  const list = document.querySelector(".project-list");
  const category = document.querySelector(".category");
  const services = document.querySelector(".services");
  
  const reducedMotion = matchMedia(
    "(prefers-reduced-motion: reduce)"
  );
  
  
  const wrap = (n, length) =>
    ((n % length) + length) % length;
  
  
  let position = 0;
  let targetPosition = 0;
  let cards = [];
  let lastActive = -1;
  
  
  // Project names
  const names = projects.map(project => {
  
    const element = document.createElement("div");
  
    element.className = "project-name";
    element.textContent = project.title;
  
    list.appendChild(element);
  
    return element;
  
  });
  
  
  // Allocate enough reusable cards to cover the screen
  function buildPool() {
  
    carousel.replaceChildren();
  
    cards = [];
  
    const count =
      Math.ceil(innerHeight / STEP) + 4;
  
  
    for (let i = 0; i < count; i++) {
  
      const element =
        document.createElement("div");
  
      element.className = "project";
  
  
      const image =
        document.createElement("img");
  
      image.draggable = false;
  
  
      element.appendChild(image);
      carousel.appendChild(element);
  
  
      cards.push({
        element,
        image,
        dataIndex: -1
      });
  
    }
  
  }
  
  
  window.addEventListener(
    "resize",
    buildPool
  );
  
  buildPool();
  
  
  // Wheel
  window.addEventListener(
    "wheel",
    event => {
  
      event.preventDefault();
  
  
      // Normalize wheel units
      const unit =
        event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? innerHeight
            : 1;
  
  
      targetPosition +=
        event.deltaY * unit;
  
    },
    {
      passive: false
    }
  );
  
  
  // Keyboard
  window.addEventListener(
    "keydown",
    event => {
  
      if (
        event.key !== "ArrowDown" &&
        event.key !== "ArrowUp"
      ) {
        return;
      }
  
  
      event.preventDefault();
  
  
      targetPosition +=
        event.key === "ArrowDown"
          ? STEP
          : -STEP;
  
    }
  );
  
  
  // Touch / Drag
  let touchY = null;
  
  
  carousel.addEventListener(
    "pointerdown",
    event => {
  
      if (event.pointerType === "mouse") {
        return;
      }
  
  
      touchY = event.clientY;
  
      carousel.setPointerCapture(
        event.pointerId
      );
  
    }
  );
  
  
  carousel.addEventListener(
    "pointermove",
    event => {
  
      if (touchY === null) {
        return;
      }
  
  
      targetPosition +=
        touchY - event.clientY;
  
  
      touchY = event.clientY;
  
    }
  );
  
  
  carousel.addEventListener(
    "pointerup",
    () => {
      touchY = null;
    }
  );
  
  
  carousel.addEventListener(
    "pointercancel",
    () => {
      touchY = null;
    }
  );
  
  
  // Animation
  let previousTime = performance.now();
  
  
  function animate(now) {
  
    const delta =
      Math.min(
        now - previousTime,
        50
      );
  
  
    previousTime = now;
  
  
    // Frame-rate-independent easing
    const ease =
      1 - Math.exp(-delta / 120);
  
  
    position +=
      (targetPosition - position) *
      (reducedMotion.matches
        ? 1
        : ease);
  
  
    const activeSlot =
      Math.round(position / STEP);
  
  
    const activeIndex =
      wrap(
        activeSlot,
        projects.length
      );
  
  
    const firstSlot =
      Math.floor(position / STEP) -
      Math.floor(cards.length / 2);
  
  
    cards.forEach((card, i) => {
  
      const slot =
        firstSlot + i;
  
  
      const dataIndex =
        wrap(
          slot,
          projects.length
        );
  
  
      const y =
        slot * STEP - position;
  
  
      if (card.dataIndex !== dataIndex) {
  
        card.image.src = imageCache[dataIndex].src;
  
  
        card.image.alt =
          projects[dataIndex].title;
  
  
        card.dataIndex =
          dataIndex;
  
      }
  
  
      card.element.style.transform =
        `translate(-50%, -50%) translateY(${y}px)`;
  
  
      card.element.classList.toggle(
        "is-active",
        slot === activeSlot
      );
  
    });
  
  
    // Update text only when selected project changes
    if (activeIndex !== lastActive) {
  
      lastActive = activeIndex;
  
  
      names.forEach((name, i) => {
  
        name.classList.toggle(
          "is-active",
          i === activeIndex
        );
  
      });
  
  
      category.textContent =
        projects[activeIndex].category;
  
  
      services.textContent =
        projects[activeIndex].services;
  
    }
  
  
    requestAnimationFrame(animate);
  
  }
  
  
  requestAnimationFrame(animate);



  if (window.innerWidth <= 700) {
    var STEP = 140;

  }
