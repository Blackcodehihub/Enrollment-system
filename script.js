// --- Password Show/Hide Toggle ---

const passwordToggles = document.querySelectorAll('.toggle-password');

passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const passwordInput = toggle.previousElementSibling;
        
        // Toggle the type attribute
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle the icon
        toggle.classList.toggle('fa-eye');
        toggle.classList.toggle('fa-eye-slash');
    });
});

// --- Profile Page Tab Switching ---

document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.profile-sidebar .sidebar-link');
    const contentPanels = document.querySelectorAll('.profile-panels .content-panel');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Get the target panel's ID from the data-target attribute
            const targetId = link.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);

            // Remove active class from all links and panels
            sidebarLinks.forEach(s_link => s_link.classList.remove('active'));
            contentPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to the clicked link and its corresponding panel
            link.classList.add('active');
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});