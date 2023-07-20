import Image from 'next/image'

export default function Contacts(){
async function handleSubmit(event ){
  event.preventDefault();

  const data= {
    name:String(event.target.name.value),
    prenom:String(event.target.prenom.value),
    genre:String(event.target.genre.value),
    email:String(event.target.email.value),
    message:String(event.target.message.value),

  };
  console.log(data);
}



  return(
    <div className='mx-auto max-w-2xl px-4 my-10 '>
        <h1 className='font-medium items-center text-center'>Contacts</h1>
        <form>
          <div className='w-full flex flex-col '>
            <label htmlFor="name">Name</label>
            <input className='font-bold w-full bg-gray-100 border border-black p-4 rounded-lg' type="text"  autoComplete="off" id="Name"></input>
          </div>
          <div className=' w-full flex flex-col '>
            <labael htmlFor="Name">Prenom</labael>
            <input className='font-bold w-full bg-gray-100 border border-black  p-4 rounded-lg' type="text"  autoComplete="off" id="Prenom"></input>
          </div>
          <div className=' w-full flex flex-col'>
            <label htmlFor='name'>Genre</label>
            <input className='font-bold w-full bg-gray-100 border border-black  p-4 rounded-lg' type="text" autoComplete="off" id="Genre"></input>
          </div>
          <div className=' w-full flex flex-col '>
            <label htmlFor='email'>Email</label>
            <input className='font-bold bg-gray-100 border border-black w-full  p-4 rounded-lg' type="text" autoComplete='off' id="email"></input>
          </div>
          <div className='pt-4 rounded-lg'>
            <textarea rows={4} placeholder='How can we help you' className='w-full bg-gray-100 border border-black  rounded-lg '></textarea>
          </div>
          <button type="submit" className='bg-black text-white font-medium p-4 w-32 h-10 rounded-lg items-center text-center'>send </button>
        </form>
    </div> 


  )
}

    