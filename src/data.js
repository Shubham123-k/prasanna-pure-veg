export const restaurant = {
  name: "Prasanna Pure Veg",
  marathi: "प्रसन्न प्युअर व्हेज",
  rating: "4.1",
  ratingsCount: "5,717",
  price: "₹200–400 per person",
  address: "Sai Chowk, Niranjan Complex (A Building), Sus Road, Pashan–Sutarwadi Link Road, Pune, Maharashtra 411021",
  plusCode: "GQVM+CR Pune, Maharashtra",
  phone: "020 2587 0693",
  phoneHref: "tel:02025870693",
  hours: "Open Daily · Until 11:30 PM",
  services: ["Dine-in", "Takeaway", "No-contact delivery"],
  footfall: "1,145+ people report visiting",
  zomato: "https://www.zomato.com/pune/prasanna-pure-veg-pashan",
  swiggy: "https://www.swiggy.com/city/pune/prasanna-veg-restaurant-baner-rest1159005",
  instagram: "https://www.instagram.com/prasannapure/",
  maps: "https://www.google.com/maps/search/?api=1&query=GQVM%2BCR%20Pune%2C%20Maharashtra",
  orderOnline: "https://www.zomato.com/pune/prasanna-pure-veg-pashan"
}

const makeItems = (names, prices) =>
  names.map((name, index) => ({ name, price: prices[index] }))

export const menu = {
  "Curries & Sabzi": makeItems(
    [
      "Alu Mutter", "Alu Gobi", "Alu Palak", "Alu Methi", "Alu Capsicum", "Alu Tomato", "Alu Baingan", "Alu Masala", "Alu Paneer", "Alu Mushroom",
      "Chana Masala", "Green Peas Masala", "Green Peas Palak", "Gobi Masala", "Gobi Green Peas Masala", "Gobi Palak", "Bhendi Masala", "Bhendi Dopyaza",
      "Mushroom Masala", "Mushroom Tawa", "Mushroom Paneer", "Mushroom Palak", "Mushroom Green Peas", "Mushroom Kadai", "Mushroom Hydrabadi",
      "Mushroom Adraki", "Baingan Masala", "Baingan Bhartha", "Tomato Fry", "Tomato Bhartha", "Stuff Tomato", "Plain Palak", "Palak Paneer",
      "Capsicum Masala", "Gobi Adraki", "Kaju Masala", "Damalu Kashmiri", "Damalu Punjabi", "Special Prasanna", "Shev Bhaji"
    ],
    [180,180,180,190,190,180,180,170,205,215,180,180,180,180,190,190,190,205,215,240,215,215,215,230,230,240,190,205,180,205,215,180,205,205,215,265,230,215,290,190]
  ),

  "Kofta & Paneer Specials": makeItems(
    [
      "Malai Kofta", "Navaratan Kurma", "Methi Malai Mutter", "Paneer Kofta", "Paneer Masala", "Mutter Paneer", "Paneer Makhanwala", "Paneer Butter Masala",
      "Paneer Kadai", "Paneer Handi", "Paneer Tikka Masala", "Paneer Adraki", "Paneer Kolhapuri", "Paneer Kurma", "Paneer Hydrabadi", "Paneer Tawa",
      "Paneer Chilly Milly", "Paneer Maratha"
    ],
    [240,240,230,240,205,205,215,215,230,230,230,230,215,230,250,250,250,250]
  ),

  "Sabzi Mandai": makeItems(
    ["Mix Vegetable", "Green Vegetable", "Veg. Kolhapuri", "Veg. Adraki", "Veg. Boona", "Veg. Kofta", "Veg. Jaipuri", "Veg. Hydrabadi", "Veg. Kadai", "Veg. Handi", "Veg. Makhanwala", "Veg. Kurma", "Veg. Jalfreize", "Veg. Maratha", "Veg. Tawa", "Veg. Chilly Milly"],
    [190,190,205,215,215,215,240,215,215,215,215,215,230,230,230,230]
  ),

  "Dry Preparations": makeItems(
    ["Alu Gobi", "Alu Methi", "Alu Jeera", "Alu Mutter", "Alu Capsicum", "Bhendi Fry", "Mushroom Fry", "Alu Mushroom Fry", "Mushroom Paneer Fry", "Mushroom Mutter Fry", "Paneer Bhurji", "Paneer G.P. Bhurji", "Chana Dry", "Green Peas Dry", "Kaju Paneer Bhurji"],
    [190,190,190,180,205,205,230,230,230,230,230,230,190,190,290]
  ),

  "Starters & Fritters": makeItems(
    ["Kanda Bhajee", "Mix Pakoda", "Paneer Pakoda", "Chees Pakoda"],
    [95,95,170,215]
  ),

  "Soups": makeItems(
    ["Tomato Soup", "Veg. Soup", "SC Veg Soup", "Hot & Sour Soup", "Manchow Soup", "Palak Soup"],
    [95,95,95,95,95,95]
  ),

  "Dal": makeItems(
    ["Plain Dal", "Dal Fry", "Butter Dal Fry", "Sp. Dal Fry", "Dal Palak", "Dal Tadka"],
    [120,130,170,190,145,155]
  ),

  "Salads & Raita": makeItems(
    ["Green Salad", "Veg. Raitha", "Boondi Raitha", "Pineapple Raitha", "Curds (Dahi)"],
    [85,85,85,95,60]
  ),

  "Papad": makeItems(
    ["Roasted Papad", "Fry Papad", "Masala Papad"],
    [25,35,50]
  ),

  "Tawa Pulav": makeItems(
    ["Tawa Pulav", "Tawa Mushroom Pulav", "Kaju Tawa Pulav", "Special Tawa Pulav"],
    [190,215,250,250]
  ),

  "Rice & Biryani": makeItems(
    [
      "Plain Rice", "Jeere Rice", "Ghee Rice", "Veg. Pulav", "Paneer Pulav", "Veg Biryani", "Hydrabadi Biryani", "Kashmiri Pulav", "Shahajani Pulav",
      "Jaipuri Biryani", "Paneer Biryani", "Green Peas Pulav", "Dal Khichadi", "Khadi Rice", "Palak Rice", "Dahi Rice", "Khadhi"
    ],
    [95,120,190,190,230,205,205,275,275,275,230,190,180,205,190,155,130]
  ),

  "Pav Bhaji": makeItems(
    ["Pav Bhaji", "Paneer Pav Bhaji", "Mushroom Pav Bhaji", "Kada Pav Bhaji", "Jain Pav Bhaji", "Chees Pav Bhaji", "Special Pav Bhaji", "Masala Pav (Pair)", "Extra Pav (Pair)"],
    [110,145,155,155,155,155,170,60,25]
  ),

  "Chinese Corner": makeItems(
    [
      "Chinese Bhel", "Veg. Manchurian", "Gobi Manchurian", "Paneer Manchurian", "Paneer Chilly", "Mushroom Manchurian", "Veg. Fried Rice", "Mushroom Fried Rice",
      "Manchurian Fried Rice", "Veg. Hakka Noodles", "Sezwan Hakka Noodles", "Noodles Fried Rice", "Veg Crispy", "Paneer Sezwan", "Veg Sezwan",
      "Mushroom Sezwan", "Sezwan F/ Rice", "Veg 65", "Paneer 65", "Paneer Crispy", "Veg Spring Roll", "American Chopsuey", "Triple Noodle F/ Rice"
    ],
    [190,180,180,215,215,230,180,230,230,180,205,180,215,230,230,230,205,215,230,230,240,250,250]
  ),

  "Indian Breads": makeItems(
    ["Chapathi", "Roti", "Ghee Roti", "Nan/Paratha", "Bt. Nan/Paratha", "Garlic Nan", "Kulcha", "Butter Kulcha", "Alu Paratha", "Alu Onion Paratha", "Methi Paratha", "Gobi Paratha", "Veg. Stuff Paratha", "Paneer Paratha", "Alu Paneer Paratha"],
    [12,25,30,40,55,110,40,55,110,120,120,120,120,145,145]
  ),

  "Combos & Thali": makeItems(
    ["Chana Bhatura", "South Indian Thali", "North Indian Thali"],
    [155,130,230]
  ),

  "South Indian Breakfast": makeItems(
    [
      "Idli Sambhar", "Wada Sambhar", "Sabudana Wada", "Upma", "Poha", "Poori Bhaji", "Missal Pav", "Dahi Missal Pav", "Finger Chips", "Dahi Wada",
      "Sada Dosa", "Masala Dosa", "Palak Masala", "Mysore Masala", "Butter Masala", "Cheese Masala", "Sp. Masala Dosa", "Rawa Masala", "Rawa Sada",
      "Sp. Rawa Masala", "Onion Rawa Masala", "Plain Uttappa", "Onion Uttapa", "Tomatto Onion Uttappa", "Sp. Uttappa", "Masala Uttappa", "Cheese Uttappa",
      "Tomato Omlet", "Sp. Tomato Omlet", "Cheese Tomato Omlet", "Cut Masala", "Chees Cut Masala"
    ],
    [70,85,85,35,35,130,85,110,110,110,85,110,120,130,130,155,155,130,110,170,145,85,110,120,155,130,155,130,170,170,130,180]
  ),

  "Sandwiches": makeItems(
    ["Bread Butter", "Toast Butter", "Veg Sandwich", "Veg T Sandwich", "Cheese Sandwich", "Cheese T Sandwich", "Jam Sandwich", "Jam T Sandwich", "Chutni Sandwich", "Jam Cheese T. Sandwich", "Omlet Sandwich", "Omlet Cheese T. Sandwich"],
    [35,60,60,85,85,95,85,85,50,110,110,120]
  )
}

export const menuLabels = {
  "Curries & Sabzi": "Uttar Ke Sabji",
  "Kofta & Paneer Specials": "Kofta & Paneer",
  "Sabzi Mandai": "Mixed Vegetable Specials",
  "Dry Preparations": "Sukka Sukka",
  "Starters & Fritters": "Hot Hot",
  "Soups": "Khane Se Pehele",
  "Dal": "Hamari Dal",
  "Salads & Raita": "Time Pass",
  "Papad": "Chat Pata",
  "Tawa Pulav": "Tawa Pulav",
  "Rice & Biryani": "Chawal Ke Raj",
  "Pav Bhaji": "Sham Ke Samay",
  "Chinese Corner": "China Town",
  "Indian Breads": "Pet Bharke",
  "Combos & Thali": "Ek Saath",
  "South Indian Breakfast": "South Ke Khajana / Chai Se Pehele",
  "Sandwiches": "Bread Ke Kamal"
}

export const categoryImages = {
  "South Indian Breakfast": "/images/special-masala-dosa.jpg",
  "Combos & Thali": "/images/south-indian-thali.jpg",
  "Chinese Corner": "/images/popular-dish.jpg",
  "Pav Bhaji": "/images/masala-papad.jpg",
  "Salads & Raita": "/images/dahi-misal-pav.jpg",
  "Indian Breads": "/images/north-indian-thali.jpg"
}

export const featuredDishes = [
  { name: "Special Masala Dosa", price: 155, image: "/images/special-masala-dosa.jpg", category: "South Indian Breakfast" },
  { name: "South Indian Thali", price: 130, image: "/images/south-indian-thali.jpg", category: "Combos & Thali" },
  { name: "Paneer Tawa", price: 250, image: "/images/popular-dish.jpg", category: "Kofta & Paneer Specials" },
  { name: "Tawa Mushroom Pulav", price: 215, image: "/images/dahi-misal-pav.jpg", category: "Tawa Pulav" }
]
