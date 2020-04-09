// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12371667), 5000);
// require('waypoints/lib/noframework.waypoints.min');
const $ = require('jquery');
const async = require("async");

require("component-responsive-frame/child");
const ready = require("./brightcove");


// function updateScrollBar() {
//   const docHeight = ($( document ).height()) - ($( window ).height());
//   let position = $(window).scrollTop();
//   var percentage = ((position / docHeight) * 100);
//   $('#navScroll').css("width", `${percentage}%`);
// }


// $( document ).ready(function() {
//   updateScrollBar();

// $( document ).scroll(function() {
//   updateScrollBar();
// });



// $( "#sound" ).click(function() {

//   $(this).toggleClass('unmute');
//    if ( $(this).hasClass('unmute') ) {

//      $('html,body').animate({
//        scrollTop: $('#firstVid').offset().top
//      });

//      for (let i in playerObj) {
//         playerObj[i].muted(false);
//     }
//    } else {
//      for (let i in playerObj) {
//         playerObj[i].muted(true);
//     }
//    }
// });


// $( ".special" ).click(function() {
//   $( "#looper" ).hide();
//   $( ".brightcove__button" ).hide();
// });



// function makeVideoWaypoints(myVids) {
//   $('.slideVid').each((index, element) => {

//     let startVid;
//     let bringForward;


//       function playVid() {
//         myVids[index].play();
//       }
//       function pauseVid() {
//         myVids[index].pause();
//       }

//           $(element).ready(function() {
//             var player = this;

//             new Waypoint({
//                 element: element,
//                 enabled: false,
//                 handler: function(direction) {
//                   if(direction === "down") {

//                     $(element).find('.stickMe').css("z-index","5");
//                     startVid = setTimeout(playVid, 1200);
//                     $(element).find('.stickMe').fadeTo( 500, 1 );
//                     $(element).find('.aspect-inner').delay( 700 ).fadeTo( 500, 1 );
//                   }
//                   else if (direction === "up") {
//                     clearTimeout(startVid);
//                     setTimeout(pauseVid, 300);
//                     $(element).find('.aspect-inner').fadeTo( 500, 0 );
//                     $(element).find('.stickMe').delay(500).fadeTo( 500, 0 );

//                     bringForward = setTimeout(function(){
//                       $(element).find('.stickMe').css("z-index","-1");
//                     }, 1000);

//                   }
//                 },
//                 offset: '80%'
//             });

//             new Waypoint({
//                 element: element,
//                 enabled: false,
//                 handler: function(direction) {
//                   if(direction === "down") {
//                     clearTimeout(startVid);

//                     setTimeout(pauseVid, 300);
//                     $(element).find('.aspect-inner').fadeTo( 500, 0 );
//                     $(element).find('.stickMe').delay(500).fadeTo( 500, 0 );
//                     setTimeout(function(){
//                       $(element).find('.stickMe').css("z-index","-1");
//                     }, 1000);
//                   }
//                   else if (direction === "up") {
//                     $(element).find('.stickMe').css("z-index","5");
//                     startVid = setTimeout(playVid, 1200);
//                     $(element).find('.stickMe').fadeTo( 500, 1 );
//                     $(element).find('.aspect-inner').delay( 700 ).fadeTo( 500, 1 );
//                   }
//                 },
//                 offset: '-20%'
//             });


//           });

//           });

//           setTimeout(function(){
//             Waypoint.enableAll();
//           }, 250);
//       };



// $('.fixedTexts').each((order, item) => {

//       var $this = item;
//       var $items = $($this).find(".text");

//       var stickCon = $($this).prev();

//         $($items).each((index, element) => {

//                 $(element).ready(function() {
//                   let yay = parseInt( $(element).data("order") );

//                   var divInside = $(element).children(":first");
//                   // console.log(divInside[0]);

//                   // console.log(element);

//                   new Waypoint({
//                       element: element,
//                       enabled: false,
//                       handler: function(direction) {
//                         if(direction === "down") {
//                           $(stickCon).css("z-index","3");
//                           $('.fixedContainer .pics').finish();

//                           console.log('i trigger1   ' + yay);

//                           if ( $(element).hasClass('text-front') ){
//                             $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).delay(200).fadeTo(1000,1);

//                             if ( $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).hasClass('changeMyBackground') ) {
//                               console.log('I have a weird background');
//                               $(element).closest('.fixedTotal').find(`.stickMe`).addClass('specialBackground');
//                             } else {}
//                           } else if ( $(element).hasClass('text-back')  || ($(element).hasClass('text-mid')) ) {

//                           } else {
//                             $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).delay(200).fadeTo(1000,1);
//                             if ( $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).hasClass('changeMyBackground') ) {
//                               $(element).closest('.fixedTotal').find(`.stickMe`).removeClass('specialBackground');
//                             } else {}
//                           }

//                         }
//                         else if (direction === "up") {
//                           console.log('i trigger2');
//                           if ( $(element).hasClass('text-back') || ($(element).hasClass('text-mid')) ){

//                           } else if ( $(element).hasClass('text-front') ){
//                             if ( $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).hasClass('changeMyBackground') ) {
//                               console.log('I have a weird background');
//                               $(element).closest('.fixedTotal').find(`.stickMe`).removeClass('specialBackground');
//                             } else {}
//                             $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).stop().fadeTo(500,0);
//                             setTimeout(function(){
//                                 $(stickCon).css("z-index","-1");
//                             }, 500);
//                           } else {

//                             $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).stop().fadeTo(500,0);
//                             setTimeout(function(){
//                                 $(stickCon).css("z-index","-1");
//                             }, 500);
//                           }



//                         }
//                       },
//                       offset: '90%'
//                   });

//                   new Waypoint({
//                       element: divInside[0],
//                       enabled: false,
//                       handler: function(direction) {
//                         if(direction === "down") {
//                           if ( $(element).hasClass('text-front') || ($(element).hasClass('text-mid')) ){
//                             console.log('i trigger3');
//                           } else if ( $(element).hasClass('text-back') ) {
//                             $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).fadeTo(500,0);
//                             if ( $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).hasClass('changeMyBackground') ) {
//                               $(element).closest('.fixedTotal').find(`.stickMe`).removeClass('specialBackground');
//                             } else {}
//                             console.log('i trigger3');
//                           } else {
//                             $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).fadeTo(500,0);
//                             console.log('i trigger3');
//                           }

//                           setTimeout(function(){
//                               $(stickCon).css("z-index","-1");
//                           }, 500);

//                           // $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).fadeTo(2000,0);
//                         }
//                         else if (direction === "up") {
//                           $(stickCon).css("z-index","3");
//                           // $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).fadeTo(2000,1);
//                           if ( ($(element).hasClass('text-front')) || ($(element).hasClass('text-mid')) ){
//                             console.log('i trigger4');
//                             } else if ( $(element).hasClass('text-back') ) {
//                               $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).fadeTo(1000,1);
//                               console.log('i trigger4');
//                               if ( $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).hasClass('changeMyBackground') ) {
//                                 $(element).closest('.fixedTotal').find(`.stickMe`).addClass('specialBackground');
//                               } else {}
//                             } else {
//                             $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).fadeTo(1000,1);
//                             if ( $(element).closest('.fixedTotal').find(`.fixedContainer .pics:nth-child(${yay})`).hasClass('changeMyBackground') ) {
//                               $(element).closest('.fixedTotal').find(`.stickMe`).removeClass('specialBackground');
//                             } else {}
//                             console.log('i trigger4');
//                           }
//                         }
//                       },
//                       offset: '-5%'
//                   });


//                 }); // end of element ready




//     });

//   }); // end of fixedTexts

//   $('.clearPoint').each((order, element) => {

//       $(element).ready(function() {
//         new Waypoint({
//             element: element,
//             enabled: false,
//             handler: function(direction) {

//               if(direction === "down") {
//                 console.log('clear point ' + direction);

//                 $(document).finish();
//                 // var id = window.setTimeout(function() {}, 0);
//                 //
//                 // while (id--) {
//                 //     window.clearTimeout(id); // will do nothing if no timeout with id is present
//                 // }
//                 $(`.fixedContainer .pics`).fadeTo(0,0);
//                 // $('.slideVid .stickMe').css("z-index","-1");
//                 // $('.slideVid .stickMe').css("opacity",0);
//                 // $('.slideVid .aspect-inner').css("opacity",0);
//                 // $('.fixedContainer').css("z-index","-1");
//               }
//               else if (direction === "up") {
//               }
//             },
//             offset: '0%'
//         });

//         new Waypoint({
//             element: element,
//             enabled: false,
//             handler: function(direction) {
//               if(direction === "down") {
//               }
//               else if (direction === "up") {
//                 console.log('clear point ' + direction);
//                 $(document).finish();
//                 // var id = window.setTimeout(function() {}, 0);
//                 // while (id--) {
//                 //     window.clearTimeout(id); // will do nothing if no timeout with id is present
//                 // }
//                 // $(`.fixedContainer .pics`).fadeTo(0,0);
//                 // $('.slideVid .stickMe').css("z-index","-1");
//                 // // $('.slideVid .stickMe').css("opacity",0);
//                 // // $('.slideVid .aspect-inner').css("opacity",0);
//                 // $('.fixedContainer').css("z-index","-1");
//               }
//             },
//             offset: '0%'
//         });

//       });

//     });





//   setTimeout(function(){
//     Waypoint.enableAll();
//   }, 250);


// Load video player
// var players = {
//   10: "player-1",
//   11: "player-2",
//   12: "player-3",
//   13: "player-4",
//   14: "player-5",
//   15: "player-6",
//   16: "player-7",
// }

// var playerErnestina = {
//   17: "player-8",
// }

// var playerObj = [];


// async.mapValues(players, function(val, key, callback) {
//   ready("Lo6UYxY9", val, function(p) {
//     p.pause();
//     p.muted(true);
//     playerObj.push(p);
//     let nextSection = $(`#${val}`).closest('.slideVid').next('.sectionHed').get(0);
//     console.log(nextSection);
//     p.on("ended", function() {
//       $('html,body').animate({
//         scrollTop: $(nextSection).offset().top
//       });
//     });
//     callback(null, p);
//   });
// }, function(err, players) {
//   //called when all players are initialized
//   console.log("All videos initialized");
//   makeVideoWaypoints(playerObj);
// });

// async.mapValues(playerErnestina, function(val, key, callback) {
//   ready("lPxN0ViN", val, function(p) {
//     callback(null, p);
//   });
// }, function(err, players) {
//   //called when all players are initialized
//   console.log("Ernestina is initialized");
// });








// Select all links with hashes
// $('a[href*="#"]')
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {

//     Waypoint.disableAll();

//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//       &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//     setTimeout(function(){
//       Waypoint.enableAll();
//     }, 2000);
//   });

// }); // doc ready
