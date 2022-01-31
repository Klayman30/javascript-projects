// sidebar is hidden by default in css, the class show-sidebar is only added to the class list of sidebar if there is a click event

const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function() {
    /* if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
    } else {
        sidebar.classList.add('show-sidebar');
    } */
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')
});

