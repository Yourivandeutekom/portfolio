window.addEventListener('load', () => {

    // Navigation
    const navigation = document.getElementById('navigation');

    window.onscroll = () => {
        scrollFunction();
    }

    const scrollFunction = () => {
        if(document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
            navigation.classList.add('scroll');
        } else {
            navigation.classList.remove('scroll');
        }
    }

    // Portfolio items
    const projects = document.getElementById('projects-container');
    const projectsCloseBtn = document.getElementById('projects-close-btn');
    const projectsOpacityLayer = document.getElementById('projects-opacity-layer');
    const projectsItem = document.querySelectorAll('#projects li');
    let currentProject;
    
    const projectsHandler = index => {
        showProject(index);
    };

    const closeHandler = () => {
        hideProject();
    };

    const showProject = (index) => {

        let projectEntryClass = '.project-entry-' + (index + 1);
        currentProject = document.querySelector(projectEntryClass);

        visibility([projects, projectsCloseBtn, projectsOpacityLayer]);
        currentProject.style.display = 'flex';
    };

    const visibility = (array) => {
        array.forEach(variable => {
            variable.style.visibility = 'visible';
            variable.classList.add('activated');
        });
    };

    const hideProject = () => {

        hidden([projectsCloseBtn, projects, projectsOpacityLayer]);
        currentProject.style.display = 'none';

        currentProject = undefined;
    };

    const hidden = (array) => {
        array.forEach(variable => {
            variable.classList.remove('activated');

            setTimeout(() => {
                variable.style.visibility = 'hidden';
            }, 300);
        });
    };

    projectsItem.forEach((event, index) => {
        event.addEventListener('click', () => {
            projectsHandler(index);
        });
    });

    projectsCloseBtn.addEventListener('click', closeHandler);
    projectsOpacityLayer.addEventListener('click', closeHandler);
});