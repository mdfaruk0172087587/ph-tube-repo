// dai na mik btn
const buttonCategories = async () => {
  const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
  const data = await response.json();
  buttonsCategories(data.categories)
}
buttonCategories();
// dai na mik btn function
const buttonsCategories = (button) => {
  const btnContainer = document.getElementById('btn-container');
  button.forEach(btn => {
    // console.log(btn)
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
    <button onclick="buttonVideos(${btn.category_id})" class="btn btn-sm hover:bg-red-600 hover:text-white ">${btn.category}</button>
    `;
    btnContainer.appendChild(btnDiv);
  })
}
// Videos section lade
const videosLade = async () => {
  const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
  const data = await response.json();
  videosLadeFunction(data.videos)
}

// video  lade kor e  display te
const videosLadeFunction = (videos) => {
  const cardSectionContainer = document.getElementById('card-section-container');
    cardSectionContainer.innerHTML = "";
  videos.forEach(video => {
    // console.log(video)
    
    const videoDiv = document.createElement("div");
    videoDiv.innerHTML = `
   <div class="card bg-base-100  shadow-sm">
            <figure class="relative">
              <img class="w-full h-[150px] object-cover" 
                src="${video.thumbnail}" />
                <span class="text-sm text-white px-2 bg-black rounded absolute bottom-2 right-2">3hrs 56 min ago</span>
            </figure>
            <div class=" flex gap-2 px-0 py-5">
                <!-- avatar  -->
              <div>
                <div class="avatar ">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                      <img  src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>
              <!-- text  -->
               <div>
                <h1 class="text-xl font-semibold">${video.title}</h1>
                <p class="text-sm text-gray-400 flex gap-2">${video.authors[0].profile_name} ${video.authors[0].verified == true ? `<img class="w-5 h-5 bg-green-400 rounded-full" src="https://img.icons8.com/?size=32&id=6xO3fnY41hu2&format=png" alt="">` : ``}</p>
                <p class="text-sm text-gray-400">${video.others.views} views</p>
               </div>
              
            </div>
            <button class="btn btn-block">View Details</button>
          </div>
    `;
    cardSectionContainer.appendChild(videoDiv)
  })
}

// je button a click hob e oi video 
const buttonVideos = async (id) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
  const data = await response.json();
  videosLadeFunction(data.category)
}
