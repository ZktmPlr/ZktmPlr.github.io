document.addEventListener("DOMContentLoaded", function() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const dachshundProject = data.Projects.dachshund;
            const rpsProject = data.Projects.rps;
            const CProject = data.Projects.Cards;
            const PProject = data.Projects.Pokemon;
            // Dachshund project
            let imgDiv = document.getElementById('img');
            let dateDiv = document.getElementById('date');
            let titleDiv = document.getElementById('title');
            let descriptionDiv = document.getElementById('description');
            let languageDiv = document.getElementById('language');

            let imgElement = document.createElement('img');
            
            imgElement.src = dachshundProject.img;
            imgDiv.appendChild(imgElement);

            dateDiv.innerText = `Date: ${dachshundProject.date}`;
            titleDiv.innerText = `Title: ${dachshundProject.title}`;
            descriptionDiv.innerText = `Description: ${dachshundProject.description}`;
            languageDiv.innerText = `Language: ${dachshundProject.language}`;

            // RPS project
            let rpsImgDiv = document.getElementById('rpsImg');
            let rpsDateDiv = document.getElementById('rpsDate');
            let rpsTitleDiv = document.getElementById('rpsTitle');
            let rpsDescriptionDiv = document.getElementById('rpsDescription');
            let rpsLanguageDiv = document.getElementById('rpsLanguage');

            let rpsImgElement = document.createElement('img');
            
            rpsImgElement.src = rpsProject.img;
            rpsImgDiv.appendChild(rpsImgElement);

            rpsDateDiv.innerText = `Date: ${rpsProject.date}`;
            rpsTitleDiv.innerText = `Title: ${rpsProject.title}`;
            rpsDescriptionDiv.innerText = `Description: ${rpsProject.description}`;
            rpsLanguageDiv.innerText = `Language: ${rpsProject.language}`;
            let CImgDiv = document.getElementById('Cimg');
            let CDateDiv = document.getElementById('Cdate');
            let CTitleDiv = document.getElementById("Ctitle");
            let CDescriptionDiv = document.getElementById("Cdescription");
            let CLanguageDiv = document.getElementById('Clanguage');
            let CImgElement = document.createElement('img');
            CImgElement.src = CProject.img;
            CImgDiv.appendChild(CImgElement);
            CDateDiv.innerText = `Date: ${CProject.date}`;
            CTitleDiv.innerText = `Title: ${CProject.title}`;
            CDescriptionDiv.innerText = `Description: ${CProject.description}`;
            CLanguageDiv.innerText = `Language: ${CProject.language}`;
            let PImgDiv = document.getElementById('Pimg');
            let PDateDiv = document.getElementById('Pdate');
            let PTitleDiv = document.getElementById("Ptitle");
            let PDescriptionDiv = document.getElementById("Pdescription");
            let PLanguageDiv = document.getElementById('Planguage');
            let PImgElement = document.createElement('img');
            PImgElement.src = PProject.img;
            PImgDiv.appendChild(PImgElement);
            PDateDiv.innerText = `Date: ${PProject.date}`;
            PTitleDiv.innerText = `Title: ${PProject.title}`;
            PDescriptionDiv.innerText = `Description: ${PProject.description}`;
            PLanguageDiv.innerText = `Language: ${PProject.language}`;
        })
        .catch(error => console.error('Error loading the JSON file:', error));
});
