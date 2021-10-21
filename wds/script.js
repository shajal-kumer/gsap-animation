// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
// gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
// gsap.from(".content__sidebar--right", { duration: 1, x: "-100vw", delay: 1, ease: "power2.in" });
// gsap.from(".content__sidebar--left", { duration: 1, x: "-100%", delay: 1.5 });
// gsap.to(".footer", { duration: 1, y: "0", ease: "elastic", delay: 2.5 });
// gsap.fromTo(
// 	".button",
// 	{ opacity: 0, scale: 0, rotation: 720 },
// 	{ opacity: 1, scale: 1, rotation: 0, duration: 1, delay: 3.5 }
// );

const timeline = gsap.timeline({ default: { duration: 1 } });

timeline

	.from(".header", { y: "-100%", ease: "bounce" })
	//  start = 0s, duration = 1s
	//  total delay = 0s + 1s = 1s

	.from(".link", { opacity: 0, stagger: 0.5 })
	//  start = 1s, duration = 1s
	//  total delay = 1s + 1s = 2s

	.from(".content__sidebar--right", { x: "-100vw", ease: "power2.in" }, 1)
	//  here we use absolute delay 1s
	//  start = 1s, duration = 1s
	//  total delay = 1s + 1s = 2s
	.from(".content__sidebar--left", { x: "-100%" }, "<0.5")
	// start = 2 - 0.5 = 1.5s
	//   total delay =  1.5s + 1s = 2.5s

	.to(".footer", { y: "0", ease: "elastic" })
	//  start = 2.5s , duration = 1s
	//  total delay  = 2.5s + 1s = 3.5s
	.fromTo(".button", { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 });

const button = document.querySelector(".button");

button.addEventListener("click", () => {
	timeline.timeScale(3);
	timeline.reverse();
});

// misc
// const obj = { x: 0 };
// gsap.to(obj, {
// 	duration: 2,
// 	x: 100,
// 	onUpdate: () => {
// 		console.log(obj.x);
// 	},
// });
