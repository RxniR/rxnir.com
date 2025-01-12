document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            name: 'Aether + Addons - Farmer\'s Delight - Bark Cutting Compat',
            tags: ['dimension', 'dimensions', 'mechanics', 'utility', 'aa', 'a+a'],
            image: 'data/img/aa-fd.png',
            modrinth: 'https://modrinth.com/datapack/aether-+-addons-farmers-delight-bark-cutting-compat',
            curseforge: 'https://www.curseforge.com/minecraft/texture-packs/aether-addons-farmers-delight-bark-cutting-compat'
        },
        {
            name: 'BetterEnd - Farmer\'s Delight - Bark Cutting Compat',
            tags: ['dimension', 'dimensions', 'mechanics', 'utility', 'end', 'be'],
            image: 'data/img/be-fd.png',
            modrinth: 'https://modrinth.com/datapack/betterend-farmers-delight-bark-cutting-compat',
            curseforge: 'https://www.curseforge.com/minecraft/texture-packs/betterend-farmers-delight-bark-cutting-compat'
        },
            {
                name: 'BetterNether - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['dimension', 'dimensions', 'mechanics', 'utility', 'bn'],
                image: 'data/img/bn-fd.png',
                modrinth: 'https://modrinth.com/datapack/betternether-farmers-delight-bark-cutting-compat',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/betternether-farmers-delight-bark-cutting-compat'
            },
            {
                name: 'Blue Skies - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['dimension', 'dimensions', 'mechanics', 'utility', 'bs'],
                image: 'data/img/bs-fd.png',
                modrinth: 'https://modrinth.com/datapack/blue-skies-farmers-delight-bark-cutting-compat',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/blue-skies-farmers-delight-bark-cutting-compat'
            },
            {
                name: 'Deeper and Darker - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['dimension', 'dimensions', 'mechanics', 'utility', 'dd'],
                image: 'data/img/dd-fd.png',
                modrinth: 'https://modrinth.com/datapack/deeper-and-darker-farmers-delight-bark-cutting-compat',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/deeper-and-darker-farmers-delight-bark-cutting'
            },
            {
                name: 'Ecologics - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['biome', 'biomes', 'mechanics', 'utility', 'ec'],
                image: 'data/img/ec-fd.png',
                modrinth: 'https://modrinth.com/datapack/ecologics-farmers-delight-bark-cutting-compat',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/ecologics-farmers-delight-bark-cutting-compat'
            },
            {
                name: 'Eldritch End - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['dimension', 'dimensions', 'mechanics', 'utility', 'end', 'ee'],
                image: 'data/img/ee-fd.png',
                modrinth: 'https://modrinth.com/datapack/eldritch-end-farmers-delight-bark-cutting-compat',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/eldritch-end-farmers-delight-bark-cutting-compat'
            },
            {
                name: 'End\'s Phantasm - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['dimension', 'dimensions', 'mechanics', 'utility', 'end', 'ep'],
                image: 'data/img/ep-fd.png',
                modrinth: 'https://modrinth.com/datapack/ends-phantasm-farmers-delight-bark-cutting-compat',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/ends-phantasm-farmers-delight-bark-cutting-compat'
            },
            {
                name: 'Oh The Biomes We\'ve Gone - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['biome', 'biomes', 'mechanics', 'utility', 'otbwg'],
                image: 'data/img/otbwg-fd.png',
                modrinth: 'https://modrinth.com/datapack/otbwg-farmers-delight-bark-cutting-compat',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/oh-the-biomes-weve-gone-farmers-delight-bark'
            },
            {
                name: 'Regions Unexplored - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['biome', 'biomes', 'mechanics', 'utility', 're', 'ru'],
                image: 'data/img/re-fd.png',
                modrinth: 'https://modrinth.com/datapack/regions-unexplored-farmers-delight-bark-cutting-compat',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/regions-unexplored-farmers-delight-compat-forge'
            },
            {
                name: 'Spacing Structures',
                tags: ['structure', 'structures', 'worldgen', 'ss'],
                image: 'data/img/spaces.png',
                modrinth: 'https://modrinth.com/datapack/spacing-structures',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/spacing-structures'
            },
            {
                name: 'Team Abnormals Mods - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['biome', 'biomes', 'mechanics', 'utility', 'ta'],
                image: 'data/img/ta-fd.png',
                modrinth: 'https://modrinth.com/datapack/team-abnormals-mods-farmers-delight-bark-cutting-compat',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/team-abnormals-mods-farmers-delight-bark-cutting'
            },
            {
                name: 'The Abyss II - The Other Side - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['dimension', 'dimensions', 'mechanics', 'utility', 'tatos'],
                image: 'data/img/tatos-fd.png',
                modrinth: 'https://modrinth.com/datapack/the-abyss-ii-the-other-side-farmers-delight-bark-cutting',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/the-abyss-ii-the-other-side-farmers-delight-bark'
            },
            {
                name: 'The Undergarden - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['dimension', 'dimensions', 'mechanics', 'utility', 'tu'],
                image: 'data/img/tu-fd.png',
                modrinth: 'https://modrinth.com/datapack/the-undergarden-farmers-delight-bark-cutting-compat',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/the-undergarden-farmers-delight-bark-cutting'
            },
            {
                name: 'Twilight Forest - Farmer\'s Delight - Bark Cutting Compat',
                tags: ['dimension', 'dimensions', 'mechanics', 'utility', 'tw', 'tf'],
                image: 'data/img/tw-fd.png',
                modrinth: 'https://modrinth.com/datapack/twilight-forest-farmers-delight-bark-cutting-compat',
                curseforge: 'https://www.curseforge.com/minecraft/texture-packs/twilight-forest-farmers-delight-bark-cutting'
            }
        ];
        

    const filterInput = document.getElementById('filterInput');
    const projectResults = document.getElementById('projectResults');
    const errorMessage = document.getElementById('errorMessage');

    const renderProjects = (filteredProjects) => {
        projectResults.innerHTML = '';
        filteredProjects.forEach(project => {
            const projectCard = `
                <div class="col">
                    <div class="card h-100">
                        <img src="${project.image}" class="card-img-top" alt="${project.name}">
                        <div class="card-body">
                            <h5 class="card-title">${project.name}</h5>
                            <button 
                                class="btn btn-light btn-sm" 
                                data-name="${project.name}" 
                                data-modrinth="${project.modrinth}" 
                                data-curseforge="${project.curseforge}"
                            >
                                Visit
                            </button>
                        </div>
                    </div>
                </div>`;
            projectResults.innerHTML += projectCard;
        });

        document.querySelectorAll('.btn[data-name]').forEach(button => {
            button.addEventListener('click', () => {
                const projectName = button.getAttribute('data-name');
                const modrinthLink = button.getAttribute('data-modrinth');
                const curseforgeLink = button.getAttribute('data-curseforge');
                showModal(projectName, modrinthLink, curseforgeLink);
            });
        });
    };
    const filterProjects = (query) => {
        const lowerQuery = query.toLowerCase().trim();
        const filteredProjects = projects.filter(project =>
            project.name.toLowerCase().includes(lowerQuery) ||
            project.tags.some(tag => tag.includes(lowerQuery))
        );

        if (filteredProjects.length > 0) {
            errorMessage.style.display = 'none';
            renderProjects(filteredProjects);
        } else {
            errorMessage.style.display = 'block';
            projectResults.innerHTML = '';
        }
    };

    const showModal = (name, modrinthLink, curseforgeLink) => {
        const modalHTML = `
            <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="projectModalLabel">Which website would you like to use to open ${name}?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Choose your preferred platform to explore this project:</p>
                            <div class="d-flex justify-content-center">
                                <a href="${curseforgeLink}" target="_blank">
                                    <img src="data/img/curseforge.png" alt="CurseForge" style="width: 20px;">
                                </a>
                                <a href="${modrinthLink}" target="_blank">
                                    <img src="data/img/modrinth.png" alt="Modrinth" style="width: 20px;">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalHTML;
        document.body.appendChild(modalContainer);

        const modalElement = new bootstrap.Modal(modalContainer.querySelector('#projectModal'));
        modalElement.show();

        modalContainer.querySelector('.btn-close').addEventListener('click', () => {
            modalContainer.remove();
        });
    };

    filterInput.addEventListener('input', () => {
        filterProjects(filterInput.value);
    });

    renderProjects(projects);
});