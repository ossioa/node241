export default function Blog(){
    return(
        <main className="p-6 sm:p-10 space-y-6">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">Articles de blogs</h1>
            <h2 class="text-gray-600 ml-0.5">description de themes</h2>
          </div>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Manage articles
            </button>
            <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
             Créer un nouvel Article
            </button>
          </div>
        </div>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="">
              <p className="pb-4 text-2xl font-bold text-red-600">L'arrivée du président de la républic à 241</p>
              <img src="images (7).jpg"/>
              <span className="">Ali Bongo </span>
              <p className="text-2xl font-bold">président</p>
             <div className="pt-4">
              <span className=" "> L'arrivé du president de la république à Ogooué Lab's , l'administration de l'école et les apprenants
                 font les doléances pour l'amélioration des conditions apprentissage </span>
             </div>
             <div className="round-full">
                <a href="" className="pt-4"><img className="w-8 h-8  " src="amour.png"/></a>
                 <a href="" className=" rounded" ><img className="w-8 h-8" src="commentaire.png" alt=""/></a>
              </div>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="">
              <p className="pb-4 text-2xl font-bold text-red-600"> La 5em promo sponsorisée par CNAMGS</p>
              <img src="images.png"/>
              <span className="">CNAMGS</span>
              <p className="text-2xl font-bold">ONG</p>
             <div className="pt-4">
              <span className=" ">Plus de 30 apprenants  à l'école 241 bénéficie de la grace de l'CNAMGS , les filles mères 
                        et les jeunes hommes de moins de 30ans tous admisibles à passer les test à l'école  . </span>
             </div>
             <div class="round-full">
                <a href="" className="pt-4"><img class="w-8 h-8  " src="amour.png"/></a>
                 <a href="" className=" rounded" ><img class="w-8 h-8" src="commentaire.png" alt=""/></a>
              </div>
            </div>
          </div>
         <div  className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="">
              <p className="pb-4 text-2xl font-bold text-red-600"> La lutte contre le chommage  </p>
              <img src="téléchargement (6).jpg"/>
              <span className="">Etienne lambert</span>
              <p className="text-2xl font-bold">Coach</p>
             <div className="pt-4">
              <span className=" ">Tout le monde peut changer sa vie, meme ceux qui n'y espéraient plus,
                               le monde professionnel est affaire de tous. </span>
             </div>
             <div className="round-full">
                <a href="" className="pt-4"><img class="w-8 h-8  " src="amour.png"/></a>
                 <a href="" className=" rounded" ><img class="w-8 h-8" src="commentaire.png" alt=""/></a>
              </div>
            </div>
            </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="">
              <p className="pb-4 text-2xl font-bold text-red-600"> La phase de la prairie  </p>
              <img src="355370393_659518992858308_3703957320030029466_n.jpg"/>
              <span className="">Ecole 241</span>
              <p className="text-2xl font-bold">Coach BOUSSAMBA</p>
             <div className="pt-4">
              <span className=" ">Nous sommes ravis de partager avec vous la phase cruciale de notre programme de formation : La Prairie 💪🏼,
                         qui a débuté le 5 juin 2023 et se terminera dans quelques semaines </span>
             </div>
             <div className="round-full">
                <a href="" className="pt-4"><img class="w-8 h-8  " src="amour.png"/></a>
                 <a href="" className=" rounded" ><img class="w-8 h-8" src="commentaire.png" alt=""/></a>
              </div>
            </div>
          </div>
          
      </section>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
         <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg w-full">
            <div>
              <div className="w-screen h-24 py-4">
                    <span className="text-3xl font-bold text-red-600">La première Promo</span>
                </div >
                <img src="ecole241-1.jpg" alt=""/>
                <span class=" ">L'OIF offre aux jeunes Gabonais
                 la chance de transformer leurs vie de d'aspirer à tout leurs rèves. </span>
            </div>
            <div className="round-full">
              <a href="" className="pt-4"><img className="w-8 h-8  " src="amour.png"/></a>
               <a href="" className=" rounded" ><img className="w-8 h-8" src="commentaire.png" alt=""/></a>
            </div>
          </div>
          <a href="" class=""> <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <span className="block text-4xl font-bold text-red-600" >45</span>
              <span className="block text-red text-xl font-medium">La SECONDE PROMO</span>
            </div>
          </div></a>
          <a href="" class=""><div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold text-red-600">24/24h</span>
              <span className="block text-gray-500 text-xl font-bold">L'école 241 est ouvert tout les jours</span>
            </div>
          </div></a>
          <div className="row-span-3 bg-white shadow rounded-lg">
            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
              <span className="text-2xl font-bold text-red-600">Les Alumini de 241</span>
              <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                Descending
                <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              
            </div>
            <div className="overflow-y-auto">
              <ul className="p-6 space-y-6">
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="admin.jpg" alt="Annette Watson profile picture"/>
                  </div>
                  <span className="text-gray-600">Pauline Bekale</span>
                  <span className="ml-auto font-semibold">24 ans</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="admin.jpg" alt="Calvin Steward profile picture"/>
                  </div>
                  <span className="text-gray-600">Calvin Steward</span>
                  <span className="ml-auto font-semibold">28 ans </span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="admin.jpg" alt="Ralph Richards profile picture"/>
                  </div>
                  <span className="text-gray-600">Ralph Richards</span>
                  <span className="ml-auto font-semibold">29 ans</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="admin.jpg" alt="Bernard Murphy profile picture"/>
                  </div>
                  <span className="text-gray-600">Bernard Murphy</span>
                  <span className="ml-auto font-semibold">30 ans</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="admin.jpg" alt="Arlene Robertson profile picture"/>
                  </div>
                  <span className="text-gray-600">Arlene Robertson</span>
                  <span className="ml-auto font-semibold">24 ans</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="admin.jpg" alt="Jane Lane profile picture"/>
                  </div>
                  <span className="text-gray-600">Jane Lane</span>
                  <span className="ml-auto font-semibold">23 ans </span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="admin.jpg" alt="Pat Mckinney profile picture"/>
                  </div>
                  <span className="text-gray-600">Pat Mckinney</span>
                  <span className="ml-auto font-semibold">23 ans</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="admin.jpg" alt="Norman Walters profile picture"/>
                  </div>
                  <span className="text-gray-600">Norman Walters</span>
                  <span className="ml-auto font-semibold">22 ans</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
            <div className=" text-2xl text-red-600 py-5 font-semibold border-b border-gray-100">NTCHINA </div>
            <div className="p-4 flex-grow">
            <img src="téléchargement (7).jpg" alt=""/>
            <span className="">Alvine YENO</span>
            <div className="">
            <span className="">Je suis webdesigner, developeuse front-end et une fine stratege marketing 
              digital! L'application NTCHINA est une application pour aider la situation au Gabon en matière
               de résolution des problèmes d'approvisionnement en poche de sang dans certaines banques comme le Centre national de transfusion sanguine (CNTS), souvent confrontées à une pénurie de donneurs2</span>
          </div>
          <div className="round-full py-8">
            <a href="" className="pt-4"><img class="w-8 h-8  " src="amour.png"/></a>
             <a href="" className=" rounded" ><img class="w-8 h-8" src="commentaire.png" alt=""/></a>
          </div>
            </div>
          </div>
        </section>
        <section className="text-right font-semibold text-gray-500">
          <a href="#" className="text-purple-600 hover:underline">Recreated on Codepen</a> with <a href="https://tailwindcss.com/" class="text-teal-400 hover:underline">Tailwind CSS</a> by Azri Kahar, <a href="https://dribbble.com/shots/10711741-Free-UI-Kit-for-Figma-Online-Courses-Dashboard" class="text-purple-600 hover:underline">original design</a> made by Chili Labs
        </section>
      </main>
    )
}





