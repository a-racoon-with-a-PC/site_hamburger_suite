document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");
    var informations = [
        {
            id: "pizza",
            title: "Nos Pizza",
            slogan: "Eat. Pizza. Repeat.",
            type: ["pepperoni", "All Dress", "Baaaaaacon"],
            image: "images/pizza/main.jpg",
            description: "NY style pesto ricotta onions chicken and bacon chicken wing peppers pie lasagna steak. Parmesan hawaiian extra sauce, onions pizza roll meatball stuffed burnt mouth black olives meatball thin crust bbq rib. Chicken and bacon pizza roll ham thin crust",    
            gallery: ["images/pizza/1.jpg", "images/pizza/2.jpg", "images/pizza/3.jpg"]

        }, {
            id: "bacon",
            title: "Baaaaacoonnn",
            slogan: "Bacon c'est comme un High-five pour ta bouche",
            type: ["À l'érable", "Bacon de sanglier", "Avec du bacon", "Au bacon", "Avec du bacon"],
            image: "images/bacon/main.jpg",
            description: "Leberkas hamburger ribeye, jerky frankfurter prosciutto tail fatback. Ham hock venison andouille ham turducken porchetta tenderloin t-bone flank beef ribs salami ribeye pork belly short ribs shankle. Cow capicola ground round, pancetta flank spare ribs swine pork chop chuck rump brisket sirloin",    
            gallery: ["images/bacon/1.jpg", "images/bacon/2.jpg", "images/bacon/3.jpg"]
        }, {
            id: "beigne",
            title: "Beigne",
            slogan: "Donut worry be happy",
            type: ["Glacé au chocolat", "Crème Boston", "Fraises", "Rousettes au miel", "À l'ancienne"],
            image: "images/donuts/main.jpg",
            description: "Cake sweet tiramisu lollipop donut sprinkles dolor tiramisu marzipan jelly. Tiramisu muffin cookie orange dolor marzipan croissant sweet ipsum muffin. Tiramisu donut marzipan croissant lollipop orange cookie sugar vanilla cake. Sugar orange muffin sweet cake croissant sprinkles dolor jelly cake",    
            gallery: ["images/donuts/1.jpg", "images/donuts/2.jpg", "images/donuts/3.jpg"]
        }
    ]

    function initialiseItem(){
        var url = window.location.search;
        console.log(url);

        var params = new URLSearchParams(url);
        console.log(params);

        var type = params.get('type') || "pizza";
        console.log(type);

        var content = informations.find(object => object.id === type);
        //for(let i=0; i< informations.length; i++){if(informations[i].id === type) contenu = informations[i];}
        console.log(content);

        var pageTitle = document.querySelector('.main-title');
        pageTitle.innerHTML = content.title;

        var pageSlogan = document.querySelector('.sub-title');
        pageSlogan.innerHTML = content.slogan;

        var pageDescription = document.querySelector('.sub-description p');
        pageDescription.innerHTML = content.description;

        var pageImage = document.querySelector('.sub-image img');
        pageImage.src = content.image;

        var list = document.querySelector('.type-list');
        list.innerHTML = "";
        for(let i=0; i<content.type.length; i++){
            let li = document.createElement('li');
            li.innerHTML = content.type[i];
            list.appendChild(li);
        }

        var thumbnails = document.querySelectorAll('.thumb img');
        console.log(thumbnails);
        for(let i=0; i<thumbnails.length; i++){
            thumbnails[i].src = content.gallery[i];
        }
    }

    if(document.querySelector('.page-item')){
        initialiseItem();
    }

});