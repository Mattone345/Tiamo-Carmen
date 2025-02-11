document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            cursor.style.width = '60px'; // Ingrandisci il cursore
            cursor.style.height = '60px';
        });

        img.addEventListener('mouseleave', () => {
            cursor.style.width = '40px'; // Torna alla dimensione originale
            cursor.style.height = '40px';
        });
    });
});