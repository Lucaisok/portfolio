(function () {
    let i = 0;
    const textDiv = document.getElementById("presentation");
    const text =
        "Hi, my name is Luca. I write codes and play synthesizers... This is what I do, feel free to have a look around";
    const speed = 80;

    const modalContainer = document.getElementById("modalContainer");

    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    let modalArray = [];
    let counter = 0;

    const typer = () => {
        if (i < text.length) {
            textDiv.innerHTML += text.charAt(i);
            textDiv.style.color = "#f4ecdf";
            textDiv.style.fontFamily = "Alata";
            textDiv.style.fontSize = "71" + "px";
            textDiv.style.fontWeight = "bold";
            textDiv.style.cursor = "pointer";
            i++;
            setTimeout(typer, speed);
        }
    };

    typer();

    $("#about").click(function () {
        $("html,body").animate(
            {
                scrollTop: $("#second").offset().top,
            },
            "slow"
        );
    });

    $("#projects").click(function () {
        $("html,body").animate(
            {
                scrollTop: $("#third").offset().top,
            },
            "slow"
        );
    });

    $("#contact").click(function () {
        $("html,body").animate(
            {
                scrollTop: $("#fourth").offset().top,
            },
            "slow"
        );
    });

    const renderProject = () => {
        const projects = [
            {
                img: "images/collect.png",
                img2: "images/login.png",
                img3: "images/thanks.png",
                name: "Collect",
                description:
                    "Developed as the final project of my Bootcamp at Spiced Academy, Collect is a fully functional web app for Restaurants, Bars and Clubs owners that keep tracks of the customers data and automatically delete it after 14 days. The purpose of this app is to help flattening the Covid curve making easier for bars and restaurants to keep track of their customers and, at the same time, improving the privacy protection of the users.",
                tech: {
                    front: "React",
                    back: "Node.js + Express",
                    database: "Postgres",
                },
                link: {
                    website: "https://collect-webapp.herokuapp.com/",
                    github: "https://github.com/Lucaisok/finalproject",
                },
            },
            {
                img: "images/social2.png",
                img2: "images/friends.png",
                img3: "images/socialRegister.png",
                name: "Social IPA",
                description:
                    "Social Network for IPA beer passionates. Features the most common social functionalities: login and logout / ask, accept, decline and delete friendship / send and receive private messages / upload pics and update bio. Made wit React + Redux, Node.js (Express), Socket.io, AWS and Postgres.",
                tech: {
                    front: "React + Redux, Socket.io",
                    back: "Node.js + Express",
                    database: "Postgres",
                },
                link: {
                    website: "",
                    github: "https://github.com/Lucaisok/Social-Network",
                },
            },
            {
                img: "images/synthboard.png",
                img2: "images/synthModal.png",
                img3: "images/synthBig.png",
                name: "SynthBoard",
                description:
                    "Part of my education at Spiced Academy. Instagram style web app for Synth enthusiasts made with Vue.js, AWS, Node.js. Upload images of your favorites synthesizers, leave comments or just explore what the users like to play!",
                tech: {
                    front: "Vue.js, AWS",
                    back: "Node.js + Express",
                    database: "Postgres",
                },
                link: {
                    website: "",
                    github: "https://github.com/Lucaisok/Synthboard",
                },
            },
            {
                img: "images/autonoma.png",
                img2: "images/autonomaLogo.png",
                img3: "images/seeYou.png",
                name: "Autonoma",
                description:
                    "Minimalistic style mailing list subscriber for Autonoma Industriale, a Berlin based record label and party series focused on private concerts and underground events. Made with React, Express and Postgres. Features an admin panel to retrieve data from the database",
                tech: {
                    front: "React",
                    back: "Node.js + Express",
                    database: "Postgres",
                },
                link: {
                    website: "http://www.autonomaindustriale.com/",
                    github: "https://github.com/Lucaisok/autonomaMailingList",
                },
            },
            {
                img: "images/duHome.png",
                img2: "images/release.png",
                img3: "images/releases.png",
                name: "Peer Du",
                description:
                    "Showcase website for Peer Du, electronic music producer and dj based in Berlin. Features releases, mixes and contact pages. The style aim to reflect the aestethic of a techno oriented club, with dark background and gray links that lights up on hover.",
                tech: {
                    front: "Bootstrap",
                    back: "/",
                    database: "/",
                },
                link: {
                    website: "https://lucatomarelli.live/",
                    github: "",
                },
            },
        ];
        for (var i = 0; i < projects.length; i++) {
            let modal = document.createElement("div");
            modal.setAttribute("class", "modal");

            if (
                projects[i].link.website != "" &&
                projects[i].link.github != ""
            ) {
                modal.innerHTML = `
            <div class="imageContainer">
            <img class="firstImg" src="${projects[i].img}" alt="" />
            <img class="secondImg" src="${projects[i].img2}" alt="" />
            <img class="thirdImg" src="${projects[i].img3}" alt="" />
            </div>
            <div id="description">
                <h4>${projects[i].name}</h4>
                <p>${projects[i].description}</p>
                <div id="techStack">
                    <h6>Tech Stack</h6>
                    <p><strong>FRONT END :</strong> ${projects[i].tech.front}</p>
                    <p><strong>BACK END : </strong> ${projects[i].tech.back}</p>
                    <p><strong>DATABASE : </strong> ${projects[i].tech.database}</p>
                </div>
                <div id="lunch">
                        <a
                            id="seeCode"
                            href=${projects[i].link.github}
                            target="_blank"
                            ><img src="images/github.svg" alt="see code"
                        /></a>
                        <a
                            href=${projects[i].link.website}
                            target="_blank"
                            ><img src="images/visit.svg" alt="visit website"
                        /></a>
                </div>
            </div>
            `;
            } else if (projects[i].link.github == "") {
                modal.innerHTML = `
            <div class="imageContainer">
            <img class="firstImg" src="${projects[i].img}" alt="" />
            <img class="secondImg" src="${projects[i].img2}" alt="" />
            <img class="thirdImg" src="${projects[i].img3}" alt="" />
            </div>
            <div id="description">
                <h4>${projects[i].name}</h4>
                <p>${projects[i].description}</p>
                <div id="techStack">
                    <h6>Tech Stack</h6>
                    <p><strong>FRONT END :</strong> ${projects[i].tech.front}</p>
                    <p><strong>BACK END : </strong> ${projects[i].tech.back}</p>
                    <p><strong>DATABASE : </strong> ${projects[i].tech.database}</p>
                </div>
                <div id="lunch">
                    <a
                            href=${projects[i].link.website}
                            target="_blank"
                            ><img src="images/visit.svg" alt="visit website"
                        /></a>
                </div>
            </div>
            `;
            } else if (projects[i].link.website == "") {
                modal.innerHTML = `
            <div class="imageContainer">
            <img class="firstImg" src="${projects[i].img}" alt="" />
            <img class="secondImg" src="${projects[i].img2}" alt="" />
            <img class="thirdImg" src="${projects[i].img3}" alt="" />
            </div>
            <div id="description">
                <h4>${projects[i].name}</h4>
                <p>${projects[i].description}</p>
                <div id="techStack">
                    <h6>Tech Stack</h6>
                    <p><strong>FRONT END :</strong> ${projects[i].tech.front}</p>
                    <p><strong>BACK END : </strong> ${projects[i].tech.back}</p>
                    <p><strong>DATABASE : </strong> ${projects[i].tech.database}</p>
                </div>
                <div id="lunch">
                        <a
                            id="seeCode"
                            href=${projects[i].link.github}
                            target="_blank"
                            ><img src="images/github.svg" alt="see code"
                        /></a>
                </div>
            </div>
            `;
            }
            modalContainer.appendChild(modal);
            modalArray.push(modal);
        }
        console.log("modalArray", modalArray);
    };
    renderProject();

    rightArrow.addEventListener("click", function () {
        if (counter == 0) {
            modalArray[counter].style.left = 100 + "%";
            modalArray[counter + 1].style.right = 100 + "%";
            counter++;
            leftArrow.style.display = "inline";
            rightArrow.style.left = "0" + "%";
        } else if (counter == 1) {
            modalArray[counter].style.right = 0 + "%";
            modalArray[counter + 1].style.right = 200 + "%";
            counter++;
        } else if (counter == 2) {
            modalArray[counter].style.right = 0 + "%";
            modalArray[counter + 1].style.right = 300 + "%";
            counter++;
        } else if (counter == 3) {
            modalArray[counter].style.right = 0 + "%";
            modalArray[counter + 1].style.right = 400 + "%";
            counter++;
            rightArrow.style.display = "none";
        }
    });

    leftArrow.addEventListener("click", function () {
        if (counter == 1) {
            modalArray[counter].style.right = 0 + "%";
            modalArray[counter - 1].style.left = 0 + "%";
            counter--;
            leftArrow.style.display = "none";
            rightArrow.style.left = 92 + "%";
        } else if (counter == 2) {
            modalArray[counter].style.right = 0 + "%";
            modalArray[counter - 1].style.right = 100 + "%";
            counter--;
        } else if (counter == 3) {
            modalArray[counter].style.right = 0 + "%";
            modalArray[counter - 1].style.right = 200 + "%";
            counter--;
        } else if (counter == 4) {
            modalArray[counter].style.right = 0 + "%";
            modalArray[counter - 1].style.right = 300 + "%";
            counter--;
            rightArrow.style.display = "inline";
        }
    });
})();
