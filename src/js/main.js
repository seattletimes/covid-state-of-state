// require('waypoints/lib/noframework.waypoints.min');
const $ = require('jquery');
const async = require("async");

require("component-responsive-frame/child");
const ready = require("./JWplayer");

function obvserverCallback(entries) {
    for (const entry of entries) {
        if (entry.intersectionRatio > 0) {
            const target = entry.target;

            console.log(target.dataset.src);
            console.log(target.dataset.caption);
            
            const prev = $(target).prevAll(".stickMe");

            // Go full opacity on entry - fade out on exit - can check for exit by the bounding
            // rect having a negative y coordinate.
            let opacity;
            // if (entry.boundingClientRect.y < 0) {
            // } else {
            //     opacity = 1;
            // }
            const upperThreshold = 1;
            const lowerThreshold = 0;
            const val = Math.max(lowerThreshold, Math.min(entry.intersectionRatio, upperThreshold)) - lowerThreshold;
            opacity = (val / (upperThreshold - lowerThreshold));

            console.log(entry.boundingClientRect.y);
            console.log(`Opacity ${opacity}`)

            prev.css("opacity", opacity);
            prev.children("img").attr("src", target.dataset.src);
            prev.children(".caption").html(target.dataset.caption);        
        }
    }
}

const numSteps = 40;
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
