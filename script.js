// Show game projects
document.getElementById('gameToggle').addEventListener('click', function() {
    document.getElementById('gameProjects').classList.remove('hidden');
    document.getElementById('websiteProjects').classList.add('hidden');
});

// Show website projects
document.getElementById('websiteToggle').addEventListener('click', function() {
    document.getElementById('websiteProjects').classList.remove('hidden');
    document.getElementById('gameProjects').classList.add('hidden');
});

