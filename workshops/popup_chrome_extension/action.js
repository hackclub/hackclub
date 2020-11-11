
document.addEventListener('DOMContentLoaded', function () {

   let elements = [];
   function addElement  (parentId, elementTag, elementId, html) {

       var p = document.getElementById(parentId);
       var newElement = document.createElement(elementTag);
       newElement.setAttribute('id', elementId);
       newElement.innerHTML = html;
       p.appendChild(newElement);

       elements.push(elementId)
       if (elements.length==1)
       {
         document.getElementById('none1').style.display = "none";
       }


     }
   function removeElement(elementId) {
       let v = confirm("Are you sure you would like to delete this link?");
       if (v){
       chrome.storage.sync.remove("" + elementId, function(result) {
         var elem = document.getElementById(""+elementId);
         elem.parentNode.removeChild(elem);
       });
       if (elements.length == 1)
       {
         document.getElementById('none1').style.display = "block";
       }

       const index = elements.indexOf(elementId);
      if (index > -1) {
        elements.splice(index, 1);
      }
   }

 }

   let open1 = document.getElementById('open1');
   let open2 = document.getElementById('open2');

   function popup1(openQ) {
     if (!openQ){
       document.getElementById("main").style.visibility = "hidden";
       document.getElementById("add").style.height = "75px";
       document.getElementById('open1').innerHTML = "(+)";
     }
     else {
       document.getElementById("main").style.visibility = "initial";
       document.getElementById("add").style.height = "425px";
       document.getElementById('open1').innerHTML = "(-)";
   }
 }
   function popup2(openQ) {
     if (!openQ){
       document.getElementById("bookmarks").style.visibility = "hidden";
       document.getElementById('open2').innerHTML = "(+)";
     }
     else {
       document.getElementById("bookmarks").style.visibility = "initial";
       document.getElementById('open2').innerHTML = "(-)";
   }
  }
 popup1(false);

 function copy(x, z) {
   let y = "" + x;
   //console.log(y)
   chrome.storage.sync.get(y, function(result) {
     //console.log(result[y])
     var textArea = document.createElement("textarea");
     
     if (z == 0){
     textArea.value = result[y].meeting_link;
   }
     else if (z == 1){
     textArea.value = result[y].password;
     }
     else if (z == 2){
     textArea.value = result[y].password;
     }


     document.body.appendChild(textArea);
     textArea.select();
     document.execCommand("Copy");
     textArea.remove();

     if (z == 0){
      if (result[y].password != 0){
      alert("MEETING INFO Copied! You can paste it directly into ZOOM.\n\nIMPORTANT: The meeting password will be copied once you click 'OK'");
        copy(y, 2)
      }
      else {
        
          alert("MEETING LINK Copied! Use CRTL/CMD + V to paste the link in your browser.");
        }
      }
    
     else if (z == 1){
      alert("The Zoom meeting should open once you press OK.\n\nIMPORTANT: The meeting password is copied and you can paste it into the prompt.");
     }
     else if (z == 2){
      alert("PASSWORD Copied!");
     }

   });



 }
 function open(x) {
   let y = "" + x;
   //console.log(y)
   chrome.storage.sync.get([y], function(result) {
     console.log(result[y].meeting_link)
     if (result[y].password != 0){
      copy(y,1)
     }
     chrome.tabs.create({ url: result[y].meeting_link });
   });

 }


   open1.addEventListener("click",function(b){
     b.preventDefault()
     if (document.getElementById('open1').innerHTML == "(-)") {
       popup1(false);
     } else {
       popup1(true);
     }
   });


   chrome.storage.sync.get(null, function(result) {
     console.log(result)
     var countKey = Object.keys(result).length;
     let versionCheck = false;

     if (countKey > 0)
     {
     for (var key in result) {
      if (key == "version"){
        if (result[key] == "0.0.4"){
          versionCheck = true;
        }
      }
      if (key != "current" && key != "version") {
        console.log("rempved curr 3dkey vlue" + key)

      if (result.hasOwnProperty(key)) {
          let html = "<div id=\"" + result[key].current + "\"class=\"input-group\" style=\"width: 95%;margin-left: 2.5%;margin-right: 2.5%;margin-bottom: 10px;\">\r\n                   <div class=\"input-group-prepend\"> <span class=\"input-group-text\" style=\"width: 210px;justify-content: center;white-space:nowrap;display:block;overflow-y: auto;\">" + result[key].class_name + " link" +"<\/span> <\/div>\r\n                   <div class=\"input-group-append\">\r\n                     <button id=\"copy" + result[key].current+"\" class=\"btn btn-primary\" type=\"button\" style=\"border-color: #0096c7;background-color: #0096c7;text-align:center\">\r\n                       <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-files\" fill=\"currentColor\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\">\r\n                         <path fill-rule=\"evenodd\" d=\"M4 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z\"\/>\r\n                         <path d=\"M6 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1H4a2 2 0 0 1 2-2z\"\/>\r\n                       <\/svg>   <button  id=\"delete" + result[key].current+"\" class=\"btn btn-primary\" type=\"button\" style=\"border-color: #00b4d8;background-color: #00b4d8;\">\r\n                       <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-trash\" fill=\"currentColor\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\">\r\n                 <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"\/>\r\n                 <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"\/>\r\n                <\/svg>\r\n                     <\/button>\r\n                      <button id=\"aopen" + result[key].current+"\" class=\"btn btn-primary\" type=\"button\" style=\"border-color: #48cae4;background-color: #48cae4;\">\r\n                        <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-box-arrow-up-right\" fill=\"currentColor\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\">\r\n <path fill-rule=\"evenodd\" d=\"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z\"\/>\r\n <path fill-rule=\"evenodd\" d=\"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z\"\/>\r\n<\/svg>\r\n                      <\/button>\r\n                   <\/div>\r\n                <\/div>"
          addElement("area", "div", result[key].current, html)
          let kay = key
          document.getElementById('copy'+kay).addEventListener("click",function(b){
            copy(""+kay, 0)
                        console.log("copy: "+kay)

          });
          document.getElementById('delete'+kay).addEventListener("click",function(b){
            removeElement(""+kay)

          });
          document.getElementById('aopen'+kay).addEventListener("click",function(b){
            open(""+kay)

          });

        }
     }
   }
 }

 if (versionCheck == false){

      alert("Thanks for downloading Zoom bookmarks!\n\nIMPORTANT: We just pushed out our app just a few days ago and finished beta testing. If you previously had this extension, your bookmarks have been reset to fix any bugs you may have been getting.\n\nCHANGELOG: Fixed permissions issue (we DO NOT access history or any personal information). Fixed manual Zoom password issue. Added auto-delete Zoom tabs. Fixed first-time user bug. Made copying and pasting better.")
     
           chrome.storage.sync.clear()
      chrome.storage.sync.set({version: "0.0.4"}, function() {
      });
                 location.reload()

     }

   });

  (function() {

    let class_name = document.getElementById('class_name');
    let meeting_id = document.getElementById('meeting_id');
    let password = document.getElementById('password');
    let zoom_link = document.getElementById('zoom_link');
    let button = document.getElementById('new');
    let current = 0;

    chrome.storage.sync.get(['current'], function(result) {
      if (result.current) {
        current = result.current;
      }
      else {
        chrome.storage.sync.set(
          { current: 1 },
          function() {
            current = 1;
      });
      }
    });

    button.addEventListener('click', function(a) {
      let class_name_val = class_name.value;
      let meeting_id_val = meeting_id.value;
      let password_val = password.value;
      let zoom_link_val = zoom_link.value;
      let button_val = button.value;
      let meeting_link_val = " ";
      let p_val = 0;
      let error = ""

      a.preventDefault()
      popup1(false);

      if (class_name_val.length < 3)
      {
        error = error + "Class Name must be 3 or more characters\n"
      }

      if (zoom_link_val.length || meeting_id_val.length){

        if (meeting_id_val.length){
          if (meeting_id_val.length < 10 || meeting_id_val.length > 15)
          {
            error = error + "Must be a valid Zoom meeting ID\n"
          } else {
            meeting_link_val = "https://zoom.us/j/" + meeting_id_val.replace(/\D/g,'')
            if (password_val) {
              meeting_link_val = meeting_link_val + "?z"
              p_val = password_val
            }
          }
        }
        if (zoom_link_val.length){
          if (zoom_link_val.includes("zoom.us/") || zoom_link_val.includes(".com") ||  zoom_link_val.includes(".org"))
          {
            if (zoom_link_val.includes("http"))
            {
              meeting_link_val = zoom_link_val
            }
            else {
              meeting_link_val = "https://" + zoom_link_val
            }
          } else {
            error = error + "Must be a valid Zoom meeting link\n"
          }

        }

      } else {
        error = error + "A Zoom ID or link is nessesary\n"
      }

      if (error.length > 0)
      {
        alert(error);
        popup1(true);
      }
      else {
        current = current + 1;
      let obj = {
        class_name: document.getElementById('class_name').value,
        meeting_link: meeting_link_val,
        current: current,
        password: p_val
      }

        chrome.storage.sync.set({[current]: obj}, function() {

          chrome.storage.sync.set({current: current}, function() {
          });
          let html = "<div id=\"" + current + "\"class=\"input-group\" style=\"width: 95%;margin-left: 2.5%;margin-right: 2.5%;margin-bottom: 10px;\">\r\n                   <div class=\"input-group-prepend\"> <span class=\"input-group-text\" style=\"width: 210px;justify-content: center;white-space:nowrap;display:block;overflow-y: auto;\">" + class_name_val + " link" +"<\/span> <\/div>\r\n                   <div class=\"input-group-append\">\r\n                     <button id=\"copy" + current+"\" class=\"btn btn-primary\" type=\"button\" style=\"border-color: #0096c7;background-color: #0096c7;text-align:center\">\r\n                       <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-files\" fill=\"currentColor\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\">\r\n                         <path fill-rule=\"evenodd\" d=\"M4 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z\"\/>\r\n                         <path d=\"M6 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1H4a2 2 0 0 1 2-2z\"\/>\r\n                       <\/svg>   <button  id=\"delete" + current+"\" class=\"btn btn-primary\" type=\"button\" style=\"border-color: #00b4d8;background-color: #00b4d8;\">\r\n                       <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-trash\" fill=\"currentColor\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\">\r\n                 <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"\/>\r\n                 <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"\/>\r\n                <\/svg>\r\n                     <\/button>\r\n                      <button  id=\"aopen" + current+"\" class=\"btn btn-primary\" type=\"button\" style=\"border-color: #48cae4;background-color: #48cae4;\">\r\n                        <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-box-arrow-up-right\" fill=\"currentColor\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\">\r\n <path fill-rule=\"evenodd\" d=\"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z\"\/>\r\n <path fill-rule=\"evenodd\" d=\"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z\"\/>\r\n<\/svg>\r\n                      <\/button>\r\n                   <\/div>\r\n                <\/div>"
          addElement("area", "div", current, html)
          document.getElementById('copy'+current).addEventListener("click",function(b){
            copy(current, 0)
          });
          document.getElementById('delete'+current).addEventListener("click",function(b){
            removeElement(current)
          });
          document.getElementById('aopen'+current).addEventListener("click",function(b){
            open(""+current)
          });


        });


        class_name.value = ""
        meeting_id.value = ""
        password.value = ""
        zoom_link.value = ""


      }

    });

  })();
} );