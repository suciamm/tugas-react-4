import Sing from './components/Sing'


const App = ()=>{

  const Singer = [
    {
      id: 1,
      namaa: 'Zvke',
      gambarr: 'https://i.scdn.co/image/ab6761610000e5eb8f15a8916c7388aa8c5a896b',
      musikk: 'golden hour',
      asall: "Amerika"
    },
    {
      id: 2,
      namaa: 'Adele',
      gambarr: 'https://cdn.britannica.com/98/163898-050-B2E2A704/British-sensation-Adele.jpg',
      musikk: 'when we were young',
      asall: 'Inggris'
    },
    {
      id:3,
      namaa: 'Billie Eilish',
      gambarr: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
      musikk: 'happier than ever',
      asall: 'Amerika'
    },
    
  ]

  return(
    <>

      {
        
        Singer.map((singer) => {
          return(
            <Sing key={singer.id} namaa={singer.namaa} gambarr={singer.gambarr} musikk={singer.musikk} asall={singer.asall}/>
          )
            //<Sing key={value.id} nama={value.nama} gambar={value.gambar} musik={value.musik} asal={value.asal}/>
        })
      }
  
    </>
  )
}
export default App
