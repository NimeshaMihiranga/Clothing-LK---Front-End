document.getElementById('menu-btn').addEventListener('click', function() {
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.sidebar');
const icon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    
    if (sidebar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});