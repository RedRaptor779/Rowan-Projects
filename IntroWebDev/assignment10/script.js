$(function () {
	// jQuery UI components: accordion, draggable, sortable, datepicker
	$("#uiAccordion").accordion({
		collapsible: true,
		heightStyle: "content"
	});
	$("#dragBox").draggable();
	$("#sortableList").sortable();
	$("#pickDate").datepicker();

	// Form submission list behavior from assignment9, now with jQuery
	$("#contactForm").on("submit", function (event) {
		event.preventDefault();

		const submittedName = $("#name").val().trim();
		if (!submittedName) {
			$("#status").text("Please enter a name.");
			return;
		}

		const $newItem = $("<li></li>")
			.addClass("submission-item")
			.toggleClass("recent-submission")
			.text(submittedName);

		$("#submissions").append($newItem);
		$("#status").text("Submitted! Submit another?");
		$("#contactForm").hide();
	});

	// (3%) Changing Text
	$("#btnText").on("click", function () {
		$("#home p").text("Updated with jQuery: keep systems ethical, secure, and patched.");
	});

	// (3%) Changing a CSS Style
	$("#btnSingleStyle").on("click", function () {
		$("#home p").css("color", "darkred");
	});

	// (4%) Changing Multiple Styles
	$("#btnMultiStyle").on("click", function () {
		$("#resources").css({
			border: "2px solid darkred",
			backgroundColor: "#f5f5f5",
			transform: "scale(1.01)"
		});
	});

	// (10%) Hiding and Displaying Content
	$("#btnHide").on("click", function () {
		$("#contactForm, #status").hide();
	});
	$("#btnShow").on("click", function () {
		$("#contactForm, #status").show();
	});

	// (10%) Using fadeIn and fadeOut Methods
	$("#btnFadeOut").on("click", function () {
		$("#tutorialsContent").fadeOut(500);
	});
	$("#btnFadeIn").on("click", function () {
		$("#tutorialsContent").fadeIn(500);
	});

	// (10%) Using the Toggle Method
	$("#btnToggle").on("click", function () {
		$("#resourcesContent").toggle();
	});

	// (10%) Adding and Removing Classes
	$("#btnToggleClass").on("click", function () {
		$("#sublist").toggleClass("highlight-panel");
	});

	// (10%) Changing an Attribute of an Element
	$("#btnAttr").on("click", function () {
		$("#resources a").first().attr({
			href: "https://www.hackthebox.com/",
			target: "_blank",
			title: "Opens Hack The Box in a new tab"
		});
	});

	// (10%) Using the Animate Method with Multiple CSS Properties
	$("#btnAnimate").on("click", function () {
		$("#animBox").stop(true).animate({
			width: "220px",
			height: "70px",
			left: "20px",
			opacity: 0.6
		}, 600);
	});

	// (10%) Using Callback Functions with Animate Method
	$("#btnChain").on("click", function () {
		$("#animBox").stop(true)
			.animate({ left: "120px", opacity: 0.4 }, 500, function () {
				$(this).animate({ left: "0px", opacity: 1 }, 500);
			});
	});

	// (10%) Image Animation
	$("#btnImageAnim").on("click", function () {
		$("#demoImage").stop(true)
			.animate({ left: "70%", width: "140px", opacity: 0.5 }, 700)
			.animate({ left: "0%", width: "180px", opacity: 1 }, 700);
	});
});