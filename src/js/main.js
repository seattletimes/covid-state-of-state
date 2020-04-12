// require('waypoints/lib/noframework.waypoints.min');
const $ = require('jquery');
const async = require("async");

require("component-responsive-frame/child");
const ready = require("./brightcove");

function obvserverCallback(entries) {
    for (const entry of entries) {
        const target = entry.target;

        const prev = $(target).prev(".stickMe");
        const upperThreshold = 0.55;
        const val = Math.min(entry.intersectionRatio, upperThreshold);
        const opacity = (val / upperThreshold);

        prev.css("opacity", opacity);
        console.log(entry.intersectionRatio);
    }
}

const numSteps = 50;
const steps = [];
for (let i = 0; i <= numSteps; i++) {
    steps.push(i / numSteps);
}

const observers = steps.map((step) => {
    return new IntersectionObserver(
        obvserverCallback,
        {
            threshold: step
        });
})

$(".fixedTexts").each((index, element) => {
    observers.forEach((observer) => {
        observer.observe(element);
    })
});