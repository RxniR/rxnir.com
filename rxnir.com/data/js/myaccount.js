function createProjectChoiceModal() {
    const cssRules = `
        .btn img {
            display: inline-block;
            vertical-align: middle;
            width: 20px;
            height: 20px;
        }
    `;
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(cssRules));

    document.head.appendChild(style);
    const modalHTML = `
    <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="projectModalLabel">Where would you like to view my projects?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Choose your preferred platform to explore my latest projects:</p>
                    <div class="d-flex justify-content-center">
                    <a href="https://www.curseforge.com/members/rxnir/projects" target="_blank" class="btn btn-primary mx-2">
                    <img src="data/img/curseforge.png" alt="CurseForge" style="width: 20px; height: 20px;">
                    </a>
                    <a href="https://modrinth.com/user/RxniR" target="_blank" class="btn btn-primary mx-2">
                    <img src="data/img/modrinth.png" alt="Modrinth" style="width: 20px; height: 20px;">
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
}
document.addEventListener('DOMContentLoaded', function() {
    const downloadsLink = document.querySelector('a[href="myaccounts.html"]');

    if (downloadsLink) {
        downloadsLink.addEventListener('click', function(event) {
            event.preventDefault();
            createProjectChoiceModal();
        });
    }
});
