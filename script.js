// ===== PRODUCT DATABASE =====
const productsV2 = {
    outfit: [
        { id: 'out1', name: 'Casual T-Shirt', description: 'Comfortable cotton tee', price: 2.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', category: 'outfit', gender: 'unisex', subtype: 'tops' },
        { id: 'out2', name: 'Denim Jeans', description: 'Classic blue jeans', price: 8.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop', category: 'outfit', gender: 'unisex', subtype: 'bottoms' },
        { id: 'out3', name: 'Sneakers', description: 'Comfortable walking shoes', price: 9.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop', category: 'outfit', gender: 'unisex', subtype: 'shoes' },
        { id: 'out4', name: 'Hoodie', description: 'Warm and cozy hoodie', price: 6.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop', category: 'outfit', gender: 'men', subtype: 'tops' },
        { id: 'out5', name: 'Baseball Cap', description: 'Stylish cap', price: 2.49, image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=300&h=300&fit=crop', category: 'outfit', gender: 'unisex', subtype: 'accessories' },
        { id: 'out6', name: 'Backpack', description: 'Daily carry backpack', price: 7.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', category: 'outfit', gender: 'unisex', subtype: 'accessories' },
        { id: 'out7', name: 'Summer Dress', description: 'Light floral dress', price: 7.49, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop', category: 'outfit', gender: 'women', subtype: 'dresses' },
        { id: 'out8', name: 'Crop Top', description: 'Trendy crop top', price: 3.49, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=300&h=300&fit=crop', category: 'outfit', gender: 'women', subtype: 'tops' },
        { id: 'out9', name: 'Joggers', description: 'Comfortable jogger pants', price: 5.99, image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=300&h=300&fit=crop', category: 'outfit', gender: 'men', subtype: 'bottoms' }
    ],
    home: [
        { id: 'hom1', name: 'Throw Pillow', description: 'Decorative cushion', price: 3.99, image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=300&fit=crop', category: 'home', gender: 'unisex', subtype: 'decor' },
        { id: 'hom2', name: 'Wall Art', description: 'Modern canvas print', price: 5.99, image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=300&h=300&fit=crop', category: 'home', gender: 'unisex', subtype: 'decor' },
        { id: 'hom3', name: 'Table Lamp', description: 'Ambient lighting', price: 7.99, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop', category: 'home', gender: 'unisex', subtype: 'lighting' },
        { id: 'hom4', name: 'Throw Blanket', description: 'Soft cozy blanket', price: 4.99, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300&h=300&fit=crop', category: 'home', gender: 'unisex', subtype: 'textiles' },
        { id: 'hom5', name: 'Plant Pot', description: 'Ceramic planter', price: 2.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop', category: 'home', gender: 'unisex', subtype: 'decor' },
        { id: 'hom6', name: 'Candle Set', description: 'Scented candles', price: 3.99, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=300&h=300&fit=crop', category: 'home', gender: 'unisex', subtype: 'decor' },
        { id: 'hom7', name: 'Fairy Lights', description: 'LED string lights', price: 4.49, image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=300&h=300&fit=crop', category: 'home', gender: 'unisex', subtype: 'lighting' },
        { id: 'hom8', name: 'Coaster Set', description: 'Marble coasters', price: 2.49, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300&h=300&fit=crop', category: 'home', gender: 'unisex', subtype: 'kitchen' }
    ],
    desk: [
        { id: 'dsk1', name: 'Desk Organizer', description: 'Multi-compartment holder', price: 2.49, image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=300&h=300&fit=crop', category: 'desk', gender: 'unisex', subtype: 'storage' },
        { id: 'dsk2', name: 'Notebook Set', description: 'Premium notebooks', price: 3.99, image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=300&h=300&fit=crop', category: 'desk', gender: 'unisex', subtype: 'stationery' },
        { id: 'dsk3', name: 'Pen Holder', description: 'Stylish pen organizer', price: 1.99, image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop', category: 'desk', gender: 'unisex', subtype: 'storage' },
        { id: 'dsk4', name: 'Desk Lamp', description: 'LED task lighting', price: 6.99, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=300&fit=crop', category: 'desk', gender: 'unisex', subtype: 'lighting' },
        { id: 'dsk5', name: 'Cable Organizer', description: 'Cable management', price: 1.49, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', category: 'desk', gender: 'unisex', subtype: 'tech' },
        { id: 'dsk6', name: 'Mouse Pad', description: 'Large gaming pad', price: 2.99, image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&h=300&fit=crop', category: 'desk', gender: 'unisex', subtype: 'tech' },
        { id: 'dsk7', name: 'Sticky Notes', description: 'Colorful sticky notes', price: 1.29, image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=300&h=300&fit=crop', category: 'desk', gender: 'unisex', subtype: 'stationery' }
    ],
    gift: [
        { id: 'gif1', name: 'Gift Box Set', description: 'Luxury gift packaging', price: 2.49, image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=300&fit=crop', category: 'gift', gender: 'unisex', subtype: 'packaging' },
        { id: 'gif2', name: 'Chocolate Box', description: 'Premium chocolates', price: 4.99, image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300&h=300&fit=crop', category: 'gift', gender: 'unisex', subtype: 'treats' },
        { id: 'gif3', name: 'Greeting Cards', description: 'Handmade cards set', price: 1.99, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop', category: 'gift', gender: 'unisex', subtype: 'cards' },
        { id: 'gif4', name: 'Gift Bag', description: 'Reusable gift bag', price: 1.49, image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=300&h=300&fit=crop', category: 'gift', gender: 'unisex', subtype: 'packaging' },
        { id: 'gif5', name: 'Ribbon Set', description: 'Decorative ribbons', price: 1.99, image: 'https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?w=300&h=300&fit=crop', category: 'gift', gender: 'unisex', subtype: 'packaging' },
        { id: 'gif6', name: 'Gift Tags', description: 'Personalized tags', price: 0.99, image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=300&h=300&fit=crop', category: 'gift', gender: 'unisex', subtype: 'cards' },
        { id: 'gif7', name: 'Bath Bomb Set', description: 'Relaxing bath bombs', price: 3.99, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4a38691?w=300&h=300&fit=crop', category: 'gift', gender: 'women', subtype: 'treats' },
        { id: 'gif8', name: 'Scented Soap', description: 'Handmade soap bar', price: 2.49, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4a38691?w=300&h=300&fit=crop', category: 'gift', gender: 'unisex', subtype: 'treats' }
    ],
    hobby: [
        { id: 'hob1', name: 'Yoga Mat', description: 'Non-slip exercise mat', price: 4.99, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop', category: 'hobby', gender: 'unisex', subtype: 'yoga' },
        { id: 'hob2', name: 'Water Bottle', description: 'Insulated bottle', price: 3.99, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop', category: 'hobby', gender: 'unisex', subtype: 'accessories' },
        { id: 'hob3', name: 'Resistance Bands', description: 'Fitness bands set', price: 2.99, image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300&h=300&fit=crop', category: 'hobby', gender: 'unisex', subtype: 'strength' },
        { id: 'hob4', name: 'Sports Bag', description: 'Gym duffel bag', price: 5.99, image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=300&h=300&fit=crop', category: 'hobby', gender: 'unisex', subtype: 'accessories' },
        { id: 'hob5', name: 'Exercise Gloves', description: 'Workout gloves', price: 2.49, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop', category: 'hobby', gender: 'unisex', subtype: 'strength' },
        { id: 'hob6', name: 'Jump Rope', description: 'Speed jump rope', price: 1.99, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop', category: 'hobby', gender: 'unisex', subtype: 'cardio' },
        { id: 'hob7', name: 'Yoga Block', description: 'Foam support block', price: 2.49, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop', category: 'hobby', gender: 'unisex', subtype: 'yoga' }
    ]
};
