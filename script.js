

// // let promise = new Promise((resolve,reject)=>
// // {

// //     console.log("I`m a promise...");
// //     // resolve("Suceed");
// //     reject("Some error occured");

// // }

// // );
 

// function getdata(data,getnextData)
// {
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>
// {
//     console.log("data =",data);
//     // resolve("sucess");
//     reject("REjected,")
//     if (getnextData)
//     {
//         getnextData();

//     }
// },5000);

// });

// }



// let promise = getdata(1);
// promise.then(()=>{
//    console.log("SUceed")
//       });
// promise.catch((err)=>
//  {
//       console.log("Error ",err)
//     });

console.log("fetching data...1");
 function data1()
{

     return new Promise((resolve,reject)=>
    setTimeout(()=>{
        console.log(" data1...");
        resolve("Completed");
    },4000));
}


console.log("fetching data...2");


 function getdata2()
{

     return new Promise((resolve,reject)=>
    setTimeout(()=>{
        console.log(" data2...");
        resolve("Completed");
    },4000));

}

  

// data1()
// .then(()=>getdata2())
// .catch(()=>{console.log("Error")});


// data1()
//     .then(() => {getdata2()})
//     .then(() => console.log("All done"))
//     .catch(() => { console.log("Error"); });


console.log("Getting data...1");
data1()
.then((res)=>

{
    
console.log("Getting data...2");
    return getdata2();
})
.then((res)=>
{
    console.log(res);
});