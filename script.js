(function () {
    console.log("js connected");

    let i = 0;
    let textDiv = document.getElementById("presentation");
    let text =
        "Hi, my name is Luca. I write codes and play synthesizers... This is my Portfolio, feel free to have a look around !";
    let speed = 80;

    const modal = document.getElementById("modal");

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
                img: "./collect.png",
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
        ];

        for (let i = 0; i < projects.length; i++) {
            modal.innerHTML = `
            <img src="${projects[i].img}" alt="" />
            <div id="description">
                <h4>${projects[i].name}</h4>
                <p>${projects[i].description}</p>
                <div id="techStack">
                    <h6>Tech Stack</h6>
                    <p><strong>FRONT END : ${projects[i].tech.front}</p>
                    <p><strong>BACK END : ${projects[i].tech.back}/p>
                    <p><strong>DATABASE : ${projects[i].tech.database}</p>
                </div>
                <div id="lunch">
                    <a
                            href=${projects[i].link.website}
                            target="_blank"
                            ><img src="./visit.svg" alt="visit website"
                        /></a>
                        <a
                            id="seeCode"
                            href=${projects[i].link.github}
                            target="_blank"
                            ><img src="./github.svg" alt="see code"
                        /></a>
                </div>
            </div>
            
            `;
        }
    };

    renderProject();
})();
