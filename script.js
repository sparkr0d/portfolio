// Show home page
document.getElementById('homeToggle').addEventListener('click', function() {
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('gameProjects').classList.add('hidden');
    document.getElementById('websiteProjects').classList.add('hidden');
});

// Show game projects
document.getElementById('gameToggle').addEventListener('click', function() {
    document.getElementById('gameProjects').classList.remove('hidden');
    document.getElementById('websiteProjects').classList.add('hidden');
    document.getElementById('homePage').classList.add('hidden');
});

// Show website projects
document.getElementById('websiteToggle').addEventListener('click', function() {
    document.getElementById('websiteProjects').classList.remove('hidden');
    document.getElementById('gameProjects').classList.add('hidden');
    document.getElementById('homePage').classList.add('hidden');
});
