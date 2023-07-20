import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="flex gap-24 py-12">
        <div className="bg-white w-full">
          <div className="w-58 py-10 px-12">
            <span className="text-4xl font-bold">
              Ecole 241 , Plus qu’une <br></br>formation un<b> métier</b>
            </span>
            <p className="text-xs pt-6 ">
              Ecole 241 forme aux métiers du numérique dans tout le Gabon .
              ​Rejoignez un réseau<br></br>
              de plus de 25 000 apprenants et apprenantes. ​Vous souhaitez vous
              aussi intégrer un<br></br>
              parcours de formation Simplon ou être conseillé-e dans votre
              parcours ?
            </p>
          </div>
          <button className="mx-12 rounded-s-none h-10 w-44 bg-red-600  ">
            <span className="  text-white ">Contactez-nous</span>
          </button>
        </div>
        <div className="flex gap-6 w-full pl-36 py-2 ">
          <div className="py-2 bg-opacity-70 ">
            <img
              src="téléchargement.jpg"
              className="h-64 w-48 pb-4  bg-black bg-opacity-25 "
            />
          </div>
          <div className="grid grid-col grid-row">
            <div className="">
              <img src="téléchargement.jpg" className=" w-50 h-32" />
            </div>
            <div className="">
              <img src="téléchargement.jpg" className="w-50 h-32" />
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full bg-black ">
        <div className="p-12">
          <h1 className=" text-4xl font-bold  text-white">Notre programme</h1>
          <span className="text-xs  text-white">
            Ecole 241, c’est une formation en informatique d’excellence pour
            tous et toutes. Au programme de cette école différente et<br></br>
            innovante : une approche par projets pour progresser et développer
            des compétences techniques et humaines<br></br>
            recherchées sur le marché du travail.
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex px-12">
            <div className="">
              <img src="Capa_1 (1) 1.png" className="" />
            </div>
            <div className="w-32 h-12 pt-6">
              <p className="text-xs  text-white">PAS DE COURS PAS DE PROFS.</p>
            </div>
            <div className=""></div>
          </div>
          <div className="flex">
            <div className="">
              <img src="Calque_1 1.png" className="" />
            </div>
            <div className="w-32 h-12  pt-6">
              <p className="text-xs  text-white">UNE PÉDAGOGIE PAR PROJETS</p>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <img src="Layer_3 1 (1).png" className="" />
            </div>
            <div className="w-32 h-12  pt-6">
              <p className="text-xs  text-white">
                UN APPRENTISSAGE PEER TO PEER
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <img src="Calque_1 (1) 1.png" className="" />
            </div>
            <div className="w-32 h-12  pt-6">
              <p className="text-xs text-white">Apprendre en s’ammusant</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12  flex justify-around">
        <div className="">
          <h1 className=" text-4xl font-bold py-6">Nos valeurs</h1>
          <span className="text-xs my-12">
            La position de Ecole 241 est une première et unique au Gabon , elle
            repose sur des<br></br>
            valeurs fortes pour une insertion professionnelle durable sur le
            marché de<br></br>
            l’emploi.<br></br>
            Pourquoi Ecole 241 est elle si différente ?
          </span>

          <div className="py-8">
            <button className="mx-2 rounded-s-none h-10 w-44 bg-red-600 ">
              <span className="  text-white ">Unique au Gabon</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="flex">
            <div className="">
              <img src="Capa_1 (2) 1.png" className="" />
            </div>
            <div className="w-32 h-12  pt-6">
              <p className="text-xs ">GRATUITÉ</p>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <img src="Layer_1 1.png" className="" />
            </div>
            <div className="w-32 h-12  pt-6">
              <p className="text-xs ">POUR TOUS,POUR TOUTES</p>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <img src="Layer_1 (1) 1.png" className="" />
            </div>
            <div className="w-32 h-12  pt-6">
              <p className="text-xs ">AUCUN DIPLÔME REQUIS</p>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <img src="Calque_1 (2) 1.png" className="" />
            </div>
            <div className="w-32 h-12  pt-6">
              <p className="text-xs ">
                PAS BESOIN DE SAVOIR DÉJÀ CODER OU D AIMER LES MATHS
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white w-full">
        <div className="w-50 h-32 px-24">
          <h1 className="text-4xl font-bold ">Nos cohortes</h1>
          <span className="text-xs ">Se former à un métier</span>
        </div>

        <div class=" w-full  bg-white flex justify-between p-8 ">
          <div class="w-[550px] bg-gray-300 px-8">
            <div class="flex justify-between p-12  ">
              <span className=" text-2xl font-bold">
                Développeur Web et Web<br></br> Mobile{" "}
              </span>
              <img src="ic_outline-code-off.png" className="" />
            </div>
            <div className="px-12 grid gap-6">
              <span className="text-xs">
                Le développeur web mobile a pour mission de créer et de<br></br>
                mettre en œuvre des applications mobiles exploitables sur
                <br></br>
                smartphone et tablette.
              </span>
              <span className="text-xs">
                Dans le cadre de son travail, il code et élabore des logiciels
                pour<br></br>
                traiter les données. Il est aussi chargé de construire des sites
                <br></br>
                web, des applications en ligne, des outils interactifs et autres
                <br></br>
                produits accomplis selon les demandes du client.
              </span>
              <div className="py-8">
                <button className=" rounded-s-none h-10 w-44 bg-red-600 ">
                  <span className="  text-white ">En savoir plus</span>
                </button>
              </div>
            </div>
          </div>

          <div class="w-[550px] bg-gray-300 px-8  mx-8">
            <div class="flex justify-between p-12  ">
              <span className=" text-2xl font-bold">Référent Digital </span>
              <img src="mdi_web-clock.png" className="" />
            </div>
            <div className="px-12 grid gap-6">
              <span className="text-xs">
                Le développeur web mobile a pour tâche de concevoir et de créer
                <br></br>
                des applications mobiles compatibles avec les smartphones et
                <br></br>
                tablettes. Il codifie et programme des programmes afin de gérer
                les<br></br>
                données.
              </span>
              <span className="text-xs">
                En outre, il est responsable de construire des sites web, des
                <br></br>
                applications en ligne, des outils interactifs et d’autres
                produits<br></br>
                achevés selon les besoins spécifiques de la clientèle..
              </span>
              <div className="py-8">
                <button className=" rounded-s-none h-10 w-44 bg-red-600 ">
                  <span className="  text-white ">En savoir plus</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 w-full py-12 ">
        <div className="p-8 ">
          <h1 className="text-2xl font-bold">Status des promos formations</h1>
          <span className="text-xs">
            Nous vous listons les promotions en cours et celle avenirs
          </span>
        </div>
        <div className="w-50 h-44 bg-white p-8 flex justify-around ">
          <div className=" border bg-white">
            <p className="text-xs font-bold  m-2">
              Développement web et web mobile{" "}
            </p>
            <p className="text-xs m-2">Promo 5 2023 - 2024 </p>
            <div className="flex gap-6">
              <p className="text-xs ">Ville : Libreville</p>
              <a href=":#">
                <p className="text-xs ">
                  PROMO EN COURS
                  <img src="libre.png" className="w-4 h-4  " />
                </p>
              </a>
            </div>
          </div>
          <div className=" border bg-white">
            <p className="text-xs font-bold  m-2">
              Développement web et web mobile{" "}
            </p>
            <p className="text-xs m-2">Promo 5 2023 - 2024 </p>
            <div className="flex gap-6">
              <p className="text-xs ">Ville : Libreville</p>
              <a href=":#">
                <p className="text-xs ">
                  PROMO EN COURS
                  <img src="libre.png" className="w-4 h-4  " />
                </p>
              </a>
            </div>
          </div>
          <div className=" border bg-white">
            <p className="text-xs font-bold  m-2">
              Développement web et web mobile{" "}
            </p>
            <p className="text-xs m-2">Promo 5 2023 - 2024 </p>
            <div className="flex gap-6">
              <p className="text-xs ">Ville : Libreville</p>
              <a href=":#">
                <p className="text-xs ">
                  PROMO EN COURS
                  <img src="libre.png" className="w-4 h-4  " />
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="p-12 ">
        <h1 className="text-2xl font-bold py-2 ">Nous sommes à</h1>
        <p className="text-xs py-2 ">
          École 241 possède à nos deux campus notamment sur les villes de
          Libreville et Port<br></br>
          Gentil, cette année nous nous déployons du côté de la ville de Moanda.
        </p>

        <div className="flex justify-evenly py-2">
          <div className="w-96 h-80 overflow-hidden relative bg-cover bg-no-repeat  ">
            <img
              src="images.jpg"
              className="w-full h-full absolute inset-0 object-cover bg-black/50 opacity-50 "
            />
            <div className="relative ">
              <p class="text-xs text-white pt-2 text-black">
                120 ETUDIANTS FORMES A CE JOUR
              </p>
              <p class=" text-3xl font-bold text-white  pt-12 text-black ">
                PORT GENTIL
              </p>
              <p class="text-xs text-white pt-2 text-black">
                qui voluptatibus natus qui repudiandae pariatur et quisquam
                aperiam qui dolorem sequi aut error omnis.
              </p>
            </div>
          </div>
          <div className="grid grid-col grid-row gap-2">
            <div class="w-96 h-40 overflow-hidden relative bg-cover bg-no-repeat ">
              <img
                src="M0ANDA.jpg"
                className="w-full h-full absolute inset-0 object-cover bg-black bg-opacity-50 "
              />
              <div className="relative">
                <p class="text-xs text-white pt-2 text-black ">
                  120 ETUDIANTS FORMES A CE JOUR
                </p>
                <p class=" text-3xl font-bold text-white  pt-12 text-black ">
                  PORT GENTIL
                </p>
                <p class="text-xs text-white pt-2 text-black">
                  qui voluptatibus natus qui repudiandae pariatur et quisquam
                  aperiam qui dolorem sequi aut error omnis.
                </p>
              </div>
            </div>

            <div className="w-96 h-40 mb-4  bg-cover overflow-hidden relative bg-no-repeat ">
              <img
                src="M0ANDA.jpg"
                className="w-full h-full absolute inset-0 object-cover bg-black/50  opacity-50"
              />
              <div className="relative">
                <p class="text-xs text-white pt-2 text-black">
                  120 ETUDIANTS FORMES A CE JOUR
                </p>
                <p class=" text-3xl font-bold text-white pt-12 text-black">
                  MOANDA
                </p>
                <p class="text-xs text-white pt-2 text-black">
                  qui voluptatibus natus qui repudiandae pariatur et quisquam
                  aperiam qui dolorem sequi aut error omnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-10 bg-gray-100">
            <p className="text-3xl font-bold py-8">Témoignage des alumnis</p>
        <div className="flex justify-around gap-4">
          <div className="w-full bg-white w-60 h-60 p-6">
                <p className="text-xs">Eum veritatis excepturi sed blanditiis
                              consequatur quo officia cumque quo
                              accusantium voluptate. Qui eligendi
                              quaerat et natus voluptatum cum natus
                              velit! Ut accusamus galisum aut dolorum
                              eaque et ullam odio.</p>
             <div className="flex gap-4 py-4">
                <img src="Salon 8.jpg" className="w-10 h-10 rounded-full"/>
                <div className="p-2">
                <p className="text-xs font-bold">Sabile</p>
                <p className="text-xs font-bold text-red-600">Freelancer developpeur web</p>
                </div>
             </div>
          </div>
         <div className="w-full bg-white w-60 h-60 p-6">
          <p className="text-xs">Eum veritatis excepturi sed blanditiis
                              consequatur quo officia cumque quo
                              accusantium voluptate. Qui eligendi
                              quaerat et natus voluptatum cum natus
                              velit! Ut accusamus galisum aut dolorum
                              eaque et ullam odio.</p>
             <div className="flex gap-4 py-4">
                <img src="Salon 8.jpg" className="w-10 h-10 rounded-full"/>
                <div className="p-2">
                     <p className="text-xs font-bold">Sabile</p>
                     <p className="text-xs font-bold text-red-600">Freelancer developpeur web</p>
                  </div>
             </div>
          </div>
          <div className="w-full bg-white w-60 h-60 p-6">
             <p className="text-xs">Eum veritatis excepturi sed blanditiis
                              consequatur quo officia cumque quo
                              accusantium voluptate. Qui eligendi
                              quaerat et natus voluptatum cum natus
                              velit! Ut accusamus galisum aut dolorum
                              eaque et ullam odio.</p>
             <div className="flex gap-4 py-4">
                <img src="Salon 8.jpg" className="w-10 h-10 rounded-full"/>
                 <div className="p-2">
                  <p className="text-xs font-bold">Sabile</p>
                  <p className="text-xs font-bold text-red-600">Freelancer developpeur web</p>
                </div>
             </div>
          </div>
        </div>
      </section>
      <section className="flex justify-evenly p-8" >
        <div className="w-60">
          <p className="text-3xl font-bold">Les compagnies
                          qui nous
                          fonts confiance</p>
            <p className="py-6">Vous souhaitez devenir partenaire de l école cliquer
                            sur le bouton ci-dessous</p>              
          <button className="bg-red-600 text-white text-xs text-center  py-6 w-32 h-10 ">
            En savoir plus 
          </button>
        </div>
        <div className="w-96 h-60 grid grid-cols-2 grid-rows-3">
        <img class=" h-20 w-24   " src="cnamgs.png"/>
			<img class=" h-20 w-24  " src="LOlo.png"/>
			<img class=" h-20 w-24  " src="aramet.png"/>
			<img class="h-20 w-24   " src="comilog.png"/>
			<img class=" h-20 w-24  " src="pnpen.jpg"/>
			<img class=" h-20 w-24  " src="simplon.jpg"/>
      </div>
    </section>
    <section className="w-full bg-white py-8 flex items-center justify-center ">
      <div className="w-92 h-92 bg-gray-200"></div>
    </section>
    
 </main>
  );
}
