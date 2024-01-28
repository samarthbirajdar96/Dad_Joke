const button=document.querySelector('.btn');
const Joke=document.querySelector('.joke');

const option={
   method: 'GET',
headers: { 'X-Api-Key': 'e2JY5w3i2kRvyeTAiALYVg==4f2xWjGeB7uP9SVK'},

}


const url='https://api.api-ninjas.com/v1/dadjokes?limit=1';


//Doing with Promise//

// const apicall=(url,opt)=>{

//     Joke.innerText="Updating...."
//     button.innerText="Loading..."
   
//     fetch(url,opt).then((response)=>{
//         const data=response.json();
//       return data;
//     })
//      .then((data)=>{
//        const jokeTorender=data[0]['joke'];
//         console.log(jokeTorender);
      
//         Joke.innerText= jokeTorender;
//         button.innerText="TELL ME A JOKE";
    
//      })
//      .catch((err)=>{
//         console.log("error");
//      })
// }

//Doing with Async //


const Asynccall = async(url,option)=>{

try{

    Joke.innerText="Updating...."
    button.innerText="Loading..."
      
       const response=await fetch(url,option);
         const data=await response.json();

         jokeTorender=data[0]['joke'];

         Joke.innerText= jokeTorender;
         button.innerText="TELL ME A JOKE";
         
    }catch(err){
        console.log(err);
    }
}





//call function //

button.addEventListener('click',()=>{
    //apicall(url,option);

    Asynccall(url,option)
})

 