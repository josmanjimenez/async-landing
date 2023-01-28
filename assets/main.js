// const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

// const content = null || document.getElementById('content');

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
//   }
// };

// async function fetchData1(urlApi) {
//   const response = await fetch(urlApi, options);
//   const data = await response.json();
//   return data;
// }

// (async () => {
//   try {
//     const videos = await fetchData(API);
//     let view = `
//     ${videos.items.map(video => `
//       <div class="group relative">
//         <div
//           class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//           <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
//         </div>
//         <div class="mt-4 flex justify-between">
//           <h3 class="text-sm text-gray-700">
//             <span aria-hidden="true" class="absolute inset-0"></span>
//             ${video.snippet.title}
//           </h3>
//         </div>
//       </div>
//     `).slice(0,4).join('')}

//     `;
//   } catch {

//   }
// })();

const content1 =null|| document.getElementById('content');
const url='https://youtube-v31.p.rapidapi.com/search?channelId=UCmS75G-98QihSusY7NfCZtw&part=snippet%2Cid&order=date&maxResults=8';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '198034701emsh5d73707710c3962p1dace8jsn70e1b0496bdc',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(url){
 const rta = await fetch(url, options);
 const data=rta.json();
 return data
}

(async function(){
try{
  const data= await fetchData(url);
  let view=`${data.items.map(data=>`
  <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${data.snippet.thumbnails.high.url}" alt="${data.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-400">
      <a href="https://www.youtube.com/watch?v=${data.id.videoId}" target="_blank" class="w-full"> <span aria-hidden="true" class="absolute inset-0"></span></a>
        ${data.snippet.title}
      </h3>
    </div>
  </div>
`).join("")};
`;

content1.innerHTML=view;
}
catch (error){
   console.log(error)
  }

})();





{/* <img src="${data.snippet.thumbnails.high.url}" alt="${data.snippet.description}" class="w-full"></img> */}