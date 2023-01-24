fetch("https://wptavern.com/wp-json/wp/v2/posts")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      console.log(data);
      displayDetails(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));


  function displayDetails(data) {
    let informationsDiv = document.getElementById("slider");
    for(var i = 0; i < data.length; i++) {
      var slide = document.createElement("div");
      slide.className = "swiper-slide";
      var slideContent = document.createElement("div");
      slideContent.className = "informations";
      let informations = data[i];
      let informationsTitle = informations.title.rendered;
      let heading = document.createElement("h1");
      heading.innerHTML = informationsTitle;
      slideContent.appendChild(heading);
      let informationsImage = document.createElement("img");
      informationsImage.src = informations.episode_featured_image;
      slideContent.appendChild(informationsImage);
      let informationsDate = informations.date;
      let heading1 = document.createElement("p");
      heading1.innerHTML = informationsDate;
      slideContent.appendChild(heading1);
      slide.appendChild(slideContent);
      informationsDiv.appendChild(slide);
    }
  }