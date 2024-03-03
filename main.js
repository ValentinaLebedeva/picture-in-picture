const videoElement = document.querySelector("#video");
const button = document.querySelector(".button");

// prompt to select media stream, pass to video element, play it
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //catch error
        console.log("check the code- error");
    }
};

button.addEventListener("click", async () => {
    // disable button
    button.disabled = true;

    // start picture in picture
    await videoElement.requestPictureInPicture();

    // reset button
    button.disabled = false;
});

//on load
selectMediaStream();