//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


function downloadimage(images) {
	const promise = images.map((image)=>{
		return new Promise((resolve, reject)=>{
			let img = new Image();
			img.src = image.url;
			img.onload = ()=>{
				resolve(img);
			};
			img.onerror = ()=>{
				reject(`Failed to load image's URL: ${image.url}`)
			};
		});
	});

	Promise.all(promise)
	.then((imgs) =>{
		output.innerHTML = null;
		imgs.forEach((img)=>{
			output.appendChild(img);
		});
	})
	.catch((error)=>{
		console.log(error);
	});
}
btn.addEventListener('click', ()=>{
	downloadimage(images);
});
