new fullpage("#fullpage", {
	autoScrolling: true,
	navigation: true,
	onLeave: (origin, destination, direction) => {
		const section = destination.item;
		const title = section.querySelector("h1");

		const tl = gsap.timeline({ delay: 0.5 });
		tl.fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });

		if (destination.index === 1) {
			const chairs = document.querySelectorAll(".chair");
			const description = document.querySelectorAll(".description");

			tl.fromTo(description, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
				.fromTo(chairs, { x: "100%" }, { x: "-40%", duration: 0 })
				.fromTo(chairs[0], { opacity: 0 }, { opacity: 1, duration: 1 })
				.fromTo(chairs[1], { opacity: 0 }, { opacity: 1, duration: 1 })
				.fromTo(chairs[2], { opacity: 0 }, { opacity: 1, duration: 1 });
		} else if (destination.index === 2) {
			const lamp = document.querySelector(".lamp");
			const tl2 = gsap.timeline({ delay: 0.5 });
			tl2.fromTo(lamp, { y: "100%" }, { y: 0, duration: 1 });
		}
	},
});
