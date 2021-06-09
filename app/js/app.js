document.addEventListener("DOMContentLoaded", function () {
  $(".js--ulti-slider").owlCarousel({
    items: 1,
    loop: false,
    dots: true,
    mouseDrag: false,
    nav: false,
    thumbs: true,
    thumbsPrerendered: true,
    thumbImage: false,
    thumbContainerClass: "js--ulti-slider-thumbs",
    thumbItemClass: "js--ulti-slider-thumb-item",
  });

  $(".js--ulti-ingredients-slider").owlCarousel({
    items: 3,
    loop: false,
    dots: false,
    mouseDrag: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      993: {
        items: 3,
      },
    },
  });

  $(document).on("click", ".js--anchor-link", function (e) {
    event.preventDefault();
    console.log($($.attr(this, "href")));
    const viewportHeight = $(window).height();
    const elOffset = $($.attr(this, "href")).offset().top;
    const elHeight = $($.attr(this, "href")).outerHeight();
    let pageOffset;
    pageOffset = elOffset - (viewportHeight / 2 - elHeight / 2);
    $("html, body").animate(
      {
        scrollTop: pageOffset,
      },
      700
    );
  });
});

// const initSliderMobile = () => {
//   const mobileCarousel = () => {
//     const checkWidth = $(window).width();
//     const owlPost = $(".js--slider-mobile");
//     for (let i = 0; i < owlPost.length; i++) {
//       if (checkWidth > 992) {
//         if (typeof $(owlPost[i]).data("owl.carousel") != "undefined") {
//           $(owlPost[i]).data("owl.carousel").destroy();
//         }
//         $(owlPost[i]).removeClass("owl-carousel");
//       } else if (checkWidth <= 992) {
//         $(owlPost[i]).addClass("owl-carousel");
//         $(owlPost[i]).owlCarousel({
//           items: 1,
//           dots: false,
//           loop: true,
//           nav: true,
//           mouseDrag: false,
//         });
//       }
//     }
//   };
//   mobileCarousel();
//   $(window).resize(mobileCarousel);
// };

const onCounterMinus = (id) => {
  let val = getCounterVal(id);
  if (val > 0) {
    --val;
  }
  setCounterVal(id, val);
};

const onCounterPlus = (id) => {
  let val = getCounterVal(id);
  ++val;
  setCounterVal(id, val);
};

const getCounterVal = (id) => {
  return document.getElementById(id).value;
};

const setCounterVal = (id, val) => {
  const costItem = document.querySelector(`[data-counter-cost-id="${id}"]`);
  let costVal = +costItem.dataset.counterCost;
  document.getElementById(id).value = val;
  costItem.innerHTML = String(costVal * val);
};

const onToogleIngredients = () => {
  document.querySelector("#aboutPopup").classList.toggle("show");
  document.querySelector("body").classList.toggle("body--no-scroll");
};
