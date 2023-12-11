document.addEventListener("DOMContentLoaded", function () {
    // Photo zoom effect
    const photos = document.querySelectorAll(".photo");

    photos.forEach((photo, index) => {
        photo.addEventListener("mouseover", function () {
            photo.style.transform = "scale(1.1)";
            photo.style.transition = "transform 0.3s";
        });

        photo.addEventListener("mouseout", function () {
            photo.style.transform = "scale(1)";
        });

        // Add click event to toggle larger view
        photo.addEventListener("click", function () {
            // Perform action when the photo is clicked
            // You can modify this part based on your requirement
            alert("Clicked on Photo " + (index + 1));
        });
    });
});
