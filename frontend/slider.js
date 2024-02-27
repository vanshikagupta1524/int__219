// const a=document.querySelectorAll('.slider');
// // var counter=0;
// var counter=0;
// console.log(a);
// a.forEach(
//     (slider,index)=>{
// slider.style.left=`${index*100}%`
//     }
// )
// const previous=()=>{
//     counter--
//     sliderrun()
// }
// const next=()=>{
//    counter++
//    sliderrun() 
// }
// const sliderrun=()=>
// {
//     a.forEach(
//         (slider)=>
//         slider.style.transform=`translateX(-${counter*100}%)`
//     )
// }

// ========================================================================

// slider Ques in ca ,image  validation
// ========================================
// Q create  a input field and a button that input field will be for file uploading 
// the fileshould not be more than 4 mb if the fie is more than 4 mb than it will generate  a
// error inside the span
//  task for the slider
//  when click on prev image slide in up and down and blank
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <fieldset>
//         Select file<input type="file" id="file" onchange="checkFileSize()">
//     </fieldset>
   
//     <script>
//         function checkFileSize() {
//             var fileInput = document.getElementById('file');
//             var files = fileInput.files;
//             if (files.length > 0) {
//                 var fileSize = files[0].size; 
//                 var maxSize = 4 * 1024 * 1024; 
//                 if (fileSize > maxSize) {
//                     alert('not allowed to appload');
//                     fileInput.value = ''; 
//                 }
//             }
//         }
//     </script>
// </body>
// </html>