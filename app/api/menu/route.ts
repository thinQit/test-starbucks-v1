import { NextResponse } from "next/server";

const menuData = [
  {
    category: "Espresso",
    items: [
      {
        id: "caffe-latte",
        name: "Caffè Latte",
        description: "Rich espresso balanced with steamed milk. Choose your milk and syrup.",
        price: 5.45,
        badges: ["Customizable"],
        customizationOptions: {
          size: ["Tall", "Grande", "Venti"],
          milk: ["Whole", "2%", "Oatmilk", "Almondmilk", "Soy"],
          syrup: ["Vanilla", "Caramel", "Hazelnut", "Sugar-Free Vanilla"],
          extraShots: [0, 1, 2, 3],
          temperature: ["Hot", "Extra Hot", "Warm"],
        },
      },
    ],
  },
  {
    category: "Cold Coffee",
    items: [
      {
        id: "cold-brew",
        name: "Cold Brew",
        description: "Slow-steeped for a smooth, naturally sweet taste.",
        price: 4.95,
        badges: ["Smooth"],
        customizationOptions: {
          size: ["Tall", "Grande", "Venti", "Trenta"],
          milk: ["None", "Whole", "Oatmilk", "Almondmilk"],
          syrup: ["None", "Vanilla", "Brown Sugar", "Caramel"],
          coldFoam: ["None", "Vanilla Sweet Cream Cold Foam"],
        },
      },
    ],
  },
];

export async function GET() {
  try {
    return NextResponse.json({ categories: menuData }, { status: 200 });
  } catch (error) {
    console.error("GET /api/menu error:", error);
    return NextResponse.json({ error: "Failed to fetch menu." }, { status: 500 });
  }
}
