function onScroll(interval) {

    const //drawed = false,
        about_me_section = document.querySelector('.about-me'),
        skills_section = document.querySelector('.skills'),
        experience_section = document.querySelector('.experience'),
        my_projects_section = document.querySelector('.my-projects'),
        contact_section = document.querySelector('.contact'),
        charts = document.querySelectorAll(".chart"),
        chartvalues = document.querySelectorAll(".percent"),
        
        exper_two = document.querySelector('.second'),
        exper_three = document.querySelector('.third'),
        exper_four = document.querySelector('.fourth');
    
    window.addEventListener('scroll', function (e) {
        var scrollValue = window.scrollY - 200;
        //console.log("scroll" +about_me_section.scrollHeight);
        //console.log(skills_section);
        //console.log(experience_section.scrollTop);
        //console.log(scrollValue);
        if (scrollValue > about_me_section.scrollTop) {
            about_me_section?.classList.add('fadeIn');
        } else if (scrollValue < about_me_section.scrollTop)
        {
            about_me_section.classList.remove('fadeIn');
        }
        if (scrollValue > (skills_section.scrollTop + about_me_section.clientHeight)) {
            skills_section.classList.add('fadeIn');
        } else if (scrollValue < (skills_section.scrollTop + about_me_section.clientHeight))
        {
            skills_section.classList.remove('fadeIn');
        }

        if (scrollValue > (experience_section.scrollTop + about_me_section.clientHeight + skills_section.clientHeight)) {
            experience_section.classList.add('fadeIn');
            const experience_items = document.querySelectorAll('.experience-item');
            experience_items.forEach((experience_item, index) => {
                if (scrollValue > (experience_section.scrollTop + about_me_section.clientHeight + skills_section.clientHeight + experience_items[index].clientHeight * (index + 1) + 150)) {
                    experience_item.classList.add('expand');
                } else if (scrollValue < (experience_section.scrollTop + about_me_section.clientHeight + skills_section.clientHeight + experience_items[index].clientHeight * (index + 1))) {
                    experience_item.classList.remove('expand');
                }
            })
        } else if (scrollValue < (experience_section.scrollTop + about_me_section.clientHeight + skills_section.clientHeight))
        {
            experience_section.classList.remove('fadeIn');

        }
        if (scrollValue > (my_projects_section.scrollTop + experience_section.clientHeight + about_me_section.clientHeight + skills_section.clientHeight)) {
            my_projects_section.classList.add('fadeIn');
        } else if (scrollValue < (my_projects_section.scrollTop + experience_section.clientHeight + about_me_section.clientHeight + skills_section.clientHeight)) {
            my_projects_section.classList.remove('fadeIn');
        }
        if (scrollValue > (contact_section.scrollTop + my_projects_section.clientHeight + experience_section.clientHeight + about_me_section.clientHeight + skills_section.clientHeight)) {
            contact_section.classList.add('fadeIn');
        } else if (scrollValue < (contact_section.scrollTop + my_projects_section.clientHeight + experience_section.clientHeight + about_me_section.clientHeight + skills_section.clientHeight)) {
            contact_section.classList.remove('fadeIn');
        }
       
        
        
    }, interval);
}

function onScroll1(interval) {
    const //drawed = false,
        about_me_section = document.querySelector('.about-me'),
            skills_section = document.querySelector('.skills'),
            experience_section = document.querySelector('.experience'),
            my_projects_section = document.querySelector('.my-projects'),
            contact_section = document.querySelector('.contact'),
            charts = document.querySelectorAll(".chart"),
            chartvalues = document.querySelectorAll(".percent"),
            exper_one = document.querySelector('.first'),
            exper_two = document.querySelector('.second'),
            exper_three = document.querySelector('.third'),
        exper_four = document.querySelector('.fourth');

    window.addEventListener('scroll', function (e) {
        console.log(e.target.scrollingElement.scrollTop);
    var scrollValue = window.scrollY;
        //if (scrollValue > 180){
        if (scrollValue > about_me_section.scrollTop) {
        about_me_section?.classList.add('fadeIn');
        } else //if (scrollValue < 100)
        {
        about_me_section.classList.remove('fadeIn');
        }
        if (scrollValue > skills_section.scrollTop) {
        skills_section.classList.add('fadeIn');
        } else //if (scrollValue < 300)
        {
        skills_section.classList.remove('fadeIn');
    }
    //if (scrollValue > 580){
    //    if (!drawed){
    //        for (var i = 0; i < charts.length; i++) {
    //            chartdraw(charts[i], chartvalues[i]);
    //        }
    //        drawed = true;
    //    }

    //}
    //else if (scrollValue < 450) {
    //    for (var i = 0; i < charts.length; i++) {
    //        clearcanvas(charts[i], chartvalues[i]);
    //    }
        //}
        if (scrollValue > experience_section.scrollTop) {
        experience_section.classList.add('fadeIn');
        } else //if (scrollValue < 600)
        {
        experience_section.classList.remove('fadeIn');
    }
    //if (scrollValue > 970){
    //    exper_one.classList.add('expand');
    //} else if (scrollValue < 820){
    //    exper_one.classList.remove('expand');
    //}
    //if (scrollValue > 1120){
    //    exper_two.classList.add('expand');
    //} else if (scrollValue < 970){
    //    exper_two.classList.remove('expand');
    //}
    //if (scrollValue > 1270){
    //    exper_three.classList.add('expand');
    //} else if (scrollValue < 1120){
    //    exper_three.classList.remove('expand');
    //}
    //if (scrollValue > 1420){
    //    exper_four.classList.add('expand');
    //} else if (scrollValue < 1270){
    //    exper_four.classList.remove('expand');
    //}
    //if (scrollValue > 1800){
    //    my_projects_section.classList.add('fadeIn');
    //} else if (scrollValue < 1650){
    //    my_projects_section.classList.remove('fadeIn');
    //}
    //if (scrollValue > 2400){
    //    contact_section.classList.add('fadeIn');
    //} else if (scrollValue < 2250){
    //    contact_section.classList.remove('fadeIn');
    //}
    //console.log(scrollValue);
    }, interval);
}
    

//function test() {
//    //drawed = false,
//        about_me_section = document.getElementById('aboutme'),
//    //    skills_section = document.querySelector('.skills'),
//    //    experience_section = document.querySelector('.experience'),
//    //    my_projects_section = document.querySelector('.my-projects'),
//    //    contact_section = document.querySelector('.contact'),
//    //    charts = document.querySelectorAll(".chart"),
//    //    chartvalues = document.querySelectorAll(".percent"),
//    //    exper_one = document.querySelector('.first'),
//    //    exper_two = document.querySelector('.second'),
//    //    exper_three = document.querySelector('.third'),
//    //    exper_four = document.querySelector('.fourth');

//    window.onscroll();
//}
//window.onscroll = (e) => {
//    //const about_me_section = document.querySelector('.about-me');

//    console.log(about_me_section);
//    var scrollValue = window.scrollY;
//    if (scrollValue > 180){
//        about_me_section?.classList.add('fadeIn');
//    } else if (scrollValue < 100){
//        about_me_section.classList.remove('fadeIn');
//    }
//    if (scrollValue > 480){
//        skills_section.classList.add('fadeIn');
//    } else if (scrollValue < 300){
//        skills_section.classList.remove('fadeIn');
//    }
//    if (scrollValue > 580){
//        if (!drawed){
//            for (var i = 0; i < charts.length; i++) {
//                chartdraw(charts[i], chartvalues[i]);
//            }
//            drawed = true;
//        }
        
//    } else if (scrollValue < 450){
//        for (var i = 0; i < charts.length; i++) {
//            clearcanvas(charts[i], chartvalues[i]);
//        }
//    }
//    if (scrollValue > 880){
//        experience_section.classList.add('fadeIn');
//    } else if (scrollValue < 600){
//        experience_section.classList.remove('fadeIn');
//    }
//    if (scrollValue > 970){
//        exper_one.classList.add('expand');
//    } else if (scrollValue < 820){
//        exper_one.classList.remove('expand');
//    }
//    if (scrollValue > 1120){
//        exper_two.classList.add('expand');
//    } else if (scrollValue < 970){
//        exper_two.classList.remove('expand');
//    }
//    if (scrollValue > 1270){
//        exper_three.classList.add('expand');
//    } else if (scrollValue < 1120){
//        exper_three.classList.remove('expand');
//    }
//    if (scrollValue > 1420){
//        exper_four.classList.add('expand');
//    } else if (scrollValue < 1270){
//        exper_four.classList.remove('expand');
//    }
//    if (scrollValue > 1800){
//        my_projects_section.classList.add('fadeIn');
//    } else if (scrollValue < 1650){
//        my_projects_section.classList.remove('fadeIn');
//    }
//    if (scrollValue > 2400){
//        contact_section.classList.add('fadeIn');
//    } else if (scrollValue < 2250){
//        contact_section.classList.remove('fadeIn');
//    }
//    console.log(scrollValue);
//}
//function clearcanvas(canvas, percent){
//    if (canvas.getContext) {
//        var ctx = canvas.getContext("2d");
//        ctx.clearRect(0, 0, canvas.width, canvas.height);
//        percent.textContent = 0;
//        drawed = false;
//    }
//}
//function chartdraw(canvas, percent) {

//    if (canvas.getContext) {
//        var ctx = canvas.getContext("2d");
//        var currentEndAngle = 1.5;
//        var currentStartAngle = 1.5;
//        var maxValue = canvas.getAttribute('data-value') * 2 + 1;
//        var pie1 = setInterval(draw, 15);
//        var counter = 0;

//        function draw() {
//            drawed = true;
//            if (counter >= maxValue) {
//                clearInterval(pie1);

//            } else {

//                var startAngle = currentStartAngle * Math.PI;
//                var endAngle = (currentEndAngle) * Math.PI;

//                currentEndAngle = currentEndAngle + 0.01;

//                // var counterClockwise = false;

//                ctx.clearRect(0, 0, canvas.width, canvas.height);
//                // red
//                drawCircle(45, "#eee");
//                // gray
//                drawDonut(startAngle, endAngle);
//            }
//            counter++;
//            if ((counter - 1) % 2 === 0) {
//                percent.textContent = (counter - 1) / 2;
//            }
//        }

//        //
//        function drawDonut(startAngle, endAngle) {
//            ctx.beginPath();
//            ctx.arc(canvas.width / 2, canvas.height / 2, 45, startAngle, endAngle);
//            ctx.lineWidth = 7;
//            // ctx.strokeStyle = "#34435a";
//            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--second-color');
//            ctx.stroke();
//        }
//        function drawCircle(radius, color) {
//            ctx.beginPath();
//            ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
//            ctx.lineWidth = 7;
//            ctx.strokeStyle = color;
//            ctx.stroke();
//        }
//    }
//}

