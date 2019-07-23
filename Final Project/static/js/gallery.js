function myFunction(imgs) {
                      var expandImg = document.getElementById("expandedImg"); 
                      var imgText = document.getElementById("imgtext");
                      var imgdetails =document.getElementById("imgdescription")
                      expandImg.src = imgs.src;
                      imgText.innerHTML = imgs.alt;
                      imgdetails.innerHTML=imgs.title;
                      expandImg.parentElement.style.display = "grid";
                    }
function selectBackground(){
                    // Find selector and pull it's selection
                    var BGselect = document.getElementById('BGColor');
                    // Determine your target color (default 0 index to transparent)
                    var BGcolor = (BGselect.selectedIndex != 0) ? BGselect.options[BGselect.selectedIndex].value:"white";
                    // Update results area
                    document.getElementById("gallery").style.backgroundColor = BGcolor;
                    }
function selectText(){
                    // Find selector and pull it's selection
                    var TXTselect = document.getElementById('TxtColor');
                    // Determine target color (default 0 index to transparent)
                    var TXTcolor = (TXTselect.selectedIndex != 0) ? TXTselect.options[TXTselect.selectedIndex].value:"Black";
                    document.getElementById("gallery").style.color = TXTcolor;
                    }