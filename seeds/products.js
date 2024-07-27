const sampleProducts = [
    // LEVI'S
    {
        brand: "Levi's",
        name: "Black Trucker Denim Jacket",
        description: "Non-stretch denim jacket. Fading throughout.",
        price: 120,
        imageUrl: [
            "/cardImages/levis-black-trucker-denim-jacket.avif",
            "/images/levis-black-trucker-denim-jacket.avif",
            "/images/levis-black-trucker-denim-jacket (1).avif",
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "Levi's",
        name: "Blue Trucker Denim Jacket",
        description: "Non-stretch denim jacket. Fading and subtle distressing throughout.",
        price: 120,
        imageUrl: [
            "/cardImages/levis-blue-trucker-denim-jacket.avif",
            "/images/levis-blue-trucker-denim-jacket.avif",
            "/images/levis-blue-trucker-denim-jacket (1).avif",           
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Blue"
    },
    {
        brand: "Levi's",
        name: "Beige Trucker Denim Jacket",
        description: "Non-stretch denim jacket.",
        price: 120,
        imageUrl: [
            "/cardImages/levis-beige-trucker-denim-jacket.avif",
            "/images/levis-beige-trucker-denim-jacket.avif",
            "/images/levis-beige-trucker-denim-jacket (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Beige"
    },
    {
        brand: "Levi's",
        name: "Green Button Denim Jacket",
        description: "Non-stretch denim jacket.",
        price: 170,
        imageUrl: [
            "/cardImages/levis-green-button-denim-jacket.avif",
            "/images/levis-green-button-denim-jacket.avif",
            "/images/levis-green-button-denim-jacket (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Green"
    },
    {
        brand: "Levi's",
        name: "Navy Type 1 Trucker Jacket",
        description: "Cotton-blend canvas jacket. Fading throughout.",
        price: 120,
        imageUrl: [
            "/cardImages/levis-navy-type-1-trucker-jacket.avif",
            "/images/levis-navy-type-1-trucker-jacket.avif",
            "/images/levis-navy-type-1-trucker-jacket (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Navy"
    },
    // CARHARTT
    {
        brand: "Carhartt Work In Progress",
        name: "Black OG Chore Denim Jacket",
        description: "Non-stretch denim jacket.",
        price: 255,
        imageUrl: [
            "/cardImages/carhartt-work-in-progress-black-og-chore-denim-jacket.avif",
            "/images/carhartt-work-in-progress-black-og-chore-denim-jacket.avif",
            "/images/carhartt-work-in-progress-black-og-chore-denim-jacket (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "Carhartt Work In Progress",
        name: "Blue OG Chore Denim Jacket",
        description: "Non-stretch denim jacket. Fading throughout.",
        price: 280,
        imageUrl: [
            "/cardImages/carhartt-work-in-progress-blue-og-chore-denim-jacket.avif",
            "/images/carhartt-work-in-progress-blue-og-chore-denim-jacket.avif",
            "/images/carhartt-work-in-progress-blue-og-chore-denim-jacket (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Blue"
    },
    {
        brand: "Carhartt Work In Progress",
        name: "Blue Garrison Denim Jacket",
        description: "Non-stretch stone-dyed 10.5oz denim jacket.",
        price: 295,
        imageUrl: [
            "/cardImages/carhartt-work-in-progress-blue-garrison-denim-jacket.avif",
            "/images/carhartt-work-in-progress-blue-garrison-denim-jacket.avif",
            "/images/carhartt-work-in-progress-blue-garrison-denim-jacket (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Blue"
    },
    {
        brand: "Carhartt Work In Progress",
        name: "White Helston Denim Jacket",
        description: "Heavyweight non-stretch 13.5oz denim jacket.",
        price: 350,
        imageUrl: [
            "/cardImages/carhartt-work-in-progress-white-helston-denim-jacket.avif",
            "/images/carhartt-work-in-progress-white-helston-denim-jacket.avif",
            "/images/carhartt-work-in-progress-white-helston-denim-jacket (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "White"
    },
    {
        brand: "Carhartt Work In Progress",
        name: "Blue Hayworth Jacket",
        description: "8oz cotton twill jacket.",
        price: 285,
        imageUrl: [
            "/cardImages/carhartt-work-in-progress-blue-hayworth-jacket.avif",
            "/images/carhartt-work-in-progress-blue-hayworth-jacket.avif",
            "/images/carhartt-work-in-progress-blue-hayworth-jacket.avif (1)",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Blue"
    },
    // FEAR OF GOD
    {
        brand: "Fear of God ESSENTIALS",
        name: "Off-White Long Sleeve Polo",
        description: "Cotton French terry polo.",
        price: 95,
        imageUrl: [
            "/cardImages/essentials-off-white-long-sleeve-polo.avif",
            "/images/fear-of-god-essentials-off-white-long-sleeve-polo.avif",
            "/images/fear-of-god-essentials-off-white-long-sleeve-polo (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Off-White"
    },
    {
        brand: "Fear of God ESSENTIALS",
        name: "Black Mock Neck Sweatshirt",
        description: "Cotton-blend fleece sweatshirt.",
        price: 110,
        imageUrl: [
            "/cardImages/essentials-black-mock-neck-sweatshirt.avif",
            "/images/fear-of-god-essentials-black-mock-neck-sweatshirt.avif",
            "/images/fear-of-god-essentials-black-mock-neck-sweatshirt (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "Fear of God ESSENTIALS",
        name: "Beige Bonded Hoodie",
        description: "Slub cotton-blend fleece hoodie.",
        price: 135,
        imageUrl: [
            "/cardImages/essentials-beige-bonded-hoodie.avif",
            "/images/fear-of-god-essentials-beige-bonded-hoodie.avif",
            "/images/fear-of-god-essentials-beige-bonded-hoodie (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Beige"
    },
    {
        brand: "Fear of God ESSENTIALS",
        name: "Black Bonded Hoodie",
        description: "Cotton-blend fleece hoodie.",
        price: 135,
        imageUrl: [
            "/cardImages/essentials-black-bonded-hoodie.avif",
            "/images/fear-of-god-essentials-black-bonded-hoodie.avif",
            "/images/fear-of-god-essentials-black-bonded-hoodie (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "Fear of God ESSENTIALS",
        name: "Gray Half-Zip Sweatshirt",
        description: "Stretch nylon taffeta sweatshirt.",
        price: 245,
        imageUrl: [
            "/cardImages/essentials-gray-half-zip-sweatshirt.avif",
            "/images/fear-of-god-essentials-gray-half-zip-sweatshirt.avif",
            "/images/fear-of-god-essentials-gray-half-zip-sweatshirt (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Gray"
    },
    //  NORTH FACE
    {
        brand: "The North Face",
        name: "Black Willow Jacket",
        description: "Water-repellent DWR-coated Windwall™ stretch polyester ripstop jacket.",
        price: 170,
        imageUrl: [
            "/cardImages/the-north-face-black-willow-jacket.avif",
            "/images/the-north-face-black-willow-jacket.avif",
            "/images/the-north-face-black-willow-jacket (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "The North Face",
        name: "Black Denali Vest",
        description: "Polartec® polyester fleece and nylon faille vest. Non-PFC DWR coated, water-repellent, and wind-resistant.",
        price: 190,
        imageUrl: [
            "/cardImages/the-north-face-black-denali-vest.avif",
            "/images/the-north-face-black-denali-vest.avif",
            "/images/the-north-face-black-denali-vest (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "The North Face",
        name: "Black Denali Jacket",
        description: "Polartec® polyester fleece and nylon faille jacket. Non-PFC DWR coated, water-repellent, and wind-resistant.",
        price: 230,
        imageUrl: [
            "/cardImages/the-north-face-black-denali-jacket.avif",
            "/images/the-north-face-black-denali-jacket.avif",
            "/images/the-north-face-black-denali-jacket (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "The North Face",
        name: "Navy Denali Jacket",
        description: "Recycled polyester fleece and non-PFC DWR-coated recycled nylon ripstop jacket.",
        price: 260,
        imageUrl: [
            "/cardImages/the-north-face-navy-denali-jacket.avif",
            "/images/the-north-face-navy-denali-jacket.avif",
            "/images/the-north-face-navy-denali-jacket (1).avif",         
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Navy"
    },
    {
        brand: "The North Face",
        name: "Beige Denali Jacket",
        description: "Recycled polyester fleece and non-PFC DWR-coated recycled nylon ripstop jacket.",
        price: 260,
        imageUrl: [
            "/cardImages/the-north-face-beige-denali-jacket.avif",
            "/images/the-north-face-beige-denali-jacket.avif",
            "/images/the-north-face-beige-denali-jacket (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Beige"
    },
    // NIKE
    {
        brand: "Nike",
        name: "Gray Lightweight Hoodie",
        description: "Lightweight double-faced cotton-blend jersey hoodie. Flatlock seams throughout.",
        price: 175,
        imageUrl: [
            "/cardImages/nike-gray-lightweight-hoodie.avif",
            "/images/nike-gray-lightweight-hoodie.avif",
            "/images/nike-gray-lightweight-hoodie (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Gray"
    },
    {
        brand: "Nike",
        name: "Black Lightweight Hoodie",
        description: "Lightweight double-faced cotton-blend jersey hoodie. Flatlock seams throughout.",
        price: 175,
        imageUrl: [
            "/cardImages/nike-black-lightweight-hoodie.avif",
            "/images/nike-black-lightweight-hoodie.avif",
            "/images/nike-black-lightweight-hoodie (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "Nike",
        name: "Black Solo Swoosh Track Jacket",
        description: "Nylon taffeta track jacket. Piping throughout.",
        price: 175,
        imageUrl: [
            "/cardImages/nike-black-solo-swoosh-track-jacket.avif",
            "/images/nike-black-solo-swoosh-track-jacket.avif",
            "/images/nike-black-solo-swoosh-track-jacket (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "Nike",
        name: "Black Loose Jacket",
        description: "Heavyweight cotton canvas jacket.",
        price: 160,
        imageUrl: [
            "/cardImages/nike-black-loose-jacket.avif",
            "/images/nike-black-loose-jacket.avif",
            "/images/nike-black-loose-jacket (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "Nike",
        name: "Black Tuff Therma-FIT Hoodie",
        description: "Water-repellent temperature-regulating French terry hoodie.",
        price: 140,
        imageUrl: [
            "/cardImages/nike-black-tuff-therma-fit-hoodie.avif",
            "/images/nike-black-tuff-therma-fit-hoodie.avif",
            "/images/nike-black-tuff-therma-fit-hoodie (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    // ADIDAS
    {
        brand: "adidas Originals",
        name: "Black Firebird Track Jacket",
        description: "Recycled polyester tricot track jacket.",
        price: 95,
        imageUrl: [
            "/cardImages/adidas-originals-black-firebird-track-jacket.avif",
            "/images/adidas-originals-black-firebird-track-jacket.avif",
            "/images/adidas-originals-black-firebird-track-jacket (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "adidas Originals",
        name: "Navy Firebird Track Jacket",
        description: "Recycled polyester tricot track jacket.",
        price: 95,
        imageUrl: [
            "/cardImages/adidas-originals-navy-firebird-track-jacket.avif",
            "/images/adidas-originals-navy-firebird-track-jacket.avif",
            "/images/adidas-originals-navy-firebird-track-jacket (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Navy"
    },
    {
        brand: "adidas Originals",
        name: "Green Firebird Track Jacket",
        description: "Recycled polyester tricot track jacket.",
        price: 95,
        imageUrl: [
            "/cardImages/adidas-originals-green-firebird-track-jacket.avif",
            "/images/adidas-originals-green-firebird-track-jacket.avif",
            "/images/adidas-originals-green-firebird-track-jacket (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Green"
    },
    {
        brand: "adidas Originals",
        name: "Beige Half-Zip Sweatshirt",
        description: "Better Cotton-blend French terry sweatshirt. Fading throughout.",
        price: 100,
        imageUrl: [
            "/cardImages/adidas-originals-beige-half-zip-sweatshirt.avif",
            "/images/adidas-originals-beige-half-zip-sweatshirt.avif",
            "/images/adidas-originals-beige-half-zip-sweatshirt (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Beige"
    },
    {
        brand: "adidas Originals",
        name: "Black 3-Stripes Long Sleeve T-Shirt",
        description: "BCI-certified cotton jersey T-shirt.",
        price: 50,
        imageUrl: [
            "/cardImages/adidas-originals-black-3-stripes-long-sleeve-t-shirt.avif",
            "/images/adidas-originals-black-3-stripes-long-sleeve-t-shirt.avif",
            "/images/adidas-originals-black-3-stripes-long-sleeve-t-shirt (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    // POLO
    {
        brand: "Polo Ralph Lauren",
        name: "Blue Embroidered Shirt",
        description: "Cotton jersey shirt.",
        price: 165,
        imageUrl: [
            "/cardImages/polo-ralph-lauren-blue-embroidered-shirt.avif",
            "/images/polo-ralph-lauren-blue-embroidered-shirt.avif",
            "/images/polo-ralph-lauren-blue-embroidered-shirt (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Blue"
    },
    {
        brand: "Polo Ralph Lauren",
        name: "Navy 'The RL' Sweatshirt",
        description: "Cotton- and polyester-blend fleece sweatshirt.",
        price: 165,
        imageUrl: [
            "/cardImages/polo-ralph-lauren-navy-the-rl-sweatshirt.avif",
            "/images/polo-ralph-lauren-navy-the-rl-sweatshirt.avif",
            "/images/polo-ralph-lauren-navy-the-rl-sweatshirt (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Navy"
    },
    {
        brand: "Polo Ralph Lauren",
        name: "Black Half-Zip Sweater",
        description: "Knit cotton sweater.",
        price: 195,
        imageUrl: [
            "/cardImages/polo-ralph-lauren-black-half-zip-sweater.avif",
            "/images/polo-ralph-lauren-black-half-zip-sweater.avif",
            "/images/polo-ralph-lauren-black-half-zip-sweater (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "Polo Ralph Lauren",
        name: "Green Bear Polo",
        description: "Cotton jersey polo.",
        price: 230,
        imageUrl: [
            "/cardImages/polo-ralph-lauren-green-bear-polo.avif",
            "/images/polo-ralph-lauren-green-bear-polo.avif",
            "/images/polo-ralph-lauren-green-bear-polo (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Green"
    },
    {
        brand: "Polo Ralph Lauren",
        name: "Blue Polo Bear Hoodie",
        description: "BCI-certified cotton-blend fleece hoodie.",
        price: 300,
        imageUrl: [
            "/cardImages/polo-ralph-lauren-blue-polo-bear-hoodie.avif",
            "/images/polo-ralph-lauren-blue-polo-bear-hoodie.avif",
            "/images/polo-ralph-lauren-blue-polo-bear-hoodie (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Blue"
    },
    // TOMMY
    {
        brand: "Tommy Jeans",
        name: "Black Embroidered Shirt",
        description: "Cotton twill shirt",
        price: 100,
        imageUrl: [
            "/cardImages/tommy-collection-black-embroidered-shirt.avif",
            "/images/tommy-jeans-black-embroidered-shirt.avif",
            "/images/tommy-jeans-black-embroidered-shirt (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "Tommy Jeans",
        name: "Green Rugby Stripe Polo",
        description: "Cotton jersey polo. Stripes throughout.",
        price: 120,
        imageUrl: [
            "/cardImages/tommy-collection-green-rugby-stripe-polo.avif",
            "/images/tommy-jeans-green-rugby-stripe-polo.avif",
            "/images/tommy-jeans-green-rugby-stripe-polo (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Green"
    },
    {
        brand: "Tommy Jeans",
        name: "Navy Embroidered Turtleneck",
        description: "Cotton-blend French terry turtleneck.",
        price: 180,
        imageUrl: [
            "/cardImages/tommy-collection-navy-embroidered-turtleneck.avif",
            "/images/tommy-jeans-navy-embroidered-turtleneck.avif",
            "/images/tommy-jeans-navy-embroidered-turtleneck (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Navy"
    },
    {
        brand: "Tommy Jeans",
        name: "Navy Oversized Polo",
        description: "Recycled cotton-blend piqué polo.",
        price: 170,
        imageUrl: [
            "/cardImages/tommy-collection-navy-oversized-polo.avif",
            "/images/tommy-jeans-navy-oversized-polo.avif",
            "/images/tommy-jeans-navy-oversized-polo (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Navy"
    },
    {
        brand: "Tommy Jeans",
        name: "Navy Distressed Hoodie",
        description: "French terry hoodie. Distressing throughout.",
        price: 210,
        imageUrl: [
            "/cardImages/tommy-collection-navy-distressed-hoodie.avif",
            "/images/tommy-jeans-navy-distressed-hoodie.avif",
            "/images/tommy-jeans-navy-distressed-hoodie (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Navy"
    },
    // DIME
    {
        brand: "Dime",
        name: "Beige Wave Polo",
        description: "French terry polo. Topstitching throughout.",
        price: 190,
        imageUrl: [
            "/cardImages/dime-beige-wave-polo.avif",
            "/images/dime-beige-wave-polo.avif",
            "/images/dime-beige-wave-polo (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Beige"
    },
    {
        brand: "Dime",
        name: "Navy Wave Polo",
        description: "French terry Polo. Topstiching throughout.",
        price: 190,
        imageUrl: [
            "/cardImages/dime-navy-wave-polo.avif",
            "/images/dime-navy-wave-polo.avif",
            "/images/dime-navy-wave-polo (1).avif",        
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Navy"
    },
    {
        brand: "Dime",
        name: "Black Cursive Hoodie",
        description: "12 oz cotton-blend fleece hoodie.",
        price: 180,
        imageUrl: [
            "/cardImages/dime-black-cursive-hoodie.avif",
            "/images/dime-black-cursive-hoodie.avif",
            "/images/dime-black-cursive-hoodie (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "Dime",
        name: "Brown Baseball Cardigan",
        description: "Knit cotton cardigan. Jacquard stripes throughout.",
        price: 180,
        imageUrl: [
            "/cardImages/dime-brown-baseball-cardigan.avif",
            "/images/dime-brown-baseball-cardigan.avif",
            "/images/dime-brown-baseball-cardigan (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Brown"
    },
    {
        brand: "Dime",
        name: "Brown Classic Hoodie",
        description: "Heavyweight 14 oz cotton fleece hoodie.",
        price: 165,
        imageUrl: [
            "/cardImages/dime-brown-classic-hoodie.avif",
            "/images/dime-brown-classic-hoodie.avif",
            "/images/dime-brown-classic-hoodie (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Brown"
    },
    // COMME DES GARCONS
    {
        brand: "COMME des GARÇONS PLAY",
        name: "Black Cotton Long Sleeve T-Shirt",
        description: "Cotton jersey T-shirt. Stripes printed throughout.",
        price: 190,
        imageUrl: [
            "/cardImages/comme-des-garcons-play-black-cotton-long-sleeve-t-shirt.avif",
            "/images/comme-des-garcons-play-black-cotton-long-sleeve-t-shirt.avif",
            "/images/comme-des-garcons-play-black-cotton-long-sleeve-t-shirt (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "COMME des GARÇONS PLAY",
        name: "Black Heart Long Sleeve T-Shirt",
        description: "Long sleeve cotton jersey T-shirt in black.",
        price: 125,
        imageUrl: [
            "/cardImages/comme-des-garcons-play-black-heart-long-sleeve-t-shirt.avif",
            "/images/comme-des-garcons-play-black-heart-long-sleeve-t-shirt.avif",
            "/images/comme-des-garcons-play-black-heart-long-sleeve-t-shirt (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "COMME des GARÇONS PLAY",
        name: "White & Red Heart Patch Long Sleeve T-Shirt",
        description: "Long sleeve cotton jersey T-shirt in white.",
        price: 125,
        imageUrl: [
            "/cardImages/comme-des-garcons-play-white-and-red-heart-patch-long-sleeve-t-shirt.avif",
            "/images/comme-des-garcons-play-white-and-red-heart-patch-long-sleeve-t-shirt.avif",
            "/images/comme-des-garcons-play-white-and-red-heart-patch-long-sleeve-t-shirt (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "White"
    },
    {
        brand: "COMME des GARÇONS PLAY",
        name: "Gray Heart Patch Long Sleeve T-Shirt",
        description: "Cotton jersey T-shirt.",
        price: 135,
        imageUrl: [
            "/cardImages/comme-des-garcons-play-gray-heart-patch-long-sleeve-t-shirt.avif",
            "/images/comme-des-garcons-play-gray-heart-patch-long-sleeve-t-shirt.avif",
            "/images/comme-des-garcons-play-gray-heart-patch-long-sleeve-t-shirt (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Gray"
    },
    {
        brand: "COMME des GARÇONS PLAY",
        name: "Black Heart Cardigan",
        description: "Knit wool cardigan.",
        price: 455,
        imageUrl: [
            "/cardImages/comme-des-garcons-play-black-heart-cardigan.avif",
            "/images/comme-des-garcons-play-black-heart-cardigan.avif",
            "/images/comme-des-garcons-play-black-heart-cardigan (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    // STUSSY
    {
        brand: "Stüssy",
        name: "Black Reversible Vest",
        description: "Sherpa fleece vest.",
        price: 195,
        imageUrl: [
            "/cardImages/stussy-black-reversible-vest.avif",
            "/images/stussy-black-reversible-vest.avif",
            "/images/stussy-black-reversible-vest (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "Stüssy",
        name: "Khaki Reversible Vest",
        description: "Sherpa fleece vest.",
        price: 195,
        imageUrl: [
            "/cardImages/stussy-khaki-reversible-vest.avif",
            "/images/stussy-khaki-reversible-vest.avif",
            "/images/stussy-khaki-reversible-vest (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Khaki"
    },
    {
        brand: "Stüssy",
        name: "Beige Embroidered Reversible Vest",
        description: "Reversible Sherpa fleece vest.",
        price: 195,
        imageUrl: [
            "/cardImages/stussy-beige-embroidered-reversible-vest.avif",
            "/images/stussy-beige-embroidered-reversible-vest.avif",
            "/images/stussy-beige-embroidered-reversible-vest (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Beige"
    },
    {
        brand: "Stüssy",
        name: "Gray Dot Sport Hoodie",
        description: "Heavyweight 12.7 oz cotton-fleece hoodie.",
        price: 150,
        imageUrl: [
            "/cardImages/stussy-gray-dot-sport-hoodie.avif",
            "/images/stussy-gray-dot-sport-hoodie.avif",
            "/images/stussy-gray-dot-sport-hoodie (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Gray"
    },
    {
        brand: "Stüssy",
        name: "Black Button Cardigan",
        description: "Shag knit nylon- and acrylic-blend cardigan.",
        price: 185,
        imageUrl: [
            "/cardImages/stussy-black-button-cardigan.avif",
            "/images/stussy-black-button-cardigan.avif",
            "/images/stussy-black-button-cardigan (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    // BAPE
    {
        brand: "AAPE by A Bathing Ape",
        name: "Black Patch Hoodie",
        description: "French terry hoodie.",
        price: 155,
        imageUrl: [
            "/cardImages/aape-black-patch-hoodie.avif",
            "/images/aape-by-a-bathing-ape-black-patch-hoodie.avif",
            "/images/aape-by-a-bathing-ape-black-patch-hoodie (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Black"
    },
    {
        brand: "AAPE by A Bathing Ape",
        name: "Off-White Graphic Sweatshirt",
        description: "Cotton and polyester-blend fleece sweatshirt. Embroidered logo graphics and appliqués throughout.",
        price: 170,
        imageUrl: [
            "/cardImages/aape-off-white-graphic-sweatshirt.avif",
            "/images/aape-by-a-bathing-ape-off-white-graphic-sweatshirt.avif",
            "/images/aape-by-a-bathing-ape-off-white-graphic-sweatshirt (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Off-White"
    },
    {
        brand: "AAPE by A Bathing Ape",
        name: "Beige Patch Track Jacket",
        description: "Nylon taffeta track jacket.",
        price: 210,
        imageUrl: [
            "/cardImages/aape-beige-patch-track-jacket.avif",
            "/images/aape-by-a-bathing-ape-beige-patch-track-jacket.avif",
            "/images/aape-by-a-bathing-ape-beige-patch-track-jacket (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Beige"
    },
    {
        brand: "AAPE by A Bathing Ape",
        name: "Gray Moonface Sweater",
        description: "Cotton-blend fleece sweatshirt. Fading throughout.",
        price: 210,
        imageUrl: [
            "/cardImages/aape-gray-moonface-sweater.avif",
            "/images/aape-by-a-bathing-ape-gray-moonface-sweater.avif",
            "/images/aape-by-a-bathing-ape-gray-moonface-sweater (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Gray"
    },
    {
        brand: "AAPE by A Bathing Ape",
        name: "Orange & Off-White Patch Sweatshirt",
        description: "Polyester- and cotton-blend jersey sweatshirt. Embroidered logo graphics and logo patches throughout.",
        price: 250,
        imageUrl: [
            "/cardImages/aape-orange-and-off-white-patch-sweatshirt.avif",
            "/images/aape-by-a-bathing-ape-orange-and-off-white-patch-sweatshirt.avif",
            "/images/aape-by-a-bathing-ape-orange-and-off-white-patch-sweatshirt (1).avif",          
        ],
        sizes: ["S", "M", "L", "XL"],
        color: "Orange"
    },
];

module.exports = sampleProducts;