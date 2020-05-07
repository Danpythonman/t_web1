/** Gets the background image from an image of the day api */

async function loadImage()
{
    let api_response = await fetch("https://api.nasa.gov/planetary/apod?api_key=CwwLr9mGQQqVuWQ2io2iB0MmKsprKH37ITgAMgcl");
    let api_data = await api_response.json();

    current_image = api_data.url;
    console.log(current_image);
    document.body.style.backgroundImage = "url(" + current_image + ")";
}
