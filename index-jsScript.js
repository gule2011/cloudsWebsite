function togglePopup(num)
{
  document.getElementById(`popup-${num}`).classList.toggle("active"); 
  }

function islandToggle()
{
  document.getElementById(`islandHeading`).classList.toggle("islandActive"); 
  document.getElementById(`cloudsHeading`).classList.toggle("cloudsActive");
  document.getElementById(`islandContainer`).classList.toggle("island-container2");  

  }

function cloudsToggle()
{
  document.getElementById(`cloudsHeading`).classList.toggle("cloudsActive"); 
  document.getElementById(`islandHeading`).classList.toggle("islandActive"); 
  document.getElementById(`islandContainer`).classList.toggle("island-container2");
  }